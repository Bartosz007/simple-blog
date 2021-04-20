
import {useSelector} from "react-redux";
import {GlobalState} from "../../GlobalState";
import {UserState} from "../../storage/states/UserState";
import {Link} from "react-router-dom";

export const ArticleShortage = (props:any) =>{
    const data = props.data;
    const userState:UserState
        = useSelector<GlobalState,GlobalState["user"]>((state:GlobalState)=>state.user)

    const users = userState.users


    return (
        <Link to={`/article/${data.id}`} className="article">
            <div className="article_image">
                <img src={`../images/${data.image}`} alt="photo1"/>
            </div>

            <div className="article_content">
                <div className="article_title"><h1>{data.title}</h1>
                </div>
                <div className="article_fragment">
                    {data.subtitle}
                </div>
                <div className="article_info">
                    <p>{users[data.userid].name + " " + users[data.userid].name}</p>
                    <p>{data.date}</p>
                </div>
            </div>

        </Link>
    )
}