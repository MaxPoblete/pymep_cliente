import {React,Fragment,useState} from 'react';
import { Link } from 'react-router-dom';

import { Button,Form,Col,Row,Container, Card,Nav,Navbar,NavDropdown,FormControl} from 'react-bootstrap';




const RecuperarPassword = (props) => {
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

       //obtener valores actuales de state con distrotion
       const {username,password} = Login;

       //validar Credenciales 
       const submitLogin = e =>{

           e.preventDefault();
           if(username.trim() ==='' ){
               estadoMensaje('Codigo Invalido');
               estadoClaseMensaje('error');
               e.target[0].focus();
               return;
           }
           
       }

       //State enviar codigo a correo de recuperacion
       const [mesajeRecuperacion, CambiarMensajeRecuperacion] = useState('');

       const EnviarCodigo = () => {

        estadoMensaje('Codigo Enviado...');
        estadoClaseMensaje('enviado');
       }

    return ( 
        <Fragment>
            <Container><br/>
            <h3 className="text-center">Problemas Con Tu Password?</h3>
            <Row>
                
            <Col xs={12} sm={8} md={4}></Col><br/><br/>
            
            <Col xs={12} sm={8} md={4} ><br/>

                <Card style={{ width: '100%', padding:'1em' }}>
                    <Form onSubmit={submitLogin} >

                        <h4>Enviamos Un Codigo de validacion ha tu Correo De Recuperacion</h4><br/>
                        <Form.Label>Ingrese Codigo de 6 Digitos</Form.Label>
                            <Form.Control 
                                type="text"
                                    name="username"
                                    placeholder=""
                                    onChange={actualizarState}
                                    value={username}
                                /><br/>
                                 <Form.Row>
                                <Col>
                                <Button variant="outline-primary" type='submit'>Recuperar</Button>
                                </Col>
                                <Col>
                                <Button variant="outline-warning"
                                onClick={EnviarCodigo}
                                >Reenviar Codigo</Button>
                                </Col>
                                </Form.Row>
                        </Form><br/>
                        <div>
                            <h5 className={claseError}>{mensajeError}</h5> 
                         </div>
                    </Card>
                    <Link to={'/'}>Volver A login</Link><br/>
            </Col>
            <Col xs={12} sm={8} md={4}></Col>
            </Row>
            </Container>
        </Fragment>        
    );
}

export default RecuperarPassword;