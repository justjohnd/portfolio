import { useState } from "react";
import Work from "../Components/Work";
import Cards from "../Components/Cards";
import PROJECTS from "../Utilities/PROJECTS";

const WorkSection = () => {
  const [showInfo, setShowInfo] = useState(PROJECTS[1]);

  const handleCard = (project) => {
    setShowInfo(project);
  };

  return (
    <div>
      <div id="work" className="section">
        <Cards projects={PROJECTS} handleCard={handleCard}></Cards>
        <div className="work-wrapper">
          <Work showInfo={showInfo} />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
