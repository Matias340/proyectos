import React, { useEffect, useState } from 'react'

const Contador = () => {

const [contador, setContador] = useState(0)
   
useEffect(() => {
    console.log(`El contador se actualizó a: ${contador}`);
  }, [contador]);

  const incrementar = () => {
    setContador((parametroContador) => parametroContador + 1);
    //lo llamo parametro contador pero puede tener cualquier nombre
    //ya que lo importante es setContador que lo que esta pidiendo a su parametro en que actualice el estado +1
  };

  return (
    <div>
      <button onClick={incrementar}>Incrementar</button> : {contador}
    </div>
  )
}

export default Contador
