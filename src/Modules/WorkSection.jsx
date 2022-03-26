import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Work from "../Components/Work";
import Cards from "../Components/Cards";
import PROJECTS from "../Utilities/PROJECTS";

const WorkSection = () => {
  const [showInfo, setShowInfo] = useState(PROJECTS[1]);

  const handleCard = (project) => {
    if (project.id !== showInfo.id) {
      setShowInfo(project);
    }
  };

  return (
    <section id="work">
      <Cards projects={PROJECTS} handleCard={handleCard}></Cards>
      <TransitionGroup className="work-wrapper">
        <CSSTransition key={showInfo.id} timeout={300} classNames="fade">
          <Work showInfo={showInfo} />
        </CSSTransition>
      </TransitionGroup>
    </section>
  );
};

export default WorkSection;
