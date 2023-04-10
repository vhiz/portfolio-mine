import "./contact.scss";
import { useState } from "react";
import axios from "axios";
import Map from "../../map/Map";

export default function Contact() {
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [message, setMessage] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const message = { ...inputs };
      await axios.post("https://portfolio-9134.onrender.com/mail", message);
      setMessage(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contanier">
        <div className="left">
          <form onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <textarea
              placeholder="Message"
              name="message"
              onChange={handleChange}
              rows={10}
            ></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks for reaching out</span>}
          </form>
        </div>
        <div className="right">
          <Map />
        </div>
      </div>
    </div>
  );
}
