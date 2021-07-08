import { AuthAction, AuthActions, IAuth } from "../model";
import createReducer from "./createReducer";

export const auth = createReducer<IAuth>(<IAuth>{}, {
	[AuthActions.UPDATE_ACCESS](state: IAuth, action: AuthAction) {
		let d = state.data;
		d.user.website = action.payload;
		return { ...state, data: d };
	},
	[AuthActions.LOGOUT](state: IAuth, action: AuthAction) {
		return { ...state, loading: false, data: null, userid: '', role: '', logined: false };
	},
});
