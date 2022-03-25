import { useState } from "react";
import Work from "../Components/Work";
import Cards from "../Components/Cards";
import PROJECTS from "../Utilities/PROJECTS";

const WorkSection = () => {
  const [showInfo, setShowInfo] = useState(PROJECTS[1]);
  const [clicked, setClicked] = useState(false);

  const handleCard = (project) => {
    if (project.id !== showInfo.id) {
      setShowInfo(project);
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 1000);
    }
  };

  return (
    <section id="work" className="section">
      <Cards projects={PROJECTS} handleCard={handleCard}></Cards>
      <div className="work-wrapper">
        <Work showInfo={showInfo} clicked={clicked} />
      </div>
    </section>
  );
};

export default WorkSection;
