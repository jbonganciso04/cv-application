import { useState } from "react";
import { useForm } from "react-hook-form";

function GeneralInformation({ setGeneralInfoData}) {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const handleHideAndShowOfForm = () => {
        const div = document.getElementsByClassName("hide").item(0);
        div.classList.toggle("show")
    }

    const onSubmit = (data) => {
        console.log(data);
        setGeneralInfoData(data)
        reset();
    }

    return (
        <div className="general__information__container" id="general__information__container">
            <div className="general__information__header__and__toggle__container">
                <h2>Personal Details</h2>
                <button onClick={handleHideAndShowOfForm}>Show form</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} id="general__information__section hide" className="hide">
                <div className="form-control">
                    <label>Full name</label>
                    <input 
                        type="text"
                        name="fullName"
                        {...register("fullName")} />
                </div>

                <div className="form-control">
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        {...register("email")} />
                </div>


                <div className="form-control">
                    <label>Phone Number</label>
                    <input 
                        type="number"
                        name="phoneNumber"
                        {...register("phoneNumber")} />
                </div>

                
                <div className="form-control">
                    <label>City and Province</label>
                    <input 
                        type="text"
                        name="cityAndProvince"
                        {...register("cityAndProvince")} />
                </div>


                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default GeneralInformation;