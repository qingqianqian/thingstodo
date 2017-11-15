import React from 'react';
//import {connect} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
export default class StripeSimple extends React.Component{

  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
 
  // ...
 
  render() {
    return (
      // ...
      /*
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_fcEi0898adfPaieEfFNrzmOU"
      />
      */

      <StripeCheckout
        name="title" // the pop-in header title
        description="Description of stuff that you purchased" // the pop-in header subtitle
        image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
        ComponentClass="div"
        panelLabel="Give Money" // prepended to the amount in the bottom pay button
        amount={1000000} // cents
        currency="CAD"
        stripeKey="pk_test_fcEi0898adfPaieEfFNrzmOU"
        locale="auto"
        email="shuiqingqian58@gmail.com"
        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        shippingAddress="118 Robson St"
        billingAddress={false}
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        zipCode={false}
        alipay={false} // accept Alipay (default false)
        bitcoin={false} // accept Bitcoins (default false)
        allowRememberMe={false} // "Remember Me" option (default true)
        token={this.onToken} // submit callback
        opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
        closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
        // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
        // you are using multiple stripe keys
        reconfigureOnUpdate={false}
        // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
        // useful if you're using React-Tap-Event-Plugin
        triggerEvent="onClick"
      >
      <button className="btn btn-primary">
        Use your own child component, which gets wrapped in whatever
        component you pass into as "ComponentClass" (defaults to span)
      </button>
    </StripeCheckout>
    )
  }

}