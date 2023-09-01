import { useState } from 'react'
import './App.css'
import SaveResume from './Components/SaveResume'
import GeneralInformation from './Components/GeneralInformation'
import PrintGeneralInfo from './Components/PrintGeneralInfo'
function App() {

  const [generalInfoData, setGeneralInfoData] = useState({})
  

  return (
    <>
     <SaveResume />
     <GeneralInformation setGeneralInfoData={setGeneralInfoData} />
     <PrintGeneralInfo data={generalInfoData} />
    </>
  )
}

export default App
