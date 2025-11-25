import { useEffect, useState } from "react";
export function useFetch<T>(URL: string) {
  const [datos, setDatos] = useState<T[]>([]); 
  const [loading, setLoading] = useState(true);
  const [errores, setErrores] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    setErrores(null);
    setDatos([]);

    fetch(URL)
      .then((response) => {
        if (!response.ok) {

          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: T[]) => {

        setDatos(data);
      })
      .catch((error) => {
  
        setErrores(error);
      })
      .finally(() => {

        setLoading(false);
      });
  }, [URL]);

  return { datos, loading, errores };
}



