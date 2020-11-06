import {React,Fragment} from 'react';
import Header from '../layout/Header'
import { Link } from 'react-router-dom';

import { Button,Form,Col,Row,Container, Card,Nav,Navbar,NavDropdown,FormControl} from 'react-bootstrap';
import Herder from '../layout/Header';



const Inicio = (props) => {


    return ( 
        
        <Fragment>
            <Herder></Herder><br/>
                <Col xs={12} sm={6} md={3}>
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
            <Col xs={12} sm={6} md={9}>fila dos</Col>
        </Fragment>        
    );
}

export default Inicio;