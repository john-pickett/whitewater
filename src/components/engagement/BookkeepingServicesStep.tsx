import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { useServiceStore } from '../../stores/serviceStore';

interface BookkeepingServicesStepProps {
  selectedServiceIds: number[];
  onToggleService: (id: number) => void;
}

export default function BookkeepingServicesStep({
  selectedServiceIds,
  onToggleService,
}: BookkeepingServicesStepProps) {
  const allServices = useServiceStore((state) => state.services);
  const services = allServices.filter((s) => s.category === 'bookkeeping');

  return (
    <FormGroup>
      <Typography variant="h6" gutterBottom>
        Select bookkeeping services
      </Typography>
      {services.map((service) => (
        <FormControlLabel
          key={service.id}
          control={
            <Checkbox
              checked={selectedServiceIds.includes(service.id)}
              onChange={() => onToggleService(service.id)}
            />
          }
          label={`${service.name} - $${service.cost}`}
        />
      ))}
    </FormGroup>
  );
}
