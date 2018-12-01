import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import { Route } from 'react-router-dom';
import About from './about';
import Home from './home';
import Nav from './nav';
import PublicList from './public_list';
import SecretList from './secret_list';
import Quotes from './quotes';
import SignUp from './sign_up';
import SignIn from './sign_in';
import auth from '../hoc/auth';



const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/public-list" component={PublicList}/>
            <Route exact path="/secret-list" component={SecretList}/>
            <Route exact path="/quotes" component={auth(Quotes)}/>
            <Route exact path="/sign-in" component={ auth(SignIn, '/quotes', false) }/>
            <Route exact path="/sign-up" component={auth(SignUp, '/quotes', false)}/>

        </div>
    </div>
);

export default App;
