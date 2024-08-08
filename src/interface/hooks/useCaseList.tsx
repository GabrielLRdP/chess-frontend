import { ReactElement } from "react";
import Case from "../components/Case";
import { Color } from "../../shared/types/global_types";
import { toggleColor } from "../../shared/types/utils/toggleColor";

const useCaseList = (translatedPosition: Array<ReactElement | null>) => {
  const caseList = [];
  let color: Color = "white";
  const casePosition = [0, 7];
  for (let i = 0; i < 64; i++) {
    caseList.push(
      <Case
        color={color}
        piece={translatedPosition[i]}
        position={[...casePosition]}
      />
    );
    color = (i + 1) % 8 === 0 ? color : toggleColor(color);
    if ((i + 1) % 8 !== 0) {
      casePosition[0]++;
    } else {
      casePosition[0] = 0;
      casePosition[1]--;
    }
  }
  return [...caseList];
};

export default useCaseList;
