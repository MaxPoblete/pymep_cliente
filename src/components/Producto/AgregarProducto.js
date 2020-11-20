import React,{Fragment, useState,useEffect} from 'react';
import { Button, Form, Col, Row, Container, Card, Select} from 'react-bootstrap';
import Titulo from '../layout/Titulo';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';




const AgregarProducto = () =>{

    const[Producto, EstadoProducto]= useState({
         
         nombreProducto:'',
         precio:'',
         stock:'',
         sku:'',
         img:'',
         categoria:''

    })

    //actualizar state Registro Usuario
    const actualizarState = (e) => {

        EstadoProducto({
            ...Producto,
               [e.target.name]: e.target.value
         })
    }

    //estado para cambiar mensaje de error
    const [mensajeError, estadoMensaje] = useState('');

    //estado para cambiar color mensaje
    const [claseError, estadoClaseMensaje] = useState('');

    //obtener datos state 
    const { nombreProducto, precio, stock, sku, img, categoria } = Producto;

    //restablecer formulario
    const Restablecer = (e) =>{
        EstadoProducto({
            ... Producto,
                nombreProducto:'',
                precio:'',
                stock:'',
                sku:'',
                img:'',
                categoria:''
        })
        estadoMensaje('')
        console.log(e.target.parentElement.parentElement.parentElement[0].focus());
    }

  
    const RegistroProducto = (e) =>{
        e.preventDefault();

        if(nombreProducto.trim() ==='' ){
            estadoMensaje('ingrese Nombre Producto');
            estadoClaseMensaje('error');
            e.target[0].focus();
            return;
        }else{
            if(precio.trim() ==='' ){
                estadoMensaje('ingrese Precio');
                estadoClaseMensaje('error');
                e.target[1].focus();
                return;
            }else{
                if(stock.trim() ==='' ){
                    estadoMensaje('ingrese Stok');
                    estadoClaseMensaje('error');
                    e.target[2].focus();
                    return;
                }else{
                    if(sku.trim() ==='' ){
                        estadoMensaje('ingrese Codigo de barras SKU');
                        estadoClaseMensaje('error');
                        e.target[3].focus();
                        return;
                    }else{
                        if(categoria.trim() ==='' ){
                            estadoMensaje('ingrese Categoria Producto');
                            estadoClaseMensaje('error');
                            e.target[4].focus();
                            return;
                        }else{
                            if(img.trim() ==='' ){
                                estadoMensaje('ingrese Imagen Producto');
                                estadoClaseMensaje('error');
                                e.target[5].focus();
                                return;
                            }else{

                                Producto.id = uuid();
                                estadoMensaje('Guardando Producto....');
                                estadoClaseMensaje('enviado');
                                
                            }
                        }
                    }
                }
            }
        }


    }
    return(
 
        <Fragment>
        <Container fluid><br/>
            <Row>
                <Col xs={12} sm={3} md={3}></Col>
                <Col xs={12} sm={6} md={6} >
                                  
                <Card style={{ width: '100%', padding:'1em' }}>                   
                    <Form onSubmit={RegistroProducto}>
                        <Titulo
                            className="text-center"
                            titulo='Registro Producto'
                        /><br/>
                        <Form.Row>
                            <Col >
                                <Form.Label>Nombre Producto</Form.Label>
                                <Form.Control 
                                size="sm"
                                type="text" 
                                placeholder=""
                                name="nombreProducto"
                                onChange={actualizarState}
                                value={nombreProducto}
                                /> 
                            </Col>
                            <Col>
                                <Form.Label>Precio</Form.Label>
                                <Form.Control 
                                size="sm" 
                                type="text" 
                                placeholder=""
                                name="precio"
                                onChange={actualizarState}
                                value={precio}
                                /> 
                            </Col>
                        </Form.Row>

                        <Form.Row>
                            <Col>
                            <Form.Label>Stock</Form.Label>
                                <Form.Control 
                                size="sm" 
                                type="text" 
                                placeholder=""
                                name="stock"
                                onChange={actualizarState}
                                value={stock}
                                /> 
                            </Col>
                            <Col>
                            <Form.Label>SKU</Form.Label>
                                <Form.Control 
                                size="sm" 
                                type="text" 
                                placeholder=""
                                name="sku"
                                onChange={actualizarState}
                                value={sku}
                                /> 
                            </Col>
                        </Form.Row><br/>
                    <Form.Row>
                        <Col> 
                        <Form.Label>Categoria</Form.Label><br/>
                            <select
                                name="categoria"
                                value={categoria}
                                onChange={actualizarState}
                            >
                                <option value="0">-- Seleccione --</option>
                                <option value="Computacion">Computacion</option>
                                <option value="Refrigeracion">Refrigeracion</option>
                                <option value="Mecanica">Mecanica</option>
                            </select><br/>
                             <Link to={'Categoria'}>Agregar Categoria</Link>
                        </Col>
                        <Col>             
                            <Form.Group>
                                <Form.File 
                                    id="0" 
                                    label="Cargar Imagen"
                                    name="img"
                                    onChange={actualizarState}
                                    value={img}
                                />
                               
                            </Form.Group>
                        </Col>
                    </Form.Row><br/>
                        
                        <Form.Row>
                            <Col>
                                <Button
                                    type="submit"
                                    className="btn btn-block ">
                                    Agregar
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

                    </Form><br/>
                    <div>
                        <h5 className={claseError}>{mensajeError}</h5>
                    </div>
                    </Card> 
                               
                </Col>
                <Col xs={12} sm={3} md={3}></Col>
            </Row>
        </Container>
    </Fragment>            
    

    )

}

export default AgregarProducto;