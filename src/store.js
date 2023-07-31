import { create } from 'zustand'
import data from "./data.js";

export const useItemsStore = create((set) => ({
  items: data(),
  selected_item: {},
  set_selected_item: (data) => set({selected_item: data}),
}))