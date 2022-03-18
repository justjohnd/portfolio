import skillDisplay from "./WorkskillDisplay";

const Work = (props) => {
  const { skills, name, description, image } = props.showInfo;

  return (
    <div>
      <div className="skills">
        <ul>
          {skills.map((skill) => {
            const { image, alt } = skillDisplay(skill);
            return (
              <li>
                <img src={image} alt={alt} />
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
