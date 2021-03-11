import { Switch} from 'react-router-dom';

import Route from './routes';

import {Login} from '../pages/login';
import {Signup} from '../pages/signup';
import {Home} from '../pages/home';
import {Profile} from '../pages/profile';
import {Location} from '../pages/location';

export function Routes () {
    return (
        <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/home' isPrivate component={Home}/>
            <Route path='/profile' isPrivate component={Profile}/>
            <Route path='/location' isPrivate component={Location}/>
            
        </Switch>
    );
}