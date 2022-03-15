const Home = () => {
  return (
    <div>
      <div className="intro-wrapper">
        <h1>Hi, I'm John!</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ullam dignissimos, expedita vero repudiandae veniam ad ducimus
          adipisci, provident quia dicta nam voluptatem harum accusamus!
        </p>
      </div>
      <div id="work" className="section">
        <h2>RECENT PROJECTS</h2>
        <div className="work-wrapper">
          <div className="skills">
            <ul>
              <li>
                <img src="./images/svg/icons8-react.svg" alt="React JS Icon" />
              </li>
              <li>
                <img src="./images/svg/icons8-node-js.svg" alt="Node JS Icon" />
              </li>
              <li>
                <img src="./images/svg/expressjs.svg" alt="Express JS Icon" />
              </li>
              <li>
                <img src="./images/svg/icons8-mongodb.svg" alt="MongoDb Icon" />
              </li>
            </ul>
          </div>
          <div className="work">
            <div className="work-col">
              <h1>veggit recipe editor and saver</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                odit similique quidem, debitis officiis excepturi molestias
                expedita minus saepe consequatur porro aliquid, maiores
                quibusdam enim deleniti, qui commodi voluptatum aliquam
                architecto aspernatur? Cupiditate, ea magni? Expedita eligendi
                consequuntur molestiae perspiciatis fugiat non ex. Optio soluta
                animi, dicta ipsum sunt doloribus.
              </p>
            </div>
            <div className="work-col">
              <img src="./images/Capture.JPG"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
