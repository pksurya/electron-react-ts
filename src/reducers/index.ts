import { combineReducers } from "redux";
import { Todo ,IAuth, IPost} from "../model";
import * as todoReducer from "./todo";
import * as authReducer from "./auth";
import * as postReducer from "./post";

export interface RootState {
	todo: Todo[];
	auth:IAuth;
	post:IPost;
}

export default (history: any) =>
	combineReducers({
		...todoReducer,
		...authReducer,
		...postReducer
	});
