

function SaveResume() {

    const onSaveButtonClick = () => {
        console.log("I am clicked!")
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