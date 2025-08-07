import { useState } from 'react';
import { Box, Button, Step, StepLabel, Stepper } from '@mui/material';
import SelectClientStep from './SelectClientStep';
import TaxServicesStep from './TaxServicesStep';
import BookkeepingServicesStep from './BookkeepingServicesStep';
import SummaryStep from './SummaryStep';

interface EngagementLetterStepperProps {
  onClose?: () => void;
}

const steps = [
  { label: 'Select Client', component: <SelectClientStep /> },
  { label: 'Tax Services', component: <TaxServicesStep /> },
  { label: 'Bookkeeping Services', component: <BookkeepingServicesStep /> },
  { label: 'Summary', component: <SummaryStep /> },
];

export default function EngagementLetterStepper({ onClose }: EngagementLetterStepperProps) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      onClose?.();
      setActiveStep(0);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stepper activeStep={activeStep} sx={{ mb: 2 }}>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ minHeight: 200, mb: 2 }}>{steps[activeStep].component}</Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
      </Box>
    </Box>
  );
}

