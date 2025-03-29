import { create } from 'zustand';
import { Game } from '../../domain/entities/game/Game';

type GameState = {
  game: Game | undefined;
  setGame: (game: Game) => void;
};

export const useGameStore = create<GameState>((set) => ({
  game: undefined,
  setGame: (newGame: Game) => {
    set(() => ({
      game: newGame,
    }));
  },
}));
