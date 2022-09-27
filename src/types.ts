export type Accounts = {
  _id: string;
  id: number;
  name: string;
  default: boolean;
  funds: number;
  isDemo: boolean;
  accountType: string;
  currency: string;
  profitLoss: number;
};

export type AccountsTypes = {
  _id: string;
  id: string;
  title: string;
};
