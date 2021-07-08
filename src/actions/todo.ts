import { TodoAction, TodoActions, AuthAction, AuthActions, IAuth, Todo } from "../model";
import axios from 'axios';
declare var window: any;
declare var $: any;


export function addTodo(todo: Todo): TodoAction {
	return {
		type: TodoActions.ADD_TODO,
		payload: todo,
	};
}

// Async Function expample with redux-thunk
export async function completeTodo(todoId: number) {
	// here you could do API eg
	//const request = await axios.post('http://www...', params);
	return (dispatch: Function, getState: Function) => {
		dispatch({ type: TodoActions.COMPLETE_TODO, payload: todoId });
	};
}

export function uncompleteTodo(todoId: number): TodoAction {
	return {
		type: TodoActions.UNCOMPLETE_TODO,
		payload: todoId,
	};
}

export function deleteTodo(todoId: number): TodoAction {
	return {
		type: TodoActions.DELETE_TODO,
		payload: todoId,
	};
}


export function updateAccess(obj: any) {
	return async (dispatch: Function) => {
		function fn() {
			dispatch({ type: AuthActions.UPDATE_ACCESS, payload: obj });
			return obj
		}
		fn();
	}
}





export function commonFn(obj: any) {
	return async (dispatch: Function) => {
		function fn() {
			dispatch(obj);
			return obj
		}
		fn();
	}
}
