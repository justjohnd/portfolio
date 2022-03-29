import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import CardDefault from "./CardDefault";
import Work from "./Work";

const CardStyle = styled.button`
  position: relative;
  width: 100%;
  padding: 0.5rem;
  margin: 1rem 0;
  background: ${(props) => props.cardBackground};
  border-radius: 8px;
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
  }
  @media (min-width: 768px) {
    width: 32%;
    margin: 0;
  }
  @media (min-width: 992px) {
    max-height: 15rem;
    margin: 1rem 2rem;
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
  const { cardBackground, image, id } = props.project;

  const handleCard = () => {
    props.showWorkInfo(props.project);
  };

  console.log(id);

  return (
    <>
      <TransitionGroup className="work-wrapper d-block d-md-none">
        <CSSTransition key={id} timeout={300} classNames="fade">
          <div>
            <CardStyle
              className="d-flex d-md-none"
              cardBackground={cardBackground}
              onClick={handleCard}
            >
              {props.cardDefault !== id ? (
                <CardDefault project={props.project}></CardDefault>
              ) : (
                <Image src={image}></Image>
              )}
            </CardStyle>
            {props.cardDefault !== id ? (
              <div></div>
            ) : (
              <div className="mobile-work-wrapper d-block d-md-none mx-sm-4 mx-md-0">
                <Work showInfo={props.project}></Work>
              </div>
            )}
          </div>
        </CSSTransition>
      </TransitionGroup>

      <CardStyle
        className="d-none d-md-flex"
        cardBackground={cardBackground}
        onClick={handleCard}
      >
        <CardDefault project={props.project}></CardDefault>
      </CardStyle>
    </>
  );
};

export default Card;
