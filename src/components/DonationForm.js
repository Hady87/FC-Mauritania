import React,{useState} from "react";
import { useForm } from "react-hook-form";
import CreditCardInput from 'react-credit-card-input';
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import PaymentCard from "./PaymentCard";
function DonationForm() {
   const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const [oneTime,setOneTime]=useState(true)
  const [recurring,setRecurring]=useState(false)
  const [amount,setAmount]=useState('')
  const [howOften,setHowOften]=useState('monthly')
   const [startPay,setStartPay]=useState(false)

  




  const onValueChange=(e)=>{
    const value=e.target.value
    if(value==='recurringValue'){
      setRecurring(true)
      setOneTime(false)
      
    }
    else if(value==='oneTimeValue'){
      setOneTime(true)
      setRecurring(false)
       
    }
  }
  const selectAmount=(e)=>{
    const option=e.target.value
    setAmount(option)
     //console.log('Hello')
  }
  const donationType=(e)=>{
    const recur=e.target.value
    setHowOften(recur)
    console.log('Hello my donation')
  }
  const payementInfo=()=>{
setStartPay(true)
  }
const onSubmitDonation = (data) => {
  console.log(data);
  //setMessage(`thank you ${data.firstName} ${data.lastName} for contacting us`);
   reset();
   toast(`Tank you ${data.lastNameDonor} ${data.firstNameDonor} for danating ${amount} to FcMauritania `);
   //setTimeout(() => setMessage(''), 10000);
}

  return (
    <>
      <div className="container w-100 ">
       
        <div className="row">
          <div className="col">
             <div className="my-4 text-center">
        
        <ToastContainer />
      </div>
            <h5 className="my-4 text-center">
              Donate to help promoting the values of Freedom and
              Citizenship
            </h5>
          </div>
          <form onSubmit={handleSubmit(onSubmitDonation)}>
            <div className="row my-4">
              <div className="form-check col-12 col-sm-4 mx-auto styleRadio my-2">
                <input
                  className="form-check-input "
                  type="radio"
                  name="flexRadioDefault"
                  id="oneTimeBtn"
                  checked={oneTime}
                  value='oneTimeValue'
                  onChange={onValueChange}
                />
                <label className="form-check-label" htmlFor="oneTimeBtn">
                  One Time
                </label>
              </div>
              <div className="form-check col-12 col-sm-4 my-2  mx-auto styleRadio">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="recurringBtn"
                  value='recurringValue'
                  checked={recurring}
                  onChange={onValueChange}
                />
                <label className="form-check-label" htmlFor="recurring">
                  Recurring
                </label>
              </div>
            </div>
            
            <div className="row form-group">
              { oneTime && 
              <div className="col-12 " id="oneTime">
                <label className="col-form-label">
                  Choose a<strong> one-time</strong> amount
                </label>
              </div>
               }
              { recurring &&
              <div className="row form-group">
              <div className="col-12 mt-2 mb-3" id="recurring">
                <label className="col-form-label">
                  How often would you like to donate?
                </label>

                <select
                  className="form-control col-sm-5"
                  name="selectBox"
                  id="selectBox"
                  onChange={donationType}
                  defaultValue='monthly'
                >
                  <option value="Monthly" >Monthly</option>
                  <option value="Quartarly" >
                    Quartarly (evry 3 months)
                  </option>
                  <option value="Semi Annualy" >
                    Semi-annualy(evry 6 months)
                  </option>
                  <option value="Yearly" >
                    Yearly (every 12 months)
                  </option>
                </select>
                </div>
              </div>
              }
              <div className="btn-group ">
                <input
                  type="button"
                  id="btn500"
                  value="500$"
                  onClick={selectAmount}
                  className=" p-1 col-xs-6  col-sm-2 btn btn-primary mx-1 "
                  
                />
                <input
                  type="button"
                  id="btn100"
                  value="100$"
                  onClick={selectAmount}
                  className="p-1 col-xs-6 col-sm-2  btn btn-primary mx-1 "
                  
                />
                <input
                  type="button"
                  id="btn50"
                  value="50$"
                  onClick={selectAmount}
                  className="p-1 col-xs-6 col-sm-2 btn btn-primary mx-1 "
                  
                />
                <input
                  type="button"
                  id="btn25"
                  value="25$"
                  onClick={selectAmount}
                  className=" p-1 col-xs-6 col-sm-2  btn btn-primary mx-1"
                 
                />
              </div>
              <div className='text-center'>
              <input
                type="number" min="0" step='5'
                
                className="col-6 col-sm-4 col-lg-2  mx-1 my-2  otherAmount"
                placeholder="Other Amount"
                defaultValue=''
                onChange={selectAmount}
              />
              <span>USD</span>
              </div>
            </div>

            <div className="row form-group">
              <div className="col-12 ">
                <label className="col-form-label">
                  <h2>Your Information</h2>
                </label>
              </div>
              
                <div className="form-group row my-2">
                  <label
                    htmlFor="firstname"
                    className="col-md-2 col-form-label"
                  >
                    First Name
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      id="firstnameDonor"
                      name="firstname"
                      placeholder="First Name"
                       {...register("firstNameDonor", { required: true, minLength:2,
                                maxLength:20 })}
                    />
                     {errors.firstNameDonor && <p className="errorsMsg">Please check the First Name</p>}
                  </div>
                </div>
                <div className="form-group row my-2">
                  <label htmlFor="lastname" className="col-md-2 col-form-label">
                    Last Name
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      id="lastNameDonor"
                      name="lastname"
                      placeholder="Last Name"
                   {...register("lastNameDonor",{ required: true, minLength:2,
                                maxLength:15})}
                    
                  />
                  {errors.lastNameDonor && <p className="errorsMsg">Please check the last Name</p>}
                  </div>
                </div>
                <div className="form-group row my-2">
                  <label
                    htmlFor="telnum"
                    className="col-12 col-md-2 col-form-label"
                  >
                    Contact Tel.
                  </label>
                  <div className="col-5 col-md-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="areacode"
                      name="areacode"
                      placeholder="Area code"
                    />
                  </div>
                  <div className="col-7 col-md-7">
                    <input
                      type="tel"
                      className="form-control"
                      id="telnum"
                      name="telnum"
                      placeholder="Tel. number"
                    />
                  </div>
                </div>
                <div className="form-group row my-2">
                  <label htmlFor="emailid" className="col-md-2 col-form-label">
                    Email
                  </label>
                  <div className="col-md-10">
                    <input
                      type="email"
                      className="form-control"
                      id="emailid"
                      name="emailid"
                      placeholder="Email"
                    {...register("emailDonor",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                  />
                  {errors.emailDonor && <p className="errorsMsg">Please check the Email</p>}
                  </div>
                  <div className="form-check offset-md-2 col-md-10 ">
                    <label className="form-label" htmlFor="approve">
                      Your receipt will be emailed here.
                    </label>
                  </div>
                </div>

                <div className="form-group row my-2">
                  <label htmlFor="feedback" className="col-md-2 col-form-label">
                    Message
                  </label>
                  <div className="col-md-10">
                    <textarea
                      className="form-control"
                      id="feedbackdonate"
                      name="feedback"
                      rows="12"
                    ></textarea>
                  </div>
                </div>
              
            </div>
            <div className="row my-5  mx-auto">
              <div className="col-10 col-lg-4 offset-md-2 text-center">
           { oneTime &&      <p id="oneDonation1"> Your <i>one time</i> donation :<strong>{amount}</strong></p> }
             { recurring &&    <p id="recurringDonation1"> Your <i>{howOften}</i>  donation <strong>{amount}</strong></p>}
                <br />
                <span id="amout1"></span>
              </div>
              <div className="col-10 col-lg-4 text-center align-item-center">
             
                <p>Donate with your preferred payment method:</p>  
               
                <button
                  type="button"
                  className=" col btn btn-success mb-2"
                  id="creditCard"
                  onClick={payementInfo}
                >
                  CREDIT CARD
                </button>
                
              </div>
            </div>
      {startPay  && 
            <div className="row" id="paymentRow">
              <div className="col-sm-8 ">
                <label className="col-form-label">
                  <h2>Payment Details</h2>
                </label>
              </div>
              <div className="col-12 col-md-8 my-4">
          <PaymentCard/>
  </div>
              <div className="col-sm-5">
                <label htmlFor="lastname" className="col-form-label">
                  Billing Last Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastNameBill"
                  name="lastNameBill"
                  placeholder="Last Name"
                 
                {...register("lastNameBill", { required: true, minLength:2,
                                maxLength:20 })}
                    />
                     {errors.lastNameBill && <p className="errorsMsg">Please check the Last Name</p>}
              </div>
              <div className="col-sm-5">
                <label htmlFor="adress" className="col-form-label">
                  Billing First Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstNameBill"
                  name="firstNameBill"
                  placeholder="First Name"
                  
                 {...register("firstNameBill", { required: true, minLength:2,
                                maxLength:20 })}
                    />
                     {errors.firstNameBill && <p className="errorsMsg">Please check the First Name</p>}
              </div>
              <div className="col-sm-10">
                <label htmlFor="address" className="col-form-label mt-3">
                  Address*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address1"
                  name="address1"
                  
               {...register("address1", { required: true, minLength:2,
                                maxLength:20 })}
                    />
                     {errors.address1 && <p className="errorsMsg">Please check the Address</p>}
              </div>
              <div className="col-sm-10">
                <label htmlFor="address2" className="col-form-label mt-3">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  name="address2"
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="country" className="col-form-label mt-3">
                  Country*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  
                {...register("country", { required: true, minLength:2,
                                maxLength:20 })}
                    />
                     {errors.country && <p className="errorsMsg">Please check the Country</p>}
              </div>
              <div className="col-sm-10">
                <label htmlFor="city" className="col-form-label mt-3">
                  City*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  
                {...register("city", { required: true, minLength:2,
                                maxLength:20 })}
                    />
                     {errors.city && <p className="errorsMsg">Please check the City</p>}
              </div>
              <div className="col-sm-5">
                <label htmlFor="region" className="col-form-label">
                  Region
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="region"
                  name="region"
                />
              </div>
              <div className="col-sm-5">
                <label htmlFor="codePostal" className="col-form-label">
                  Code Postal
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="codePostal"
                  name="codePostal"
                />
              </div>
              <div className="col-sm-8 mx-auto mt-5">
                <p>
                  By clicking GIVE NOW, I agree to the <u> Terms of Service</u>{" "}
                  and <u>Privacy Policy</u>
                </p>
              </div>
              <div className="row ">
                <div className="col-sm-8 mx-auto  text-center">
                  <button type="submit" className="btn btn-danger btn-lg ">
                    Giv now
                  </button>
                </div>
                   { oneTime && 
                <div className="col-sm-8 text-nowrap mx-auto my-3 text-center">
                
                   
                    <p className=" text-center" id="oneDonation2">
                      
                      Your  <u><i>one time</i></u>  donation:<strong>{amount}</strong>
                    </p>
                    
                  
                  </div>
                   }
                   {recurring && 
                  
                  <div className="col-sm-8 text-nowrap mx-auto my-3 text-center">
                  
                    <p className="text-center" id="recurringDonation2">
                      
                      Your <i>{howOften}</i> donation:<strong>{amount}</strong>
                    </p>
                  
                  
                </div>
                  }
              </div>
            </div>
            }
          </form>
        </div>
      </div>
    </>
  );
}

export default DonationForm;
