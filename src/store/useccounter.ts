import { create } from "zustand";
import { devtools} from "zustand/middleware";

interface Counter {
  count: number;
  increCount: (by: number) => void;
}
export const useCounter = create<Counter>()(
  devtools(
    // persist(
      (set) => ({
        count: 0,
        increCount: (by) =>
          set((state) => ({
            count: state.count + by,
          })),
      }),
      {
        name: "Counter",
      }
    )
  // )
);
