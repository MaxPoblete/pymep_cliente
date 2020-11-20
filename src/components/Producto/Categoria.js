import React, { useState ,Fragment, useEffect} from 'react';
import '../../css/Global.css';
import { Button, Form, Col, Row, Container, Card, Table} from 'react-bootstrap';
import uuid from 'react-uuid';
import Titulo from '../layout/Titulo';
import AgregarProducto from './AgregarProducto';
import { Link } from 'react-router-dom';




const Categoria = ({titulo}) =>{

    const[Categoria, CambiarStateCategoria] = useState({

        nombreCategoria:'',
        descripcion:''
    })

    //Restablecer form
    const Restablecer = (e) =>{
        CambiarStateCategoria({
            ...Categoria,
                nombreCategoria:'',
                descripcion:''
        })
        estadoMensaje('');
    }

    //state para cambiar de formulario
     const [Siguiente, estadoFormulario] = useState(false);

    //actualizar state categoria
    const actualizarState = (e) =>{

        CambiarStateCategoria({
            ...Categoria,
             [e.target.name]: e.target.value
        })
        
    }
    
    //estado para cambiar mensaje de error
    const [mensajeError, estadoMensaje] = useState('');

    //estado para cambiar color mensaje
    const [claseError, estadoClaseMensaje] = useState('');

    //extraer datos state distrotion
    const{nombreCategoria, descripcion} = Categoria;


        //agregar usuario a local estorage
        let CategoriasIniciales = JSON.parse(localStorage.getItem('categorias'));
        if(!CategoriasIniciales){
            CategoriasIniciales=[];
        }

            // Arreglo de usuarios
        const [categorias, guardarCategoria] = useState(CategoriasIniciales);

        useEffect( () => {
            if(CategoriasIniciales) {
              localStorage.setItem('categorias', JSON.stringify(categorias))
            } else {
              localStorage.setItem('categorias', JSON.stringify([]));
            }
          }, [categorias] );

        //agregar categoria
            const crearCategoria = categoria => {
                guardarCategoria([ 
                 ...categorias,
                    categoria
             ]);
    }
        
    //enviando onsubmit
    const SubmitRegistroCategoria = (e) =>{

         e.preventDefault();

         if(nombreCategoria.trim() ==='' ){
            estadoMensaje('ingrese Nombre Categoria');
            estadoClaseMensaje('error');
            e.target[0].focus();
            return;
        }else{
            if(descripcion.trim() ==='' ){
                estadoMensaje('ingrese Descripcion');
                estadoClaseMensaje('error');
                e.target[1].focus();
                return;
            }else{
                crearCategoria(Categoria);
                Categoria.id = uuid();
                Restablecer();
            }
        }
    }
    
    return(
 
        <Fragment>
        <Container fluid><br/>
            <Row>
                <Col xs={12} sm={6} md={6}>
                {Siguiente? < AgregarProducto/> :                   
                <Card style={{ width: '100%', padding:'1em' }}>                   
                    <Form onSubmit={SubmitRegistroCategoria}>
                        <Titulo
                            className="text-center"
                            titulo='Agregar Nueva Categoria de Productos'
                        /><br/>
                        <Form.Row>
                            <Col >
                                <Form.Label>Agregar Categoria</Form.Label>
                                <Form.Control 
                                size="sm" 
                                type="text" 
                                placeholder=""
                                name="nombreCategoria"
                                onChange={actualizarState}
                                value={nombreCategoria}
                                />  
                            </Col>
                            </Form.Row>
                            <Form.Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Agregar Descripcion</Form.Label>
                                    <Form.Control 
                                    as="textarea"
                                    rows={3}
                                    name="descripcion"
                                    onChange={actualizarState}
                                    value={descripcion}
                                    />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <br/>
                        <Form.Row>
                            <Col>
                                <Button
                                    type="submit"
                                    className="btn btn-block ">
                                    agregar
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
              
                <Col xs={12} sm={6} md={6}>
                    <Table striped bordered hover variant="">
                            <thead>
                                <tr>
                                    <th>id Categoria</th>
                                    <th>Nombre Categoria</th>
                                    <th>Descripcion</th>
                                    <th>Eliminar</th>
                                    <th>Actializar</th>
                                </tr>
                            </thead>
                           
                            {categorias.map(categoria => (
                                <tbody>
                                <tr>
                                    <td>{categoria.id}</td>
                                    <td>{categoria.nombreCategoria}</td>
                                    <td>{categoria.descripcion}</td>
                                    <td>
                                    <Button
                                        className="btn btn-block bg-danger">
                                        Eliminar
                                    </Button>
                                    </td>
                                    <td>
                                    <Button
                                        className="btn btn-block bg-success">
                                        Actializar
                                    </Button>
                                    </td>
                                </tr>
                            </tbody>
                            ))}
                    </Table>
                </Col>
                } 
            </Row>
        </Container>
    </Fragment>             

    )

}

export default Categoria;

