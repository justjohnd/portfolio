import SectionHeader from "../Components/SectionHeader";

const ContactSection = () => {
  return (
    <section id="contact">
      <SectionHeader text="CONTACT" />
      <div className="form-wrapper">
        <form name="contact" method="post" className="form-group">
          <div className="form-name-email">
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name:{" "}
              <input className="input" type="text" id="name" name="name" />
            </label>
            <label>
              <span className="ml-sm-1"> Email:</span>{" "}
              <input
                className="input ml-sm-1"
                name="email"
                type="email"
                required
                id="email"
              />
            </label>
          </div>
          <label>
            Subject:{" "}
            <input className="input" type="text" name="subject" id="subject" />
          </label>
          <label>
            Message: <textarea className="input" name="message"></textarea>{" "}
          </label>
          <div className="button-wrapper">
            <button className="hvr-sweep-to-right button-submit" type="submit">
              Send a message!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
