import IconDisplay from "../Utilities/IconDisplay";

const Footer = () => {
  const { image, alt, name } = IconDisplay("react");

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-text">
          Made with{" "}
          <span>
            <img src={image} className={`image-${name}`} alt={alt} />
          </span>
        </div>
        <div className="footer-text">Copyright 2022 | John Denlinger</div>
      </div>
    </footer>
  );
};

export default Footer;
