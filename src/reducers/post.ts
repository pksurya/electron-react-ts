import { PostActions, PostAction, IPost } from "../model";
import createReducer from "./createReducer";

const updater = (arr: any[], obj: any) => {
	let ar = JSON.parse(JSON.stringify(arr));
	for (var i = 0; i < ar.length; i++) {
		let x = ar[i];
		if (x._id == obj._id) {
			ar[i] = obj;
		}
	}
	return ar;
}

export const post = createReducer<IPost>(<IPost>{}, {
	[PostActions.ADD_POSTS](state: IPost, action: PostAction) {
		return { ...state, loading: false, posts: action.payload.data || [] };
	},
	[PostActions.ADD_ALL_POSTS](state: IPost, action: PostAction) {
		return { ...state, loading: false, allProducts: action.payload.data || [] };
	},
	[PostActions.ADD_ERROR](state: IPost, action: PostAction) {
		return { ...state, loading: false, error: action.payload };
	},
	[PostActions.ADD_POST](state: IPost, action: PostAction) {
		return { ...state, loading: false, products: state.posts.concat(action.payload.data) };
	},

	[PostActions.UPDATE_POST](state: IPost, action: PostAction) {
		return { ...state, loading: false, posts: updater(state.posts, action.payload) };
	},

	[PostActions.DELETE_POST](state: IPost, action: PostAction) {
		return { ...state, loading: false, posts: state.posts.filter(x => { if (x._id != action.payload._id) { return true; } }) };
	}
});
