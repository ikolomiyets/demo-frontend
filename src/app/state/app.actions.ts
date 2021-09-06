import { Action } from '@ngrx/store';
import { Insured, Policies } from '../model/policy.model';

export const DO_INIT = 'DO_INIT';
export const STORE_CONFIG = 'STORE_CONFIG';
export const DO_LOAD_POLICIES = 'LOAD_POLICIES';
export const POLICIES_RECEIVED = 'POLICIES_RECEIVED';
export const DO_INIT_CUSTOMER_RETRIEVAL = 'DO_INIT_CUSTOMER_RETRIEVAL';
export const DO_RESET_INSURED = 'DO_RESET_INSURED';
export const DO_RETRIEVE_CUSTOMER = 'DO_RETRIEVE_CUSTOMER';
export const CUSTOMER_RECEIVED = 'CUSTOMER_RECEIVED';

export class DoLoadPolicies implements Action {
  readonly type = DO_LOAD_POLICIES;

  constructor(public payload: { baseUrl: string, first: number, count: number }) {}
}

export class PoliciesReceved implements Action {
  readonly type = POLICIES_RECEIVED;

  constructor(public payload: Policies) {}
}

export class DoInitCustomerRetrieval implements Action {
  readonly type = DO_INIT_CUSTOMER_RETRIEVAL;

  constructor(public payload: { baseUrl: string, ids: number[] }) {}
}

export class DoResetInsured implements Action {
  readonly type = DO_RESET_INSURED;

  constructor() {}
}

export class DoRetrieveCustomer implements Action {
  readonly type = DO_RETRIEVE_CUSTOMER;

  constructor(public payload: { baseUrl: string, id: number }) {}
}

export class CustomerReceived implements Action {
  readonly type = CUSTOMER_RECEIVED;

  constructor(public payload: Insured) {}
}

export class DoInitAction implements Action {
  readonly type = DO_INIT;

  constructor() {}
}

export class StoreConfigAction implements Action {
  readonly type = STORE_CONFIG;

  constructor(public payload: any) {}
}

export type AppActions = DoLoadPolicies |
  PoliciesReceved |
  DoInitCustomerRetrieval |
  DoResetInsured |
  DoRetrieveCustomer |
  CustomerReceived |
  StoreConfigAction |
  DoInitAction;
