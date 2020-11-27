import React, { useState } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { Button,Form,Col,Row,Container, Card,Nav,Navbar,NavDropdown,FormControl} from 'react-bootstrap';



const Herder = (props) => {

    const[cerrarSession, setCerrerSesion]= useState(true);

    const  cerrarSessionSistema = () =>{
        sessionStorage.clear();
        setCerrerSesion(false);
    }



    return ( 
        <>
    {cerrarSession?
    <>
    <Col xs={12} sm={12} md={12}>
         <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Pymep</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Mi Cuenta</Nav.Link>
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Cotizar Producto</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Historial de ventas </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="" className="mr-sm-2" />
                    <Button style={{ margin: '10px' }} variant="outline-success">Buscar Producto</Button>
                    <Button
                    onClick={ () => cerrarSessionSistema(true)  }
                    variant="outline-danger">Cerrar Session</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
        </Col> <br/>
    </>

    :    
    <Redirect to='/'  />
    }
        
        </>
    );
}

export default Herder;