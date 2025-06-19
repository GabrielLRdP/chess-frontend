import { ReactElement } from 'react';
import HomeButton from './components/HomeButton';
import { useNavigate } from 'react-router-dom';

const ChessboardPattern = () => (
  <svg
    className='absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none'
    viewBox='0 0 200 200'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{ zIndex: 0 }}
  >
    {[...Array(10)].map((_, row) =>
      [...Array(10)].map((_, col) =>
        (row + col) % 2 === 0 ? (
          <rect
            key={`${row}-${col}`}
            x={col * 20}
            y={row * 20}
            width='20'
            height='20'
            fill='#22334a'
            fillOpacity='0.18'
          />
        ) : null
      )
    )}
  </svg>
);

const ChessHeroSVG = () => (
  <svg
    width='220'
    height='100'
    viewBox='0 0 220 100'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='mx-auto mb-6 drop-shadow-xl relative z-10'
  >
    {/* King */}
    <rect x='20' y='40' width='20' height='40' rx='6' fill='#3A506B' />
    <rect x='25' y='25' width='10' height='20' rx='4' fill='#3AAFA9' />
    <circle cx='30' cy='20' r='5' fill='#5BC0BE' />
    {/* Queen */}
    <rect x='60' y='45' width='20' height='35' rx='6' fill='#1C2541' />
    <rect x='65' y='30' width='10' height='18' rx='4' fill='#3AAFA9' />
    <circle cx='70' cy='26' r='4' fill='#5BC0BE' />
    {/* Pawn */}
    <rect x='110' y='60' width='12' height='20' rx='4' fill='#3A506B' />
    <circle cx='116' cy='56' r='6' fill='#3AAFA9' />
    {/* Rook */}
    <rect x='150' y='55' width='16' height='25' rx='3' fill='#1C2541' />
    <rect x='153' y='50' width='10' height='8' rx='2' fill='#3AAFA9' />
    {/* Knight */}
    <rect x='185' y='60' width='14' height='20' rx='4' fill='#3A506B' />
    <path
      d='M192 60 Q200 70 192 80'
      stroke='#3AAFA9'
      strokeWidth='3'
      fill='none'
    />
    <circle cx='192' cy='65' r='2' fill='#5BC0BE' />
  </svg>
);

const features = [
  {
    icon: (
      <svg width='36' height='36' fill='none' viewBox='0 0 36 36'>
        <circle cx='18' cy='18' r='18' fill='#22334a' />
        <path
          d='M18 8v20M8 18h20'
          stroke='#4FC3F7'
          strokeWidth='2.5'
          strokeLinecap='round'
        />
      </svg>
    ),
    title: 'Accessible à tous',
    desc: 'Débutez ou perfectionnez-vous. Aucune info personnelle nécessaire pour jouer.',
  },
  {
    icon: (
      <svg width='36' height='36' fill='none' viewBox='0 0 36 36'>
        <rect x='6' y='6' width='24' height='24' rx='8' fill='#0D3B66' />
        <path
          d='M12 18h12M18 12v12'
          stroke='#4FC3F7'
          strokeWidth='2.5'
          strokeLinecap='round'
        />
      </svg>
    ),
    title: 'Jouez à votre rythme',
    desc: 'En ligne avec un ami, ou seul contre vous-même, sans pression.',
  },
  {
    icon: (
      <svg width='36' height='36' fill='none' viewBox='0 0 36 36'>
        <rect x='6' y='6' width='24' height='24' rx='8' fill='#F95738' />
        <path
          d='M18 12v12M12 18h12'
          stroke='#4FC3F7'
          strokeWidth='2.5'
          strokeLinecap='round'
        />
      </svg>
    ),
    title: 'Simplicité moderne',
    desc: 'Une interface claire, rapide, pensée pour le plaisir du jeu.',
  },
];

const HomePage = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <>
      <section className='w-full min-h-[60vh] flex flex-col justify-center items-center bg-primary-darker px-4 py-20 text-center relative overflow-hidden'>
        <ChessboardPattern />
        <div className='relative z-10 w-full flex flex-col items-center'>
          <ChessHeroSVG />
          <h1 className='text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-sm'>
            ChessSquare
          </h1>
          <p className='text-lg md:text-2xl text-white mb-8 font-medium'>
            Jouez aux échecs, en toute simplicité
          </p>
          <div className='flex flex-col md:flex-row gap-4 w-full max-w-xs md:max-w-md mx-auto mb-6'>
            <HomeButton
              label='Jouer en ligne'
              onClick={() => navigate('/players')}
            />
            <HomeButton
              label='Echiquier libre'
              onClick={() => navigate('/freeChessBoard')}
            />
          </div>
        </div>
      </section>
      <section className='bg-primary text-white py-16 px-4'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-10 text-white'>
          Pourquoi ChessSquare ?
        </h2>
        <div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center'>
          {features.map((f, i) => (
            <div
              key={i}
              className='flex flex-col items-center bg-primary-darker border border-secondary-lighter rounded-xl shadow-2xl p-8 transition-transform hover:scale-105'
            >
              <div className='mb-3'>{f.icon}</div>
              <h3 className='text-lg font-semibold text-white mb-2'>
                {f.title}
              </h3>
              <p className='text-sm text-secondary-lighter'>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
