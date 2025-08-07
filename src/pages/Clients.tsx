import { useState } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from '@mui/material';
import { useClientStore } from '../stores/clientStore';

export default function Clients() {
  const clients = useClientStore((state) => state.clients);
  const addClient = useClientStore((state) => state.addClient);
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addClient(name.trim());
      setName('');
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Clients
      </Typography>
      <List>
        {clients.map((client) => (
          <ListItem key={client.id}>
            <ListItemText primary={client.name} />
          </ListItem>
        ))}
      </List>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Client Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="small"
        />
        <Button type="submit" variant="contained" sx={{ ml: 2 }}>
          Add Client
        </Button>
      </form>
    </div>
  );
}

