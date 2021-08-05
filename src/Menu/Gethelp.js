import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './Account.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Component/Footer";
import Login from "../Modal/Login";

const Gethelp = () => {

 const [modalShow, setModalShow] = useState(false);


    return (
        <>
<Login showlogin={modalShow}
       onHidelogin={() => setModalShow(false)}/>





        <div className="gethelp-bg ">

        <div className="container">
            <div className="row account">
                        <div className="col-sm-12 text-white">
                            <h1 className="acount-h1">
                                Get Help
                            </h1>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut<br/>
                            aliquam, purus sit amet luctus venenatis</p>
                            <div className="hero">
                                <button className="btn btn-blue" onClick={() => setModalShow(true)} >Get Started</button>
                            </div>
                        </div>
            </div>
        </div>
     
        </div>

        <div className="container">
                <nav aria-label="breadcrumb ">
                    <ol class="breadcrumb breadcrumb-custom my-3 mt-3">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Get Help </li>
                    </ol>
                </nav>
        </div>   

        <div className="help-page">
            <div className="container">
                <div className="row fs-20 sf-medium">

                    <div className="col-md-6 my-2">
                        <div className=" bg-white p-3 rounded">
                            <Link to="#" className="get-text"> 
                                <span> Send us a Message </span> 
                                <span className="float-right"><FontAwesomeIcon icon={faAngleRight} /></span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-6 my-2">
                        <div className=" bg-white p-3 rounded">
                            <Link to="#" className="get-text"> 
                                <span>Loosing your Bank Card </span> 
                                <span className="float-right"><FontAwesomeIcon icon={faAngleRight} /></span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-6 my-2">
                        <div className=" bg-white p-3 rounded">
                            <Link to="#" className="get-text"> 
                                <span>Customer Care Contact </span> 
                                <span className="float-right"><FontAwesomeIcon icon={faAngleRight} /></span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-6 my-2">
                        <div className=" bg-white p-3 rounded">
                            <Link to="#" className="get-text"> 
                                <span>Feedback </span> 
                                <span className="float-right"><FontAwesomeIcon icon={faAngleRight} /></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 my-2">
                        <div className=" bg-white p-3 rounded">
                            <Link to="#" className="get-text"> 
                                <span> Open an Account </span> 
                                <span className="float-right"><FontAwesomeIcon icon={faAngleRight} /></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 my-2">
                        <div className=" bg-white p-3 rounded">
                            <Link to="#" className="get-text"> 
                                <span>Video Call with Account Advior </span> 
                                <span className="float-right"><FontAwesomeIcon icon={faAngleRight} /></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 my-2">
                        <div className=" bg-white p-3 rounded">
                            <Link to="#" className="get-text"> 
                                <span>Terms and conditions </span> 
                                <span className="float-right"><FontAwesomeIcon icon={faAngleRight} /></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 my-2">
                        <div className=" bg-white p-3 rounded">
                            <Link to="#" className="get-text"> 
                                <span>Privacy Policy </span> 
                                <span className="float-right"><FontAwesomeIcon icon={faAngleRight} /></span>
                            </Link>
                        </div>
                    </div>
                    

                </div>
            </div>

        </div>   

        <Footer/>


        </>
    )
}

export default Gethelp;
