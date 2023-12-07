// PaymentForm.js
import React from 'react';
import "./Payment.css";

const PaymentForm = () => {
  const handlePayment = () => {
    // Simulate a payment process (e.g., by making an API call to your server)
    // For this example, we'll simply log a success message.
    console.log('Payment successful!');
  };

  return (
    <div >
      <h2>Payment Details</h2>
      <form>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" placeholder="Enter your card number" />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" placeholder="MM/YY" />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" placeholder="CVV" />
        </div>
        <button type="button" onClick={handlePayment}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
