import React from 'react';
import {Modal , Form } from 'react-bootstrap';
import {Link} from "react-router-dom";
import "./Login.css";

const Login = (props) => {
    return (
        <>
            <Modal
                    show={props.showlogin}
                    onHide={props.onHidelogin}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    
                >
                    <Modal.Body className="m-3 m-lg-5">
                        <h2 className="sf-semibold text-center login-h2" >Welcome Login</h2>
                        
                        <div className="w-lg-85 mx-auto mt-5">
                            <Form action="" method="post" >
                                {/*<div className="input-container">
                                    <input type="text" id="vEmailPhone" name="vEmailPhone" placeholder="Email or Phone" autoComplete="off" required />
                                    <label htmlFor="vEmailPhone">Email or Phone</label>
                                    <div className="bar"></div>
                                </div>*/}
                               {/* <div className="input-container">
                                    <input type="password" id="vPassword" name="vPassword" placeholder="Password" autoComplete="off" required />
                                    <label htmlFor="vPassword">Enter your password</label>
                                    <div className="bar"></div>
                                </div>*/}
                                <div className="mt-4">
                                <Form.Group controlId="vEmailPhone">   
                                    <Form.Control type="text" placeholder="Email or Phone"/>
                                </Form.Group>
                                </div>
                                <div className="mt-4">
                                <Form.Group controlId="formBasicPassword">   
                                    <Form.Control type="password" placeholder="Enter your password"/>
                                </Form.Group>
                                </div>
                                
                                <div className="my-2">
                                   <label class="checkmark-container float-left mt-1">Remember Me
                                        <input type="checkbox" name="RememberMe" id="RememberMe" />
                                        <span class="checkmark"></span>
                                    </label>                                

                                    <div className="float-right" >
                                        <Link href="#" className="fs-16px text-77869E">Forgot password?</Link>
                                    </div>
                                </div>
                                <div className="clearfix"></div>

                                <div className="text-center mt-3">
                                    <Link to="/dashboard" className="btn btn-blue btn-x-lg mx-md-3 my-auto">Login </Link>
                                </div>
                                <div className="text-center ls-04px">
                                    <p className="mt-3 fs-16px ls-04px">
                                        <span className="text-77869E"> Don’t have a account?  </span>
                                        <span className="text-313D98 sf-semibold cursor-pointer" > Register Now </span>
                                    </p>
                                    <p className="text-77869E fs-16px"> or </p>
                                    <Link to="/gethelp" className="text-313D98 sf-semibold fs-16px cursor-pointer" > Need Help </Link>
                                </div>

                            </Form>
                        </div>
                    </Modal.Body>
                </Modal>

        </>
    )
}

export default Login
