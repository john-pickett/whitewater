import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { useClientStore } from '../../stores/clientStore';

interface SelectClientStepProps {
  selectedClientId: number | null;
  onSelectClient: (id: number) => void;
}

export default function SelectClientStep({
  selectedClientId,
  onSelectClient,
}: SelectClientStepProps) {
  const clients = useClientStore((state) => state.clients);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectClient(Number(event.target.value));
  };

  return (
    <FormControl component="fieldset">
      <Typography variant="h6" gutterBottom>
        Choose a client
      </Typography>
      <RadioGroup value={selectedClientId ?? ''} onChange={handleChange}>
        {clients.map((client) => (
          <FormControlLabel
            key={client.id}
            value={client.id}
            control={<Radio />}
            label={client.name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
