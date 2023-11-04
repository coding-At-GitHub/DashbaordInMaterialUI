import create from 'zustand';
import { persist } from 'zustand/middleware';

let appStore:any = (set:any) => ({
    dopen: true,
    updateOpen:(dopen:any) => set((set:any) => ({dopen:dopen}))
})

appStore = persist (appStore, {name: "my_app_store"});
export const useAppStore = create<any>(appStore);
