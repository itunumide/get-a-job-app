import "./GetStarted.css";
import getStarted from "../assets/Mask Group-1.png";
import Button from "../components/reuseable/Button";

const GetStarted = () => {
  return (
    <div className="get-started-container">
      <img className="get-started-image" src={getStarted} alt="get started" />
      <div className="get-started-content">
        <h3 className="get-started-title">Get a Job you actually like</h3>
        <p className="get-started-description">
          Create an account and start applying
        </p>
        <Button
          text={"Get Started"}
          color={"#ffffff"}
          width={"200px"}
          backgroundColor={"#06942A"}
          className="get-started-button"
        />
      </div>
    </div>
  );
};

export default GetStarted;
