import React, { useContext } from 'react';
import { 
  BrowserRouter, 
  Route, 
  Switch,
  Redirect } from 'react-router-dom';

import { UserContext } from '../context/UserContext';

import { Login, Register, Dashboard, Update } from '../pages';

function Routes() {
  const [userData, setUserData] = useContext(UserContext)

  const {isLogged, isAdmin} = userData

  return (
    <BrowserRouter>
    
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/cadastro" exact component={Register} />

        <Route path="/dashboard" exact>
          {isLogged && isAdmin ? <Dashboard /> : <Redirect to="/" />}
        </Route>

        <Route path="/atualizar" exact component={Update} />
      </Switch>
    
    </BrowserRouter>
  );
}

export default Routes;