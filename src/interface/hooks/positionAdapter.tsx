import { fenExpander } from "../../shared/types/utils/fenExpander";
import { usePositionStore } from "../../store/usePositionStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessPawn,
  faChessKing,
  faChessQueen,
  faChessBishop,
  faChessKnight,
  faChessRook,
} from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";

const blackPawn = <FontAwesomeIcon icon={faChessPawn} className="text-black" />;
const whitePawn = <FontAwesomeIcon icon={faChessPawn} className="text-white" />;
const whiteKing = <FontAwesomeIcon icon={faChessKing} className="text-white" />;
const blackKing = <FontAwesomeIcon icon={faChessKing} className="text-black" />;
const whiteQueen = (
  <FontAwesomeIcon icon={faChessQueen} className="text-white" />
);
const blackQueen = (
  <FontAwesomeIcon icon={faChessQueen} className="text-black" />
);
const whiteBishop = (
  <FontAwesomeIcon icon={faChessBishop} className="text-white" />
);
const blackBishop = (
  <FontAwesomeIcon icon={faChessBishop} className="text-black" />
);
const whiteKnight = (
  <FontAwesomeIcon icon={faChessKnight} className="text-white" />
);
const blackKnight = (
  <FontAwesomeIcon icon={faChessKnight} className="text-black" />
);
const whiteRook = <FontAwesomeIcon icon={faChessRook} className="text-white" />;
const blackRook = <FontAwesomeIcon icon={faChessRook} className="text-black" />;

const trad: tradType = {
  r: blackRook,
  n: blackKnight,
  b: blackBishop,
  q: blackQueen,
  k: blackKing,
  p: blackPawn,
  R: whiteRook,
  N: whiteKnight,
  B: whiteBishop,
  Q: whiteQueen,
  K: whiteKing,
  P: whitePawn,
  0: null,
};

export const usePositionAdapter = (): Array<ReactElement | null> => {
  const { initialPosition } = usePositionStore();
  const expandedCurrentPosition = fenExpander(initialPosition);
  const translatedPosition: Array<ReactElement | null> = [];

  expandedCurrentPosition.split("").forEach((element) => {
    if (element !== "/") {
      translatedPosition.push(trad[element as keyof tradType]);
    }
  });
  return translatedPosition;
};

type tradType = {
  r: ReactElement;
  n: ReactElement;
  b: ReactElement;
  q: ReactElement;
  k: ReactElement;
  p: ReactElement;
  R: ReactElement;
  N: ReactElement;
  B: ReactElement;
  Q: ReactElement;
  K: ReactElement;
  P: ReactElement;
  0: null;
};
