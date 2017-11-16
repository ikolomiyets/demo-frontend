import * as fromAppActions from './app.actions';
import { Insured, Policy } from '../model/policy.model';

export interface AppState {
  policies: Policy[];
  insured: Insured[];
}

export const initialState: AppState = {
  policies: [],
  insured: []
};

export function appReducer(state = initialState, action: fromAppActions.AppActions) {
  switch (action.type) {
    case fromAppActions.POLICIES_RECEIVED:
      return {
        ...state,
        policies: action.payload.policies
      };
    case fromAppActions.DO_RESET_INSURED:
      return {
        ...state,
        insured: []
      };
    case fromAppActions.CUSTOMER_RECEIVED:
      return {
        ...state,
        insured: [...state.insured, action.payload]
      };
    default:
      return state;
  }
}
