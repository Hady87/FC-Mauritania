import React from "react";
import { FaEnvelope, FaFax, FaPhone } from "react-icons/fa";
//import MapAddress from "./MapAddress";
function Contact() {
  return (
    <>
      <div className="container">
        <div className="row row-content">
          <div className="col-sm-8 mx-auto my-4">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              216 E-nour
              <br />
              Tevragh-Zeina,Nouakchott
              <br />
              Mauritania
              <br />
              <FaPhone />: +22223138386
              <br />
              <FaFax />: +222 36184073
              <br />
              <FaEnvelope />:
              <a href="mailto:freedomandcitizenshipngo@gmail.com">
                email@FC_mauritania
              </a>
            </address>
          </div>
          <div class="col-12 col-sm-6 offset-sm-1">
                 <h5>Map of our Location</h5>
        
        </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
