import React, { useEffect, useState } from 'react'

const index = () => {
  const [ingreso, setIngreso] = useState(0);
  const [gasto, setGasto] = useState(0);
  const [nuevoIngreso, setNuevoIngreso] = useState(''); 
  const [nuevoGasto, setNuevoGasto] = useState('');
  const [tituloIngreso, setTituloIngreso] = useState('');
  const [tituloNuevoIngreso, setTituloNuevoIngreso] = useState('');
  const [tituloGasto, setTituloGasto] = useState('');
  const [tituloNuevoGasto, setTituloNuevoGasto] = useState('');
  const [historialIngresos, setHistorialIngresos] = useState([]);
  const [historialGastos, setHistorialGastos] = useState([]);
  

/*--------texto----------*/
const textoIngreso = (event) => {
  console.log(event.target.value);
  setTituloNuevoIngreso(event.target.value);
}

const textoGasto = (event) => {
  console.log(event.target.value);
  setTituloNuevoGasto(event.target.value);
}

/*--------valores---------*/  

  const valorIngreso = (event) => {
    console.log(event.target.value);//captura lo que tengo dentro de los input
    setNuevoIngreso(Number(event.target.value));
   
  };

  const valorGasto = (event) => {
    console.log(event.target.value);
    setNuevoGasto(Number(event.target.value));
  };

  const agregarIngreso = () => {
    setIngreso((prevIngreso) => prevIngreso + nuevoIngreso); //esto muestra lo que escribo en el input ingrese ingreso
    //prevIngreso representa el valor anterior mas reciente del estado
    setNuevoIngreso('')
    
    setTituloIngreso((prevTextoIngreso) => prevTextoIngreso + tituloNuevoIngreso); 
    setTituloNuevoIngreso('')

    setHistorialIngresos((prevHistorialIngresos) => [...prevHistorialIngresos, { titulo: tituloNuevoIngreso, monto: nuevoIngreso }]);
   
  };

  const agregarGasto = () => {
     setGasto((prevGasto)=> prevGasto + nuevoGasto);
     setNuevoGasto('')

     setTituloGasto((prevTextoGasto) => prevTextoGasto + tituloNuevoGasto); 
     setTituloNuevoGasto('')

     setHistorialGastos((prevHistorialGastos) => [...prevHistorialGastos, { titulo: tituloNuevoGasto, monto: nuevoGasto }]);
  
  }

  const limpiar = () => {
    setIngreso(0);
    setGasto(0);
    setNuevoIngreso('');
    setNuevoGasto('');
    setTituloIngreso('');
    setTituloNuevoIngreso('');
    setTituloGasto('');
    setTituloNuevoGasto('');
    setHistorialIngresos([]);
    setHistorialGastos([]);
  }

  const borrarHistorialIngreso = (index) => {
    setHistorialIngresos((prevHistorialIngresos) => {
      const nuevoHistorial = [...prevHistorialIngresos];
      nuevoHistorial.splice(index, 1);
      return nuevoHistorial;
    });
  };

  const borrarHistorialGasto = (index) => {
    setHistorialGastos((prevHistorialGastos) => {
      const nuevoHistorial = [...prevHistorialGastos];
      nuevoHistorial.splice(index, 1);
      return nuevoHistorial;
    });
  };

  const total = ingreso - gasto;

  return (
    <div>
       <div className="container">
         <div>
            <label>Ingresos: {ingreso}</label>
         </div>
         <div>
            <label>gastos: {gasto}</label>
         </div>
         <div>
            <label>Total: {total}</label>
         </div>
       </div>
       <div className='container2'>
         <div>
            <label>Ingrese Ingreso: </label>
            <input type='text' placeholder='Escribe tipo de ingreso' value={tituloNuevoIngreso} onChange={textoIngreso}></input>
            <input type='number' placeholder='Tu ingreso' value={nuevoIngreso} onChange={valorIngreso}></input>
            <button onClick={agregarIngreso}>Aceptar</button>
         </div>
         <div>
            <label>Ingrese Gasto: </label>
            <input type='text' placeholder='Escribe tipo de gasto' value={tituloNuevoGasto} onChange={textoGasto}></input>
            <input type='number' placeholder='Tu gasto' value={nuevoGasto} onChange={valorGasto}></input>
            <button onClick={agregarGasto}>Aceptar</button>
         </div>
         <div>
            <button onClick={limpiar}>Limpiar</button>
         </div>
         <div>
            <h3>Historial</h3>
             <li className='lista'>
              <p>Ingresos:</p>
              
              {historialIngresos.map((ingreso, index) => (
                <ul key={index}>
                <p>{`${ingreso.titulo} : ${ingreso.monto}`}</p>
                <button onClick={()=> borrarHistorialIngreso(index)}>borrar</button>
                </ul>
              ))}
              
              
             </li>  
             <li className='lista'>
              <p>Gastos:</p>
              
              {historialGastos.map((gasto, index) => (
                <ul key={index}>
                <p>{`${gasto.titulo} : ${gasto.monto}`}</p>
                <button onClick={()=> borrarHistorialGasto(index)}>Borrar</button>
              </ul>
                
              ))}
             
              
             </li>
         </div>
       </div>
    </div>
  )
}

export default index
