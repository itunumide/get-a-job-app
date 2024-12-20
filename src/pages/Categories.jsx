import RoleCard from "../components/RoleCard";
import "./Categories.css";
import design from "../assets/Oil and Gas icon-1.svg";
import oil from "../assets/Oil and Gas icon.svg";
import accounting from "../assets/Accounting icon-1.svg";
import education from "../assets/Oil and Gas icon.svg";
import data from "../assets/Data Analyst Icon.svg";
import health from "../assets/Healthcare icon.svg";
import security from "../assets/Security icon.svg";
import technology from "../assets/Laptop.svg";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="popular-categories">
      <h2 className="popular-categories__title">Popular Categories</h2>
      <div className="popular-categories__list">
        <RoleCard
          image={oil}
          sector={"Oil and Gas"}
          numOfJobs={"(20 new jobs)"}
        />
        <RoleCard
          image={health}
          sector={"Healthcare"}
          numOfJobs={"(10 new jobs)"}
        />
        <RoleCard
          image={education}
          sector={"Education"}
          numOfJobs={"(10 new jobs)"}
        />
        <RoleCard
          image={accounting}
          sector={"Accounting"}
          numOfJobs={"(10 new jobs)"}
        />
        <RoleCard
          image={design}
          sector={"Design, Art and Multimedia"}
          numOfJobs={"(20 new jobs)"}
        />
        <RoleCard
          image={technology}
          sector={"Technology"}
          numOfJobs={"(10 new jobs)"}
        />
        <RoleCard
          image={security}
          sector={"Security"}
          numOfJobs={"(10 new jobs)"}
        />
        <RoleCard
          image={data}
          sector={"Data Analyst"}
          numOfJobs={"(10 new jobs)"}
        />
      </div>
    </div>
  );
};

export default Categories;
