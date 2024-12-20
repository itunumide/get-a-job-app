import JobsCard from "../components/JobsCard";
import "./Companies.css";
import paystackLogo from "../assets/image 2.svg";
import googleLogo from "../assets/image (1).svg";
import flutterLogo from "../assets/image.svg";
import accessLogo from "../assets/Group.svg";
import compimg from "../assets/Group 13.png";
import JobGuide from "../components/JobGuide";
import Arrow from "../components/reuseable/Arrow";

const Companies = () => {
  return (
    <div className="recommended-jobs-section">
      <h1 className="section-title">Recommended Jobs</h1>
      <div className="arrow-job">
        <div className="jobs-list">
          <JobsCard
            jobType="Full time"
            companyLogo={paystackLogo}
            jobTitle="QA Engineer"
            companyName="Paystack"
            location="Lagos, Nigeria"
          />
          <JobsCard
            jobType="Part time"
            companyLogo={googleLogo}
            jobTitle="Product Analyst"
            companyName="Google"
            location="Lagos, Nigeria"
          />
          <JobsCard
            jobType="Full time"
            companyLogo={flutterLogo}
            jobTitle="HR Manager"
            companyName="Flutterwave"
            location="Abuja, Nigeria"
          />
          <JobsCard
            jobType="Full time"
            companyLogo={accessLogo}
            jobTitle="QA Engineer"
            companyName="Paystack"
            location="Lagos, Nigeria"
          />
        </div>
        <Arrow align={"flex-end"}/>
      </div>
      <div className="how-it-works-section">
        <div className="image-container">
          <img src={compimg} alt="" className="how-it-works-image" />
        </div>
        <div className="text-container">
          <h2 className="subsection-title">How it works</h2>
          <p className="subsection-text">
            Getajob helps you find the right job easily. Getajob helps you find
            the right job easily. Getajob helps you find the right job easily.
          </p>
          <div className="job-guides">
            <JobGuide
              title={"Search Jobs"}
              text={
                "We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity."
              }
            />
            <JobGuide
              title={"Create a Profile and Get Noticed"}
              text={
                "Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily."
              }
            />
            <JobGuide
              title={"Apply for jobs"}
              text={
                "Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
