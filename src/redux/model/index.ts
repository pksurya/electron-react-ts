import { TodoAction } from './todo';
import { AuthAction } from './auth';
import { PostAction } from './post';

export * from './todo';
export * from './auth';
export * from './post';

export type Action =
    | TodoAction
    | AuthAction
    | PostAction
    ;
