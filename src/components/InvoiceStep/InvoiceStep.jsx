import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from '@chakra-ui/react';
import React from 'react';

const InvoiceStep = () => {
  const steps = [
    { title: 'First', description: 'Login or SignUp' },
    { title: 'Second', description: 'Select Your Template' },
    { title: 'Third', description: 'Fill All Required Details' },
    { title: 'Fourth', description: 'Print or Download Your Invoice' },
  ];
  return (
    <>
    
      <Stepper size="lg" colorScheme="yellow" index={0}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus complete={`✅`} incomplete={`😅`} active={`📍`} />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default InvoiceStep;
