import { useEffect, useState } from 'react';
import Spinner from '../generics/Spinner';
import useFetch from '../../hooks/useFetch';
import useHeaderContext from '../../hooks/context/useHeaderContext';
import useAuthContext from '../../hooks/context/useAuthContext';
import { AuthResponse } from '../../../shared/types/server_responses';
import { triggerToast } from '../../functions/triggerToast';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { setIsSignupModalOpen } = useHeaderContext();
  const { login } = useAuthContext();

  const {
    execute: attemptSignup,
    loading,
    error,
    status,
    data,
  } = useFetch<AuthResponse>();

  useEffect(() => {
    if (error) {
      setErrorMessage(
        typeof error === 'string' ? error : 'Une erreur est survenue.'
      );
    }
  }, [error]);

  useEffect(() => {
    if (data && status === 'success') {
      sessionStorage.setItem('accessToken', data.accessToken);
      login();
      triggerToast('signup', { userName: data.userData.userName });
      setIsSignupModalOpen(false);
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { username, password, confirmPassword } = formData;
    const request = { userName: username, password };

    if (!username || !password || !confirmPassword) {
      setErrorMessage('Tous les champs sont obligatoires.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas.');
      return;
    }
    await attemptSignup('post', request, '/users/signup');
  };

  return loading ? (
    <Spinner />
  ) : (
    <form
      onSubmit={handleSubmit}
      className='bg-secondary-lighter rounded-2xl shadow-xl px-8 py-10 w-full max-w-md mx-auto flex flex-col gap-2'
    >
      <h2 className='text-2xl text-primary font-extrabold mb-4 text-center tracking-tight'>
        Créer un compte
      </h2>

      {errorMessage && (
        <p className='text-red-500 mb-4 text-center'>{errorMessage}</p>
      )}

      <div className='mb-4'>
        <label
          htmlFor='username'
          className='block font-semibold mb-2 text-primary'
        >
          Pseudo
        </label>
        <input
          type='text'
          id='username'
          name='username'
          autoComplete='username'
          value={formData.username}
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

      <div className='mb-4'>
        <label
          htmlFor='confirmPassword'
          className='block font-semibold mb-2 text-primary'
        >
          Confirmer le mot de passe
        </label>
        <input
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          autoComplete='new-password'
          value={formData.confirmPassword}
          onChange={handleChange}
          className='w-full p-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary bg-white transition-all duration-200 shadow-sm'
        />
      </div>

      <button
        type='submit'
        className='w-full bg-primary text-secondary-darker font-extrabold py-3 rounded-lg hover:bg-primary-darker transition-all duration-200 shadow-md mt-6 focus:outline-none focus:ring-2 focus:ring-primary-lighter focus:ring-offset-2'
      >
        Créer un compte
      </button>
    </form>
  );
};

export default SignUpForm;
