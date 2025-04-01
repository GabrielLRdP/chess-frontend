import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Spinner from '../generics/Spinner';
import { AuthResponse } from '../../../shared/types/server_responses';
import useHeaderContext from '../../hooks/useHeaderContext';
import useAuthContext from '../../hooks/useAuthContext';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const [error, setError] = useState('');
  const { setIsLoginModalOpen } = useHeaderContext();
  const { login } = useAuthContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const {
    status,
    data,
    loading,
    error: serverError,
    execute: attemptLogin,
  } = useFetch<AuthResponse>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { userName, password } = formData;

    if (!userName || !password) {
      setError('Tous les champs sont obligatoires.');
      return;
    }
    await attemptLogin('post', formData, '/users/login');
    setError('');
  };

  useEffect(() => {
    if (data && status === 'success') {
      sessionStorage.setItem('accessToken', data.accessToken);
      login();
      setIsLoginModalOpen(false);
    } else if (status === 'error') {
      setError(serverError);
    }
  }, [status, data, serverError]);

  return loading ? (
    <Spinner />
  ) : (
    <form onSubmit={handleSubmit}>
      <h2 className='text-2xl text-primary font-bold mb-4 text-center'>
        Connectez-vous
      </h2>

      {error && <p className='text-red-500 mb-4'>{error}</p>}

      <div className='mb-4'>
        <label
          htmlFor='userName'
          className='block font-medium mb-2 text-primary'
        >
          Pseudo
        </label>
        <input
          type='text'
          id='userName'
          name='userName'
          autoComplete='username'
          value={formData.userName}
          onChange={handleChange}
          className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary text-primary bg-secondary-lighter'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='password'
          className='block font-medium mb-2 text-primary'
        >
          Mot de passe
        </label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary text-primary bg-secondary-lighter'
        />
      </div>
      <button
        type='submit'
        className='w-full bg-primary text-secondary-darker font-extrabold py-2 rounded hover:bg-primary-darker mt-6'
      >
        Connexion
      </button>
    </form>
  );
};

export default LoginForm;
