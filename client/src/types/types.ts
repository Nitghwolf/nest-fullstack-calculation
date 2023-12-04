export interface IUser {
  id: number;
  email: string;
  token: string;
}

export interface IUserData {
  email: string;
  password: string;
}

export interface IResponceUser {
  email: string;
  id: number;
  createdAt: string;
  password: string;
  updatedAt: string;
}

export interface IResponceUserData {
  token: string;
  user: IResponceUser;
}

export interface ICategory {
  title: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  transactions?: any[];
}

export interface ITransaction {
  amount: number;
  title: string;
  id: number;
  type: string;
  category: ICategory;
  createdAt: string;
  updatedAt: string;
}

export interface IResponseTransactionLoader {
  categories: ICategory[];
  transactions: ITransaction[];
  totalIncome: number;
  totalExpense: number;
}
