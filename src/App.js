import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import RecuperarPassword from './components/auth/RecuperarPassword';
import NuevaCuenta from './components/auth/NuevaCuenta';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,Col,Row,Container,fluid} from 'react-bootstrap';
import Inicio from './components/inicio/Inicio';


function App() {

  return (
    <>
    <Container fluid> 
      <Row>
        <Router>
           <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/NuevaCuenta" component={NuevaCuenta} /> 
              <Route exact path="/Inicio" component={Inicio}/>
              <Route exact path="/RecuperarPassword" component={RecuperarPassword}/>
           </Switch>
        </Router> 
      </Row> 
    </Container>
</>
);
}

export default App;
