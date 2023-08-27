import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import * as fromApp from './state/app.reducers';
import * as fromAppAction from './state/app.actions';
import { select, Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  state: Observable<fromApp.AppState>;
  customersBaseUrl: string;
  insured: number[];
  policyNumber: string;
  @ViewChild('myModal') public myModal: ElementRef;

  constructor(private store: Store<{app: fromApp.AppState}>, private modalService: NgbModal, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.state = this.store.select('app');
    this.store.dispatch(new fromAppAction.DoInitAction());
  }


  async showInsured(content, policyNumber, insured: number[]) {
    this.store.dispatch(new fromAppAction.DoResetInsured());
    this.policyNumber = policyNumber;
    this.store.dispatch(
      new fromAppAction.DoInitCustomerRetrieval(
        {
          baseUrl: await this.state.pipe(select(state => state.config.DEMO_FRONTEND_CUSTOMERS_URL), take(1))
            .toPromise()
      , ids: insured}));

    this.modalService.open(content);
  }
}
