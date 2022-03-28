import { v4 as uuidv4 } from "uuid";
import skillDisplay from "./WorkskillDisplay";

const Work = (props) => {
  const { skills, name, description, image, url, github } = props.showInfo;

  return (
    <>
      <div className="skills w-md-50">
        <ul>
          {skills.map((skill) => {
            const { image, alt, name } = skillDisplay(skill);
            return (
              <li key={uuidv4()}>
                <img src={image} className={`image-${name}`} alt={alt} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="work">
        <div className="w-md-50">
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="work-links">
            <a target="_blank" rel="noopener noreferrer" href={url}>
              LIVE SITE
            </a>
            <a target="_blank" rel="noopener noreferrer" href={github}>
              GITHUB
            </a>
          </div>
        </div>
        <div className="w-50 d-none d-md-block">
          <img className="image-mockup" src={image}></img>
        </div>
      </div>
    </>
  );
};

export default Work;
