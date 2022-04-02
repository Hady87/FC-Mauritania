import React from "react";
import { FaEnvelope, FaFax, FaPhone } from "react-icons/fa";
import DonationForm from "./DonationForm";
import FormContact from "./FormContact";
import MapAddress from "./MapAddress";
import GoogleApiWrapper from "./MapAddress";

function Contact() {
  return (
    <>
      <div className="container">
        <div className="row row-content">
          
          <div className="col-10 col-sm-6 mx-auto my-2">
            <h3>Our Address</h3>
            <address >
             <p className="my-1">216 E-nour</p> 
             
                <p className="my-1"> Tevragh-Zeina,Nouakchott</p>
             <p className="my-1">  
              Mauritania</p>
              
              <FaPhone className="my-2" />: +22223138386
              <br />
              <FaFax className="my-2" />: +222 36184074
              <br />
              <FaEnvelope className="my-2"/>:
              <a href="mailto:freedomandcitizenshipngo@gmail.com">
                email@FC_mauritania
              </a>
            </address>
          </div>
          <div className="col-10 col-sm-6 mx-auto my-2 ">
                 <h3 className=" text-nowrap">Map Location</h3>
          <MapAddress/>
        </div>
        </div>
        
        
        <div className="row row-content">
          
          <div className="col-10 offset-2 ">
        <FormContact/>
        </div>
        </div>
        <div className="row row-content">
          
          <div className="col-10 offset-2 ">
        <DonationForm/>
        </div>
        </div>
        </div>
      
    </>
  );
}

export default Contact;
