import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as fromAppActions from './app.actions';
import { Insured, Policies } from '../model/policy.model';
import { map, switchMap, flatMap, mergeMap } from 'rxjs/operators';
import aesjs from 'aes-js';

@Injectable()
export class AppEfects {
  doLoadPolicies = createEffect(() => this.actions$
    .pipe(ofType(fromAppActions.DO_LOAD_POLICIES))
    .pipe(map((action: fromAppActions.DoLoadPolicies) => action.payload),
    switchMap((payload: {baseUrl: string, first: number, count: number}) => {
      return this.http.get<Policies>(`${payload.baseUrl}/policies`);
    }),
    map((policies) => {
      return {
        type: fromAppActions.POLICIES_RECEIVED,
        payload: policies
      };
    })));

  doInitCustomerRetrieval = createEffect(() => this.actions$
    .pipe(ofType(fromAppActions.DO_INIT_CUSTOMER_RETRIEVAL),
      map((action: fromAppActions.DoInitCustomerRetrieval) => action.payload),
      flatMap((payload: {baseUrl: string, ids: number[]}) => {
      const result = [];
      for (const id of payload.ids) {
        result.push({type: fromAppActions.DO_RETRIEVE_CUSTOMER, payload: {baseUrl: payload.baseUrl, id}});
      }

      return result;
    })));

  doRetrieveCustomer = createEffect(() => this.actions$
    .pipe(ofType(fromAppActions.DO_RETRIEVE_CUSTOMER), map((action: fromAppActions.DoRetrieveCustomer) => action.payload),
    mergeMap((payload: { baseUrl: string, id: number }) => {
      return this.http.get<Insured>(`${payload.baseUrl}/customers/${payload.id}`);
    }),
    map((insured) => {
      console.log('Retrieved', insured);
      return {
        type: fromAppActions.CUSTOMER_RECEIVED,
        payload: insured
      };
    })));

  doInit = createEffect(() => this.actions$.pipe(ofType(fromAppActions.DO_INIT),
    switchMap((action: fromAppActions.DoInitAction) => {
    return this.http.get<{ param: string; header: string; token: string}>('/assets/_etc/config.json');
  }), switchMap((result: any) => {
    const a = this.decryptConfig(result);
    return [{
      type: fromAppActions.STORE_CONFIG,
      payload: {
        config: a,
      }
    },
      {
        type: fromAppActions.DO_LOAD_POLICIES,
        payload: {
          baseUrl: a.DEMO_FRONTEND_POLICIES_URL,
          first: 1,
          count: 10,
        }
      }
    ];
  })), { dispatch: true });

  base64toBytes = (base64: string) => {
    var raw = atob(base64);
    const byteNumbers = new Array(raw.length);
    for (let i = 0; i < raw.length; i++) {
      byteNumbers[i] = raw.charCodeAt(i);
    }
    return byteNumbers;
  };

  decryptConfig = (config: any) => {
    const size = 16;
    const _abcdefg = this.base64toBytes('6tY6JQqfrWTxS2rcWgBXCLLzHDzBpZb3wk5Qb8DP+aM=');
    const payload = this.base64toBytes(config._KFbEEbp);
    const iv = payload.slice(0, size);
    const encrypted = payload.slice(size);

    const aesCbc = new aesjs.ModeOfOperation.cbc(_abcdefg, iv);

    const decryptedBytes = aesjs.padding.pkcs7.strip(aesCbc.decrypt(encrypted));
    const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);

// Convert our bytes back into text
    return JSON.parse(decryptedText);
  };

  constructor(private http: HttpClient,
              private actions$: Actions) {}
}
