import {React,Fragment} from 'react';
import { Link } from 'react-router-dom';

import { Button,Form,Col,Row,Container, Card} from 'react-bootstrap';



const Login = (props) => {

     

    return ( 
       
        <Fragment>
            <Col xs={12} sm={8} md={4}>fila uno </Col><br/><br/>
            <Col xs={12} sm={8} md={4} ><br/><br/>
                 <h2>Login de Ingreeso</h2>
                <Card style={{ width: '100%', padding:'1em' }}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Ingrese Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label> Ingrese Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                             Ingresar
                        </Button>

                        </Form>
                    </Card>
                    <Link to={'/RecuperarPassword'}>Recuperar Password</Link><br/>
                    <Link to={'/NuevaCuenta'}>Obtener Cuenta</Link><br/>
                    <Link to={'/Inicio'}>ir a Inicio link solo Prueba</Link>
            </Col>
            <Col xs={12} sm={8} md={4}>Fila tres</Col>
        </Fragment>
               
    );
}

export default Login;