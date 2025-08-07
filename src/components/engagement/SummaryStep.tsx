import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useClientStore } from '../../stores/clientStore';
import { useServiceStore } from '../../stores/serviceStore';

interface SummaryStepProps {
  selectedClientId: number | null;
  selectedServiceIds: number[];
}

export default function SummaryStep({
  selectedClientId,
  selectedServiceIds,
}: SummaryStepProps) {
  const clients = useClientStore((state) => state.clients);
  const services = useServiceStore((state) => state.services);

  const client = clients.find((c) => c.id === selectedClientId);
  const selectedServices = services.filter((s) =>
    selectedServiceIds.includes(s.id)
  );
  const total = selectedServices.reduce((sum, service) => sum + service.cost, 0);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <Typography variant="subtitle1">Client:</Typography>
      <Typography gutterBottom>{client ? client.name : 'None selected'}</Typography>
      <Typography variant="subtitle1">Services:</Typography>
      <List>
        {selectedServices.map((service) => (
          <ListItem key={service.id}>
            <ListItemText primary={`${service.name} - $${service.cost}`} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Total: ${total}</Typography>
    </Box>
  );
}
