import {RouteProps, Route, Redirect} from 'react-router-dom';
import {useAuth} from '../hooks/auth';

interface RoutesProps extends RouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Routes: React.FC <RoutesProps>  = ({isPrivate = false, component: Component, ...rest})  => {

    const {user} = useAuth();

    return (
        <Route {...rest} render={({location}) => {
            return isPrivate === !!user? (
                <Component/>
            ) : (
                <Redirect
                    to={{
                        pathname: isPrivate ? '/' : 'home',
                        state: {from : location},
                    }} 
                />
            )
        }}/>         
        
    );
    
}

export default Routes;