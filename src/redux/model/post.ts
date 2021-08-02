import CommonActionType from "./common";

export interface IPost {
  posts: any[];
  loading: boolean;
  error: any;
}

export enum PostActions {
  "ADD_POST" = "ADD_POST",
  "ADD_POSTS" = "ADD_POSTS",
  "ADD_ALL_POSTS" = "ADD_ALL_POSTS",
  "UPDATE_POST" = "UPDATE_POST",
  "DELETE_POST" = "DELETE_POST",

  "ADD_ERROR" = "ADD_ERROR",
}

export type PostAction =

  | CommonActionType<typeof PostActions.ADD_POST, any>
  | CommonActionType<typeof PostActions.ADD_POSTS, any>
  | CommonActionType<typeof PostActions.ADD_ALL_POSTS, any>
  | CommonActionType<typeof PostActions.UPDATE_POST, any>
  | CommonActionType<typeof PostActions.DELETE_POST, any>

  | CommonActionType<typeof PostActions.ADD_ERROR, any>
  ;
