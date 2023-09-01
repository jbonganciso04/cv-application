import { useState } from 'react'
import './App.css'
import SaveResume from './Components/SaveResume'
import GeneralInformation from './Components/GeneralInformation'
import PrintGeneralInfo from './Components/PrintGeneralInfo'
import CVPreviewAndPrint from './Components/CVPreviewAndPrint'
function App() {

  const [generalInfoData, setGeneralInfoData] = useState({})
  

  const handleHideAndShowOfForm = () => {
    const div = document.getElementsByClassName("hide").item(0);
    div.classList.toggle("show")

}

  return (
    <>
     <SaveResume />
     <GeneralInformation 
        setGeneralInfoData={setGeneralInfoData} 
        handleHideAndShowOfForm={handleHideAndShowOfForm}
        />
     <PrintGeneralInfo data={generalInfoData} />
     <CVPreviewAndPrint generalInfoData={generalInfoData}/>
    </>
  )
}

export default App
