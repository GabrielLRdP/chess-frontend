import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { httpMethod } from '../../shared/types/global_types';

const useFetch = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const execute = async (
    method: httpMethod,
    body: Record<string, string>,
    route: string,
    baseUrl: string = import.meta.env.VITE_BASE_URL as string
  ) => {
    setLoading(true);
    setStatus('pending');
    try {
      const res = await axios[method](baseUrl + route, body);

      setData(res.data);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        const errorData = axiosError.response.data as { message?: string };
        setError(errorData.message || `Error ${axiosError.response.status}`);
      } else if (axiosError.request) {
        setError('No response from server.');
      } else {
        setError(axiosError.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return { status, data, loading, error, execute };
};

export default useFetch;
