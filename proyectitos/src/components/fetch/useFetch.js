import { useState, useEffect } from "react";

export function useFetch(url) {

const[datos, setDatos] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [controller, setController] = useState(null);

  useEffect(() => {
     const abortController = new AbortController();
     setController(abortController);
     setLoading(true);
     fetch(url, { signal: abortController.signal })
        .then((response) => response.json())
        .then((data) => setDatos(data))  //si haces un console.log(data) podes ver la informacion de la api por consola
        .catch((error) => {
            if (error.name === "AbortError") {
              console.log("Cancelled request");
            } else {
              setError(error);
            }
          })
        .finally(() => setLoading(false));

        return () => abortController.abort();
  }, []);

  const handleCanelRequest = () => {
    if (controller) {
        controller.abort();
        setError("Cancelled Request");
      }
  }

  return { datos, loading, error, handleCanelRequest }
}

