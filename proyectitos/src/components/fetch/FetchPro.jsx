import React, { Suspense } from "react";
import { fetchData } from './fetchData'

const apiData = fetchData("https://jsonplaceholder.typicode.com/users");

const FetchPro = () => {
  
  
  const data = apiData.read();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  )
}

export default FetchPro
