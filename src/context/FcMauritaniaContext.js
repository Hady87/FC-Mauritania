import { createContext, useState, useEffect } from 'react';
const FcMauritaniaContext = createContext()

export const FcMauritaniaProvider = ({ children }) => {

 const [oneTime,setOneTime]=useState(true)
  const [recurring,setRecurring]=useState(false)
  const [amount,setAmount]=useState('')
  const [howOften,setHowOften]=useState('monthly')
   const [startPay,setStartPay]=useState(false)
   const [otherOption, setOtherOption]=useState(false)
   const [optionSelcted, setOptionSelcted]=useState(true)
  // const [message, setMessage] = useState('');

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
    <FcMauritaniaContext.Provider
      value={{
        oneTime,
        recurring,
        amount,
        howOften,
        startPay,
        otherOption,
        optionSelcted,
        onValueChange,
        selectAmount,
        donationType,
        payementInfo,
        SelectOption
}}
    >
      {children}
    </FcMauritaniaContext.Provider>
  )
}
export default FcMauritaniaContext