import Notfound from 'components/NotFound/NotFound';
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import AddEditPage from './pages/AddEdit/AddEditPage';
import MainPage from './pages/Main/MainPage';

Photo.propTypes = {};

function Photo(props) {
    const match = useRouteMatch();
    const url = match.url;
    return(
        <Switch>
            <Route exact path={url} component={MainPage}/>
            <Route path={`${url}/add`} component={AddEditPage}/>
            <Route path={`${url}/:photoId`} component={AddEditPage}/>
            <Route component={Notfound}/>
        </Switch>
    )
}

export default Photo;