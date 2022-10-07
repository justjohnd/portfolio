import { useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import Card from "./Card";
import SectionHeader from "./SectionHeader";
import "./Cards.css";
import scrollTrigger from "../Utilities/scrollTrigger.js";

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

  useEffect(() => {

    scrollTrigger(".js-reveal-section", {
      rootMargin: "-200px"
    });
  }, []);

  return (
    <div className="section-cards js-reveal-section">
      <SectionHeader text="RECENT WORK" />
      <CardsSection>
        {props.projects.map((project) => {
          let showCardBorder = false;
          if (project.id === props.showInfoId) {
            showCardBorder = true;
          }
          // console.log(project.id, props.showInfoId);

          return (
            <Card
              key={uuidv4()}
              showCardBorder={showCardBorder}
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
