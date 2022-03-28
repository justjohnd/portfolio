import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import Card from "./Card";
import SectionHeader from "./SectionHeader";

const CardsSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  } ;
`;

const Cards = (props) => {
  return (
    <div>
      <SectionHeader text="RECENT WORK" />
      <CardsSection>
        {props.projects.map((project) => {
          return (
            <Card
              key={uuidv4()}
              showWorkInfo={props.showWorkInfo}
              project={project}
              cardDefault={props.cardDefault}
            />
          );
        })}
      </CardsSection>
      <div className="icon-chevron-wrapper">
        <ExpandMoreRoundedIcon id="icon-chevron" />
      </div>
    </div>
  );
};

export default Cards;
