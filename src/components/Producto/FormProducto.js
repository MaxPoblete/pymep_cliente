import React,{Fragment} from 'react';
import { Button, Col, Form , Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../../css/Global.css';




const FormProducto = ({titulo,listaCategorias, Producto, actualizarState, Restablecer,
    mensajeError, claseError, RegistroProducto}) =>{

    return(
        <Fragment>
            <div style={{padding:'1rem', margin:'1rem', border: '1px solid black' }}>
            <h4>{titulo}</h4>
                <Form onSubmit={RegistroProducto}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Row>
                            <Col sm={8}>
                                <Form.Label> Producto</Form.Label>
                                <Form.Control 
                                    maxLength={30}
                                    size="sm"
                                    type="text" 
                                    name="nombreProducto"
                                    onChange={actualizarState}
                                    value={Producto.nombreProducto}
                                />
                            </Col> 
                            <Col sm={4}>
                                <Form.Label>Precio</Form.Label>
                                <Form.Control 
                                size="sm"
                                maxLength={10}
                                    type="text" 
                                    name="precio"
                                    onChange={actualizarState}
                                    value={Producto.precio}
                                />
                            </Col>  
                        </Form.Row>
                        <Form.Row>
                            <Col sm={8}>
                                <Form.Label>SKU</Form.Label>
                                <Form.Control 
                                    maxLength={5}
                                    size="sm"
                                    type="text" 
                                    name="sku"
                                    onChange={actualizarState}
                                    value={Producto.sku}
                                />
                            </Col>  
                            <Col sm={4}>
                                <Form.Label>Stock</Form.Label>
                                <Form.Control 
                                    maxLength={4}
                                    size="sm"
                                    type="text" 
                                    name="stock"
                                    onChange={actualizarState}
                                    value={Producto.stock}
                                />
                            </Col> 
                        </Form.Row>
                        <Form.Row>
                            <Col> 
                                <Form.Label>Categoria</Form.Label>
                                    <select
                                        size="sm"
                                        name="categoria"
                                        value={Producto.categoria}
                                        onChange={actualizarState}
                                        >
                                        <option value="0">-- Seleccione --</option>
                                        {listaCategorias.map(categoria => (
                                        <option value={categoria.nombre}>{categoria.nombre}</option>
                                        ))}
                                    </select>
                            </Col>
                            <Col><br/>
                            <Button
                                className="btn btn-block bg-success"
                            >
                                <Link 
                                to={'Categoria'}
                                style={{textDecoration:'none',color:'white'}}
                                >Agregar Categoria</Link>
                            </Button>
                            </Col>

                        </Form.Row>
                        <br/>
                        <Form.Row>
                            <Col>
                                <Form.File 
                                    size="sm"
                                    id="0" 
                                    label="Cargar Imagen"
                                    name="img"
                                    onChange={actualizarState}
                                    value={Producto.img}
                                />
                            </Col>
                        </Form.Row>
                        <br/>
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

export default FormProducto;