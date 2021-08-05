import  React,{ useState } from 'react';
import './Landing.css';
import Card from "./Component/Card";
import safepay from './assets/svg/guestpages/safepay.svg';
import Footer from "./Component/Footer";
import Login from "./Modal/Login";
//import {Link} from "react-router-dom";
//import {Card} from "react-bootstrap";



import {learn,homebg,about1,about2,about3,offer1,offer2,offer3,offer4,card1,card2,card3} from "./Component/Images"


const Landing = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
    <>
    <Login showlogin={modalShow}
           onHidelogin={() => setModalShow(false)}/>



    <div className="landing-hero-section">

        <div className="container"> 
        <div className="row">
            <div className="col-md-12 col-lg-4">               
                <h1 className="hero-text sf-thin">
                    <span>A Platform</span><br/>
                    <span>for</span> <span className="sf-semibold">SafePay</span> <span>for</span> <br />
                    <span className="sf-semibold"> SafeDeal </span>
                </h1>

                <div className="hero-buttons mt-5">
                    <button  onClick={() => setModalShow(true)} className="btn btn-blue">Get Started</button>                   

                    <button className="btn btn-white" >Learn More</button>
                </div>                
            </div>

            <div className="col-md-12 col-lg-8 mt-5 mb-5">                
                <img
                    alt="Landing Mobile Tablet"
                    src={homebg}
                    className="d-inline-block align-content-center img-fluid"
                 />
             </div>
        </div>
        </div>
        
    </div>

    <div className="container">
        <div className=" my-5 text-bg">
            <div className="w-md-75 m-auto">
                <div className="media">
                    <img src={safepay} alt="safepay" />
                    <div className="align-self fs-20">
                         <p class="mb-0">No more feelings of insecurity or worry for someone who want to make a fair business for both sides. A WIN/WIN deal. With us, everythig Safe4Deale side. A revolution for all of your activities that you determine. Your satisfaction is our biggest concern.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>  

    <div id="about_us" className="about py-5">
        <div className="container">
            <div className="row about-color">
                <div className="col-md-6 pb-5 px-2">
                    <img src={about1} alt="about1"  className="img-fluid" />
                </div>

                <div className="col-md-6">
                    <div className=" pl-4 pt-4" >
                        <h1 className="about1-text">
                            <span className="upper sf-bold"> About us</span>
                            <span className="heading-underline"></span>
                        </h1>
                        <p className="p1 fs-20">
                            No more feelings of insecurity or worry for someone who wants to make a fair deal for both sides. A WIN/WIN deal for both sides. With us, everything that is negotiated will be implemented or couldn't and you're on the safe side. A revolution for all of your activities that you determine, whether you are shopping, selling, providing services, or even receiving services, as well as having complete control over your money or payments as a payer or payee. Both of you determine together the rule of how you want to deal with others about selling your product/service or purchasing a product/service. Both of you have full control over your money or product or service and all of your activities. You decide.  
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="px-2">
                        <p className="p2 fs-20">Nowadays customers determine the shopping models. Customers have changed the world and sales way with their search. Accordingly, we must also optimize their purchases or sales whatever goods or services providing and make them faster, effective, simpler, cheaper, and especially more secure. Customers with our cooperation need to be sure that what they have just seen and found can buying/selling without any problem. We make it possible for everyone to get what they have seen and read about it, without having to visit it or having a special experience of it. You are looking for what you need, make sure that both of you are registered with us, and have an account.This system ensures that you get the same one that you have chosen or that you have agreed on with the buyer, seller or service provider. You as a seller, buyer, and/or service provider/receiver can feel more safety and secure with our safe payment option.</p>
                    </div>
                </div>

                <div className="col-md-6 ">
                    <img src={ about2} alt="about1"  className="img-fluid" />
                </div>

                <div className="col-md-6 pt-5 pb-5 ">
                    <img src={ about3} alt="about1"  className="img-fluid" />
                </div>

                <div className="col-md-6">
                <div class="pl-lg-3 mt-5 fs-20">
                    <p className="p3">Safe4Deal is a frontline e-money and a safe payment for safe deal platform established based in Düsseldorf, Germany.</p>
                    <p className="p3">We provide transactions for secured buying, selling &amp; secured service providing/getting and also a platform to support the crypto-currency industry with advanced trading tools allowing different investors and customers to trade comfortably.</p>
                    <p className="p3">While we have our headquarters at Düsseldorf, we run offices in other locations and are looking to set up new stations in China, the Middle East, India and the USA.</p></div>
                 </div>


            </div>

            <div className="about1-p4">
                <p class="p4 mb-0 fs-20">Safe4Deal company is made up of 2 private co-founders and Dr. Mr. Parham Omidi is the CEO and major shareholder. With Safe4Deal, you can make more safety and secure your buying, selling, service providing or service recieving and your payments, whatever as payeer or payee. Apart from that, we are virtual present for you with a click to contact with your account officers, around the world. You can talk to us about all your issue in accordance with your matter as a client or as a potential client.</p>
            </div>
        </div>
    </div>  

    <div id="OurOffers" className="py-5 my-5 ouroffer">
        <div className="container">
            <div className="text-centre">
            <h2 className="text-h2 d-inline-block sf-bold">
                <span className="upper">Our Offers </span>
                <span className="heading-underline"></span>
            </h2>
            </div>
        <div className="row offer-h2 mt-2">

            <div className="col-md-6 mt-4">
            <div class="pr-lg-5  ">
                <h2 class="fs-30">Account for private person &amp; company with Debit credit cards </h2>
                <p class="mt-4 fs-20">Safe4Deal is built to highly impeccable standards, reviewed, and penetration tested. We have experience building financial systems to the highest security standards and strive to ensure security first before any other thing. It is constructed strictly following the financing-level standards. The industry standard transfer encryption protocol is applied to data transfer layers so as to ensure that all user data and sensitive data stored through bank-level data encryption.</p></div>
            </div>
            
            <div className="col-md-6 pt-3 pb-5 ">
                    <img src={offer1} alt="about1"  className="img-fluid" />
            </div>

            <div className="col-md-6 pt-3 pb-5 ">
                    <img src={offer2} alt="about1"  className="img-fluid" />
            </div>

            <div className="col-md-6 mt-4" data-vertical_center="true">
            <div class="pr-lg-5 px-lg-5 ">
                <h2 class="fs-30">Safe payment for safe deal with full control </h2>
                <p class="mt-4 fs-20">Asides the technology stack and support, Safe4Deal is built with top-notch service in mind. we share responsibilities across the entire staff and company. When a trader has a problem, and reports the issue, they get an instant response directly from someone who knows the system and not someone reading from a script or an automated respons.</p></div>
            </div>

            <div className="col-md-6 mt-4">
            <div class="pr-lg-5  ">
                <h2 class="fs-30">Great virtually present for you via virtual face to face..</h2>
                <p class="mt-4 fs-20">Nobody wants to go to the bank in traffic or at rush hour to do something. Nobody wants to spend a lot of time going to the bank to get something done. You may also not want to speak to a call center that you don't know! But maybe you have to go to the bank, but you don't have time for that. With us, you can reach your account managers face to face. Our video call account service for you provides a quick and efficient response to work on your affairs, confirm the details, and get the matter done without going or having to go there. You can reach your account managers from anywhere in the world without hiring a lawyer or someone to take action for you. We believe that your matters have to be processed quickly and efficiently in order to have satisfied customers. Safe4Deal</p></div>
            </div>

            <div className="col-md-6 pt-3 pb-5 ">
                    <img src={offer3} alt="about1"  className="img-fluid" />
            </div>

            <div className="col-md-6 pt-3 pb-5 ">
                    <img src={offer4} alt="about1"  className="img-fluid" />
            </div>

            <div className="col-md-6 mt-4" data-vertical_center="true">
            <div class="pr-lg-5 px-lg-5 ">
                <h2 class="fs-30">Total Control in accordance with all your activities for you </h2>
                <p class="mt-4 fs-20">We are face-to-face virtually present for you via a biometric hi-tech identity system as private person or company and make everything easier and safer for you. No matter where you are, in a tennis club, swimming pool, sports hall, at work or on the way to or on a plane or in prison..., no matter where you are, you can control everything yourself and determine alone with a Video-call click. As a company or private person, you have complete control over your inputs and outputs and all your transaction in real-time from around the world and you can determine all of your purchases, sales and choose how you want to do it best. As a company or private person you can set a limit for all your payments and all payments above that limit you can video-call your account officer for confirmation.</p></div>
            </div>

        </div>

        </div>
    </div>   


    <div id="card" className="card-main py-5">
        <div className="container">

            <div className="text-centre card-text">
            <h2 className=" d-inline-block sf-bold">
                <span className="upper">ACCOUNT, CARDS , COINS </span>
                <span className="heading-underline"></span>
            </h2>
            <p className=""> Instant account opening, issue credit cards and e-coin </p>            
            </div>

           <div className="row">
                <div className="col-md-6  col-lg-4">                
                    {<Card  imgsrc={card1}   title="Shanner Account"  Link="/Shanner" />}
                </div>
                <div className="col-md-6 col-lg-4">
                    {<Card  imgsrc={card2} title="Safe4Deal COIN" Link="/coin"/>}
                </div>
                <div className="col-md-6 col-lg-4">
                    {<Card  imgsrc={card3} title="SafePay for SafeDeal" Link="/safepay"/>}
                </div>                    
             </div>
             
{/*<div className="row w-xl-85 m-auto card-contain">

    <div className="col-md-4 my-3 my-lg-4">
        <Link to="/Shanner" className="text-white">
            <Card className="bg-transparent border-4AB4DD WhatYouGet-card h-100">
                <Card.Img variant="top" src={card1} />
                <Card.Body>
                    <Card.Title className="sf-bold  text-decoration-none">Shanner Account</Card.Title>
                    <Card.Text>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer d it to make a type specimen book.
                    </Card.Text>
                    <Link to="/Shanner" className=" text-decoration-none sf-bold fs-16px text-uppercase">
                        <span> learn more </span>
                        <span className="ml-3"> <img src={learn} alt="Right Arrow" className="my-auto" /> </span>
                    </Link>
                </Card.Body>
            </Card>
        </Link>
    </div>

    
</div>*/}






        </div>
    </div>
    
  
        <Footer/>
</>
    )
}

export default Landing;
