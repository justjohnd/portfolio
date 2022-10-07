const IntroSection = () => {
  return (
    <section className="intro-wrapper">
      <div className="intro-text">
        <h1>Hi, I'm John!</h1>
        <p className="text-1">
          I'm a <span className="bold">front-end-focused developer</span> based out of Japan. I come from a career background in engineering, teaching, and professional writing. I’ve been self-studying programming for about three years, and I love making stuff for the web.
        </p>
        <div className="intro-img-sm">
          <img className="intro-img" src="../images/john.PNG"></img>
        </div>
        <p className="text-2">
          React is my jelly and WordPress is my jam. That is to say, I’ve worked with a number of languages, libraries, and frameworks and am fairly agnostic about what the tech is, so long I can make delightful online experiences.
        </p>
      </div>
      <div className="intro-img-lg">
        <img className="intro-img" src="../images/john.PNG"></img>
      </div>
    </section>
  );
};

export default IntroSection;
