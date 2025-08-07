import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EngagementLetterStepper from './EngagementLetterStepper';

it('allows selecting a client without crashing', async () => {
  render(<EngagementLetterStepper />);
  const clientOption = screen.getByLabelText('Blue River Solutions');
  await act(async () => {
    await userEvent.click(clientOption);
  });
  expect(clientOption).toBeChecked();
});
