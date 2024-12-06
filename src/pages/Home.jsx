import Header from "../static/Header";
import "./Home.css";
import background from "../assets/Rectangle.svg";
import heroImg from "../assets/hero-image.png";
import paystack from "../assets/paystack-removebg-preview.svg";
import google from "../assets/google-removebg-preview.svg";
import kpmg from "../assets/kpmg-removebg-preview.svg";
import mapPin from "../assets/map pin.svg";
import search from "../assets/search.svg";

const Home = () => {
  return (
    <div className="container">
      <div className="background-img">
        <img src={background} alt="" />
      </div>
      <div className="content">
        <Header />
        <div className="main-section">
          <div className="text-section">
            <h2 className="title">
              Find a <span className="highlight">job</span> easily
            </h2>
            <p className="description">
              With verified, up-to-date job listings directly from employer
              websites, we create a premium experience for job seekers,
              employers, and data seekers alike.
            </p>
            <div className="search-bar">
              <input
                type="search"
                placeholder="Enter keywords, skill, interest"
                name="search"
                id="search"
                className="search-input"
              />
              <div className="location">
                <img src={mapPin} alt="" className="location-icon" />
                <p className="location-text">Location</p>
              </div>
              <div className="search-button">
                <img src={search} alt="" className="search-icon" />
              </div>
            </div>
            <div className="trusted-by">
              <p className="trusted-text">Trusted by:</p>
              <div className="trusted-logo-container">
                <img src={paystack} alt="Paystack" className="trusted-logo" />
                <img src={google} alt="Google" className="trusted-logo" />
                <img src={kpmg} alt="KPMG" className="trusted-logo" />
              </div>
            </div>
          </div>
          <div className="image-section">
            <img src={heroImg} alt="Hero" className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
