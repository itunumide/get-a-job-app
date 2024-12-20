import "./JobsCard.css";
import mapPin from "../assets/map pin.svg";

const JobsCard = ({
  jobType,
  companyLogo,
  jobTitle,
  companyName,
  location,
}) => {
  return (
    <div className="jobs-card">
      <div className="card-header">
        <span className="job-type">{jobType}</span>
        <img
          src={companyLogo}
          alt={`${companyName} logo`}
          className="company-logo"
        />
        <p className="job-title">{jobTitle}</p>
      </div>
      <hr className="divider" />
      <div className="card-footer">
        <span className="company-name">{companyName}</span>
        <div className="footer-details">
          <div className="location">
            <img src={mapPin} alt="Location" className="location-icon" />
            <p className="text">{location}</p>
          </div>
          <span className="action-text">Apply now</span>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
