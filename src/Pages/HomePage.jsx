import WorkSection from "../Modules/WorkSection";
import FadeWrapper from "../Utilities/FadeWrapper";

const HomePage = () => {
  return (
    <div>
      {FadeWrapper(
        <div>
          <section className="intro-wrapper">
            <h1>Hi, I'm John!</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ullam dignissimos, expedita vero repudiandae veniam ad
              ducimus adipisci, provident quia dicta nam voluptatem harum
              accusamus!
            </p>
          </section>
          <WorkSection />
          <section id="contact">
            <h1>Contact</h1>
          </section>
        </div>
      )}
    </div>
  );
};

export default HomePage;
