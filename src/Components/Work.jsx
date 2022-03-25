import { v4 as uuidv4 } from "uuid";
import skillDisplay from "./WorkskillDisplay";

const Work = (props) => {
  const { skills, name, description, image } = props.showInfo;

  return (
    <div>
      <div className="skills work-col">
        <ul>
          {skills.map((skill) => {
            const { image, alt } = skillDisplay(skill);
            return (
              <li key={uuidv4()}>
                <img src={image} className={`image-${skill}`} alt={alt} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="work">
        <div className="work-col">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="work-col">
          <img src={image}></img>
        </div>
      </div>
    </div>
  );
};

export default Work;
