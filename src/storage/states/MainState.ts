import {UserState} from "./UserState";

export interface MainState {
    loginMenu: boolean,
    loginStatus: boolean
    loggedUser?: UserState
}

export const initialMainState = {
    loginMenu: false,
    loginStatus: false
}
