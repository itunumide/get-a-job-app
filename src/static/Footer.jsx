import "./Footer.css";
import linkedin from "../assets/Linkedin Icon.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/Vector.svg";
import logo from "../assets/logo..svg";
import instagram from "../assets/insta.svg";

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer-content">
        <div class="footer-about">
          <div className="footer-logo-container">
            <img src={logo} alt="Logo" class="footer-logo" />
          </div>
          <p class="footer-description">
            Getajobng provides a full online service for anyone looking for a
            new job. We're not a recruitment agency, we're a job site.
          </p>
        </div>
        <div class="footer-info">
          <h4 class="footer-heading">Information</h4>
          <a href="" class="footer-link">
            About Us
          </a>
          <a href="" class="footer-link">
            Contact Us
          </a>
          <a href="" class="footer-link">
            Terms & Condition
          </a>
        </div>
        <div class="footer-job-seekers">
          <h4 class="footer-heading">Job Seekers</h4>
          <a href="" class="footer-link">
            Create Account
          </a>
          <a href="" class="footer-link">
            Job List
          </a>
          <a href="" class="footer-link">
            FAQ
          </a>
        </div>
        <div class="footer-employers">
          <h4 class="footer-heading">Employers</h4>
          <a href="" class="footer-link">
            Create Account
          </a>
          <a href="" class="footer-link">
            Post a Job
          </a>
          <a href="" class="footer-link">
            FAQ
          </a>
        </div>
        <div class="footer-social-media">
          <h4 class="footer-heading">Social Media:</h4>
          <div class="footer-social-icons">
            <div class="social-icon">
              <img src={instagram} alt="instagram" />
            </div>
            <div class="social-icon">
              <img src={twitter} alt="Twitter" />
            </div>
            <div class="social-icon">
              <img src={facebook} alt="Facebook" />
            </div>
            <div class="social-icon">
              <img src={linkedin} alt="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
      <p class="footer-copyright">
        © Copyright Get A Job RMS 2019, All rights reserved
      </p>
    </div>
  );
};

export default Footer;
