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