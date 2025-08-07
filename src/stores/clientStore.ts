import { create } from 'zustand';
import clientsData from '../data/clients.json';

export interface Client {
  id: number;
  name: string;
}

interface ClientStore {
  clients: Client[];
  addClient: (name: string) => void;
}

export const useClientStore = create<ClientStore>((set) => ({
  clients: clientsData as Client[],
  addClient: (name: string) =>
    set((state) => ({
      clients: [...state.clients, { id: state.clients.length + 1, name }],
    })),
}));

