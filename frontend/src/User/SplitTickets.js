import React, { useState } from 'react';
import axios from 'axios';
import './SplitTickets.css'; 

const TicketSplitter = () => {
  const [totalPrice, setTotalPrice] = useState(parseFloat(localStorage.getItem('totalPrice')) || 0);
  const [numTickets, setNumTickets] = useState(localStorage.getItem('numTickets') || 0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numFriends, setNumFriends] = useState(localStorage.getItem('numTickets')-1 || 0);
  const [friendEmails, setFriendEmails] = useState([]);

 

  const handleFriendEmailChange = (index, email) => {
    const updatedEmails = [...friendEmails];
    updatedEmails[index] = email;
    setFriendEmails(updatedEmails);
  };

  const sendPaymentRequest = async () => {
    try {
      const totalAmount = totalPrice;
      const amountPerFriend = (totalAmount / numTickets).toFixed(2); 
    
      const requests = friendEmails.map(email => ({
        email,
        amount: amountPerFriend
      }));
      await axios.post('http://localhost:8080/send-emails', {
        from: "bookmycinemaapp@gmail.com", 
    to: friendEmails, 
    subject: "Book My Cinema - Split Tickets Request", 
    body: `Please pay ${amountPerFriend}$ to ${phoneNumber} via Zelle or Paypal`,
      });
      alert('Payment request sent successfully')
      window.location.href = 'http://localhost:3000/welcome';
      console.log('Payment requests sent successfully!');
    } catch (error) {
      console.error('Error sending payment requests:', error);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    sendPaymentRequest();
  };

  const renderFriendEmailFields = () => {
    const fields = [];
    for (let i = 0; i < numFriends; i++) {
      fields.push(
        <input
          key={i}
          type="email"
          placeholder={`Friend ${i + 1} Email`}
          value={friendEmails[i] || ''}
          onChange={(e) => handleFriendEmailChange(i, e.target.value)}
          className="input-field email-input"
        />
      );
    }
    return fields;
  };

  return (
    <div className="ticket-splitter-container">
      <div className="ticket-splitter-content">
        <h2 className="ticket-splitter-heading">Ticket Splitter</h2>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Friends(Excluding You): {numTickets-1}</p>
        <p>Amount Per Friend: ${(totalPrice / numTickets).toFixed(2)}</p>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="phoneNumber">Your Phone Number (for Zelle/Paypal)</label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Your Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="input-field"
            />
          </div>
        
          {renderFriendEmailFields()}
          <button type="submit" className="submit-button">Send Payment Request</button>
        </form>
      </div>
    </div>
  );
};

export default TicketSplitter;
