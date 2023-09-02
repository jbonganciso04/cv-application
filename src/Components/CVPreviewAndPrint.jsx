function CVPreviewAndPrint({generalInfoData, educationExperienceData}) {

    const {fullName, email, phoneNumber, cityAndProvince} = generalInfoData;
    const {degree, school, city, country, startDate, endDate} = educationExperienceData;
    
    return (
        <div id="preview__and__download">
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{phoneNumber}</p>
            <p>{cityAndProvince}</p>
            <p>{degree}</p>
            <p>{school}</p>
            <p>{city}</p>
            <p>{country}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>

        </div>
    )
}

export default CVPreviewAndPrint;