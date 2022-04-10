import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    return (
        <footer className="site-footer">
        <div className="container">
           <div className="row">
              <div className="col-4 col-sm-3 text-center mx-auto my-2">
                 <h5>Links</h5>
                 <ul className="list-unstyled">
                      <li><Link to='/home'>Home</Link></li>
                      <li><Link to='/about'>About</Link></li>
                      <li><Link to='/contact'>Contact</Link></li>
                   
                 </ul>
              </div>
              <div className="col-8 col-sm-5 text-center mx-auto my-2">
                 <h5>Social</h5>
                 <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/fcmauritania/?fbclid=IwAR2M1YcNiaTQypwPK5VU1N6-b2k7Yy0D_cElIn3v7oW8vaBhGPoQm1tBTlo" target="_blanc"><i className="fa fa-instagram" ></i></a>
                 <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/FCMauritania" target="_blanc"><i className="fa fa-facebook"></i></a>
                 <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/fcmauritania?fbclid=IwAR1T6HcSpavRyi1o_QIAh-HU38JimsbeUDgxCWR2MKBUpOQlsUhOYPbh1po" target="_blanc"><i className="fa fa-twitter" ></i></a>
                 <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCgFB4gNsc6Nk-cwsC7EdnoA" target="_blanc"><i className="fa fa-youtube"></i></a>
              </div>
              <div className="col-8 col-sm-4 text-center mx-auto my-2">
                 <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone"></i> 32133868</a><br />
                 <a role="button" className="btn btn-link" href="mailto:freedomandcitizenshipngo@gmail.com" target="_blanc"><i className="fa fa-envelope-o"></i> Email us</a>
              </div>
           </div>
        </div>
     </footer>
    );
}

export default Footer;