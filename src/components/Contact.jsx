import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {

  return (

    <section id="contact">

      <h2 className="section-title">
        Contact
      </h2>

      <div className="card">

        <form className="grid">

          <input
            type="text"
            placeholder="Your Name"
            required
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            style={inputStyle}
          />

          <button className="btn primary-btn">
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
            href="https://linkedin.com/"
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
  borderRadius:"10px",
  border:"1px solid #1e293b",
  background:"#0f172a",
  color:"white"
};

export default Contact;