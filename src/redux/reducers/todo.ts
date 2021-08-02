import { TodoAction, TodoActions, Todo } from "../model";
import createReducer from "./createReducer";

export const todo = createReducer<Todo[]>([], {
	[TodoActions.ADD_TODO](state: Todo[], action: TodoAction) {
		return [...state, action.payload];
	},
	[TodoActions.COMPLETE_TODO](state: Todo[], action: TodoAction) {
		return state.map(t =>
			t.id === action.payload ? { ...t, completed: true } : t
		);
	},
	[TodoActions.UNCOMPLETE_TODO](state: Todo[], action: TodoAction) {
		return state.map(t =>
			t.id === action.payload ? { ...t, completed: false } : t
		);
	},
	[TodoActions.DELETE_TODO](state: Todo[], action: TodoAction) {
		return state.filter(t => t.id !== action.payload);
	},
});
