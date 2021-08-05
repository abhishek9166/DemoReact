import React from 'react'
import Navbar from "./Menu/Navbar";
import Account from "./Menu/Account";
import Gethelp from "./Menu/Gethelp";
import Landing from "./Landing";
import Shanner from "./Menu/Shanner";
import Coin from "./Menu/Coin";
import Safepay from "./Menu/Safepay";
import { Switch ,Route, Redirect } from "react-router-dom";

 const Header = () => {
    return (
        <>
    
        <Navbar/>
        <Switch>        
            <Route exact path="/" component={Landing} />
            <Route exact path="/accounts" component={Account} />
            <Route exact path="/gethelp" component={Gethelp} />

            <Route exact path="/Shanner" component={Shanner} />
            <Route exact path="/coin" component={Coin} />
            <Route exact path="/safepay" component={Safepay} />
            
            <Redirect to="/" />
        </Switch>
    
        </>
    )
}

export default Header;
