import { v4 as uuidv4 } from "uuid";
import IconDisplay from "../Utilities/IconDisplay";

const Work = (props) => {
  const {
    skills,
    name,
    description,
    imageSm,
    imageMd,
    imageLg,
    alt,
    url,
    github,
  } = props.showInfo;

  return (
    <div className="js-reveal-section">
      <div className="skills w-md-50">
        <ul>
          {skills.map((skill) => {
            const { image, alt, name } = IconDisplay(skill);
            return (
              <li key={uuidv4()}>
                <img src={image} className={`image-${name}`} alt={alt} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="work mb-4 mb-md-0">
        <div className="w-md-50 work-info left">
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
        <div className="w-50 work-info right d-none d-md-block">
          <img
            className="image-mockup"
            srcset={`${imageSm} 768w, 
             ${imageMd} 2000w, 
             ${imageLg} 4000w`}
            src={imageMd}
            alt={alt}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Work;
