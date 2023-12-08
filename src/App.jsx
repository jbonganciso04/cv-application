import { useState } from 'react'
import './App.css'
import SaveResume from './Components/SaveResume'
import GeneralInformation from './Components/GeneralInformation'
import CVPreviewAndPrint from './Components/CVPreviewAndPrint'
import EducationExperience from './Components/EducationExperience'

function App() {

  const [generalInfoData, setGeneralInfoData] = useState({
    fullName: "John Doe",
    email: "johndoe@doesCode.com",
    phoneNumber: +63991234567,
    cityAndProvince: "City and Province"
  })

  const [educationExperienceData, setEducationExperienceData] = useState({})


  return (
    <div className="main__container">
      <div className='main'>
        <SaveResume />
        <GeneralInformation 
            setGeneralInfoData={setGeneralInfoData} 
            />
          <EducationExperience 
            setEducationExperienceData={setEducationExperienceData}
            />
    </div>
    <div className='main cv__container'>
        <CVPreviewAndPrint generalInfoData={generalInfoData} educationExperienceData={educationExperienceData}/>
    </div>
    </div>
    
  )
}

export default App
