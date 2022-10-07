import IntroSection from "../Modules/IntroSection";
import WorkSection from "../Modules/WorkSection";
import ContactSection from "../Modules/ContactSection";
import FadeWrapper from "../Utilities/FadeWrapper";
import IconChevron from "../Components/IconChevron";

const HomePage = () => {
  return (
    <div>
      {FadeWrapper(
        <div>
          <IntroSection />
          <div class="color-transition">
            <div className="color-transition-chevron">
              <IconChevron></IconChevron>
            </div>
            <div class="intro-trans intro-br-0"></div>
            <div class="intro-trans intro-br-1"></div>
            <div class="intro-trans intro-br-2"></div>
            <div class="intro-trans intro-br-3"></div>
            <div class="intro-trans intro-br-4"></div>
          </div>
          <WorkSection />
          <ContactSection />
        </div>
      )}
    </div>
  );
};

export default HomePage;
