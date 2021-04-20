import {initialMainState, MainState} from "./states/MainState";
import {MainAction, MainActions} from "./mainActions";


export const mainReducer = (state: MainState = initialMainState, action:MainAction)=>{

    switch (action.type){
        case MainActions.HANDLE_LOGIN_MENU:{
            return {...state, loginMenu:!state.loginMenu}
        }
        case MainActions.HANDLE_LOGIN_STATUS:{
            return {...state, loginStatus:!state.loginStatus}
        }
        case MainActions.HANDLE_LOGIN:{
            return {...state, loggedUser:action.payload}
        }


        default:
            return state;
    }
}