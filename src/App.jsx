import { useState } from 'react'
import './App.css'
import SaveResume from './Components/SaveResume'
import GeneralInformation from './Components/GeneralInformation'
import PrintGeneralInfo from './Components/PrintGeneralInfo'
import CVPreviewAndPrint from './Components/CVPreviewAndPrint'
function App() {

  const [generalInfoData, setGeneralInfoData] = useState({})
  

  return (
    <>
     <SaveResume />
     <GeneralInformation setGeneralInfoData={setGeneralInfoData} />
     <PrintGeneralInfo data={generalInfoData} />
     <CVPreviewAndPrint generalInfoData={generalInfoData}/>
    </>
  )
}

export default App
