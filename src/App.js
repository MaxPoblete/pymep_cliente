import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import RecuperarPassword from './components/auth/RecuperarPassword';
import RegistroUsuario from './components/auth/RegistroUsuario';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './components/inicio/Inicio';
import Categoria from './components/categoria/Categoria';
import Producto from './components/Producto/Producto'


function App() {

  return (
    <>
        <Router>
           <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/RegistroUsuario" component={RegistroUsuario} /> 
              <Route exact path="/Inicio" component={Inicio}/>
              <Route exact path="/RecuperarPassword" component={RecuperarPassword}/>
              <Route exact path="/Producto" component={Producto}/>
              <Route exact path="/Categoria" component={Categoria}/>
           </Switch>
        </Router> 
   </>
);
}

export default App;
