import { create } from 'zustand';
import servicesData from '../data/services.json';

export interface Service {
  id: number;
  name: string;
  cost: number;
  category: string;
}

interface ServiceStore {
  services: Service[];
  addService: (name: string, cost: number, category?: string) => void;
}

export const useServiceStore = create<ServiceStore>((set) => ({
  services: servicesData as Service[],
  addService: (name: string, cost: number, category = 'other') =>
    set((state) => ({
      services: [
        ...state.services,
        { id: state.services.length + 1, name, cost, category },
      ],
    })),
}));

