import { ReactElement, useEffect, useState } from "react";
import Case from "./Case";
import { toggleColor } from "../../shared/types/utils/toggleColor";
import { Color } from "../../shared/types/global_types";

const ChessBoard = (): ReactElement => {
  const [caseList, setCaseList] = useState<Array<ReactElement>>([]);
  useEffect(() => {
    let color: Color = "white";
    let caseList = [];
    for (let i = 0; i < 64; i++) {
      caseList.push(<Case color={color} />);
      color = (i + 1) % 8 === 0 ? color : toggleColor(color);
    }
    setCaseList(caseList);
  }, []);
  console.log(caseList.length);

  return (
    <section className="flex w-[324px] flex-wrap m-auto mt-[100px] border-solid border-2 border-sky-500">
      {caseList}
    </section>
  );
};

export default ChessBoard;
