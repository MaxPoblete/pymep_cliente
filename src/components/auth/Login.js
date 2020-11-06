import {React, Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import '../../css/Login.css'

import { Button,Form,Col,Row,Container, Card} from 'react-bootstrap';



const Login = (props) => {

     //agregar state de login
     const [Login, cambiarStateLogin] = useState({
         username: '',
         password: ''
     })

     //actualizar state login
     const actualizarState = (e) =>{
        cambiarStateLogin({
            ...Login,
            [e.target.name] : e.target.value
        })
     }

         //estado para cambiar mensaje de error
         const [mensajeError, estadoMensaje] = useState('');

        //estado para cambiar color mensaje
        const [claseError, estadoClaseMensaje] = useState('');

        //obtener valoresd actuales de input distrotion
        const {username,password} = Login;

        //validar Credenciales 
        const submitLogin = e =>{

            e.preventDefault();
            if(username.trim() ==='' ){
                estadoMensaje('ingrese username');
                estadoClaseMensaje('error');
                e.target[0].focus();
                return;
            }else{
                if(password.trim()===''){
                    estadoMensaje('ingrese password');
                    estadoClaseMensaje('error');
                    e.target[1].focus();
                    return;
                }else{
                    estadoMensaje('Enviando....');
                    estadoClaseMensaje('enviado');
                }
            }
            
        }
    return ( 
       
        <Fragment>
            <Col xs={12} sm={8} md={4}>
                
            </Col><br/><br/>
            <Col xs={12} sm={8} md={4} ><br/><br/>
                 <h2>Login de Ingreeso</h2>
                <Card style={{ width: '100%', padding:'1em' }}>
                    <Form onSubmit={submitLogin} >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Ingrese Email</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="username"
                                    placeholder="Ingrese Username"
                                    onChange={actualizarState}
                                    value={username}

                                />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label> Ingrese Password</Form.Label>
                            <Form.Control 
                                    type="password"
                                    name="password"
                                    placeholder="Ingrese password"
                                    onChange={actualizarState}
                                    value={password}
                            />
                        </Form.Group>

                        <Button
                            type="submit"
                            className="btn btn-block ">
                            Ingresar
                            
                        </Button>

                        </Form>
                        <div>
                             <h5 className={claseError}>{mensajeError}</h5>
                         </div>
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