const Card = (props) => {
  return (
    <div className="card">
      <div className="card-name">
        <span>{props.title}</span>
      </div>
      <img className="card-image" src={props.image}></img>
    </div>
  );
};

export default Card;
