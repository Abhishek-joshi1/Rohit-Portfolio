import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/Rohit Files/Current SVG.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Designer", "Video Editor", "Finance Executive"];
  const period = 2000;

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(500);
    }
  }, [text, loopNum, isDeleting, toRotate, period]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="banner-video">
        <source src="/color-smoke.3840x2160.mp4" type="video/mp4" />
      </video> 

      {/* Content */}
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! 👋 I'm Rohit Joshi`}{" "}
                    <span className="txt-rotate" data-period="1000" data-rotate={JSON.stringify(toRotate)}>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  I'm a creative professional with expertise in Video Editing, Web Design, and Graphic Design, bringing ideas to life through tools like Adobe Premiere Pro, After Effects, Photoshop, Illustrator, Figma, and WordPress. With a strong eye for detail and a passion for visual storytelling, I create engaging video content, design modern, responsive websites, and craft impactful graphics that align with brand identities. My work is driven by creativity, technical skill, and a commitment to delivering high-quality digital experiences.
                  </p>
                  <Router>
                    <HashLink to='#connect'>
                      <button className="vvd"><span>Let's Connect</span></button>
                    </HashLink>
                  </Router>


                  
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  { <img src={headerImg} alt="Header" /> }
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
    
  );
};