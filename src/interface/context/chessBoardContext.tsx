import { createContext, ReactNode, useState } from 'react';
import { Color } from '../../shared/types/global_types';

export interface ChessBoardContextType {
  caseSize: number;
  setCaseSize: (size: number) => void;
  side: Color;
  setSide: (side: Color) => void;
}

const ChessBoardContext = createContext<ChessBoardContextType | undefined>(
  undefined
);

const ChessBoardProvider = ({ children }: { children: ReactNode }) => {
  const [caseSize, setCaseSize] = useState(10);
  const [side, setSide] = useState<Color>('white');

  return (
    <ChessBoardContext.Provider
      value={{ caseSize, setCaseSize, side, setSide }}
    >
      {children}
    </ChessBoardContext.Provider>
  );
};

export { ChessBoardContext, ChessBoardProvider };
