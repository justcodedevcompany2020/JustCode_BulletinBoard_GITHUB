import './style.css'

export const CreateTemplate = ({ setCurrentStep }) => {
    return (
        // <div className='createTemplate'>
        <button className='blueButton seeMyAnnouncement' onClick={() => setCurrentStep(2)}>Просмотр</button>
        // </div> 
    )
}