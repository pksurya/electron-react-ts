import CommonActionType from "./common";

export interface IAuth {
  userid: string;
  role:string,
  data: any;
  loading: boolean;
  logined: boolean;
  error: any;
}

export enum AuthActions {
  UPDATE_ACCESS = "UPDATE_ACCESS",
  LOGOUT = "LOGOUT"
}

export type AuthAction =
  | CommonActionType<typeof AuthActions.LOGOUT, any>
  | CommonActionType<typeof AuthActions.UPDATE_ACCESS, any>
  ;
