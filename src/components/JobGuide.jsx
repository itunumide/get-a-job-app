import "./JobGuide.css";
import tick from "../assets/Group 5.png";

const JobGuide = ({ title, text }) => {
  return (
    <div className="feature-item">
      <div className="feature-header">
        <img src={tick} alt={title} className="feature-icon" />
        <h3 className="feature-title">{title}</h3>
      </div>
      <p className="feature-text">{text}</p>
    </div>
  );
};

export default JobGuide;
