import {MainState} from "../storage/states/MainState";
import {useDispatch, useSelector} from "react-redux";
import {GlobalState} from "../GlobalState";
import {useState} from "react";
import {changeLoginMenuState, changeLoginStatusState} from "../storage/mainActions";
import {addArticle, editArticle} from "../storage/articleActions";
import {Article} from "../storage/states/models/Article";
import {ArticleState} from "../storage/states/ArticleState";
import {Link} from "react-router-dom";
import {Comment} from "../storage/states/models/Comment";
import {User} from "../storage/states/models/User";


export const AddEditArticle = ({match}:any) =>{
    let type = true
    if(match.params.type == "edit")
        type = false

    const mainState:MainState
        = useSelector<GlobalState,GlobalState["main"]>((state:GlobalState)=>state.main)
    const articleState:ArticleState
        = useSelector<GlobalState,GlobalState["article"]>((state:GlobalState)=>state.article)

    const editedArticle = articleState.articles[match.params.id];


    const [title, setTitle]= useState(type?"":editedArticle.title);
    const [subtitle, setSubtitle]= useState(type?"":editedArticle.subtitle);
    const [file, setFile]= useState(type?"":editedArticle.image);
    const [text, setText]= useState(type?"":editedArticle.text);

    const dispatch = useDispatch()

    const onAddArticle = ()=>{
        if(type){
            if(mainState.loginStatus){

                const filePath =file.split("\\");
                const newFileName = filePath[filePath.length-1];
                const nextNumber = articleState.articles.length;

                const now = new Date();

                const article:Article ={
                    id:nextNumber,
                    title:title,
                    subtitle:subtitle,
                    text:text,
                    image: newFileName,
                    comments: [],
                    userid: 0, /*problem z pobieraniem id usera*/
                    date: now.getFullYear()+"."+now.getMonth()+"."+now.getDay()
                }

                dispatch(addArticle(article));
            }
        }else{

            const now = new Date();
            const article:Article ={
                id:editedArticle.id,
                title:title,
                subtitle:subtitle,
                text:text,
                image: editedArticle.image,
                comments: editedArticle.comments,
                userid: editedArticle.userid,
                date: now.getFullYear()+"."+now.getMonth()+"."+now.getDay()
            }

            dispatch(editArticle(article, match.params.id));
        }

    }

    return (
        <div className="AddArticle-container">

            <form className="add_form">

                <div className="header"><p>
                    {type ? "Dodaj artykuł" : "Edytuj artykuł o id: "+match.params.id}
                </p></div>
                <input value={title}
                       onChange={e=>setTitle(e.target.value)}
                       type="text"
                       name="title"
                       placeholder="Tytuł"/>

                <input value={subtitle}
                       onChange={e=>setSubtitle(e.target.value)}
                       type="text"
                       name="subtitle"
                       placeholder="Podtytuł"/>

                {type?<input  onChange={e=>setFile(e.target.value)}
                              type="file"
                              name="photo"/>
                              :null

                }


                <textarea value={text} onChange={e=>setText(e.target.value)}
                          maxLength={10000}
                          name="text"></textarea>

                <Link to="/"><button type="button" onClick={onAddArticle}>Zatwierdź</button></Link>

            </form>

        </div>
    )
}