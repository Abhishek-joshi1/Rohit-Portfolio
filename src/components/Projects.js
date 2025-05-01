import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import video1 from "../assets/Rohit Files/Videos/Video 1.mp4";
import video2 from "../assets/Rohit Files/Videos/Video 2.mp4";
import video3 from "../assets/Rohit Files/Videos/Video 3.mp4";
import video4 from "../assets/Rohit Files/Videos/Video 4.mp4";
import video5 from "../assets/Rohit Files/Videos/Video 5.mp4";

export const Projects = () => {
  const projects = [
    {
      title: "SoundX Wireless Earbuds - Premium Sound Experience Review",
      description: "Client Request - Create a modern, engaging product review video that highlights the core strengths of the SoundX wireless earbuds—especially sound quality, noise cancellation, comfort, and affordability. The goal is to influence potential buyers through a persuasive yet clean review style.",
      tools: "Tools used - I used Adobe Premiere Pro for video editing and sequencing, After Effects for motion graphics and animated text, DaVinci Resolve for advanced color grading, and Adobe Audition for enhancing the audio and voiceover quality.",
      videoUrl : video1
    },
    {
      title: "Tata Crossover - IPL Edition Hype Video",
      description: " Client Request - Create a high-energy promotional video that showcases the Tata crossover vehicle in a fun, engaging way, tied to IPL cricket themes and moments. Highlight the vehicle's design, features, and premium appeal while connecting emotionally with cricket fans.",
      tools: "I used Adobe Premiere Pro for video editing and sequencing, After Effects for motion graphics and animated text, DaVinci Resolve for advanced color grading, and Adobe Audition for enhancing the audio and syncing sound effects with visuals.",
      videoUrl : video2
    },
    {
      title: "GlowSync Hydra Boost - Real Skin, Real Results",
      description: "Create an authentic, visually appealing skincare testimonial video for the GlowSync Hydra Boost serum. The goal is to highlight real user experience, product effectiveness, and key selling points like clean ingredients and aesthetic packaging.",
      tools: "I used Adobe Premiere Pro for video editing and sequencing, After Effects for subtle motion graphics and text highlights, DaVinci Resolve for soft and natural color grading, and Adobe Audition to enhance and clean the testimonial audio.",
      videoUrl : video3
    },
  ];
  const projects2 = [
    {
      title: "LandChain - Blockchain-Powered Land Tokenization Explained",
      description: "Create a short, informative explainer video about land tokenization using blockchain technology. Emphasize the benefits of smart contracts, transparency, and secure land registry without the need for traditional notary systems.",
      tools: "I used Adobe Premiere Pro for core editing and sequencing, After Effects for animated infographics and text, DaVinci Resolve for consistent, futuristic grading, and Adobe Audition to polish the audio for clarity and impact.",
      videoUrl : video4
    },
    {
      title: "China Exposes Western Luxury Brands After US Tariffs | Real Price Revealed!",
      description: "Create an engaging and thought-provoking short video that reveals how Chinese manufacturers are exposing the hidden markups of global luxury brands. Highlight China's unity, the price disparity in the West, and the direct-to-consumer manufacturing model.",
      tools: "I used Adobe Premiere Pro for tight edits and pacing, After Effects for animated callouts and visual emphasis, DaVinci Resolve for vivid color correction, and Adobe Audition for voice clarity and sound balancing.",
      videoUrl : video5
    },
    {
      title: "SoundX Wireless Earbuds - Premium Sound Experience Review",
      description: "Client Request - Create a modern, engaging product review video that highlights the core strengths of the SoundX wireless earbuds—especially sound quality, noise cancellation, comfort, and affordability. The goal is to influence potential buyers through a persuasive yet clean review style.",
      tools: "Tools used - I used Adobe Premiere Pro for video editing and sequencing, After Effects for motion graphics and animated text, DaVinci Resolve for advanced color grading, and Adobe Audition for enhancing the audio and voiceover quality.",
      videoUrl : video1
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>WorK Experiences</h2>
                  <p>
                  🎥 Take a look at my past video editing projects!
                  Every clip is crafted with creativity and passion —
                  Explore my work and see how I bring stories to life.
                  (Your next project could be the next masterpiece!)
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Section 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Section 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Section 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <p>
                        <a href="https://wa.me/918955765205" target="_blank">📱 Message me on WhatsApp</a>
                      </p>

                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};