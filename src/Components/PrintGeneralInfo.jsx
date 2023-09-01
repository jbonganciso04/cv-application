function PrintGeneralInfo({data}) {

    const handleButtonClick = () => {
        console.log(data);
    }

    return (
        <>
            <button onClick={handleButtonClick}>Test</button>
        </>
    )
}


export default PrintGeneralInfo