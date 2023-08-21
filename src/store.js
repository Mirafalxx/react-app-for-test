import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "Test Task", state: "DONE" }],
});

export const useStore = create(store);
