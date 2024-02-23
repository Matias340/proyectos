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

  const borrar = () => {
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

  const borrarHistorial = () => {
    setHistorialIngresos([]);
  }

  const borrarHistorial2 = () => {
    setHistorialGastos([]);
  }

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
            <button onClick={borrar}>Limpiar</button>
         </div>
         <div>
            <h3>Historial</h3>
             <li>
              <p>Ingresos:</p>
              <ul>
              {historialIngresos.map((ingreso, index) => (
                <p key={index}>{`${ingreso.titulo} : ${ingreso.monto}`}</p>
              ))}
              <button onClick={borrarHistorial}>borrar</button>
              </ul>
             </li>  
             <li>
              <p>Gastos:</p>
              <ul>
              {historialGastos.map((gasto, index) => (
                <p key={index}>{`${gasto.titulo} : ${gasto.monto}`}</p>
                
              ))}
              <button onClick={borrarHistorial2}>borrar</button>
              </ul>
             </li>
         </div>
       </div>
    </div>
  )
}

export default index
