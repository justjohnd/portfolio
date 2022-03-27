import styled from "styled-components";

const CardStyle = styled.button`
  position: relative;
  width: 100%;
  max-height: 15rem;
  padding: 0.5rem;
  margin: 1rem 0;
  background: ${(props) => props.cardBackground};
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  border-color: none;
  border: 0px;
  transition: transform 300ms ease-in-out, box-shadow 400ms ease,
    background 100ms ease;
  &:hover {
    box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
    transform: translateY(-0.25rem);
  }
  @media (min-width: 576px) {
    margin: 1rem 2rem;
  }
  @media (min-width: 768px) {
    width: 32%;
    margin: 0;
  } ;
`;

const Image = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  border-radius: 100% 0 0 0;
  box-sizing: border-box;
  object-position: ${(props) => (props.id === 3 ? "35px -10px" : "")};
  background-color: #000;
`;

const CardName = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  color: #1e3643;
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 1;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

const SmallPrint = styled.div`
  font-size: 1rem;
  color: #fff;
  margin-top: 0.25rem;
  text-align: left;
`;

const Card = (props) => {
  const { nickname, shortDescription, cardImage } = props.project;

  return (
    <CardStyle
      cardBackground={props.project.cardBackground}
      onClick={() => props.handleCard(props.project)}
    >
      <CardName>
        <div>{nickname}</div>
        <SmallPrint>{shortDescription}</SmallPrint>
      </CardName>
      <Image id={props.project.id} src={cardImage}></Image>
    </CardStyle>
  );
};

export default Card;
