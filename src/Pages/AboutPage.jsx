import FadeWrapper from "../Utilities/FadeWrapper";
import IconDisplay from "../Utilities/IconDisplay";

const AboutPage = () => {
  const github = IconDisplay("github");
  const linkedin = IconDisplay("linkedin");

  return (
    <div>
      {FadeWrapper(
        <>
          <div className="d-block d-sm-none">
            <img className="about-image" src="../images/self-mini.jpg"></img>
          </div>
          <section className="about-wrapper">
            <div className="w-100 w-sm-50 about-col-left">
              <h1 className="about-title">John Denlinger</h1>
              <p className="about-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                placeat optio ratione libero sint quidem voluptatibus?
                Architecto, qui nulla. Soluta harum ullam facilis animi nesciunt
                officia doloremque dolorem, quidem deserunt.<br></br>
                <br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                placeat optio ratione libero sint quidem voluptatibus?
                Architecto, qui nulla. Soluta harum ullam facilis animi nesciunt
                officia doloremque dolorem, quidem deserunt.
              </p>
              <div className="about-icons">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/justjohnd"
                >
                  <img
                    src={github.image}
                    className={`image-${github.name}`}
                    alt={github.alt}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/john-denlinger-75761665/"
                >
                  <img
                    src={linkedin.image}
                    className={`image-${linkedin.name}`}
                    alt={linkedin.alt}
                  />
                </a>
              </div>
            </div>
            <div className="about-col-right d-none d-sm-block">
              <img className="about-image" src="../images/self-mini.jpg"></img>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default AboutPage;
