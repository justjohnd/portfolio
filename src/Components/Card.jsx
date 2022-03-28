import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import CardDefault from "./CardDefault";

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

const Card = (props) => {
  const { cardBackground, image, id } = props.project;

  const handleCard = () => {
    props.showWorkInfo(props.project);
  };

  return (
    <CardStyle cardBackground={cardBackground} onClick={handleCard}>
      {props.cardDefault !== id ? (
        <CardDefault project={props.project}></CardDefault>
      ) : (
        <img className="image-mockup" src={image}></img>
      )}
    </CardStyle>
  );
};

export default Card;
