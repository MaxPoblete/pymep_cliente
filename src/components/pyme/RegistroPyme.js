import React,{Fragment, useState} from 'react';
import '../../css/Global.css';
import { Button, Form, Col, Row, Container, Card} from 'react-bootstrap';
import Titulo from '../layout/Titulo';



const RegistroPyme = (props) => {


    //agregar state Reguistro Usuario
    const [RegistroPyme, CambiarStatePyme] = useState({

        razonSocial: '',
        nombreFantasia:'',
        run:'',
        fonoEmpresa:'',
        emailEmpresa:'',
        numeroPatenteMunicipal:'',
        domicilioEmpresa:'',
        domicilioFilial:'',
        numeroPatenteMunicipal:''
    })

    //actualizar state Registro Usuario
    const actualizarState = (e) => {

        CambiarStatePyme({
            ...RegistroPyme,
            [e.target.name]: e.target.value
        })
    }

    //extraer datos state distrotion
    const { razonSocial, nombreFantasia, run, fonoEmpresa, domicilioEmpresa, domicilioFilial,
        emailEmpresa, numeroPatenteMunicipal } = RegistroPyme;

    //estado para cambiar mensaje de error
     const [mensajeError, estadoMensaje] = useState('');

    //estado para cambiar color mensaje
    const [claseError, estadoClaseMensaje] = useState('');

    //restablecer formulario, mensaje y posicional el focus en el primer imput
    const Restablecer = (e) =>{
        CambiarStatePyme({
            ... RegistroPyme,
                razonSocial: '',
                nombreFantasia:'',
                run:'',
                fonoEmpresa:'',
                emailEmpresa:'',
                numeroPatenteMunicipal:'',
                domicilioEmpresa:'',
                domicilioFilial:'',
                numeroPatenteMunicipal:''
        })
        estadoMensaje('')
        console.log(e.target.parentElement.parentElement.parentElement[0].focus());
    }


    //validar Datos Formilario
    const sutmitRegistroUsuario = (e) =>{

         e.preventDefault();

         if(razonSocial.trim() ==='' ){
            estadoMensaje('ingrese razonSocial');
            estadoClaseMensaje('error');
            e.target[0].focus();
            return;
        }else{
            if(nombreFantasia.trim() ==='' ){
                estadoMensaje('ingrese Nombre Fantasia');
                estadoClaseMensaje('error');
                e.target[1].focus();
                return;
            }else{
                if(run.trim() ==='' ){
                    estadoMensaje('ingrese Rut Empresa');
                    estadoClaseMensaje('error');
                    e.target[2].focus();
                    return;
                }else{
                    if(run.length > 9 || run.length < 9){
                        estadoMensaje('Ingrese Run Valido.. sin puntos ni gion Ej: 174855267 ');
                        estadoClaseMensaje('error');
                        e.target[2].focus();
                        return;
                    }else{
                        if(fonoEmpresa.trim() ==='' ){
                            estadoMensaje('ingrese Telefono Empresa');
                            estadoClaseMensaje('error');
                            e.target[3].focus();
                            return;
                        }else{
                            if(emailEmpresa.trim() ==='' ){
                                estadoMensaje('ingrese Email Empresa');
                                estadoClaseMensaje('error');
                                e.target[4].focus();
                                return;
                            } else{
                                if(numeroPatenteMunicipal.trim() ==='' ){
                                    estadoMensaje('ingrese N° Patente Municipal');
                                    estadoClaseMensaje('error');
                                    e.target[5].focus();
                                    return;
                                }else{
                                    if(domicilioEmpresa.trim() ==='' ){
                                        estadoMensaje('ingrese domicilioEmpresa');
                                        estadoClaseMensaje('error');
                                        e.target[6].focus();
                                        return;
                                    }else{
                                        if(domicilioFilial.trim() ==='' ){
                                            estadoMensaje('ingrese domicilio Filial');
                                            estadoClaseMensaje('error');
                                            e.target[7].focus();
                                            return;
                                        }  
                                    }
                                }
                            }  
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
                    <Col xs={12}>
                            <Card style={{ width: '100%', padding:'1em' }}>                            
                                <Form onSubmit={sutmitRegistroUsuario}>
                                <Titulo
                                    className="text-center"
                                    titulo='Reguistro Datos pyme '
                                    />
                                    <br/>
                                    <Form.Row>
                                        <Col >
                                            <Form.Label>RazonSocial</Form.Label>
                                            <Form.Control 
                                            maxLength={30}
                                            size="sm"
                                            type="text" 
                                            placeholder=""
                                            type="razonSocial"
                                            name="razonSocial"
                                            onChange={actualizarState}
                                            value={razonSocial}
                                            /> 
                                        </Col>
                                        <Col>
                                            <Form.Label>Nombre Fantasia</Form.Label>
                                            <Form.Control 
                                            size="sm" 
                                            type="text" 
                                            placeholder=""
                                            name="nombreFantasia"
                                            onChange={actualizarState}
                                            value={nombreFantasia}
                                            /> 
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col>
                                        <Form.Label>Run </Form.Label>
                                            <Form.Control 
                                            maxLength={9}
                                            size="sm" 
                                            type="text" 
                                            placeholder=""
                                            name="run"
                                            onChange={actualizarState}
                                            value={run}
                                            /> 
                                        </Col>
                                        <Col>
                                        <Form.Label>Telefono Empresa</Form.Label>
                                            <Form.Control 
                                            size="sm" 
                                            type="text" 
                                            placeholder=""
                                            name="fonoEmpresa"
                                            onChange={actualizarState}
                                            value={fonoEmpresa}
                                            /> 
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col>
                                            <Form.Label>Email </Form.Label>
                                            <Form.Control 
                                            size="sm" 
                                            type="text" 
                                            placeholder=""
                                            name="emailEmpresa"
                                            onChange={actualizarState}
                                            value={emailEmpresa} 
                                            /> 
                                        </Col>
                                        <Col>
                                            <Form.Label>Nª Patente Municipal</Form.Label>
                                            <Form.Control 
                                            size="sm" 
                                            type="text" 
                                            placeholder=""
                                            name="numeroPatenteMunicipal"
                                            onChange={actualizarState}
                                            value={numeroPatenteMunicipal} 
                                            /> 
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col>
                                            <Form.Label>Domicilio  Casa Matriz </Form.Label>
                                            <Form.Control 
                                            size="sm" 
                                            type="text" 
                                            placeholder=""
                                            name="domicilioEmpresa"
                                            onChange={actualizarState}
                                            value={domicilioEmpresa} 
                                            /> 
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col>
                                            <Form.Label>Domicilio Filial </Form.Label>
                                            <Form.Control 
                                            size="sm" 
                                            type="text" 
                                            placeholder=""
                                            name="domicilioFilial"
                                            onChange={actualizarState}
                                            value={domicilioFilial} 
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
                    </Col>
                </Row>
            </Container>
        </Fragment>      
    );
}

export default RegistroPyme;