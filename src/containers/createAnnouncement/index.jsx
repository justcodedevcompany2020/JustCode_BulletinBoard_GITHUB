import './style.css'
import { useState } from 'react'
import { Back } from '../../components/svg'
import { Stepp } from '../../components/stepper'
import { ToAdmin } from '../../components/toAdmin'
import { CreateTemplate } from '../../components/createTemplate'
import { CreateCategories } from '../../components/createCategories'
import { WatchBeforeSubmit } from '../../components/watchBeforeSubmit'

export const CreateAnnouncement = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [currentStep, setCurrentStep] = useState(0)

    return (
        <div className='createPage'>
            <div className='createAnnouncement'>
                <div className='topStepper'>
                    {currentStep === 0
                        ? <div className='topStepperName'>
                            <h1>Выберите категорию</h1>
                        </div>
                        : currentStep === 1
                            ? <div className='topStepperName'>
                                <div className='cursor' onClick={() => setCurrentStep(0)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Back />
                                </div>
                                <h1>{selectedCategory}</h1>
                            </div>
                            : currentStep === 2
                                ? <div className='topStepperName'>
                                    <h1>Так будет выглядеть ваше объявление</h1>
                                </div>
                                : <div className='topStepperName'>
                                    <h1>Объявление размещено</h1>
                                </div>
                    }
                    <Stepp currentStep={currentStep} />
                </div>
                {currentStep === 0
                    ? <CreateCategories setSelectedCategory={setSelectedCategory} setCurrentStep={setCurrentStep} />
                    : currentStep === 1
                        ? <CreateTemplate setCurrentStep={setCurrentStep} />
                        : currentStep === 2
                            ? <WatchBeforeSubmit setCurrentStep={setCurrentStep} />
                            : <ToAdmin />
                }
            </div>
        </div>
    )
}