import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioProductos from '../ui/FormularioProductos';

const Productos = () => {
    const [ productos, guardarProductos] = useState([]);

    fetch("http://144.22.228.79:8080/api/clothe/all")
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        guardarProductos(data);
    });
       return( 
        <>
         <h1 className="text-3xl font-light mb-4">Vestidos</h1>
            <Link to="/nuevo-producto" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar vestidos
            </Link>
            {productos.map( producto =>(
                <FormularioProductos 
                key={producto.reference}
                producto={producto}
                />
                

            ))}
            
        </>
     );
}
 
export default Productos;