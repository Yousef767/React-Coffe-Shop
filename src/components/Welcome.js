import React, { Component } from "react";
import account from '../images/account.png'
class Welcome extends Component{
    render() {
        return (
            <div className="account">
                <div className="welcome">
                    <div className="img">
                        <img src={account} alt=""></img>
                        <span>Hi User</span>
                    </div>
                    <span>Have A Nice Day ! </span>
                </div>
            </div>
        )
    }
}
export default Welcome