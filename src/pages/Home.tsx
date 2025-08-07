import { useState } from 'react';
import { Button, Dialog, Typography } from '@mui/material';
import EngagementLetterStepper from '../components/engagement/EngagementLetterStepper';

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mt: 2 }}>
        Engagement Letter
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <EngagementLetterStepper onClose={handleClose} />
      </Dialog>
    </div>
  );
}

