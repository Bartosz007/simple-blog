import {initialMainState, MainState} from "./storage/states/MainState";
import {initialUserState, UserState} from "./storage/states/UserState";
import {initialArticleState, ArticleState} from "./storage/states/ArticleState";

export interface GlobalState{
    main:MainState,
    user: UserState,
    article: ArticleState
}

export const initialGlobalState = {
    main:initialMainState,
    user: initialUserState,
    article: initialArticleState
}
