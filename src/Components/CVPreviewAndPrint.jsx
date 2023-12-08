import PersonalInfoDisplay from "./PersonalInfoDisplay";


function CVPreviewAndPrint({generalInfoData, educationExperienceData}) {

    
    const {degree, school, city, country, startDate, endDate} = educationExperienceData;
    
    return (
        <div id="preview__and__download">
            <PersonalInfoDisplay generalInfoData={generalInfoData} />

        </div>
    )
}

export default CVPreviewAndPrint;