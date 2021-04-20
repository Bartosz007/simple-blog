import {useState} from "react";
import {Comment} from "../../storage/states/models/Comment";
import {User} from "../../storage/states/models/User";
import {useDispatch, useSelector} from "react-redux";
import {addComment} from "../../storage/articleActions";

export const AddComment = ({user, idArticle}:any) =>{

    const [commentText, setCommentText] = useState("");
    const userData:User = user;
    const dispatch = useDispatch()

    const onAddComment = () =>{
        const now = new Date();
        const newComment:Comment = {
            user: userData.id,
            context: commentText,
            date: now.getFullYear()+"."+now.getMonth()+"."+now.getDay(),
            time: now.getHours()+":"+now.getMonth()+":"+now.getSeconds()
        }

        dispatch(addComment(newComment,idArticle));

    }





    return(
        <div className="add_comment">
            <form>
                <textarea onChange={e=>setCommentText(e.target.value)}
                          name="new_comment_text"
                          required maxLength={2000}></textarea>
                <button onClick={onAddComment} name="addButton" type="button">Dodaj</button>
            </form>
        </div>
    )

}