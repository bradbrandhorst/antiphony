import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StripeWrapper from "./StripeWrapper";

class Header extends Component {
  renderHeader() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <StripeWrapper />
          </li>,
          <li key="3" style={{ margin: '0 10px' }}>Avaialable Credits: {this.props.auth.credits}</li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper grey darken-3">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo grey darken-3"
          >
            Antiphony
          </Link>
          <ul className="right grey darken-3">{this.renderHeader()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
