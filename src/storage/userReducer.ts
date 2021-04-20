
import {initialUserState, UserState} from "./states/UserState";
import {UserAction, UserActions} from "./userActions";


export const userReducer = (state: UserState = initialUserState, action:UserAction)=>{

    switch (action.type){
        case UserActions.GET_ALL_USERS:{
            return state;
        }
        case UserActions.GET_USER:{
            return state;
        }


        default:
            return state;
    }
}