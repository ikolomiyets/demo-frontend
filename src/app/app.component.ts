import { Component, OnInit } from '@angular/core';

import * as fromApp from './state/app.reducers';
import * as fromAppAction from './state/app.actions';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  state: Store<fromApp.AppState>;
  insured: number[];
  policyNumber: string;

  constructor(private store: Store<{app: fromApp.AppState}>, private modalService: NgbModal) {}
  ngOnInit(): void {
    this.state = this.store.select('app');
    this.store.dispatch(new fromAppAction.DoLoadPolicies({first: 1, count: 10}));
  }

  showInsured(content, policyNumber, insured: number[]) {
    this.store.dispatch(new fromAppAction.DoResetInsured());
    this.policyNumber = policyNumber;
    for (let i = 0; i < insured.length; i++) {
      const insuredPerson = insured[i];
      this.store.dispatch(new fromAppAction.DoRetrieveCustomer(insuredPerson));
    }

    this.modalService.open(content);
  }
}
