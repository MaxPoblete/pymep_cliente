import {React,Fragment, useState, useEffect} from 'react';
import Header from '../layout/Header'
import { Link,Redirect } from 'react-router-dom';

import { Button,Form,Col,Row,Container, Card,Nav,Navbar,NavDropdown,FormControl} from 'react-bootstrap';
import Herder from '../layout/Header';



const Inicio = (props) => {

    //state inicio
    const[acceso, setAcceso]=useState(true);

    //validar session usuario 
    useEffect( () => {
        let session = sessionStorage.getItem('sesion');
        console.log(typeof(session));
        if(session === null || session.trim()==='') {
            setAcceso(false);
        }else{
            setAcceso(true);
        }
      },acceso);

    return ( 
        
        <Fragment>
            {acceso?
                <Fragment>
                    <Herder/>
                    <br/>
                    <Col xs={12} sm={6} lg={3}>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="flex-column">
                                    <Nav.Link href="#home">Agregar Producto</Nav.Link>
                                    <Nav.Link href="#home">Cotizador de Productos</Nav.Link>
                                    <Nav.Link href="#home">Mantenedor Productos</Nav.Link>
                                    <Nav.Link href="#home">Historial De Ventas</Nav.Link>
                                    <Nav.Link href="#home">Despachos</Nav.Link>
                                    <Nav.Link href="#home">Estadisticas</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col xs={12} sm={6} lg={9}></Col>
                </Fragment>
            :
                <Redirect to='/'/>
            }  
        </Fragment>        
    );
}

export default Inicio;