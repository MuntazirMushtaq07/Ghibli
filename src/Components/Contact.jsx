import React from 'react'
import './Contact.css' // ✅ Don't forget to create this CSS file

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">📬 Contact Us</h1>
      <p className="contact-subtext">We'd love to hear from you — whether it's feedback, questions, or just saying hi!</p>

      <div className="contact-grid">
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Studio Ghibli HQ</h2>
          <p><strong>📍 Address:</strong> Kajino-cho, Koganei, Tokyo, Japan</p>
          <p><strong>📞 Phone:</strong> +81 42-000-0000</p>
          <p><strong>📧 Email:</strong> ghibli@studio.jp</p>
          <img
            src="https://imgs.search.brave.com/wGz1AXqBxs0zdHvFJkR3vtLWs6qG7QOLzCdJT5NSQBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2tkYXkuY29tL2Vu/L2Jsb2cvd3AtY29u/dGVudC91cGxvYWRz/L2Nsb2NrLTU0MDQx/NjlfMTI4MC1lMTcw/MTMwNzY1ODU5OC5q/cGc"
            alt="Studio Ghibli HQ"
            className="contact-image"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
