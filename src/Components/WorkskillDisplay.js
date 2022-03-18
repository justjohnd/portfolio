import SKILLS from "../Utilities/SKILLS";

const skillDisplay = (skill) => {
  return SKILLS.find((e) => e.name === skill);
};

export default skillDisplay;
