import { Color } from "../types/global_types";

const toggleColor = (color: Color): Color => {
  color === "black" ? (color = "white") : (color = "black");

  return color;
};

export { toggleColor };
