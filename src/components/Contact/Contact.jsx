import "./contact.css";
const Contact = ({ contact, talk, project, infos, message }) => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="title-contact">
          <p>{contact}</p>
          <h6 className="talk">
            {talk} <span>{project}</span>
          </h6>
        </div>

        <div className="main-content">

          <div className="info-side">
            {infos?.map((info, index) => (
              <div className="item" key={index}>
                <div className="icon">{info.icon}</div>
                <div className="text-box">
                  <span>{info.title}</span>
                  <p>{info.content}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="c97a52e1-87fd-42fa-8f10-1824d2c368d7"
            />

            <div className="row">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" placeholder="Email" name="email" required />
            </div>

            <input type="text" placeholder="Subject" name="subject" />

            <textarea name="message" placeholder="Message" required></textarea>
            <button type="Submit">{message}</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
