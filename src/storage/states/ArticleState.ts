import {Article, initialArticles} from "./models/Article";

export interface ArticleState {
    articles:Article[]
}


export const initialArticleState = {
    articles: initialArticles
}

