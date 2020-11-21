import React,{Fragment, useState, useEffect} from 'react';
import { Col, Row, Container} from 'react-bootstrap';
import FormCategoria from './FormCategoria';
import TablaCategoria from './TablaCategoria';
import uuid from 'react-uuid';
import '../../css/Global.css';
import Header from '../layout/Header'


const Categoria = () =>{


    //state componente 
    const[Categoria, setCategoria] = useState({
        nombre:'',
        descripcion:''
    })

    //Obtener Valor de Input's
    const actualizarState = (e) => {
        setCategoria({
            ...Categoria,
            [e.target.name]: e.target.value
        })
    }

    //Restablecer form
    const Restablecer = (e) =>{
        setCategoria({
            ...Categoria,
            nombre:'',
            descripcion:''
        })
        estadoMensaje('')
    }

    //estado para cambiar mensaje de error
    const [mensajeError, estadoMensaje] = useState('');

    //estado para cambiar color mensaje
    const [claseError, estadoClaseMensaje] = useState('');

    //distrotion para obtener datos state
    const{nombre,descripcion} = Categoria;


    //agregar datos a locarStorage
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

    // Función que elimina una categoria por su id
    const eliminarCategoria = id => {
        const nuevasCategorias = categorias.filter(categoria => categoria.id !== id );
        guardarCategoria(nuevasCategorias);
    }

    //Evento Submit
    const sutmitCategoria = (e) =>{

        e.preventDefault();

        if(nombre.trim() ==='' ){
            estadoMensaje('ingrese Nombre');
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
               
                Categoria.id = uuid();
                crearCategoria(Categoria);
                Restablecer();
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
                        <FormCategoria
                            titulo = 'Agregar Categoria'
                            actualizarState={actualizarState}
                            Categoria={Categoria}
                            sutmitCategoria={sutmitCategoria}
                            mensajeError={mensajeError}
                            claseError={claseError}
                            Restablecer={Restablecer}
                            className='Form'
                        >
                        </FormCategoria>
                    </Col>  
                    <Col sm={8}>
                        <TablaCategoria
                            titulo = 'Lista Categorias'
                            eliminarCategoria={eliminarCategoria}
                            categorias={categorias}

                        ></TablaCategoria>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )

}

export default Categoria;