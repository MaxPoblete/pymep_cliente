import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './components/inicio/Inicio';
import RegistroUsuario from './components/usuario/RegistroUsuario';
import RecuperarPassword from './components/auth/RecuperarPassword';



function App() {

  return (
    <>
        <Router>
           <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Inicio" component={Inicio} />
              <Route exact path="/RegistroUsuario" component={RegistroUsuario} />
              <Route exact path="/RecuperarPassword" component={RecuperarPassword} />
           </Switch>
        </Router> 
   </>
);
}

export default App;
