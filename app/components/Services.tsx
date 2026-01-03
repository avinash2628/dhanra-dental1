export default function Services() {
  return (
    <section style={{ padding: "40px" }}>
      <h2>Our Services</h2>

      <div style={{ marginTop: "20px" }}>
        <Service title="Dental Implants" desc="Permanent tooth replacement." />
        <Service title="Teeth Cleaning" desc="Professional dental cleaning." />
        <Service title="Braces & Aligners" desc="Straighten your teeth safely." />
        <Service title="Cosmetic Dentistry" desc="Smile designing & veneers." />
      </div>
    </section>
  );
}

function Service({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        marginBottom: "12px",
        borderRadius: "6px",
      }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}