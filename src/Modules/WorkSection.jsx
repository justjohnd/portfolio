import { useState } from "react";
import Work from "../Components/Work";
import Cards from "../Components/Cards";
import PROJECTS from "../Utilities/PROJECTS";

const WorkSection = () => {
  const [showInfo, setShowInfo] = useState(PROJECTS[1]);

  const handleCard = (project) => {
    setShowInfo(project);
  };

  console.log(showInfo);

  return (
    <div>
      <div id="work" className="section">
        <h2>RECENT PROJECTS</h2>
        <Cards projects={PROJECTS} handleCard={handleCard}></Cards>
        <div className="work-wrapper">
          <Work
            title={showInfo.name}
            description={showInfo.description}
            image={showInfo.image}
            skills={showInfo.skills}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
