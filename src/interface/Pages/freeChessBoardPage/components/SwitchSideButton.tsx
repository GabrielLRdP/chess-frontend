import { ReactElement } from 'react';
import PrimaryButton from '../../../components/generics/PrimaryButton';
import useChessBoardContext from '../../../hooks/useChessBoardContext';
import { toggleColor } from '../../../../shared/utils/toggleColor';

const SwitchSideButton = (): ReactElement => {
  const { side, setSide } = useChessBoardContext();

  const handleSwitchSide = () => {
    setSide(toggleColor(side));
  };
  return (
    <PrimaryButton
      type='button'
      onClick={handleSwitchSide}
      label={`Tourner l'échiquier`}
    />
  );
};

export default SwitchSideButton;
