import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import RecuperarPassword from './components/auth/RecuperarPassword';
import RegistroUsuario from './components/auth/RegistroUsuario';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './components/inicio/Inicio';
import AgregarProducto from './components/Producto/AgregarProducto';
import Categoria from './components/categoria/Categoria';


function App() {

  return (
    <>
        <Router>
           <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/RegistroUsuario" component={RegistroUsuario} /> 
              <Route exact path="/Inicio" component={Inicio}/>
              <Route exact path="/RecuperarPassword" component={RecuperarPassword}/>
              <Route exact path="/AgregarProducto" component={AgregarProducto}/>
              <Route exact path="/Categoria" component={Categoria}/>
           </Switch>
        </Router> 
   </>
);
}

export default App;
