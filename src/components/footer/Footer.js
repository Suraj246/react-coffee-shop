import React, { useState } from "react";
import "./Footer.css";

function Contact() {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });
  const [clientData, setClientData] = useState([]);
  const [messageAfterFormSubmit, setMessageAfterFormSubmit] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    setForm({ ...form, email: "", message: "" });
    setMessageAfterFormSubmit(true);

    setTimeout(() => {
      setMessageAfterFormSubmit(false);
    }, 2000);

    const storedClientData = { ...form, id: new Date() };
    console.log(clientData);

    setClientData([...clientData, storedClientData]);
    console.log(clientData);
  };
  const handleInput = (e) => {
    const FieldName = e.target.name;
    const FieldValue = e.target.value;
    // console.log(FieldName,FieldValue)
    setForm({ ...form, [FieldName]: FieldValue });
  };
  return (
    <>
      <div className="footer" id="contact">
        <div className="contact">
          <h3 className="contact-heading">Contact Us</h3>
          <address>
            <p>Phone: 6780934976</p>
            <p>Location: Street 678677, Miami, Florida</p>
            <p>Email: asdkfjskdf@gmail.com</p>
          </address>
        </div>

        <form action="" onSubmit={formHandler}>
          <div className="form-msg">
            {messageAfterFormSubmit ? (
              <span className="msg">your request is submitted</span>
            ) : null}
          </div>
          <div className="input-contact">
            <div className="padding">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                value={form.email}
                onChange={handleInput}
                placeholder="Enter your email"
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleInput}
                placeholder="Enter Message"
                required
              ></textarea>

              <input type="submit" className="submit" required />
            </div>
          </div>
        </form>

        <div className="social-media-links">
          <div className="fb">
            <i className="bx bxl-facebook "></i>
          </div>
          <div className="twi">
            <i className="bx bxl-twitter "></i>
          </div>
          <div className="insta">
            <i className="bx bxl-instagram "></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
