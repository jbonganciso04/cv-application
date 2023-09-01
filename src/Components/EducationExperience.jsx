import { useForm } from "react-hook-form";

function EducationExperience({ setEducationExperienceData }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    
  const handleHideAndShowOfForm = () => {
    const div = document.getElementsByClassName("hide").item(1);
    div.classList.toggle("show")
}

    const onSubmit = (data) => {
        console.log(data);
        setEducationExperienceData(data)
        reset();
    }
            return (
        <div className="general__information__container" id="general__information__container">
            <h1>Education Information</h1>
            <button onClick={handleHideAndShowOfForm}>Show form</button>

            <form onSubmit={handleSubmit(onSubmit)} id="education__information__section hide" className="hide">
                <div className="form-control">
                    <label>Degree</label>
                    <input 
                        type="text"
                        name="degree"
                        {...register("degree")} />
                </div>

                <div className="form-control">
                    <label>School</label>
                    <input 
                        type="text"
                        name="school"
                        {...register("school")} />
                </div>


                <div className="form-control">
                    <label>City</label>
                    <input 
                        type="text"
                        name="city"
                        {...register("city")} />
                </div>

                
                <div className="form-control">
                    <label>Country</label>
                    <input 
                        type="text"
                        name="country"
                        {...register("country")} />
                </div>

                <div className="form-control">
                    <label>Country</label>
                    <input 
                        type="date"
                        name="startDate"
                        {...register("startDate")} />
                </div>

                <div className="form-control">
                    <label>Country</label>
                    <input 
                        type="date"
                        name="endDate"
                        {...register("endDate")} />
                </div>


                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default EducationExperience;