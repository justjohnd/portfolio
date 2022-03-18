import styled from "styled-components";

const Card = (props) => {
  const Card = styled.div`
    position: relative;
    width: 30%;
    max-height: 15rem;
    padding: 0.5rem;
    background: ${props.cardBackground};
    border-radius: 8px;
    display: flex;
    align-items: flex-end;
  `;

  const Image = styled.img`
    width: 100%;
    height: 90%;
    object-fit: cover;
    border-radius: 100% 0 0 0;
    box-sizing: border-box;
    object-position: ${props.id === 3 ? "35px -10px" : ""};
    background-color: #000;
  `;

  return (
    <Card>
      <div className="card-name">
        <div>{props.title}</div>
        <div className="small">{props.shortDescription}</div>
      </div>
      <Image src={props.image}></Image>
    </Card>
  );
};

export default Card;
