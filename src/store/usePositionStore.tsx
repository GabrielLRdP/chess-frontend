import { create } from "zustand";

type PositionState = {
  initialPosition: string;
  currentPosition: string;

  setInitialPosition: (position: string) => void;
  setPosition: (newPosition: string) => void;
  initPosition: (initialPosition: string) => void;
};

export const usePositionStore = create<PositionState>((set, get) => ({
  initialPosition: "8/8/8/8/8/8/8/8",
  currentPosition: "",

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
