import { create } from 'zustand';

const useAuthenticationStore = create ((set) => ({
  isAuthenticated: false,
  login: () => set({ isAuthenticated: true}), 
  loginout: () => set({isAuthenticated:false}),
}));
export default useAuthenticationStore;
