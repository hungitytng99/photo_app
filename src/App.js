import React, { Suspense} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header'
import NotFound from './components/NotFound/NotFound';
import Loading from './components/Loading/Loading'
// Lazy load
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
     <Suspense fallback={<Loading/>}>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Redirect exact from="/" to="/photos"></Redirect>
            
            <Route path="/photos" component={Photo}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
     </Suspense>
    </div>
  );
}

export default App;
