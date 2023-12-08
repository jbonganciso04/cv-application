

function PersonalInfoDisplay({ generalInfoData}) {

    return (
       <div className="generalInfoDataDisplay__container">
            <div className="generalInfoDisplay__header__container">
                <h1>{generalInfoData.fullName}</h1>
            </div>

            <div className="generalInfosDisplay__container">
                <p>{generalInfoData.email}</p>
                <p>{generalInfoData.phoneNumber}</p>
                <p>{generalInfoData.cityAndProvince}</p>
            </div>

       </div>
    )

}


export default PersonalInfoDisplay;