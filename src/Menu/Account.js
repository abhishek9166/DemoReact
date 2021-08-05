import React from 'react'
//import {Account_bg} from "../Component/Images"
import './Account.css';
import {Link} from 'react-router-dom';
// import Accountcard from '../Custom/Accountcard';
// import { Container } from 'react-bootstrap';
// import { Row, Table, Tab, Tabs } from "react-bootstrap";
// import {right_double_arrow_white} from "../Component/Images"

 


const Account = () => {
    return (
        <>
            <div className="account-bg ">

            <div className="container">
                <div className="row account">
                            <div className="col-sm-12 text-white">
                                <h1 className="acount-h1">
                                    Accounts
                                </h1>
                                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                                <div className="hero">
                                    <button className="btn btn-blue" >Get Started</button>
                                </div>
                            </div>
                </div>
            </div>

            </div>

            <div className="container">
                <nav aria-label="breadcrumb ">
                    <ol class="breadcrumb breadcrumb-custom my-3 mt-3">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Account </li>
                    </ol>
                </nav>
            </div>  

           {/* <Tabs defaultActiveKey="Individual" id="uncontrolled-tab-example" className="p-5 justify-content-center border-0" >
            <Tab eventKey="Individual" title="Individual" className="bg-F7F8FA py-5 overflow-x-scroll">
                 <div className="container">
                     <Row>
                     <Table borderless className="top-border-table">
                       <thead>

                       <tr className="border-bottom-5D5A5B pb-3">
                                                <td style={{minWidth: '400px'}}></td>
                                                <td> 
                                                    <div className="">
                                                        <Accountcard color={'blue-bird-card'} className="border-0" />
                                                        <div className="text-center text-042C5C fs-20px sf-bold py-4" >STANDARD</div>
                                                        <div className="text-center">
                                                            <button className="btn btn-blue btn-x-lg my-2 mx-2 mx-xl-0"  >Get Started</button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td> 
                                                    <div className="">
                                                        <Accountcard color={'red-bird-card'} className="border-0" />
                                                        <div className="text-center text-042C5C fs-20px sf-bold py-4" >PREMIUM</div>
                                                        <div className="text-center">
                                                            <button className="btn btn-blue btn-x-lg my-2 mx-2 mx-xl-0"  >Get Started</button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>


                       </thead>
                       </Table>
                     </Row>
                 </div>
                 
                 
                 
                  </Tab>
                  </Tabs> */}

         
   

          
        </>
    )
}

export default Account;
