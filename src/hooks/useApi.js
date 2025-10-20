import { useState, useEffect } from 'react';

export const useApi = (apiCall) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

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
      
  }, [apiCall]); 

  return { data, loading, error };
};