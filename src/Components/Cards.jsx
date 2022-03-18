import styled from "styled-components";
import Card from "./Card";

const Cards = (props) => {
  const CardsSection = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    @media (min-width: 768px) {
      flex-wrap: nowrap;
    } ;
  `;

  return (
    <div>
      <div className="section-header">
        <h2>RECENT PROJECTS</h2>
        <hr></hr>
      </div>
      <CardsSection>
        {props.projects.map((project) => {
          return <Card handleCard={props.handleCard} project={project} />;
        })}
      </CardsSection>
    </div>
  );
};

export default Cards;
