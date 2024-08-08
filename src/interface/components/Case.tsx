import { ReactElement } from "react";
import { Color, Position } from "../../shared/types/global_types";
import { useSelectedCaseStore } from "../../store/useSelectedCaseStore";

const Case = ({
  color,
  piece,
  position,
}: {
  color: Color;
  piece: ReactElement | null;
  position: Position;
}): ReactElement => {
  const { selectedCase, setSelectedCase } = useSelectedCaseStore();
  const handleCaseClick = (position: Position | null) => {
    selectedCase ? setSelectedCase(null) : setSelectedCase(position);
  };

  return (
    <div
      className={`${
        color === "black" ? "bg-gray-800" : "bg-red-500"
      } w-10 h-10 ${
        position === selectedCase ? "text-white" : "text-red-700"
      }  flex items-center justify-center border border-transparent hover:border-amber-400`}
      onClick={() => handleCaseClick(position)}
    >
      {piece}
      {position[0]}
      {position[1]}
    </div>
  );
};

export default Case;
