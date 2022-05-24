import FadeWrapper from "../Utilities/FadeWrapper";
import IconDisplay from "../Utilities/IconDisplay";

const AboutPage = () => {
  const github = IconDisplay("github");
  const linkedin = IconDisplay("linkedin");

  return (
    <div>
      {FadeWrapper(
        <>
          <section className="about-wrapper">
            <div className="w-100 w-sm-75 about-col-left">
              <h1 className="about-title">John Denlinger</h1>
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
              <p className="about-text">
                Having worked in both engineering and writing for over a decade,
                I discovered programming only about two years ago. My task was
                to build a simple brochure site using a “no-code” friendly page
                builder, but that was enough to get me hooked. Soon I was
                learning everything I could about HTML, CSS, JavaScript, various
                libraries and frameworks, and a few other languages to boot.
                <br></br>
                <br></br>
                For me, programming is the locus of creativity and analytical
                thinking, a steady journey from concept to deployment. Code has
                a two-fold social aspect, not only between itself and the end
                user, but also in that other programmers may potentially have to
                interact with the code as well. Thus, my goal with any project
                is to create a smooth and delightful user experience, while also
                adhering to best practices, common design patterns, and modern
                ES6 conventions.
                <br></br>
                <br></br>
                Through my studies, I have tried to apply myself broadly enough
                to build what I feel is most fundamental to any software
                development position–a general facility for problem solving. The
                projects in this portfolio aim to represent that breadth,
                showing a number of technologies and environments, from Ruby on
                Rails to Wordpress to React. Currently, I have refined my focus
                more toward frontend development, and becoming more adept at
                both React and the deeper complexities of JavaScript.
                <br></br>
                <br></br>I am currently seeking a position with an organization
                where I can take my experience and education to the next level,
                and contribute meaningfully toward ever more complex,
                collaborative projects.
              </p>
              <div className="about-skills">
                <h2 className="mb-0">SKILLS</h2>
                <ul className="mt-0">
                  <li>
                    - Ability to write clean code using best practices and
                    modern ES6 conventions
                  </li>
                  <li>- Responsive design CRUD application development</li>
                  <li>- Experience with RESTful API</li>
                  <li>- Understanding of effective UX/UI design patterns</li>
                  <li>- SEO optimization</li>
                  <li>- Troubleshooting and debugging</li>
                  <li>
                    - Experience with participating on and leading engineering
                    teams, project planning, and project management
                  </li>
                  <li>- Excellent verbal and written communication skills</li>
                  <li>
                    - Enthusiasm for learning new skills and technologies at
                    speed
                  </li>
                </ul>
              </div>
              <div className="about-technologies">
                <h2 className="mb-0">TECHNOLOGIES</h2>
                <ul className="mt-0">
                  <li>- HTML, CSS, JavaScript</li>
                  <li>- React</li>
                  <li>- GIT, Github</li>
                  <li>- Bootstrap</li>
                  <li>- Sass</li>
                  <li>- Node.js, Express.js</li>
                  <li>- MongoDB</li>
                  <li>- Gulp.js</li>
                  <li>- Wordpress</li>
                  <li>- Ruby on Rails</li>
                </ul>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default AboutPage;
