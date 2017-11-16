export interface Policy {
  policyNumber: string;
  startDate: number;
  insured: number[];
}

export interface Policies {
  first: number;
  next: number;
  policies: Policy[];
}

export interface Insured {
  id: number,
  firstName: string,
  lastName: string,
  address: string
}
