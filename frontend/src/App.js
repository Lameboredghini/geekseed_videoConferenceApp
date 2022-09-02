import './App.css';
import { useEffect } from 'react';

import { connectWithWebSocket } from './utils/wssConnection/wssConnection';
import {BrowserRouter as Router,
Route, Switch} from 'react-router-dom';

import Login from './Login/login';
import Dashboard from './Dashboard/dashboard';

function App () {
  useEffect(() => {
    connectWithWebSocket();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path ='/dashboard'>
          <Dashboard/>
            
          
          
          
        </Route>
        <Route path ='/'>
          <Login/>
        </Route>
      </Switch>


    </Router>
  );
}

export default App;
