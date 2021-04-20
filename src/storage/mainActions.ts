import {User} from "./states/models/User";

export enum MainActions{
    HANDLE_LOGIN_MENU = "HANDLE_LOGIN_MENU",
    HANDLE_LOGIN_STATUS = "HANDLE_LOGIN_STATUS",
    HANDLE_LOGIN = "HANDLE_LOGIN"
}

export type MainAction = {
    type: MainActions,
    payload:any
}

export const changeLoginMenuState = ():MainAction =>({
    type: MainActions.HANDLE_LOGIN_MENU,
    payload:true
})

export const changeLoginStatusState = ():MainAction =>({
    type: MainActions.HANDLE_LOGIN_STATUS,
    payload:true
})

export const changeLoginState = (user:User):MainAction =>({
    type: MainActions.HANDLE_LOGIN,
    payload:user
})

