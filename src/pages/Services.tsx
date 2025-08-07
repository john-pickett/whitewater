import { useState } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from '@mui/material';
import { useServiceStore } from '../stores/serviceStore';

export default function Services() {
  const services = useServiceStore((state) => state.services);
  const addService = useServiceStore((state) => state.addService);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && cost) {
      addService(name.trim(), Number(cost));
      setName('');
      setCost('');
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Services
      </Typography>
      <List>
        {services.map((service) => (
          <ListItem key={service.id}>
            <ListItemText primary={`${service.name} - $${service.cost}`} />
          </ListItem>
        ))}
      </List>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Service Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="small"
        />
        <TextField
          label="Cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          type="number"
          size="small"
          sx={{ ml: 2 }}
        />
        <Button type="submit" variant="contained" sx={{ ml: 2 }}>
          Add Service
        </Button>
      </form>
    </div>
  );
}

