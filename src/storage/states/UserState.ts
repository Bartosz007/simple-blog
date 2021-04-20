import {User} from "./models/User";

export interface UserState{
    users: User[]
}

export const initialUserState = {
    users:[
        {id: 0, name: "admin", surname: "admin",login: "admin", password: "admin", avatar: "avatar0.png"},
        {id: 1,name: "user", surname: "user",login: "user", password: "user", avatar: "avatar1.png"},
        {id: 2,name: "userA", surname: "userA",login: "a", password: "a", avatar: "avatar0.png"}

    ]
}
