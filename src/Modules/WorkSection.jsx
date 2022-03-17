import Work from "../Components/Work";
import Card from "../Components/Card";
import PROJECTS from "../Utilities/PROJECTS";

const WorkSection = () => {
  console.log(PROJECTS);

  return (
    <div>
      <div className="cards-section">
        <Card title="aster" image="../images/aster-card-mini.jpg" />
        <Card title="veggit" image="../images/veggit-card-mini.png" />
      </div>
      <div id="work" className="section">
        <h2>RECENT PROJECTS</h2>
        <div className="work-wrapper">
          <div className="skills">
            <ul>
              <li>
                <img src="../images/svg/icons8-react.svg" alt="React JS Icon" />
              </li>
              <li>
                <img
                  src="../images/svg/icons8-node-js.svg"
                  alt="Node JS Icon"
                />
              </li>
              <li>
                <img src="../images/svg/expressjs.svg" alt="Express JS Icon" />
              </li>
              <li>
                <img
                  src="../images/svg/icons8-mongodb.svg"
                  alt="MongoDb Icon"
                />
              </li>
            </ul>
          </div>
          <Work
            title="veggit: recipe editor and saver"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit
          similique quidem, debitis officiis excepturi molestias expedita minus
          saepe consequatur porro aliquid, maiores quibusdam enim deleniti, qui
          commodi voluptatum aliquam architecto aspernatur? Cupiditate, ea
          magni? Expedita eligendi consequuntur molestiae perspiciatis fugiat
          non ex. Optio soluta animi, dicta ipsum sunt doloribus."
            image="../images/veggit-mockup.png"
          />
        </div>
        <div className="work-wrapper">
          <div className="skills work-aster">
            <ul>
              <li>
                <img
                  src="../images/svg/ruby-on-rails.svg"
                  alt="Ruby on Rails Icon"
                />
              </li>
              <li>
                <img
                  src="../images/svg/icons8-javascript.svg"
                  alt="Javascript Icon"
                />
              </li>
              <li>
                <img
                  className="image-css"
                  src="../images/svg/css.svg"
                  alt="CSS Icon"
                />
              </li>
            </ul>
          </div>
          <Work
            title="aster reste"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit
          similique quidem, debitis officiis excepturi molestias expedita minus
          saepe consequatur porro aliquid, maiores quibusdam enim deleniti, qui
          commodi voluptatum aliquam architecto aspernatur? Cupiditate, ea
          magni? Expedita eligendi consequuntur molestiae perspiciatis fugiat
          non ex. Optio soluta animi, dicta ipsum sunt doloribus."
            image="../images/aster-mockup.png"
          />
        </div>
        <div className="work-wrapper">
          <div className="skills">
            <ul>
              <li>
                <img
                  src="../images/svg/icons8-wordpress.svg"
                  alt="Wordpress Icon"
                />
              </li>
              <li>
                <img
                  src="../images/svg/php-programming-language.svg"
                  alt="php icon"
                />
              </li>
              <li>
                <img
                  src="../images/svg/icons8-bootstrap.svg"
                  alt="Twitter bootstrap Icon"
                />
              </li>
              <li>
                <img
                  className="image-gulp"
                  src="../images/svg/gulp-js.svg"
                  alt="Gulp JS icon"
                />
              </li>
            </ul>
          </div>
          <Work
            title="sound street radio"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit
          similique quidem, debitis officiis excepturi molestias expedita minus
          saepe consequatur porro aliquid, maiores quibusdam enim deleniti, qui
          commodi voluptatum aliquam architecto aspernatur? Cupiditate, ea
          magni? Expedita eligendi consequuntur molestiae perspiciatis fugiat
          non ex. Optio soluta animi, dicta ipsum sunt doloribus."
            image="../images/veggit-mockup.png"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
