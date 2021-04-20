import {ArticleShortage} from "./ArticleShortage"
import {useDispatch, useSelector} from "react-redux";
import {GlobalState} from "../../GlobalState";
import {ArticleState} from "../../storage/states/ArticleState";


export const ArticlesList = () =>{

    const articlesState:ArticleState
        = useSelector<GlobalState,GlobalState["article"]>((state:GlobalState)=>state.article)

    return (
        <div className="ArticleList-container">
            {articlesState.articles.map(article=>{
                return <ArticleShortage key={article.title} data={article} />
            })}

        </div>
    )
}