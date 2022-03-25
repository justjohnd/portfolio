import { CSSTransition } from "react-transition-group";

const FadeWrapper = (section) => {
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
      {section}
    </CSSTransition>
  );
};

export default FadeWrapper;
