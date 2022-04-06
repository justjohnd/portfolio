import ICONS from "./ICONS";

const IconDisplay = (icon) => {
  return ICONS.find((e) => e.name === icon);
};

export default IconDisplay;
