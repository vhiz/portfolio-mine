import "./contact.scss";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { useState } from "react";
import axios from "axios";

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
      await axios.post("http://localhost:3004/mail", message);
      setMessage(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <HandshakeOutlinedIcon className="shake" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <textarea
            placeholder="Message"
            name="message"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks for reaching out</span>}
        </form>
      </div>
    </div>
  );
}
