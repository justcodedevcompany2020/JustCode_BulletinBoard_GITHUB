import * as React from 'react'
import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'

const steps = [
    'Раздел',
    'Объявление',
    'Просмотр',
    'Разместить',
]

export const Stepp = ({ currentStep }) => {
    return (
        <Box className='stepper'>
            <Stepper activeStep={currentStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}