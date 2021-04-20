import {UserState} from "../../storage/states/UserState";
import {useSelector} from "react-redux";
import {GlobalState} from "../../GlobalState";

export const Comment = (props:any) =>{
    const commentData = props.data;

    const userState:UserState
        = useSelector<GlobalState,GlobalState["user"]>((state:GlobalState)=>state.user)

    const currentUser = userState.users[commentData.user]


    return (<div className="comment">

        <div className="user_container">
            <div className="user_photo">
                <img src={`../images/${currentUser.avatar}`} alt="user_photo"/>
            </div>
        </div>
        <div className="comment_container">
            <div className="comment_content">{commentData.context}
            </div>
            <div className="comment_data">
                <p>{currentUser.name + " " + currentUser.surname}</p>
                <p>{commentData.date}</p>
                <p>{commentData.time}</p>
            </div>
        </div>

    </div>)


}