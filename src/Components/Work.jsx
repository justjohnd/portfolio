const Work = (props) => {
  return (
    <div className="work">
      <div className="work-col">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className="work-col">
        <img src={props.image}></img>
      </div>
    </div>
  );
};

export default Work;
