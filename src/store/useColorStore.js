import { create } from 'zustand'

const useColorStore = create((set) => ({
  primaryColor: '#F3FFCA',
  secondaryColor: '#ffffff',
  ropeColor: '#ffffff',

  setPrimaryColor: (color) => set({ primaryColor: color }),
  setSecondaryColor: (color) => set({ secondaryColor: color }),
  setRopeColor: (color) => set({ ropeColor: color }),
}))

export default useColorStore