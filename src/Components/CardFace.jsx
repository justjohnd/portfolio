import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  max-height: 15rem;
  height: 90%;
  object-fit: cover;
  align-self: end;
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

const CardFace = (props) => {
  const {
    nickname,
    shortDescription,
    cardImgSm,
    cardImgMd,
    cardImgLg,
    id,
    alt,
  } = props.project;

  return (
    <>
      <CardName>
        <div>{nickname}</div>
        <SmallPrint>{shortDescription}</SmallPrint>
      </CardName>
      <Image
        srcset={`${cardImgSm} 768w, 
             ${cardImgMd} 2000w, 
             ${cardImgLg} 4000w`}
        id={id}
        src={cardImgMd}
        alt={alt}
      ></Image>
    </>
  );
};

export default CardFace;
