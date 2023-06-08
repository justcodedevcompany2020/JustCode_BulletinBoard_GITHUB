import './style.css'
import { useState } from 'react'
import { Back } from '../../components/svg'
import { Stepp } from '../../components/stepper'
import { CreateCategories } from '../../components/createCategories'
import { CreateTemplate } from '../../components/createTemplate'

export const CreateAnnouncement = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [currentStep, setCurrentStep] = useState(0)

    return (
        <div className='createAnnouncement'>
            <div className='topStepper'>
                {selectedCategory
                    ? <div className='topStepperName'>
                        <div className='cursor'>
                            <Back />
                        </div>
                        <h1>{selectedCategory}</h1>
                    </div>
                    : <div className='topStepperName'>
                        <h1>Выберите категорию</h1>
                    </div>
                }
                <Stepp currentStep={currentStep} />
            </div>
            {currentStep === 1
                ? <CreateTemplate />
                : <CreateCategories setSelectedCategory={setSelectedCategory} setCurrentStep={setCurrentStep} />
            }
        </div>
    )
}