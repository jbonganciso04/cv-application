function CVPreviewAndPrint({generalInfoData}) {

    const {fullName, email, phoneNumber, cityAndProvince} = generalInfoData;
    return (
        <div className="preview__and__download">
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{phoneNumber}</p>
            <p>{cityAndProvince}</p>
        </div>
    )
}

export default CVPreviewAndPrint;