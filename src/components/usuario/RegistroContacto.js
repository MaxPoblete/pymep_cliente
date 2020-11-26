import React,{Fragment, useState,useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../css/Global.css';
import RegistroPyme from '../pyme/RegistroPyme';
import { Button,Form,Col,Row,Container, Card} from 'react-bootstrap';
import uuid from 'react-uuid';
import Titulo from '../layout/Titulo';






const RegistroContacto = (props) => {

    //state para cambiar de formulario
    const [Siguiente, estadoFormulario] = useState(false);

    //agregar state Reguistro Usuario
    const [registroContacto, CambiarStateContacto] = useState({

        telefono:'',
        email:'',
        comuna:'',
        calle:'',
        numero:''
    })

    //actualizar state Registro Contacto
    const actualizarState = (e) => {

        CambiarStateContacto({
            ...registroContacto,
            [e.target.name]: e.target.value
        })
    }

    //extraer datos state distrotion
    const { telefono, email, comuna, calle, numero} = registroContacto;

    //estado para cambiar mensaje de error
     const [mensajeError, estadoMensaje] = useState('');

    //estado para cambiar color mensaje
    const [claseError, estadoClaseMensaje] = useState('');

    //Restablecer form
    const Restablecer = (e) =>{
        CambiarStateContacto({
            ...registroContacto,
            telefono:'',
            email:'',
            comuna:'',
            calle:'',
            numero:''
        })
        estadoMensaje('')
        console.log(e.target.parentElement.parentElement.parentElement[0].focus());
    }

     
    //agregar usuario
  //  const crearUsuario = usuario => {
       //     guardarUsuarios([ ...usuarios, usuario ]);
     //   }

         
    //validar Datos Formilario
    const sutmitRegistroContacto = (e) =>{

         e.preventDefault();

         if(telefono.trim() ==='' ){
            estadoMensaje('ingrese Telefono');
            estadoClaseMensaje('error');
            e.target[0].focus();
            return;
        }else{
            if(email.trim() ==='' ){
                estadoMensaje('ingrese Email');
                estadoClaseMensaje('error');
                e.target[1].focus();
                return;
            }else{
                if(comuna.trim() ==='' ){
                    estadoMensaje('ingrese Comuna');
                    estadoClaseMensaje('error');
                    e.target[2].focus();
                    return;
                }else{
                    if(calle.trim() ==='' ){
                        estadoMensaje('ingrese Calle');
                        estadoClaseMensaje('error');
                        e.target[3].focus();
                        return;
                    }else{
                        if(numero.trim() ==='' ){
                            estadoMensaje('ingrese Numero De Domicilio');
                            estadoClaseMensaje('error');
                            e.target[4].focus();
                            return;
                        }else{

                        //estado para pasar al formulario de registro pyme
                         estadoFormulario(true);

                        }                      
                                
                    }
                }
            }
        }
    }

    
 
    return ( 
       
        <Fragment>
            <Container fluid>
                <Row>
                    <Col xs={12} >
                    {Siguiente? < RegistroPyme/> :
                    
                    <Card style={{ width: '100%', padding:'1em' }}>
                    <Titulo
                         className="text-center"
                         titulo='Reguistro Datos Contacto Usuario'
                    /><br/>
                        <Form onSubmit={sutmitRegistroContacto}>
                            <Form.Row>
                                <Col >
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control 
                                    size="sm"
                                    type="text" 
                                    placeholder=""
                                    name="telefono"
                                    onChange={actualizarState}
                                    value={telefono}
                                    /> 
                                </Col>
                                <Col>
                                <Form.Label>Email </Form.Label>
                                    <Form.Control 
                                    size="sm" 
                                    type="text" 
                                    placeholder=""
                                    name="email"
                                    onChange={actualizarState}
                                    value={email} 
                                    /> 
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                <Form.Label>Comuna</Form.Label>
                                    <Form.Control 
                                    size="sm" 
                                    type="text" 
                                    placeholder=""
                                    name="comuna"
                                    onChange={actualizarState}
                                    value={comuna}
                                    /> 
                                </Col>
                                <Col>
                                <Form.Label>Calle</Form.Label>
                                    <Form.Control 
                                    size="sm" 
                                    type="text" 
                                    placeholder=""
                                    name="calle"
                                    onChange={actualizarState}
                                    value={calle}
                                    /> 
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Label>Numero Domicilio </Form.Label>
                                    <Form.Control 
                                    size="sm" 
                                    type="text" 
                                    placeholder=""
                                    name="numero"
                                    onChange={actualizarState}
                                    value={numero} 
                                    /> 
                                </Col>
                            </Form.Row><br/>
                            <Form.Row>
                                <Col>
                                    <Button
                                        type="submit"
                                        className="btn btn-block ">
                                        Ingresar
                                    </Button>
                                </Col>
                                <Col>
                                    <Button
                                        className="btn btn-block bg-warning "
                                        onClick={Restablecer}
                                        >
                                        Restablecer
                                    </Button>
                                </Col>
                            </Form.Row>

                        </Form>
                        <div>
                             <h5 className={claseError}>{mensajeError}</h5>
                         </div>
                        </Card>  
                    }   
                    </Col>
                
                    
                </Row>
            </Container>
        </Fragment>
               
    );

}
export default RegistroContacto;