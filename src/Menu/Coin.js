import React from 'react'
import {Link} from "react-router-dom"
import Footer from "../Component/Footer";

import {coin1,coin2} from "../Component/Images";

const Coin = () => {
    return (
        <>
            <div className="coin-bg">
                <div className="container">
                <div className="row">
                            <div className="col-sm-12 coin-main">
                                <h1 className="sf-medim coin-head">
                                    Safe4Deal COIN
                                </h1>
                                <p className="fs-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br />
                                    aliquam, purus sit amet luctus venenatis</p>
                                <div className="hero ">
                                    <button className="btn btn-blue btn-x-lg my-2 mx-2 mx-xl-0" >Get Started</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            <div className="container">
                <nav aria-label="breadcrumb ">
                    <ol class="breadcrumb breadcrumb-custom my-3 mt-3">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Safe4Deal COIN </li>
                    </ol>
                </nav>
            </div>  

            <div className="coin-context">
            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                        <img src={coin1} alt="shanner1" className="container-fluid"/>
                    </div>

                    <div className="col-md-6 my-3 my-lg-4 Shanner-text">
                        <div className="pl-lg-5 mt-3">
                            <p>
                            The Safe4Deal coin’s smart contract is based on the next-generation ERC223, where traders can trade and exchange crypto currencies, copy trade skills and compete with each other’s trades within their investment groups. In other words, we are taking social/copy trading, margin trading, and payment gateways to a transparent, highly secure and reliable way. The Safe4Deal token, which will be implemented on Ethereum Block chain under ERC223 standards—will act as a revenue-generating crypto currency. It will allow the token holders to receive revenue in the form of transaction fees. </p>
                        
                            <button className="btn btn-blue mt-2">Get Started</button>
                        </div>
                    </div>

                    <div className="col-md-6 my-3 my-lg-4">
                                <div className=" coin-text mt-5">
                                    <h2 className="">Buy and sell crypto currencies in a decentralized exchange environment!  </h2>
                                    <p className="mt-4">
                                        You have total control of your money and deal directly with the platform and other users in our block chain.
                                    </p>
                                    <ul className="hollow-square-list">
                                        <li className="my-3">We are an ICO investment platform.</li>
                                        <li className="my-3">Earn more Safe4Deal tokens based on a host of referral and invitation program features.</li>
                                        <li className="my-3">We are a globally available trading platform.</li>
                                        <li className="my-3">A growing network of international-ally-recognized partners.</li>
                                        <li className="my-3">We strongly believe that the Safe4Deal token will become one of the most distributed tokens in the Ethereum network!</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-6 my-3 my-lg-4">
                                <img
                                    alt="Landing AboutUs"
                                    src={coin2}
                                    className="img-fluid"
                                />
                            </div>

                </div>

            <div className="coin-footer">
                <p class="">We ideate, produce, sell and obtain feedback. We have a working system and promise to actualize all our targets – which will invariably lead to a rise in value of our token. We are not a start-up; we will not wait for any individual or institution.</p>
            </div>


            </div>
        </div>

        <Footer/>

        </>
    )
}

export default Coin
