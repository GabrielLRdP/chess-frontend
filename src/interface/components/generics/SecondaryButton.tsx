import { ReactElement, ReactNode } from 'react';

type PrimaryButtonProps = {
  tailwindOptions?: object;
  haveShadow?: boolean;
  isActive?: boolean;
  label?: string;
  children?: ReactNode;
  onClick?: () => void;
  onTouchEnd?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const SecondaryButton = ({
  haveShadow = true,
  isActive = true,
  label,
  children,
  onClick,
  onTouchEnd,
  tailwindOptions,
  type = 'button',
}: PrimaryButtonProps): ReactElement => {
  const defaultOptions = {
    default:
      'font-sans rounded-lg px-6 py-2 whitespace-nowrap transition-all duration-200',
    textSize: 'text-base md:text-lg',
    height: 'h-[44px]',
    fontWeight: 'font-semibold',
    width: 'w-full',
    additional: '',
  };

  const classes = Object.values({ ...defaultOptions, ...tailwindOptions }).join(
    ' '
  );

  const content = children || label;

  return isActive ? (
    <button
      type={type}
      onClick={onClick}
      onTouchEnd={onTouchEnd}
      className={`${classes} ${
        haveShadow ? 'shadow-md hover:shadow-lg' : ''
      } border-2 border-primary text-primary hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary-lighter focus:ring-offset-2`}
    >
      {content}
    </button>
  ) : (
    <button
      type={type}
      disabled
      className={`${classes} cursor-not-allowed bg-gray-200 text-gray-400 focus:outline-none`}
    >
      {content}
    </button>
  );
};

export default SecondaryButton;
