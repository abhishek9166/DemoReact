import React from 'react'
import {  Row, Col } from "react-bootstrap";
import {right_double_arrow_white,Whitelogo} from "../Component/Images";

const accountcard = (props) => {
    return (
        <>
            <div className={" card " + props.color}>
         <div className="content h-100">
          <Row>
           <Col xs={8}>
              <div className="numbers">
                  <span className="sf-medium fs-16px text-white">Your Current Balance</span>
                  <p className="sf-bold fs-32px text-white">$ 10,000</p>
             
              </div>
            </Col>
            <Col xs={4} className="text-right ">
             <span className="align-text-top"> <img src={Whitelogo} alt="white logo" /></span>
          
            </Col>
          </Row>

          
          <Row className="mt-1">
           <Col xs={8}>
              <div className="numbers">
                  {/* <span className="sf-medium fs-16px text-white">Your Current Balance</span> */}
                  <p className="sf-medium fs-22px text-white letter-spacing-4px">NEO00025987</p>
             
              </div>
            </Col>
           
          </Row>

          <Row>
           <Col xs={7}>
              <div className="numbers">
                  <h3 className="sf-medium fs-16px text-white letter-spacing-3px text-uppercase">Jhone Doe</h3>
                  {/* <p className="sf-bold fs-32px text-white">$ 10,000</p> */}
             
              </div>
            </Col>
            <Col xs={5} className="text-right">
            <h3 className="text-white fs-16px sf-regular">View More &nbsp; <img src={right_double_arrow_white} alt="right double arrow white" /></h3>
             </Col>
          </Row>
         
        </div>
     </div>
        </>
    )
}

export default accountcard;
