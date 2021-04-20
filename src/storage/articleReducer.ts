import {ArticleState, initialArticleState} from "./states/ArticleState";
import {ArticleAction, ArticleActions} from "./articleActions";

export const articleReducer = (state: ArticleState = initialArticleState, action:ArticleAction)=>{

    switch (action.type){
        case ArticleActions.ADD_ARTICLE:{
            return {...state, articles:[...state.articles,action.payload]};
        }
        case ArticleActions.DELETE_ARTICLE:{
            return {
                ...state,
                articles:state.articles.filter(
                    (item,index)=>index!=action.payload
                )
            };
        }

        case ArticleActions.EDIT_ARTICLE:{
            return {...state,articles:state.articles.map((item, index)=>{
                    if(index != action.payload.articleId)
                        return item
                    else
                        return action.payload.editedArticle
                })}
        }

        case ArticleActions.ADD_COMMENT:{
            return {
                ...state,
                articles: [
                    ...state.articles,
                    state.articles[action.payload.idArticle].comments.push(action.payload.comment)
                ]
            }

        }

        default:
            return state;
    }
}