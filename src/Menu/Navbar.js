import React,{useState} from 'react'
import { NavLink ,Link  } from "react-router-dom";
import logo from "../images/logo.png";
import { HashLink } from 'react-router-hash-link';
import Login from "../Modal/Login";



const Navbar = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <> 

    <Login showlogin={modalShow}
            onHidelogin={() => setModalShow(false)}/>



         <div className="landing-hero-section "> 

          <nav className="navbar navbar-expand-lg navbar-theme navbar-dark ">
            <div className="container">
               
                    <Link to="/"> 
                        <img src={logo}  width="75"  height="49" alt="logo"/>
                    </Link>
               
                   
                        <Link className="navbar-brand" to="/">
                            <h5 className="mb-0 sf-bold">Safe4Deal</h5>
                            <p className="mb-0 sf-thin">SafePay For SafeDeal.</p>
                        </Link>
                  
                    
                             
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>               
                </button>
               

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
             
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                    <HashLink className="nav-link" to="/#about_us">
                        About Us
                    </HashLink>
                    </li>

                    <li className="nav-item">
                    <HashLink className="nav-link" to="/#OurOffers">
                        Our Offers
                    </HashLink>
                    </li>

                    <li className="nav-item">
                    <HashLink className="nav-link" to="/accounts">
                        Accounts
                    </HashLink>
                    </li>

                    <li className="nav-item">
                    <HashLink className="nav-link" to="/gethelp">
                        Get Help
                    </HashLink>
                    </li>
                    
                    <button onClick={() => setModalShow(true)} className="btn btn-blue">Online Banking</button>

                </ul>                
                </div>

            </div>
        </nav> 
        </div> 
        
        </>
    )
}

export default Navbar;
