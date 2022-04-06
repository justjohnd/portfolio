import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import CardFace from "./CardFace";
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

const MockupImage = styled.img`
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
  const [showCardFace, setShowCardFace] = useState(true);
  const [showMockup, setShowMockup] = useState(false);
  const { cardBackground, imageSm, imageMd, imageLg, alt } = props.project;

  const handleCardDesktop = () => {
    props.showWorkInfo(props.project);
  };

  return (
    <>
      {/* Mobile Section */}
      {showCardFace && (
        <CardButton
          className="d-flex d-md-none"
          cardBackground={cardBackground}
          onClick={() => setShowMockup(true)}
        >
          <CardFace project={props.project}></CardFace>
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
            <MockupImage
              srcset={`${imageSm} 768w, 
             ${imageMd} 2000w, 
             ${imageLg} 4000w`}
              src={imageMd}
              alt={alt}
            ></MockupImage>
          </CardButton>
          <div className="mobile-work-wrapper d-block d-md-none mx-sm-4 mx-md-0">
            <Work showInfo={props.project}></Work>
          </div>
        </div>
      </CSSTransition>

      {/* Desktop Section */}
      <CardButton
        className="d-none d-md-flex"
        cardBackground={cardBackground}
        onClick={handleCardDesktop}
      >
        <CardFace project={props.project}></CardFace>
      </CardButton>
    </>
  );
};

export default Card;
