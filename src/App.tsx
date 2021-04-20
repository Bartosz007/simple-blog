import React from 'react';

import "./css/global_styles.css";
import "./css/main_styles.css";
import "./css/article_list_styles.css";
import "./css/add_article.css";
import "./css/article_styles.css";
import "./css/global_styles.css";

import {Switch,Route,Link,BrowserRouter as Router} from "react-router-dom";
import {MainSite} from "./components/MainSite";
import {AddEditArticle} from "./components/AddEditArticle";
import {ArticlesList} from "./components/articleList/ArticlesList";
import {Article} from "./components/article/Article";
import {LoginForm} from "./components/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {changeLoginMenuState, changeLoginState, changeLoginStatusState} from "./storage/mainActions";
import {MainState} from "./storage/states/MainState";
import {GlobalState} from "./GlobalState";



function App() {

    const mainState:MainState
        = useSelector<GlobalState,GlobalState["main"]>((state:GlobalState)=>state.main)

    const dispatch = useDispatch()

    const onChangeLoginMenuState = ()=>{
        if(!mainState.loginStatus) {
            dispatch(changeLoginMenuState());
        }else{
            dispatch(changeLoginStatusState());
        }
    }


    return (
        <div className="App">
           {mainState.loginMenu ? <LoginForm/>:null}
            <Router>
                <header className="App-header">

                    <Link to="/">Start</Link >
                    <Link to="/articlesList">Przeglądaj</Link >

                    {mainState.loginStatus ? <Link to="/addedit/add/0">Dodaj</Link > : null}
                    <div onClick={onChangeLoginMenuState}>{mainState.loginStatus ? "Wyloguj się" : "Zaloguj się"}</div>
                </header>

                <div className="Global-container">

                    <Switch>

                        <Route key="addedit"
                               path="/addedit/:type/:id"
                               component={AddEditArticle}>

                        </Route>

                        <Route path="/articlesList">
                            <ArticlesList />
                        </Route>

                        <Route key="article"
                               path="/article/:id"
                               component={Article}>

                        </Route>

                        <Route  path="/">
                            <MainSite />
                        </Route>

                    </Switch>


                </div>
            </Router>
        </div>

    );
}

export default App;
