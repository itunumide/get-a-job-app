import './JobsCard.css'

const JobsCard = ({
  jobType,
  companyLogo,
  jobTitle,
  companyName,
  location,
  actionText,
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
            <img
              src="location-icon.svg"
              alt="Location"
              className="location-icon"
            />
            <span className="location-text">{location}</span>
          </div>
          <span className="action-text">{actionText}</span>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
