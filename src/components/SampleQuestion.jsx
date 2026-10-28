import "./SampleQuestion.css";

function SampleQuestion() {
  return (
    <section className="sample-question">

      <div className="sample-header">
        <h2>
          See How We Break Down JAMB Questions
        </h2>

        <p>
          Understand why the answer is correct, not just what the answer is.
        </p>
      </div>


      <div className="question-card">

        <h3>
          Choose the option nearest in meaning to the underlined word.
        </h3>

        <p className="question-text">
          The teacher's instructions were{" "}
          <strong>AMBIGUOUS</strong>, so many students did not know what to do.
        </p>


        <div className="options">

          <div className="option">
            A. Clear
          </div>

          <div className="option correct">
            B. Confusing
          </div>

          <div className="option">
            C. Helpful
          </div>

          <div className="option">
            D. Simple
          </div>

        </div>


        <div className="correct-answer">
          Correct Answer: <strong>B — Confusing</strong>
        </div>


        <div className="breakdown-box">

          <h4>Breakdown</h4>

          <p>
            <strong>Ambiguous</strong> means something that is not clear or can
            have more than one meaning.
          </p>

          <p>
            Since the teacher's instructions were ambiguous, the students became
            confused because they did not know exactly what the teacher meant.
          </p>

          <p className="example">
            <strong>Think of it this way:</strong> If a teacher says,
            "Bring the book tomorrow," without saying which book, different
            students may bring different books because the instruction is not
            clear.
          </p>


          <div className="learn-topic">

            <span className="topic-label">
              Ready to master this topic?
            </span>

            <a href="/create-account">
              📘 Learn: Synonyms (Nearest in Meaning) →
            </a>

          </div>

        </div>

      </div>


      <div className="wrong-answers">

        <h4>
          Why the other options are wrong:
        </h4>

        <p>
          <strong>A. Clear ❌</strong>
          <br />
          Clear means easy to understand. It is the opposite of ambiguous.
        </p>

        <p>
          <strong>C. Helpful ❌</strong>
          <br />
          Helpful means making something easier. It does not mean unclear or
          confusing.
        </p>

        <p>
          <strong>D. Simple ❌</strong>
          <br />
          Simple means easy or uncomplicated. It is different from ambiguous.
        </p>

      </div>

    </section>
  );
}

export default SampleQuestion;