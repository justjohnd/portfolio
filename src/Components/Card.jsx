import { useState } from "react";
import { Transition, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import CardDefault from "./CardDefault";
import Work from "./Work";

const CardButton = styled.button`
  position: relative;
  width: 100%;
  height: 15rem;
  padding: 0.5rem;
  margin: 1rem 0;
  background: ${(props) => props.cardBackground};
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  border-color: none;
  border: 0px;
  transition: transform 300ms ease-in-out, box-shadow 300ms ease,
    background 100ms ease;
  &:hover {
    box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
    transform: translateY(-0.25rem);
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    width: 32%;
    margin: 0;
  }
  @media (min-width: 992px) {
    max-height: 15rem;
  }
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: fill;
  margin: 0 auto;
  box-sizing: border-box;
  @media (min-width: 768px) {
    width: 100%;
    padding-bottom: 1rem;
  }
`;

const Card = (props) => {
  const [cardDefault, setCardDefault] = useState(0);
  const [showCardFace, setShowCardFace] = useState(true);
  const [showMockup, setShowMockup] = useState(false);
  const { cardBackground, image, id } = props.project;

  const handleCardDesktop = () => {
    props.showWorkInfo(props.project);
  };

  return (
    <>
      {showCardFace && (
        <CardButton
          className="d-flex d-md-none"
          cardBackground={cardBackground}
          onClick={() => setShowMockup(true)}
        >
          <CardDefault project={props.project}></CardDefault>
        </CardButton>
      )}

      <CSSTransition
        in={showMockup}
        timeout={300}
        classNames="fade"
        unmountOnExit
        onEnter={() => setShowCardFace(false)}
        onExited={() => setShowCardFace(true)}
      >
        <div>
          <CardButton
            className="d-flex d-md-none"
            onClick={() => setShowMockup(false)}
            cardBackground={cardBackground}
          >
            <Image src={image}></Image>
          </CardButton>
          <div className="mobile-work-wrapper d-block d-md-none mx-sm-4 mx-md-0">
            <Work showInfo={props.project}></Work>
          </div>
        </div>
      </CSSTransition>

      <CardButton
        className="d-none d-md-flex"
        cardBackground={cardBackground}
        onClick={handleCardDesktop}
      >
        <CardDefault project={props.project}></CardDefault>
      </CardButton>
    </>
  );
};

export default Card;
