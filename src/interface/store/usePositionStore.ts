import { create } from 'zustand';
import { Piece } from '../../domain/entities/piece/Piece';

type PositionState = {
  initialPosition: Array<Piece | null>;
  currentPosition: Array<Piece | null>;

  setInitialPosition: (position: Array<Piece | null>) => void;
  setPosition: (newPosition: Array<Piece | null>) => void;
  initPosition: (initialPosition: Array<Piece | null>) => void;
};

export const usePositionStore = create<PositionState>((set, get) => ({
  initialPosition: [],
  currentPosition: [],

  setInitialPosition: (position) => {
    set(() => ({
      initialPosition: position,
    }));
  },

  setPosition: (newPosition) => {
    set(() => ({
      currentPosition: newPosition,
    }));
  },

  initPosition: () => {
    const { initialPosition } = get();
    set(() => ({
      currentPosition: initialPosition,
    }));
  },
}));
