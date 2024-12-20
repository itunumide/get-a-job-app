import "./Testimonial.css";
import Arrow from "../components/reuseable/Arrow";
import imgb from "../assets/Rectangle 9.svg";
import img from "../assets/Rectangle 9.1.png";

const Testimonial = () => {
  return (
    <div className="testimonials-section">
      <div className="testimonial-image-container">
        <img src={imgb} alt="" className="testimonial-background" />
        <img src={img} alt="" className="testimonial-image" />
      </div>
      <div className="testimonial-content">
        <span className="customer-avatar">“</span>
        <p className="testimonial-text">
          The platform is really convenient to reach out to companies & I have
          managed to secure 2 interviews already! I can also track my
          application status instead of wondering whether the company has seen
          or shortlisted me.
        </p>
        <span className="customer-name">Irma Black</span>
        <span className="customer-position">HR Manager at MasterCard</span>
      </div>
      <Arrow className="arrow-icon" />
    </div>
  );
};

export default Testimonial;
