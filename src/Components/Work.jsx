import { v4 as uuidv4 } from "uuid";
import skillDisplay from "./WorkskillDisplay";

const Work = (props) => {
  const { skills, name, description, image } = props.showInfo;

  return (
    <div>
      <div
        className={
          props.clicked === true ? "skills fade-in" : "skills work-col"
        }
      >
        <ul>
          {skills.map((skill) => {
            const { image, alt } = skillDisplay(skill);
            return (
              <li key={uuidv4()}>
                <img src={image} alt={alt} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="work">
        <div
          className={props.clicked === true ? "work-col fade-in" : "work-col"}
        >
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div
          className={props.clicked === true ? "work-col fade-in" : "work-col"}
        >
          <img src={image}></img>
        </div>
      </div>
    </div>
  );
};

export default Work;
