import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/Rohit Files/manOnTable.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs.sendForm(
      "service_574hozp",  // Replace with your actual Service ID
      "template_i4n0wgs", // Replace with your actual Template ID
      form.current,
      "3StBebZAl37PAdetZ"   // Replace with your actual Public Key
    )
    .then((result) => {
      console.log("Email sent:", result.text);
      setStatus({ success: true, message: "Message sent successfully!" });
    })
    .catch((error) => {
      console.log("Email sending error:", error.text);
      setStatus({ success: false, message: "Something went wrong. Please try again." });
    })
    .finally(() => {
      setButtonText("Send");
      form.current.reset(); // Reset the form after sending
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="user_name" placeholder="First Name" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="user_lastname" placeholder="Last Name" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="user_email" placeholder="Email Address" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="user_phone" placeholder="Phone No." required />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" placeholder="Message" required></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success ? "success" : "danger"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};