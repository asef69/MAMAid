import { create } from "zustand";
import { persist } from "zustand/middleware";

const userStore = create(
    persist(
        (set) => ({
            user: null,
            setUser: (userData) => set((state) => {
                return {
                    ...state,
                    user: userData
                }
            }),
            clearUser: () => set((state) => {
                return{
                    ...state,
                    user: null  
                }
            })
        }),
        {
            name: "user-storage",
            getStorage: () => localStorage
        }
    )
)

export default userStore;