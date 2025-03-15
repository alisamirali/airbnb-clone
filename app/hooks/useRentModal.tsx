import { create } from "zustand";

type RantModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useRentModal = create<RantModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
