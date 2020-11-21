import React,{Fragment} from 'react';
import { Table, Button} from 'react-bootstrap';

const TablaCategoria = ({titulo, eliminarCategoria, categorias}) =>{

    return(
 
        <Fragment>
            <div  style={{padding:'1rem', margin:'1rem', border: '1px solid black' }}>
                <h4>{titulo}</h4>
                <Table striped bordered hover variant="">
                    <thead>
                        <tr>
                            <th>Nombre Categoria</th>
                            <th>Descripcion</th>
                            <th>Eliminar</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    {categorias.map(categoria => (
                    <tbody>
                        <tr>
                            <td>{categoria.nombre}</td>
                            <td>{categoria.descripcion}</td>
                            <td>
                                <Button
                                    className="btn btn-block bg-danger"
                                    onClick={ () => eliminarCategoria(categoria.id)}
                                >
                                    Eliminar
                                </Button>
                            </td>
                            <td>
                                <Button
                                    className="btn btn-block bg-success"
                                >
                                    Actializar
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                    ))}
                </Table>
            </div>
        </Fragment>

    )

}

export default TablaCategoria;