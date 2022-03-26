import WorkSection from "../Modules/WorkSection";
import SectionHeader from "../Components/SectionHeader";
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
          <section className="section" id="contact">
            <SectionHeader text="CONTACT" />
            <div className="form-wrapper">
              <form className="form-wrapper__form">
                <div className="form-name-email">
                  <input
                    className="auth-input"
                    type="text"
                    id="name"
                    placeholder="Name"
                    tabIndex={1}
                  />
                  <input
                    className="auth-input"
                    type="email"
                    required
                    id="email"
                    placeholder="Email"
                    tabIndex={1}
                  />
                </div>
                <textarea
                  className="auth-input"
                  placeholder="Message"
                ></textarea>

                <button type="submit" tabIndex={3}>
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default HomePage;
