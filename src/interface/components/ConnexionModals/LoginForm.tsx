import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Spinner from '../generics/Spinner';
import { AuthResponse } from '../../../shared/types/server_responses';
import useHeaderContext from '../../hooks/context/useHeaderContext';
import useAuthContext from '../../hooks/context/useAuthContext';
import { triggerToast } from '../../functions/triggerToast';

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
      triggerToast('login', { userName: data.userData.userName });
    } else if (status === 'error') {
      setError(serverError);
    }
  }, [status, data, serverError]);

  return loading ? (
    <Spinner />
  ) : (
    <form
      onSubmit={handleSubmit}
      className='bg-secondary-lighter rounded-2xl shadow-xl px-8 py-10 w-full max-w-md mx-auto flex flex-col gap-2'
    >
      <h2 className='text-2xl text-primary font-extrabold mb-4 text-center tracking-tight'>
        Connectez-vous
      </h2>

      {error && <p className='text-red-500 mb-4 text-center'>{error}</p>}

      <div className='mb-4'>
        <label
          htmlFor='userName'
          className='block font-semibold mb-2 text-primary'
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
          className='w-full p-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary bg-white transition-all duration-200 shadow-sm'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='password'
          className='block font-semibold mb-2 text-primary'
        >
          Mot de passe
        </label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          className='w-full p-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary bg-white transition-all duration-200 shadow-sm'
        />
      </div>
      <button
        type='submit'
        className='w-full bg-primary text-secondary-darker font-extrabold py-3 rounded-lg hover:bg-primary-darker transition-all duration-200 shadow-md mt-6 focus:outline-none focus:ring-2 focus:ring-primary-lighter focus:ring-offset-2'
      >
        Connexion
      </button>
    </form>
  );
};

export default LoginForm;
