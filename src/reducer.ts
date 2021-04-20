import { combineReducers } from 'redux'
import {userReducer} from "./storage/userReducer";
import {mainReducer} from "./storage/mainReducer";
import {articleReducer} from "./storage/articleReducer";

const rootReducer = combineReducers({
    user: userReducer,
    main: mainReducer,
    article: articleReducer
})

export default rootReducer