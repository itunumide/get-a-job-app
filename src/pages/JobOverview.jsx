import "./JobOverview.css";
import logo from "../assets/Logos.svg";
// import next from "../assets/Next Arrow.svg";
import learn from '../assets/Learn More.svg'

const JobOverview = () => {
  return (
    <div className="job-overview__info">
      <div className="job-overview__info-text">
        <h3 className="job-overview__info-title">
          Over 1000+ jobs from top companies in our network
        </h3>
        <p className="job-overview__info-description">
          Every day we index millions of jobs directly from employer websites.
          We are committed to accurate, high-quality jobs so you won’t find old,
          duplicated, or spammy listings here.
        </p>
        <p className="job-overview__info-description">
          Organize and automate your job search while at home or on the go.
          We’ll deliver new, relevant jobs of interest straight to your inbox.
        </p>
        <div className="job-overview__info-learn-more">
          <img src={learn} alt="next arrow" />
        </div>
      </div>
      <div className="job-overview__info-image">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default JobOverview;
