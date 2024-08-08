import { create } from "zustand";
import { Position } from "../shared/types/global_types";

type selectedCaseType = {
  selectedCase: Position | null;
  setSelectedCase: (position: Position | null) => void;
};
export const useSelectedCaseStore = create<selectedCaseType>((set) => ({
  selectedCase: null,
  setSelectedCase: (position) => {
    set(() => ({
      selectedCase: position,
    }));
  },
}));
