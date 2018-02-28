import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concatMap';

import * as fromAppActions from './app.actions';
import { Insured, Policies } from '../model/policy.model';

@Injectable()
export class AppEfects {
  @Effect()
  doLoadPolicies = this.actions$
    .ofType(fromAppActions.DO_LOAD_POLICIES)
    .map((action: fromAppActions.DoLoadPolicies) => action.payload)
    .switchMap((payload: {first: number, count: number}) => {
      return this.http.get<Policies>('/policies');
    })
    .map((policies) => {
      return {
        type: fromAppActions.POLICIES_RECEIVED,
        payload: policies
      };
    });

  @Effect()
  doInitCustomerRetrieval = this.actions$
    .ofType(fromAppActions.DO_INIT_CUSTOMER_RETRIEVAL)
    .map((action: fromAppActions.DoInitCustomerRetrieval) => action.payload)
    .flatMap((insured: number[]) => {
      const result = [];
      for (const id of insured) {
        result.push({ type: fromAppActions.DO_RETRIEVE_CUSTOMER, payload: id});
      }

      return result;
    });

  @Effect()
  doRetrieveCustomer = this.actions$
    .ofType(fromAppActions.DO_RETRIEVE_CUSTOMER)
    .map((action: fromAppActions.DoRetrieveCustomer) => action.payload)
    .concatMap((payload: number) => {
      console.log('Retrieving ', payload);
      return this.http.get<Insured>('/customers/' + payload);
    })
    .map((insured) => {
      console.log('Retrieved', insured);
      return {
        type: fromAppActions.CUSTOMER_RECEIVED,
        payload: insured
      };
    });

  constructor(private http: HttpClient,
              private actions$: Actions) {}
}
