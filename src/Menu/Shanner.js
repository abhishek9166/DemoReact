import React from 'react'
import {Link} from "react-router-dom"
import Footer from "../Component/Footer";

import {Shanner1} from "../Component/Images";

const Shanner = () => {
    return (
        <>
            <div className="shanner_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 Shanner-main">
                            <h1 className="sf-medim Shnner-head ">
                                Shanner Account
                            </h1>
                                <p className="fs-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br />
                                aliquam, purus sit amet luctus venenatis</p>
                                <div className="hero my-5">
                                    <button className="btn btn-blue">Get Started</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <nav aria-label="breadcrumb ">
                    <ol class="breadcrumb breadcrumb-custom my-3 mt-3">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Shanner Account </li>
                    </ol>
                </nav>
            </div>  

        <div className="shanner-context">
            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                        <img src={Shanner1} alt="shanner1" className="container-fluid"/>
                    </div>

                    <div className="col-md-6 my-3 my-lg-4 Shanner-text">
                        <div className="pl-lg-5 mt-3">
                            <p>
                                Safe4Deal dedicated research and development team is developing stable, secure options for your account to having a secure feeling and full control of your money and your payments, whatever as payee or payer.
                            </p>
                            <p>
                                The Safe4Deal platform will allow traders (whatever private or company) not only to exchange cryptocurrency and pay all his bills and having credit cards for payments rather most important is that make an opportunity to be safe and secure for any buying, selling, service providing, service receiving and also in case any questions during that time to have a virtual face to face contact with account officers to get all his answers and sort it all the problems.
                            </p>
                            <button className="btn btn-blue mt-2">Get Started</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}

export default Shanner;
