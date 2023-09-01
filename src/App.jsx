import { useState } from 'react'
import './App.css'
import SaveResume from './Components/SaveResume'
import GeneralInformation from './Components/GeneralInformation'
import CVPreviewAndPrint from './Components/CVPreviewAndPrint'
import EducationExperience from './Components/EducationExperience'
function App() {

  const [generalInfoData, setGeneralInfoData] = useState({})
  const [educationExperienceData, setEducationExperienceData] = useState({})


  return (
    <>
     <SaveResume />
     <GeneralInformation 
        setGeneralInfoData={setGeneralInfoData} 
        />
      <EducationExperience 
        setEducationExperienceData={setEducationExperienceData}
        />
     <CVPreviewAndPrint generalInfoData={generalInfoData}/>
    </>
  )
}

export default App
