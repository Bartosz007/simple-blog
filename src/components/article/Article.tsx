import {ArticleState} from "../../storage/states/ArticleState";
import {useDispatch, useSelector} from "react-redux";
import {GlobalState} from "../../GlobalState";
import {Comment} from "./Comment"
import {MainState} from "../../storage/states/MainState";
import {AddComment} from "./AddComment";
import {Link} from "react-router-dom";
import {deleteArticle} from "../../storage/articleActions";
export const Article = ({match}:any) =>{

    const articlesState:ArticleState
        = useSelector<GlobalState,GlobalState["article"]>((state:GlobalState)=>state.article)

    const mainState:MainState
        = useSelector<GlobalState,GlobalState["main"]>((state:GlobalState)=>state.main)

    const id = match.params.id;

    const currentArticle = articlesState.articles[id];

    const dispatch = useDispatch()
    const onDeleteArticle = () =>{
        dispatch(deleteArticle(id));
    }
    return (
        <div className="Article-container">
            <article className="article_entire">
                {mainState.loginStatus ? <section className="edit_section">
                        <Link to={`/addedit/edit/${id}`} ><img src="../images/edit.svg" alt="edit"/></Link>
                        <Link to="/"><img onClick={onDeleteArticle} src="../images/delete.svg" alt="edit"/></Link>
                </section>
                :null
                }


                <section className="image_section">
                    <img src={`../images/${currentArticle.image}`} alt="photo0"/>
                </section>

                <section className="article_section">

                    <div className="title">
                        <h2>{currentArticle.title}</h2>
                    </div>

                    <div className="subtitle">
                        <h3>{currentArticle.subtitle}</h3>
                    </div>

                    <div className="text">
                        {currentArticle.text}
                    </div>

                </section>

                <section className="comment_section">

                    {
                        currentArticle.comments.map((comment)=>{
                            return <Comment key={comment.time+id} data={comment}/>
                        })
                    }

                    {

                        mainState.loginStatus?
                            <AddComment user={mainState.loggedUser} idArticle={id}/>
                            :null
                    }

                </section>

            </article>
        </div>
    )
}