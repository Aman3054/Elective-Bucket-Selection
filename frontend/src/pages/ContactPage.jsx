const ContactPage = () => {
  return (
    <div className="page">
      <section className="card">
        <h2>Contact & Support</h2>
        <p className="card-body-text">
          For any questions about elective selection, quiz content, or portal
          access, please reach out to your department coordinator.
        </p>
        <div className="grid-2 contact-grid">
          <div>
            <h3>Academic Queries</h3>
            <p className="muted-text">Faculty advisors / HOD</p>
            <ul className="simple-list">
              <li>Discuss which elective aligns with your long-term goals.</li>
              <li>Clarify course structure, evaluation pattern, and projects.</li>
            </ul>
          </div>
          <div>
            <h3>Technical Support</h3>
            <p className="muted-text">
              If the portal is not working as expected:
            </p>
            <ul className="simple-list">
              <li>Try logging out and logging in again.</li>
              <li>Ensure you are using an updated browser.</li>
              <li>Share screenshots and error messages with the IT cell.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

