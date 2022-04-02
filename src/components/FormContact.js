import React, {useState}from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
function FormContact() {
   const [otherOption, setOtherOption]=useState(false)
   const [optionSelcted, setOptionSelcted]=useState(true)
   const [message, setMessage] = useState('');
   const { register, handleSubmit,reset, formState: { errors } } = useForm();
const onSubmit = (data) => {
  //console.log(data);
 
   reset();
   toast(`thank you ${data.firstName} ${data.lastName} for contacting us`);
   //setTimeout(() => setMessage(''), 10000);
}
const SelectOption=(e)=>{
 const value=e.target.value
 
 if(value==!""){
  setOptionSelcted(false)
  setOtherOption(false)
 }
 else if(value==='other'){
   setOtherOption(true)
 }
 else{
   setOtherOption(false)
 }
  console.log(value);
}
  return (
    <>
      <div className="container">
        <div className="row row-content">
          <div className="col-10 text-center">
            <h3>Contact Us Online</h3>
          </div>
              <div className="col-8 mx-auto text-center">
        
        <ToastContainer />
      </div>
          <div className="col-12 col-md-9">
           

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group row">
                <label htmlFor="firstName" className="col-md-3 col-form-label">
                  First Name
                </label>
                <div className="col-md-8 my-1">
                  <input
                    type="text"
                    className="form-control "
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    defaultValue=""
                    
                     {...register("firstName", { required: true, minLength:2,
                                maxLength:20 })}
                  />
                  {errors.firstName && <p className="errorsMsg">Please check the First Name</p>}
                </div>
              </div>
              <div className="form-group row my-1">
                <label htmlFor="lastName" className="col-md-3 col-form-label">
                  Last Name
                </label>
                <div className="col-md-8 my-1">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                     defaultValue=""
                     {...register("lastName",{ required: true, minLength:2,
                                maxLength:15})}
                    
                  />
                  {errors.lastName && <p className="errorsMsg">Please check the last Name</p>}
                </div>
                
              </div>
              <div className="form-group row my-1">
                <label
                  htmlFor="telnum"
                  className="col-12 col-md-3 col-form-label my-1"
                >
                  Contact Tel.
                </label>
                <div className="col-5 col-md-3 my-1">
                  <input
                    type="tel"
                    className="form-control"
                    id="areaCode"
                    name="areaCode"
                    placeholder="Area code"
                     defaultValue=""
                    {...register("areaCode",
                            {
                                
                                pattern: /^\d+$/
                            })}
                  />
                  {errors.areaCode && <p className="errorsMsg">Please check the Area code</p>}
                </div>
                <div className="col-6 col-md-5">
                  <input
                    type="tel"
                    className="form-control"
                    id="telNum"
                    name="telNum"
                    placeholder="Tel. number"
                     defaultValue=""
                   {...register("telNum",
                            {
                               
                                required: true,
                                minLength:7,
                                maxLength:15,
                                pattern: /^\d+$/
                            })}
                  />
                  {errors.telNum && <p className="errorsMsg">Please check the Telephone Number</p>}
                </div>
              </div>
              <div className="form-group row my-2">
                <label htmlFor="emailid" className="col-md-3 col-form-label">
                  Email
                </label>
                <div className="col-md-8">
                  <input
                    type="email"
                    className="form-control"
                    id="emailid"
                    name="emailid"
                    placeholder="Email"
                     defaultValue=""
                   {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                  />
                   {errors.email && <p className="errorsMsg">Please check the Email</p>}
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6 offset-md-2">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="approve"
                      id="approve"
                       defaultValue=""
                    />
                    <label className="form-check-label" htmlFor="approve">
                      <strong>May we contact you?</strong>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 offset-md-3 mt-1">
                  <select className="form-control">
                    <option>Tel.</option>
                    <option>Email</option>
                  </select>
                </div>
              </div>
              <div className="form-group row mt-5 ">
                <label
                  className=" col-md-3 col-form-label "
                  htmlFor="selectBox"
                >
                  How Did You Hear About Us?
                </label>

                <div className="col-md-8 ">
                 
                  <select
                    className=" form-control"
                    name="option"
                    id="option"
                    onChange={SelectOption}
                    

                  >
                    
                    <option value="" >Select...</option>
                    <option value="value1">Search engine</option>
                    <option value="volue2">Facebook</option>
                    <option value="volue3">Twitter</option>
                    <option value="volue4">Integram</option>
                    <option value="volue5">Refered by Soneone</option>
                    <option value="other">Other</option>
                  </select>

                {otherOption &&  <textarea
                    className="form-control my-2"
                    id="feedback"
                    name="feedback"
                    rows="3"
                  ></textarea>} 
                </div>
              </div>
              <div className="form-group row mt-4">
                <label htmlFor="feedback" className="col-md-3 col-form-label mt-2">
                  Message
                </label>
                <div className="col-md-8">
                  <textarea
                    className="form-control my-1"
                    id="feedback"
                    name="feedback"
                    rows="12"
                  ></textarea>
                </div>
              </div>
              <div className="form-group row">
                <div className="offset-md-3 col-md-9">
                  <button type="submit" className="btn btn-primary" >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormContact;
