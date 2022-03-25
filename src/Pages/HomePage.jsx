import { CSSTransition } from "react-transition-group";
import WorkSection from "../Modules/WorkSection";

const HomePage = () => {
  return (
    <div>
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <div className="intro-wrapper">
          <h1>Hi, I'm John!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur ullam dignissimos, expedita vero repudiandae veniam ad
            ducimus adipisci, provident quia dicta nam voluptatem harum
            accusamus!
          </p>
        </div>
      </CSSTransition>
      <WorkSection />
    </div>
  );
};

export default HomePage;
