import { useState, useEffect } from 'react';

// Recibe como argumento la función que hará la llamada a la API (ej: getProducts)
export const useApi = (apiCall) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reseteamos los estados al iniciar la llamada
    setLoading(true);
    setError(null);

    // Ejecutamos la función que nos pasaron
    apiCall()
      .then((responseData) => {
        setData(responseData);
      })
      .catch((err) => {
        setError(err.message || 'Ocurrió un error');
      })
      .finally(() => {
        setLoading(false);
      });
      
  // El array de dependencias vacío asegura que se ejecute solo una vez.
  // Si la llamada dependiera de un ID, pasaríamos [id] aquí y apiCall en el scope.
  }, [apiCall]); // Se vuelve a ejecutar si la función de apiCall cambia.

  return { data, loading, error };
};