import { ReactElement } from "react";
import { Color } from "../../shared/types/global_types";

const Case = ({ color }: { color: Color }): ReactElement => {
  return (
    <div
      className={`bg-${color === "black" ? "black" : "white"} w-10 h-10`}
    ></div>
  );
};

export default Case;
