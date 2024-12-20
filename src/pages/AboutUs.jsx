import "./AboutUs.css";
import GetStarted from "../components/GetStarted";
import Testimonial from "../components/Testimonial";

const AboutUs = () => {
  return (
    <div className="testimonials">
      <h2 className="section-title">What are our customers saying</h2>

      <Testimonial />
      <GetStarted className="get-started-button" />
    </div>
  );
};

export default AboutUs;
