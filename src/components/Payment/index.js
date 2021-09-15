import React from "react";
import "./payment.css";
import Button from "../Button";

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>PAYMENT</h1>
        <div className="payment-plan">
          <p>1. Select your plan</p>
          <div className="payment-options">
            <div className="payment-radio">
              <label htmlFor="basic" style={{ color: "#a22d2d" }}>
                <input
                  id="basic"
                  name="paymentType"
                  type="radio"
                  value="basic"
                />
                Basic
              </label>
            </div>

            <div className="payment-radio">
              <label htmlFor="advanced" style={{ color: "gold" }}>
                <input
                  id="advanced"
                  name="paymentType"
                  type="radio"
                  value="advanced"
                  defaultChecked
                />
                Advanced
              </label>
            </div>

            <div className="payment-radio">
              <label htmlFor="pro" style={{ color: "aqua" }}>
                <input id="pro" name="paymentType" type="radio" value="pro" />
                Pro
              </label>
            </div>
          </div>
        </div>
        <div className="billing-and-cc">
          <div className="billing">
            <p>2. Billing Information</p>
            <div className="input-fields">
              <label>FULL NAME</label>
              <br />
              <input type="text" autoComplete="off" required />
              <br />
              <label>BILLING ADDRESS</label>
              <br />
              <input type="text" autoComplete="off" required />
              <div className="sub-input-fields">
                <div className="sub-input1">
                  <label>CITY</label>
                  <br />
                  <input type="text" autoComplete="off" required />
                </div>
                <div>
                  <label>POSTAL CODE</label>
                  <input type="text" autoComplete="off" required />
                </div>
              </div>
              <label>COUNTRY</label>
              <br />
              <select>
                <option value="ca">Canada</option>
                <option value="usa">USA</option>
                <option value="fin">Finland</option>
                <option value="pl">Poland</option>
              </select>
            </div>
          </div>
          <div className="cc">
            <p>3. Credit Card Information</p>
            <div className="input-fields">
              <label>CARDHOLDER'S NAME</label>
              <br />
              <input type="text" autoComplete="off" required />
              <br />
              <label>CARD NUMBER</label>
              <br />
              <input type="text" autoComplete="off" required />
              <div className="sub-input-fields">
                <div className="sub-input1">
                  <label>EXPIRY MONTH</label>
                  <br />
                  <input type="text" autoComplete="off" required />
                </div>
                <div>
                  <label>EXPIRY YEAR</label>
                  <input type="text" autoComplete="off" required />
                </div>
              </div>
              <label>CVV</label>
              <br />
              <input type="text" autoComplete="off" required />
            </div>
          </div>
        </div>
      </div>
      <div className="payment-submit">
        <p>
          By continuing, I acknowledge that I've read and agree
          <br /> to the <a href="/payment">Terms of Service</a> &amp;
          <a href="/payment"> Privacy Policy</a>
        </p>
        <Button text="DOWNLOAD" location="payment" />
      </div>
    </div>
  );
};

export default Payment;
