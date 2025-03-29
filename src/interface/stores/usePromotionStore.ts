import { create } from 'zustand';

type PromotionType = {
  isModalOpen: boolean;
  promotionChoice: string | null;
  setIsModalOpen: (arg: boolean) => void;
  setPromotionChoice: (arg: string | null) => void;
};

export const usePromotionStore = create<PromotionType>((set) => ({
  isModalOpen: false,
  promotionChoice: null,
  setIsModalOpen: (arg) => {
    set(() => ({
      isModalOpen: arg,
    }));
  },
  setPromotionChoice: (arg) => {
    set(() => ({
      promotionChoice: arg,
    }));
  },
}));
