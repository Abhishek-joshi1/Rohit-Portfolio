import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, tools, videoUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {videoUrl && (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            style={{ width: "100%", height: "auto", borderRadius: "15px" }}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p></p>
          <span>{tools}</span>
        </div>
      </div>
    </Col>
  );
};