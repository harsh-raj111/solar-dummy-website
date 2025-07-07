
import React, { useState } from "react";
import "../style/Contact.css";
import solarimg from '../Resource/pexels-red-zeppelin-4148472.jpg';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // ✅ Your actual access key here
    formData.append("access_key", "a3b4f5c4-64d0-42c9-b52e-72127a51bc15");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="Contact" style={{ backgroundImage: `url(${solarimg})` }}>
        <div className="contactForm">
          <div className="contact-title">
            <h1 className="contactTitle">Contact us</h1>
            <h2 className="subtitle">Reach Out to Us for Any Inquiries or Support !!</h2>
          </div>
          <div className="user-input">
            <input
              type="text"
              className="name"
              name="name"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              className="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <input
              type="text"
              className="message"
              name="message"
              placeholder="Write here to connect with us!"
              required
            />
            <button type="submit" className="contactbtn">Submit</button>

            {/* ✅ Submission status */}
            <p style={{ marginTop: "10px", color: "white" }}>{result}</p>
          </div>
        </div>
      </div>
    </form>
  );
}

