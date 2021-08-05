import React from 'react'
import {Link} from "react-router-dom";

import { footermobile,Google_Play_Store,App_Store,Call_Icon,Mail_Icon,Video_Call_Icon,logofooter,
        facebook,twitter,instagram,linkedin} from "../Component/Images";

const Footer = () => {
    return (
        <>
        <div className="footer">
        <div className="container">
            <div className="row footer-row">
                <div className="col-md-4 footer-img">
                    <img src={footermobile} alt="footermobile" className="img-fluid" />
                </div>

                <div className="col-md-8">
                    <div className="download">
                        <h1 className="mob-h1">
                            Download Safe4Deal Mobile from the App Store or Google Play Store today!
                        </h1>

                        <div className="mt-3 mb-5 mt-md-5 ">
                            <a href="https://play.google.com/store" target="_bfdb">
                                <img
                                    alt="Google Play Store" src={Google_Play_Store}   className="my-2 mx-3 img-fluid"
                                />                                                                     
                             </a>

                            <a href="https://www.apple.com/app-store/" target="_vev" >
                                <img
                                    alt="App Store" src={App_Store} className="my-2 mx-3 img-fluid"
                                />
                            </a>
                        </div>               
                        
                    </div>
                </div>
            </div>
        </div>            
        </div>

        <div id="contact">
        <div className="container">
            <div className="contact-area">
                <div className="centre">
                    <h2 className="text-h2 d-inline-block sf-bold">
                        <span className="upper">Contact Us </span>
                        <span className="heading-underline"></span>
                    </h2>
                    <p className="contact-text py-3 fs-20">If you have any questions or concerns about your account-, cards-, coins, our offers – or believe there has been an unauthorized login attempt and/or transaction that you do not recognize – please email customer support team or give us a call or video call us now...</p>
                </div>
            </div>

            <div className="row mt-5 mb-5">
                <div className="col-md-4 con-centre">
                    <img
                        src={Call_Icon}   alt="Call Icon" className=""                
                    />
                    <h2 className="call mt-4"> Give us a call </h2>
                    <p className="mt-3 mb-0"> Call us on </p>
                    <p className="call-num mt-1"> <a href="tel:+1800 000 1000" className="text-042C5C"> 1800 000 1000 </a>  </p>                 
                </div>

                <div className="col-md-4 con-centre">
                    <img
                        src={Mail_Icon}   alt="Call Icon" className=""                
                    />
                    <h2 className="call mt-4"> Send us a Email </h2>
                    <p className="mt-3 mb-0"> Email at</p>
                    <p className="call-num mt-1"> <a href="mailto:support@safe4deal.com" className="text-042C5C">support@safe4deal.com </a>  </p>                 
                </div>

                <div className="col-md-4 con-centre">
                    <img
                        src={Video_Call_Icon}   alt="Call Icon" className=""                
                    />
                    <h2 className="call mt-4"> Video Call </h2>
                    <p className="mt-3 mb-0"> Directly to your account officer </p>
                   
                    <div class="input-group W-75 mt-2">
                        <input type="text" class="form-control border-0 py-4" id="AccountNumber" placeholder="Your Account Number" aria-describedby="AccountNumberPrepend" required=""/>
                        <div class="input-group-prepend">
                            <button class="input-group-text bg-white border-0 " id="AccountNumberPrepend">Connect</button>
                        </div>
                    </div>

                 </div>

            </div>

        </div>


    </div>
        
        <div className="footer-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 text-centre">
                        <img src={logofooter} alt="logo"/>

                        <div className="mt-5 text-centre">
                            <a href="" target="">
                                <img src={facebook} alt="fb" className="mx-4"/>
                            </a>
                            <a href="" target="">
                                 <img src={twitter} alt="fb" className="mx-4"/>
                            </a>
                            <a href="" target="">
                                <img src={instagram} alt="fb" className="mx-4"/>
                            </a>
                            <a href="" target="">
                                <img src={linkedin} alt="fb" className="mx-4"/>
                            </a>
                        </div>

                    </div>

                    <div className="col-xl-2 col-lg-3 col-md-6">
                        <ul className="list-group list-centre">
                            <li className="list-group-item list-header">Acccounts</li>
                            <Link to="#" className="text-white"> <li className="list-group-item  py-1">Bank Account </li> </Link>
                            <Link to="#" className="text-white"> <li className="list-group-item  py-1">Your Account </li> </Link>
                            <Link to="#" className="text-white"> <li className="list-group-item  py-1">Metal Account </li> </Link>
                            <Link to="#" className="text-white"> <li className="list-group-item  py-1">Business Account </li> </Link>
                                   
                        </ul>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-md-6 ">
                        <ul className="list-group list-centre">
                            <li className="list-group-item list-header">Our Offers</li>
                            <Link to="#" className="text-white"> <li className="list-group-item  py-1">Account </li> </Link>
                            <Link to="#" className="text-white"> <li className="list-group-item  py-1">COIN </li> </Link>
                            <Link to="#" className="text-white"> <li className="list-group-item  py-1">SafeDeal </li> </Link>      
                        </ul>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-md-6 ">
                        <ul className="list-group list-centre">
                            <li className="list-group-item list-header">SafeDeal</li>
                            <Link to="#" className="text-white"> <li className="list-group-item  py-1">Know More </li> </Link>
                            <Link to="#" className="text-white"> <li className="list-group-item  py-1">FAQ’S </li> </Link>
                        </ul>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-md-6 ">
                        <ul className="list-group list-centre">
                            <li className="list-group-item list-header">Useful links</li>
                            <Link to="#" className="text-white"> <li className="list-group-item  py-1">SafeDeal  </li> </Link>
                            <Link to="#" className="text-white"> <li className="list-group-item  py-1">COIN </li> </Link>
                        </ul>
                    </div>



                </div>
            </div>
        </div>

        </>
    )
}

export default Footer;
