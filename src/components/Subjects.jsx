import "./Subjects.css";

function Subjects() {
  return (
    <section className="subjects">

      <div className="subjects-header">

        <h2>
          MASTER EVERY JAMB SUBJECT
        </h2>

        <p>
          Learn with clear explanations, topic breakdowns, and practice questions
          designed to help you understand every answer.
        </p>

      </div>


      <div className="subjects-grid">

        <div className="subject-card">
          <h3>📘 English Language</h3>
          <p>
            Master comprehension, grammar, vocabulary, and literature questions.
          </p>
        </div>


        <div className="subject-card">
          <h3>📐 Mathematics</h3>
          <p>
            Understand formulas and solve problems step-by-step.
          </p>
        </div>


        <div className="subject-card">
          <h3>🧪 Chemistry</h3>
          <p>
            Break down reactions, calculations, and important concepts.
          </p>
        </div>


        <div className="subject-card">
          <h3>⚛️ Physics</h3>
          <p>
            Understand laws, calculations, and real-life applications.
          </p>
        </div>

      </div>


      <a href="/subjects" className="view-subjects">
        View All Subjects →
      </a>


    </section>
  );
}

export default Subjects;