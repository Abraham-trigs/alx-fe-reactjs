import { create } from 'zustand';

const useAuthenticationStore = create ((set) => ({
  isAuthenticated: true,
  login: () => set({ isAuthenticated: true}), 
  logout: () => set({isAuthenticated:false}),
}));
export default useAuthenticationStore;
