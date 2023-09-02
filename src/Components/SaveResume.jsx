import jsPDF from "jspdf";


function SaveResume() {

    const onSaveButtonClick = () => {
        const generateCv = new jsPDF('portrait', 'px', 'a4');
        generateCv.html(document.getElementById("preview__and__download")).then(() => {
            generateCv.save('generatedCV.pdf');
        })
    }
    return(
        <div className="save__resume__container">
            <p>Save your resume</p>
            <button
                onClick={onSaveButtonClick}
                >Download</button>
        </div>
    )
}

export default SaveResume;