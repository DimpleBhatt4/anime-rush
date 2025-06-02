import { create } from "zustand";

const useWishlistStore = create((set) => ({
  wishlist: [],

  addItem: (anime) => {
    set((state) => ({
      wishlist: [...state.wishlist, anime],
    }));
  },
  removeItem: (id) => {
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.mal_id !== id),
    }));
  },
}));

export default useWishlistStore;
