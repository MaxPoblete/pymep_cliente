import React from 'react';
import { Link } from 'react-router-dom';

import { Button,Form,Col,Row,Container, Card} from 'react-bootstrap';



const NuevaCuenta = (props) => {


    return ( 
       
            <>
                <Col xs={12} sm={3} md={3}>Imagen</Col>

                <Col xs={12} sm={6} md={6} ><br/><br/>

                <h3>Formulario de Registro </h3><p>Nuevo Usuario</p>
                <Form>
                    <Form.Row>
                        <Col >
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Nombre" /> 
                        </Col>
                        <Col>
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Apellido" /> 
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label>Run </Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Nombre" /> 
                        </Col>
                        <Col>
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Apellido" /> 
                        </Col>
                    </Form.Row>
                </Form>
                </Col>



                <Col xs={12} sm={3} md={3}>Info</Col>
            </>
               
    );
}

export default NuevaCuenta;