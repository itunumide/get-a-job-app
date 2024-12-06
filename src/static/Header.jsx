import "./Header.css";
import logo from "../assets/getajob_logo-removebg-preview.svg";
import Button from "../components/reuseable/Button";
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
      <nav className="nav" aria-label="Main Navigation">
        <a href="/companies" className="nav-link">
          Companies
        </a>
        <a href="/candidates" className="nav-link">
          Candidates
        </a>
        <a href="/assessment" className="nav-link">
          Assessment
        </a>
        <a href="/post-job" className="nav-link">
          Post a Job
        </a>
        <a href="/career-advice" className="nav-link">
          Career Advice
        </a>
      </nav>
      <div className="button-container">
        <a href="signup">Sign Up</a>
        <Button text={"Log In"} color={"#06942A"}  width={"160px"} backgroundColor={"#06942A33"}/>
      </div>
    </header>
  );
};

export default Header;
