import  CommonActionType  from "./common";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export enum TodoActions {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  COMPLETE_TODO = "COMPLETE_TODO",
  UNCOMPLETE_TODO = "UNCOMPLETE_TODO",
}

export type TodoAction =
  | CommonActionType<typeof TodoActions.ADD_TODO, Todo>
  | CommonActionType<typeof TodoActions.COMPLETE_TODO, number>
  | CommonActionType<typeof TodoActions.UNCOMPLETE_TODO, number>
  | CommonActionType<typeof TodoActions.DELETE_TODO, number>
;
