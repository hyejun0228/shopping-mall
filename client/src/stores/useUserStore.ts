import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  userId: number | null;
  setUserId: (id: number) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userId: null,
      setUserId: (id) => set({ userId: id }),
      logout: () => set({ userId: null }),
    }),
    {
      name: 'user-storage', // localStorage key
    }
  )
);
