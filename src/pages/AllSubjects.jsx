import "./AllSubjects.css";

function AllSubjects() {
  const subjects = [
    "📘 English Language",
    "📐 Mathematics",
    "🧪 Chemistry",
    "⚛️ Physics",
    "🧬 Biology",
    "📈 Economics",
    "🏛️ Government",
    "📚 Literature in English",
    "🌍 Geography",
    "💰 Commerce",
    "📒 Accounting",
    "🌱 Agricultural Science",
    "💻 Computer Studies",
    "🕌 Islamic Religious Studies",
    "✝️ Christian Religious Studies"
  ];

  return (
    <section className="all-subjects">

      <h1>
        All JAMB Subjects
      </h1>

      <p>
        Select a subject and start understanding every question through detailed breakdowns.
      </p>


      <div className="subject-box">

  <div className="subject-list">

    {subjects.map((subject, index) => (
      <div 
        className="subject-item" 
        key={index}
      >
        {subject}
      </div>
    ))}

  </div>


  <a href="/" className="back-home">
    ← Back to Home
  </a>

</div>
    </section>
  );
}

export default AllSubjects;