import { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { username, password, confirmPassword } = formData;

    if (!username || !password || !confirmPassword) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    setError('');
    alert('Compte créé avec succès !');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-2xl text-primary font-bold mb-4 text-center'>
        Créer un compte
      </h2>

      {error && <p className='text-red-500 mb-4'>{error}</p>}

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
