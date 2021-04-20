import {Article} from "./states/models/Article";
import {MainAction, MainActions} from "./mainActions";


export enum ArticleActions{
    ADD_ARTICLE = "ADD_ARTICLE",
    DELETE_ARTICLE = "DELETE_ARTICLE",
    EDIT_ARTICLE = "EDIT_ARTICLE",
    ADD_COMMENT = "ADD_COMMENT"
}

export type ArticleAction = {
    type: ArticleActions,
    payload: any
}

export const addComment = (comment:any, idArticle:number):ArticleAction =>({
    type: ArticleActions.ADD_COMMENT,
    payload:{comment,idArticle}
})

export const addArticle = (article:any):ArticleAction =>({
    type: ArticleActions.ADD_ARTICLE,
    payload:article
})

export const deleteArticle = (articleId:any):ArticleAction =>({
    type: ArticleActions.DELETE_ARTICLE,
    payload: articleId
})

export const editArticle = (editedArticle: Article, articleId:any):ArticleAction =>({
    type: ArticleActions.EDIT_ARTICLE,
    payload: {editedArticle,articleId}
})
