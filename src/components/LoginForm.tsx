import {useDispatch, useSelector} from "react-redux";
import {changeLoginMenuState, changeLoginState, changeLoginStatusState} from "../storage/mainActions";
import React, {useState} from "react";
import {GlobalState} from "../GlobalState";
import {User} from "../storage/states/models/User";



export const LoginForm = () =>{
    const globalState:GlobalState
        = useSelector<GlobalState,GlobalState>((state)=>state)

    const [login, setLogin] = useState("a")
    const [password, setPassword] = useState("a")

    const dispatch = useDispatch()

    const onChangeLoginMenuState = (event:any)=>{
        //czy trafiono w tło, a nie w formularz
        if(event.target.className == "Login-container")
            dispatch(changeLoginMenuState());
    }

    const onLoginClick =()=>{

        const users:User[] = globalState.user.users

        let loggedUser:User;
        users.forEach((user:User)=>{
            if(user.login == login && user.password == password){
                loggedUser=user;
                dispatch(changeLoginState(loggedUser));
                dispatch(changeLoginStatusState());
                dispatch(changeLoginMenuState());
            }
        })

    }

    return (
        <div onClick={onChangeLoginMenuState} className="Login-container" >

            <form className="login-form">
                <input value={login} onChange={e=>setLogin(e.target.value)} type="text" name="login" placeholder="Login"/>
                <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="password" placeholder="Hasło"/>
                <button type="button" onClick={onLoginClick}>Zaloguj</button>
            </form>

        </div>
    )
}