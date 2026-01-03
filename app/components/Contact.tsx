export default function Contact() {
  return (
    <section
      style={{
        padding: "40px",
        background: "#f5f5f5",
      }}
    >
      <h2>Book an Appointment</h2>
      <p>Fill the form below and we’ll contact you.</p>

      <form style={{ maxWidth: "400px", marginTop: "20px" }}>
        <input style={inputStyle} placeholder="Your Name" />
        <input style={inputStyle} placeholder="Phone Number" />
        <textarea
          style={inputStyle}
          placeholder="Message"
          rows={4}
        />
        <button style={buttonStyle}>Submit</button>
      </form>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "12px",
  width: "100%",
  background: "#0a3cff",
  color: "white",
  border: "none",
  cursor: "pointer",
};