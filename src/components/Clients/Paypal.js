import { PayPalButton } from "react-paypal-button-v2";
import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import { inject , observer } from "mobx-react";

@inject("clientStore")
 
@observer
class PayPal extends Component{
  render() {
    return (
    <div>
        <PayPalButton
            amount="0.01"
            onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);
    
            // OPTIONAL: Call your server to save the transaction
            return fetch("/paypal-transaction-complete", {
                method: "post",
                body: JSON.stringify({
                orderID: data.orderID
                })
            });
            }}
        />
        <Button onClick={this.props.clientStore.openPayModal} color="secondary">X</Button>
    </div>
     
    );
  }
}

export default PayPal