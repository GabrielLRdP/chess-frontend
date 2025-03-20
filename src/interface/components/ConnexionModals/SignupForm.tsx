import { useEffect, useState } from 'react';
import Spinner from '../generics/Spinner';
import useFetch from '../../hooks/useFetch';
import useHeaderContext from '../../hooks/useHeaderContext';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { setIsSignupModalOpen } = useHeaderContext();
  const { execute, loading, error, status } = useFetch();

  useEffect(() => {
    if (error) {
      setErrorMessage(
        typeof error === 'string' ? error : 'Une erreur est survenue.'
      );
    }
  }, [error]);

  useEffect(() => {
    if (status === 'success') {
      setIsSignupModalOpen(false);
    }
  }, [status, setIsSignupModalOpen]);

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
    await execute('http://localhost:3000/users/signup', 'post', request);
  };

  return loading ? (
    <Spinner />
  ) : (
    <form onSubmit={handleSubmit}>
      <h2 className='text-2xl text-primary font-bold mb-4 text-center'>
        Créer un compte
      </h2>

      {errorMessage && <p className='text-red-500 mb-4'>{errorMessage}</p>}

      <div className='mb-4'>
        <label
          htmlFor='username'
          className='block font-medium mb-2 text-primary'
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

      <div className='mb-4'>
        <label
          htmlFor='confirmPassword'
          className='block font-medium mb-2 text-primary'
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
          className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary text-primary bg-secondary-lighter'
        />
      </div>

      <button
        type='submit'
        className='w-full bg-primary text-secondary-darker font-extrabold py-2 rounded hover:bg-primary-darker mt-6'
      >
        Créer un compte
      </button>
    </form>
  );
};

export default SignUpForm;
