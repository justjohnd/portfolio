import IntroSection from "../Modules/IntroSection";
import WorkSection from "../Modules/WorkSection";
import ContactSection from "../Modules/ContactSection";
import FadeWrapper from "../Utilities/FadeWrapper";

const HomePage = () => {
  return (
    <div>
      {FadeWrapper(
        <div>
          <IntroSection />
          <WorkSection />
          <ContactSection />
        </div>
      )}
    </div>
  );
};

export default HomePage;
