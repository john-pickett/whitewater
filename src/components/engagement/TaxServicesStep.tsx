import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { useServiceStore } from '../../stores/serviceStore';

interface TaxServicesStepProps {
  selectedServiceIds: number[];
  onToggleService: (id: number) => void;
}

export default function TaxServicesStep({
  selectedServiceIds,
  onToggleService,
}: TaxServicesStepProps) {
  const services = useServiceStore((state) =>
    state.services.filter((s) => s.category === 'tax')
  );

  return (
    <FormGroup>
      <Typography variant="h6" gutterBottom>
        Select tax services
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
