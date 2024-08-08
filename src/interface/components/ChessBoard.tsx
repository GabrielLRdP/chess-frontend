import { ReactElement, useEffect, useState } from "react";
import { usePositionAdapter } from "../hooks/positionAdapter";
import generateCaseList from "../hooks/useCaseList";

const ChessBoard = (): ReactElement => {
  const [caseList, setCaseList] = useState<Array<ReactElement>>([]);
  const translatedPosition = usePositionAdapter();

  useEffect(() => {
    const caseList = generateCaseList(translatedPosition);
    setCaseList(caseList);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <section className="flex w-[324px] flex-wrap m-auto mt-[100px] border-solid border-2 border-sky-500">
        {caseList}
      </section>
      <button
        type="button"
        className="w-[200px] mt-11 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Initialiser l'échiquier
      </button>
    </div>
  );
};

export default ChessBoard;
