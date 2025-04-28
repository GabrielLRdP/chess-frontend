import { create } from 'zustand';
import { Game } from '../../domain/entities/game/Game';

type GameState = {
  game: Game | undefined;
  roomId: string | undefined;
  setGame: (game: Game) => void;
  setRoomId: (roomId: string) => void;
};

export const useGameStore = create<GameState>((set) => ({
  game: undefined,
  roomId: undefined,
  setGame: (newGame: Game) => {
    set(() => ({
      game: newGame,
    }));
  },
  setRoomId: (id: string) => {
    set(() => ({
      roomId: id,
    }));
  },
}));
