import React,{Fragment} from 'react';
import { Table, Button} from 'react-bootstrap';


const TablaProducto = ({titulo, productos,eliminarProducto}) =>{

    return(
 
        <Fragment>
            <div  style={{padding:'1rem', margin:'1rem', border: '1px solid black' }}>
                <h4>{titulo}</h4>
                <Table striped bordered hover variant="">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>SKU</th>
                            <th>Categoria</th>
                            <th>Imagen</th>
                            <th>Eliminar</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    {productos.map(producto => (
                    <tbody>
                        <tr>
                            <td>{producto.nombreProducto}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.stock}</td>
                            <td>{producto.sku}</td>
                            <td>{producto.categoria}</td>
                            <td>{producto.img}</td>
                            <td>
                                <Button
                                    className="btn btn-block bg-danger"
                                    onClick={ () => eliminarProducto(producto.id)}
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

export default TablaProducto;