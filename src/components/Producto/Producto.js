import React,{Fragment, useState, useEffect} from 'react';
import { Col, Row, Container} from 'react-bootstrap';
import uuid from 'react-uuid';
import FormProducto from './FormProducto';
import Header from '../layout/Header'
import TablaProducto from './TablaProducto';





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
    }

     //agregar datos a locarStorage
     let productosIniciales = JSON.parse(localStorage.getItem('productos'));
     if(!productosIniciales){
        productosIniciales=[];
     }
 
     // Arreglo de usuarios
     const [productos, guardarProductos] = useState(productosIniciales);
 
     useEffect( () => {
         if(productosIniciales) {
             localStorage.setItem('productos', JSON.stringify(productos))
         } else {
             localStorage.setItem('productos', JSON.stringify([]));
         }
     }, [productos] );
 
     //agregar categoria
     const crearProducto = producto => {
        guardarProductos([ 
             ...productos,
             producto
         ]);
 
     }

    // Función que elimina una Producto por su id
    const eliminarProducto = id => {
    const nuevosProductos = productos.filter(producto => producto.id !== id );
    guardarProductos(nuevosProductos);
    }

  
     let listaCategorias = JSON.parse(localStorage.getItem('categorias'));

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
                if(sku.trim() ==='' ){
                    estadoMensaje('ingrese Codigo de barras SKU');
                    estadoClaseMensaje('error');
                    e.target[2].focus();
                    return;
                }else{
                    if(stock.trim() ==='' ){
                        estadoMensaje('ingrese Stok');
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
                                e.target[6].focus();
                                return;
                            }else{
                                Producto.id = uuid();
                                crearProducto(Producto);
                                Restablecer();


                                
                            }
                        }
                    }
                }
            }
        }


    }
    return(
 
        <Fragment>
            <Header>
            </Header>
            <Container fluid>
                <Row>
                    <Col sm={4}>
                        <FormProducto
                        listaCategorias={listaCategorias}
                        Producto={Producto}
                        actualizarState={actualizarState}
                        titulo='Agregar Producto'
                        Restablecer={Restablecer}
                        RegistroProducto={RegistroProducto}
                        claseError={claseError}
                        mensajeError={mensajeError}
                        
                        >

                        </FormProducto>
                    </Col>  
                    <Col sm={8}>
                        <TablaProducto
                         titulo='Lista De Productos'
                         productos={productos}
                         eliminarProducto={eliminarProducto}
                        >    
                        </TablaProducto>
                    </Col>
                </Row>
            </Container>
        </Fragment>           
    )

}

export default AgregarProducto;