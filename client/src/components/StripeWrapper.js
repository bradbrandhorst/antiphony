import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class StripeWrapper extends Component {
  render() {
    return (
      <StripeCheckout
        name="Antiphony"
        description="$5.00 USD for 5 survey credits"
        amount={500}
        token={token => this.props.grabToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn deep-orange darken-2 z-depth-5">Add Survey Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(StripeWrapper);
