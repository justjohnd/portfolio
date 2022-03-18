const Work = (props) => {
  return (
    <div>
      <div className="skills">
        <ul>
          <li>
            <img src="../images/svg/icons8-react.svg" alt="React JS Icon" />
          </li>
          <li>
            <img src="../images/svg/icons8-node-js.svg" alt="Node JS Icon" />
          </li>
          <li>
            <img src="../images/svg/expressjs.svg" alt="Express JS Icon" />
          </li>
          <li>
            <img src="../images/svg/icons8-mongodb.svg" alt="MongoDb Icon" />
          </li>
        </ul>
      </div>
      <div className="work">
        <div className="work-col">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
        <div className="work-col">
          <img src={props.image}></img>
        </div>
      </div>
    </div>
  );
};

export default Work;
