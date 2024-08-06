import { ReactElement } from "react";
import { Color } from "../../shared/types/global_types";

const Case = ({
  color,
  piece,
}: {
  color: Color;
  piece: ReactElement | null;
}): ReactElement => {
  return (
    <div
      className={`${
        color === "black" ? "bg-gray-800" : "bg-red-700"
      } w-10 h-10 text-white flex items-center justify-center border border-transparent hover:border-amber-400`}
    >
      {piece}
    </div>
  );
};

export default Case;
