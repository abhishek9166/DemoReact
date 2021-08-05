import React from 'react'
import {Link} from "react-router-dom"
import Footer from "../Component/Footer";

import {Safe1,Irrevocable_Shaneer,Revoulving_Shaneer} from "../Component/Images"


const Safepay = () => {
    return (
       <>
            <div className="Safe-bg">
                <div className="container">
                <div className="row">
                            <div className="col-sm-12 safe-main">
                                <h1 className="sf-medim safe-head" style={{color:"rgba(0,0,0)"}}>
                                    Safe4Deal COIN
                                </h1>
                                <p className="fs-20" style={{color:"rgba(0,0,0)"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br />
                                    aliquam, purus sit amet luctus venenatis</p>
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
                        <li class="breadcrumb-item active" aria-current="page">SafePay for SafeDeal </li>
                    </ol>
                </nav>
            </div>  

            <div className="safe-context">
                <div className="container">
                    <div className="row">

                    <div className="col-md-6">
                        <img src={Safe1} alt="shanner1" className="container-fluid"/>
                    </div>

                    <div className="col-md-6 safe-text">
                        <div className="pl-lg-5 mt-3">
                           <p>
                                The SafePay for SafeDeal (Safe4Deal), in simple terms, is a blocked money in the account that serves as evidence of the instruction for the guaranteed payment from the buyer to the seller. 
                            </p>
                            <p>
                                A SafePay for SafeDeal, also known as a Safe4Deal, is issued and carried out by our bank and promises the seller a timely and secure payment.
                            </p>
                            <p>
                                If the buyer allegedly fails to meet his obligation, the bank pays the seller on behalf of the buyer, who in turn repays the bank. This is a brief summary of the Safe4Deal process.
                            </p>
                            <button className="btn btn-blue mt-2">Get Started</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="safe-type text-white">
                <div className="container">
                    <div className="text-centre">
                    <h2 class="sf-bold fs-30px mt-3 mt-md-5 d-inline-block">
                    <span class="text-uppercase safe-title"> Types of Safe4Deal  </span> <br/>
                    <span class="heading-underline"></span></h2>
                    </div>

                
                    <div className="row mt-5 pb-md-5">
                            <div className="offset-sm-2 offset-md-3 offset-lg-4   col-sm-4 col-md-3 col-lg-2 text-center">
                                <img
                                    alt="Call Icon"
                                    src={Irrevocable_Shaneer}
                                    className=""
                                />
                                <p className="mt-4 fs-30px"> Irrevocable <br/> Safe4Deal </p>                
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2 text-center">
                                <img
                                    alt="Call Icon"
                                    src={Revoulving_Shaneer}
                                    className=""
                                />
                                <p className="mt-4 fs-30px"> Revoulving <br/> Safe4Deal </p>
                            </div>
                            <div className="col-sm-3">    
                            </div>
                        </div>
                </div>
            </div>


            <div className="py-5">
                <div className="container">
                    <div className="text-centre">
                    <h2 class="sf-bold fs-30px mt-3 mt-md-5 d-inline-block text-042C5C">
                        <span class="text-uppercase safe-title"> KNOW MORE ABOUT SAFE4DEAL  </span> <br/>
                        <span class="heading-underline"></span></h2>
                    </div>

                    <div className="w-lg-75 m-auto pt-5 text-042C5C-08">
                            <h2 className="text-042C5C fs-30px"> How does a Shanner work? </h2>
                            <ul className="dashed-list fs-20">
                                <li>The Safe4Deal process contains certain steps that must be followed until payment is released:</li>
                                <li>The buyer and seller must both have an account with us.</li>
                                <li>Buyer must contact us first and request to issue a safe4deal.</li>
                                <li>After the application, the minimum fee for processing or possible canceling / not accepting by the seller or buyer himself is paid to his account.</li>
                                <li>After paying the minimum fee, the buyer’s advisory account will usually be the seller’s account brater who will receive the buyer’s notification of the completion of the purchase process.</li>
                                <li>The advisory account has the task of authenticating and verifying the information in the Safe4Deal Message.</li>
                                <li>After authentication by the seller account of the deal and its transaction costs (depending on which party pays the costs or split 50% 50) confirmed and the confirmation is sent back to the buyer account.</li>
                                <li>After receiving the confirmation from the seller. the advisory buyer account assures the seller that his money will be processed, since it is now a transaction that is taken over by the person concerned.</li>
                                <li>Then the payment message is sent to the buyer and 3 days are given until the total payment is covered by the buyer on his account.After the entire payment has been covered by the buyer, the money for the seller is blocked until the purchased item has been sent according to its advertisement or mutual agreement.</li>
                                <li>After the seller has shipped the sold items to the buyer, the seller receives a landing permit because he has exported the purchased items to the.</li>
                                <li>From here, the accountants take over the account as a landing invoice as part of a negotiation fee, which in turn checks the exported goods and finally after checking the.</li>
                                <li>The shipping documents are then shared with the issuing buyer account, and the nominating buyer account does the.</li>
                                <li>The issuing buyer account reveals all documents to the buyer and, with the consent of all documents, puts them in order according to the buyer's information. The items purchased are</li>
                                <li>Finally the payment is released for the negotiating account of the seller.</li>
                            </ul>
                            <p className="fs-20">
                                Typically, a safe4deal is assisting a seller or beneficiary in an exchange agreement in which we ensure that the seller receives the amount either from the buyer or from the issuing bank itself. This safe4deal agreement also supports a buyer in certain cases, e.g. B. If the buyer makes a payment for an order to the seller and the seller does not deliver the order on time or does not deliver at all. In such a situation, with the help of a safe4deal, the buyer is paid with the money he or she has spent and is already blocked. In this way, the buyer gets his money back or the delivery date is extended by a fee (from whatever side).
                            </p>
                            <p className="fs-20">
                                With the help of this refund amount, the buyer can buy from another party.
                            </p>
                            <p className="fs-20">
                                As a rule, buyers require the seller (mostly newcomers without correct or correct acknowledgment or those with negative acknowledgment) also to participate or to assume full fees in the event of late delivery or in the case of no delivery at all.
                            </p>
                            <p className="fs-20">
                                We who have granted the Safe4Deal must be a regular advisory of the opener and should also be known to be an advisory to the beneficiary.
                            </p>
                            <p className="fs-20">
                                The buyers and sellers must both check the fees, whether the account of the opener or the account of the beneficiary is split or covered by one side. In general, the buyer and seller must pay the account and transaction fees in their respective countries on their accounts, including the minimum amount for the Safe4Deal confirmation fees. In the Safe4Deal, the costs that the applicant and the beneficiary incur are already enumerated, listed and offset online.
                            </p>
                            <p className="fs-20">
                                The individual must check whether the freight has been prepaid or paid in accordance with the contract. Usually, the freight is always paid by the seller.
                            </p>

                            
                            <h2 className="text-042C5C fs-30px mt-5 pt-4"> Advantages of the Safe4Deal </h2>
                            <ul className="dashed-list fs-20">
                                <li>A safe4deal gives trading partners the opportunity to do business with unknown partners or in newly established trading. It helps to quickly expand your business to new regions.</li>
                                <li>A note of appreciation from us will help im a lot in business.</li>
                                <li>A safe4deal is safer for the seller or exporter in the event that the buyer or importer goes bankrupt. Since the creditworthiness of the importer is transferred to the issuing account, the bank has to pay the amount agreed in the Safe4Deal. A safe4deal thus isolates the exporter from the importer's business</li>
                                <li>A safe4deal is high. Both trading partners can set conditions according to their requirements and arrive at a mutual list of clauses. It can also be customized from one transaction to another with the same trading partners. The right to the full amount is described by the courts in the phrase “Pay now, litigate later”.</li>
                            </ul>


                            <h2 className="text-042C5C fs-30px mt-5 pt-4"> Disadvantage </h2>
                            <ul className="dashed-list fs-20">
                                <li>A safe4deal increases the cost of collecting a fee for us to provide this service and can increase significantly if the parties want to introduce some additional functionality.</li>
                                <li>A safe4deale represents a significant risk of fraud for us. We pay the exporter after checking the shipping documents and not according to the actual quality of the goods. Disputes can arise if the quality deviates from the agreed one. Therefore, the buyer must always look for the right quality partner on site and choose the right documents from us.</li>
                                <li>A Safe4Deal lifecycle has an expiration date and therefore the exporter has a time limit within which he must deliver the goods in any case. Sometimes this rush creates chaos.</li>
                            </ul>


                            <h2 className="text-042C5C fs-30px mt-5 pt-4"> Received a safe4deal from us </h2>
                            <ul className="dashed-list fs-20">
                               <li>The cost of a letter of credit is typically between 0.2 and 9 or sometimes as little as 12%, depending on the type of safe4deal margin, the customer's creditworthiness, the tenure and other such factors.</li>
                               <li>Corporations, business people, individuals and even sole proprietorships can visit our website and seamlessly open an account and apply for a safe4deal for the professional assistance needed to advance international trade and export.</li>
                            </ul>

                        </div>

                </div>
            </div>

{/*------- FAQ’S Section-----*/}

            <div className="faq text-042C5C-08">
                <div className="container">
                <div className="text-centre">
                    <h2 class="sf-bold fs-30px mt-3 mt-md-5 d-inline-block text-042C5C">
                        <span class="text-uppercase safe-title"> FAQ’S  </span> <br/>
                        <span class="heading-underline"></span></h2>
                    </div>
                    <div className="w-lg-75 m-auto pt-5">
                            <ol className="list-style-position-inside pl-0">
                                <li className="sf-medim text-042C5C mt-4 fs-25px fs-25px">What is Safe4Deal?</li>
                                <p className="mt-2 fs-20 fs-20">SafePay for SafeDeal or simply said "Safe4Deal". Safe4Deal is a blocked money that guarantees payment to the seller on behalf of the buyer.</p>

                                <li className="sf-medim text-042C5C mt-4 fs-25px">What if the goods are not delivered on time?</li>
                                <p className="mt-2 fs-20">As a rule, the delayed delivery is extended in good time and the buyer will either confirm it in his own free will or not and demand his money back from us.</p>
                                
                                <li className="sf-medim text-042C5C mt-4 fs-25px"> What if the goods are not delivered at all? </li>
                                <p className="mt-2 fs-20"> The blocked money is credited to the buyer and if the fee was paid by the seller, nothing is charged to the buyer. </p>

                                <li className="sf-medim text-042C5C mt-4 fs-25px"> Is there a fee for a Safe4Deal? </li>
                                <p className="mt-2 fs-20"> Yes, the fee for a Safe4Deal depends on several factors, such as: B. the amount at risk and the type of safe4deal and selected documents. </p>

                                <li className="sf-medim text-042C5C mt-4 fs-25px"> When is a safe4deal required? </li>
                                <p className="mt-2 fs-20"> The main purpose of a Safe4Deal is security in a deal. Buying and selling to unknown person. A security for both in a neighborhood, fellow citizens, other countries as well as the long-distance and international deal and transaction (SafePay for SafeDeal). This helps to prevent the risk of non-payment of the goods, and to prevent the risk of paid and undelivered goods, and to reduce the risk of paid and wrongly delivered goods. </p>

                                <li className="sf-medim text-042C5C mt-4 fs-25px"> Can we help you to get a Safe4Deal? </li>
                                <p className="mt-2 fs-20"> YES, that is one of our tasks. We offer the option of having an account with us and applying for a Safe4Deal, with which our customers can seamlessly receive a Safe4Deal from us with which they can feel more secure. </p>

                                <li className="sf-medim text-042C5C mt-4 fs-25px"> What we can do for you? </li>
                                <p className="mt-2 fs-20"> 
                                    We can help you in every single step as your request and your wish. <br/>
                                    You can choose the following items in your account:  <br/>
                                    - Pre check with your account adviser (Buyer or Seller)  <br/>
                                    - Selected check with your account advisers (both party) 
                                </p>

                                <li className="sf-medim text-042C5C mt-4 fs-25px"> What is pre check? And is there any fee for pre check? </li>
                                <p className="mt-2 fs-20"> The pre-check is for the seller side, not the buyer side, and it is necessary to check whether his documents are confirmed in order to approve the payment or are there any problems with the issuing of the documents that the seller needs to change or correct. Yes, the fee for pre-check is depend on several factors, such as selected documents. </p>

                                <li className="sf-medim text-042C5C mt-4 fs-25px"> What is Final-check? And is there any fee for Final-check? </li>
                                <p className="mt-2 fs-20"> The selected-check is for the both side, and it is necessary to check whether his certain documents such as quality control or other documents are approved by the buyer or not. The selected-check takes place before shipment and is mainly used for quality control or the like, depending on the usual checks before shipment. The issued documents are approved by the buyer or are declared in writing as not approved by the buyer, and the seller has the task of changing the request or failing to maintain the transaction. Yes, the pre- screening fee depends on several factors, such as selected documents. </p>

                                <li className="sf-medim text-042C5C mt-4 fs-25px"> Who bears the costs here? </li>
                                <p className="mt-2 fs-20"> This will be agreed by both sides who bears which costs and after the request the agreed side will cover this in full in his account. </p>

                                <li className="sf-medim text-042C5C mt-4 fs-25px"> How are customers helped or assisted? </li>
                                <p className="mt-2 fs-20"> From a certain purchase quantity and price level, the customer is assisted face-to-face by his account advisor. </p>

                                <li className="sf-medim text-042C5C mt-4 fs-25px"> Is there any cost involved? </li>
                                <p className="mt-2 fs-20"> Under the purchase amount, YES, and from the limit, no It’s free of charge. </p>

                                <li className="sf-medim text-042C5C mt-4 fs-25px"> How do you recognize the free or paid limit? </li>
                                <p className="mt-2 fs-20"> The limit is different for each account and each person and is shown in your account from which price line is connected to which cost. </p>

                                <li className="sf-medim text-042C5C mt-4 fs-25px"> How is the virtual face-to-face advice or assistance? </li>
                                <p className="mt-2 fs-20"> There is a video-call click in your account for direct contact to your account advisor. You have the option to speak directly to your account advisor with a functioning microphone and camare or, for example, your mobile phone with an integrated camara and microphone. </p>

                                <li className="sf-medim text-042C5C mt-4 fs-25px"> Can a Safe4Deal divided between more Business or individual personen? Like pay a commission, marketing, consulting, lawyer, intermadiatory and other services costs ....? </li>
                                <p className="mt-2 fs-20"> Yes, if selling a product is with participiant of some services from different persons, it can be from the first step the buyer payment block for different persons according to for example NCND or comission or other services % contracts between all parties. </p>

                                <li className="sf-medim text-042C5C mt-4 fs-25px"> Documents for SafePay for SafeDeal: </li>
                                <p className="mt-2 fs-20 mb-1"> 1&#41; All kinds of Shipment: </p>
                                <p className="ml-4 fs-20 mb-1"> Bill of lading: </p>
                                <p className="ml-4 fs-20 mb-1"> - Airways bill </p>
                                <p className="ml-4 fs-20 mb-1"> - Road transport documents </p>
                                <p className="ml-4 fs-20 mb-1"> - Freight documents </p>
                                <p className="ml-4 fs-20 mb-1"> - Documents for rail transport </p>

                                <p className="mt-2 mb-1"> 2&#41; insurance: </p>
                                <p className="ml-4 fs-20 mb-1"> - Open insurance certificate </p>
                                <p className="ml-4 fs-20 mb-1"> - Original insurance policy </p>

                                <p className="mt-2 mb-1"> 3&#41; Commercially: </p>
                                <p className="ml-4 fs-20 mb-1"> Must documents: </p>
                                <p className="ml-4 fs-20 mb-1"> - Performa Invoice </p>
                                <p className="ml-4 fs-20 mb-1"> - Commercial invoice </p>
                                <p className="ml-4 fs-20 mb-1"> - Packing list </p>
                                <p className="ml-4 fs-20 mb-1"> - inspection certificate </p>
                            </ol>

                            <h2 className="text-042C5C fs-30px sf-medim"> Should documents: </h2>
                            <p>
                                Certificate of origin <br/>
                                Test report <br/>
                                Certificate of Inspection <br/>
                                Industry-Standard certificate <br/>
                                Guarantee <br/>
                                Warranty <br/>
                                TÜV test <br/>
                                Lawyer report <br/>
                                Consulting report <br/>
                                Intermadiatory <br/>
                                Marketing and/or comission agreement <br/>
                                Any kind of Certificate or contract or agreement as your request in accordance with Quality control <br/>
                                Etc...
                            </p>
                        </div>




                </div>

            </div>


            <Footer/>
       </>
    )
}

export default Safepay;
