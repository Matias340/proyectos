import React, { useState } from 'react'

const Carrito = () => {
  const[titulo, setTitulo] = useState('Zapatillas');
  const[precio, setPrecio] = useState('500');
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = () => {
      
    setCarrito((prevCarrito) => [...prevCarrito, { titulo: titulo, precio: precio }]);
  }

  const borrarItemCarrito = (index) => {
    setCarrito((prevCarrito) => {
      const carrito = [...prevCarrito];
      carrito.splice(index, 1);
      return carrito;
    });
  };

  return (
    <div>
      <div> 
       <h2>producto</h2>
       <p>{titulo}</p>
       <p>${precio}</p>
       <button onClick={agregarCarrito}>Comprar</button>
      </div>  

      <div>
       <h2>carrito</h2>
       {carrito?.map((producto, index) => (
          <div key={index}>
             <p>{producto.titulo}</p>
             <p>{producto.precio}</p>
             <button onClick={() => borrarItemCarrito(index)}>Borrar</button>
          </div>   
       ))}
      </div> 
    </div>
  )
}

export default Carrito
