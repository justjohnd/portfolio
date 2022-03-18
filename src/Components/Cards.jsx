import styled from "styled-components";
import Card from "./Card";

const Cards = (props) => {
  const CardsSection = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (min-width: 768px) {
      flex-wrap: nowrap;
    } ;
  `;

  return (
    <CardsSection>
      {props.projects.map((project) => {
        return <Card handleCard={props.handleCard} project={project} />;
      })}
    </CardsSection>
  );
};

export default Cards;
