import { create } from 'zustand';
import servicesData from '../data/services.json';

export interface Service {
  id: number;
  name: string;
  cost: number;
}

interface ServiceStore {
  services: Service[];
  addService: (name: string, cost: number) => void;
}

export const useServiceStore = create<ServiceStore>((set) => ({
  services: servicesData as Service[],
  addService: (name: string, cost: number) =>
    set((state) => ({
      services: [
        ...state.services,
        { id: state.services.length + 1, name, cost },
      ],
    })),
}));

