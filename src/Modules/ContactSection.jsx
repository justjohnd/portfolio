import SectionHeader from "../Components/SectionHeader";

const ContactSection = () => {
  return (
    <section id="contact">
      <SectionHeader text="CONTACT" />
      <div className="form-wrapper">
        <form name="contact" method="post" className="form-group">
          <div className="form-name-email">
            <input type="hidden" name="form-name" value="contact" />
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            />
            <input
              className="input"
              name="email"
              type="email"
              required
              id="email"
              placeholder="Email"
            />
          </div>
          <input
            className="input"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <textarea
            className="input"
            name="message"
            placeholder="Message"
          ></textarea>
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
