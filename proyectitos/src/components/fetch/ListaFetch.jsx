import React, { useEffect, useState } from 'react'
import { useFetch } from './useFetch';

const listaFetch = () => {
  //primera forma de hacer un fetch
  /*const[datos, setDatos] = useState(null);

  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setDatos(data))  //si haces un console.log(data) podes ver la informacion de la api por consola
        
  }, [])*/
  //segunda forma de hacer fetch
  const { datos, loading, error, handleCanelRequest } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );


  return (
    <div>
      <button onClick={handleCanelRequest}>Cancel Request</button>
      <ul>
        {error && <li>Error: {error}</li>}
        {loading && <li>Loading...</li>}
        {datos?.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default listaFetch
