import React,{Fragment, useState} from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import '../../css/Global.css';


const FormCategoria = ({titulo, Categoria, actualizarState, sutmitCategoria,claseError,mensajeError, Restablecer, botonActualizar, editar }) =>{

    return(
        <Fragment>
            <div style={{padding:'1rem', margin:'1rem', border: '1px solid black' }}>
                <h4>{titulo}</h4>
                <Form onSubmit={sutmitCategoria} 
                >
                    <Form.Group controlId="formBasicEmail">
                        <br/>
                        <Form.Row>
                            <Col sm={4}>
                                <Form.Label>Nombre Categoria</Form.Label>
                            </Col>
                            <Col sm={8}>
                                <Form.Control 
                                    type="text" 
                                    name="nombre"
                                    onChange={actualizarState}
                                    value={Categoria.nombre}
                                />
                            </Col>
                        </Form.Row>
                        <br/>
                        <Form.Row>
                            <Col sm={4}>
                                <Form.Label>Descripcion</Form.Label>
                            </Col>
                            <Col sm={8}>
                                <Form.Control 
                                    as="textarea"
                                    rows={3}
                                    name="descripcion"
                                    onChange={actualizarState}
                                    value={Categoria.descripcion}
                                />
                            </Col>      
                        </Form.Row>
                        <br/>
                        <Form.Row>
                            <Col>
                            {botonActualizar?  
                                  <Button
                                    className="btn btn-block bg-primary "
                                    type='submit'
                                    >
                                    Agregar
                                </Button> 
                                 : 
                                 <Button
                                 className="btn btn-block bg-primary "
                                 onClick={ () => editar(Categoria)  }
                                 >
                                 Actualizar
                             </Button>
                                 }

                            </Col>
                            <Col>
                                <Button
                                    className="btn btn-block bg-warning "
                                    onClick={ () => Restablecer()  }
                                    >
                                    Restablecer
                                </Button>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <div>
                                <h5 className={claseError}>{mensajeError}</h5>
                            </div>
                        </Form.Row>
                    </Form.Group>
                </Form> 
            </div>                                   
        </Fragment>
    )
}

export default FormCategoria;