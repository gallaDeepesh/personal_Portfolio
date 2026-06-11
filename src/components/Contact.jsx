import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(

      import.meta.env.VITE_EMAILJS_SERVICE_ID,

      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

      form.current,

      import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    )

    .then(() => {

      alert("Message sent successfully!");

      form.current.reset();

    })

    .catch(() => {

      alert("Failed to send message.");

    });
  };

  return (

    <section id="contact">

      <h2 className="section-title">
        Contact Me
      </h2>

      <div className="card">

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            style={inputStyle}
          />

          <button
            type="submit"
            className="btn primary-btn"
          >
            Send Message
          </button>

        </form>

        <div
          style={{
            marginTop:"30px",
            display:"flex",
            gap:"20px",
            fontSize:"28px"
          }}
        >

          <a href="mailto:galladeepesh@gmail.com">
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/deepesh-galla-250678293"
            target="_blank"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </section>
  );
}

const inputStyle = {
  padding:"15px",
  borderRadius:"12px",
  border:"1px solid #1e293b",
  background:"#0f172a",
  color:"white",
  fontSize:"1rem"
};

export default Contact;