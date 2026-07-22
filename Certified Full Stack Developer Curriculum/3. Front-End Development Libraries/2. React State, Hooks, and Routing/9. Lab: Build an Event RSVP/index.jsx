const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noOfAttendees, setNoOfAttendees] = useState("");
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [additionalGuests, setAdditionalGuests] = useState(false);
  const [submitBtnPressed, setSubmitBtnPressed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitBtnPressed(true);
  };

  return (
    <div className="page-container">
      <form className="section" onSubmit={handleSubmit}>
        <h2>Event RSVP Form</h2>

        <label className="form-label">
          Name:
          <input
            className="form-input"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="form-label">
          Email:
          <input
            className="form-input"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="form-label">
          Number of Attendees:
          <input
            className="form-input"
            type="number"
            placeholder="Number of Attendees"
            min="1"
            value={noOfAttendees}
            onChange={(e) => setNoOfAttendees(e.target.value)}
            required
          />
        </label>

        <label className="form-label">
          Dietary Preferences:
          <input
            className="form-input"
            type="text"
            placeholder="Dietary Preferences (optional)"
            value={dietaryPreference}
            onChange={(e) => setDietaryPreference(e.target.value)}
          />
        </label>

        <div className="checkbox-row">
          <span>Bringing additional guests?</span>
          <input
            type="checkbox"
            checked={additionalGuests}
            onChange={(e) => setAdditionalGuests(e.target.checked)}
          />
        </div>

        <button className="submit-btn" type="submit">
          Submit RSVP
        </button>

        {submitBtnPressed && (
          <div>
            <h2 className="submit-after-text">RSVP Submitted!</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Number of Attendees: {noOfAttendees}</p>
            <p>Dietary Preferences: {dietaryPreference}</p>
            <p>Bringing Others: {additionalGuests ? "Yes" : "No"}</p>
          </div>
        )}
      </form>
    </div>
  );
}