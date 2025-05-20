import { ReactElement } from 'react';
import HomeButton from './components/HomeButton';
import { useNavigate } from 'react-router-dom';
const HomePage = (): ReactElement => {
  const navigate = useNavigate();
  const onOnlineGameClick = () => {
    navigate('/players');
  };
  const onFreeChessBoardClick = () => {
    navigate('/freeChessBoard');
  };
  return (
    <>
      <section
        className={`bg-[url('/public/assets/img/home-image.jpg')] w-full bg-cover bg-bottom p-10 pt-72
         flex flex-col gap-5 relative`}
      >
        <HomeButton label='Jouer en ligne' onClick={onOnlineGameClick} />
        <HomeButton label='Echiquier libre' onClick={onFreeChessBoardClick} />
        <h2 className='text-5xl text-white font-bold mt-5'>
          Jouez aux échecs, en toute simplicité
        </h2>
      </section>
      <section className='bg-white bg-opacity-80 text-black py-20 px-10'>
        <div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center'>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Accessible à tous</h3>
            <p className='text-sm text-gray-600'>
              Débutez ou perfectionnez-vous. Aucune info personelle nécessaire
              pour jouer.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Jouez à votre rythme</h3>
            <p className='text-sm text-gray-600'>
              En ligne avec un ami, ou seul contre vous-même, sans pression.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2'>
              Respect de la simplicité
            </h3>
            <p className='text-sm text-gray-600'>
              Une interface claire, rapide, pensée pour le plaisir du jeu.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
