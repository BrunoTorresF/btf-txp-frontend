export interface IUser {
  name: string;
  email: string;
  avatar: string;
}

export type IUsers = IUser[];

export interface IApiStatus {
  loading: boolean;
  error: boolean | null;
}
