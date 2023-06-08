const IntroSection = () => {
  return (
    <section className="intro-wrapper">
      <div className="intro-text">
        <h1>Hi, I'm John!</h1>
        <p className="text-1">
          I'm a <span className="bold">front-end developer</span> based out of Japan. I come from a career background in engineering, teaching, and professional writing. I work for <span className="bold">dc3</span> building beutiful and effective sites and landing pages for all kinds of customers.
        </p>
        <div className="intro-img-sm">
          <img className="intro-img" src="../images/john.PNG"></img>
        </div>
        <p className="text-2">
          I work predominately within the WordPress ecosystem, creating custom themes for clients. While my career in programming is still nascent I hope to gather more experience with a variety of modern front-end technologies, such as React and Typescript, and work with like-minded cohorts on complex applications. On this page you can find several examples of my professional work, as well as personal projects.
        </p>
      </div>
      <div className="intro-img-lg">
        <img className="intro-img" src="../images/john.PNG"></img>
      </div>
    </section>
  );
};

export default IntroSection;
