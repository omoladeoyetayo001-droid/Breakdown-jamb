import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-left">

        <h2 className="understanding-title">
  Stop Memorizing.
  <br />
  Start Understanding.
</h2>

        <p>
          Breakdown JAMB is built to help students truly
          understand every JAMB subject instead of memorizing
          answers. Every question comes with a clear,
          step-by-step explanation that shows why the correct
          answer is right and why the other options are wrong.
        </p>

        <p>
          Whether you're preparing for your first JAMB exam
          or aiming for a higher score, Breakdown JAMB helps
          you study smarter, build confidence, and perform
          better through real understanding.
        </p>

      </div>


      <div className="about-right">

        <div className="about-card">

          <h3>
            What You'll Get
          </h3>


          <ul>

            <li>
              <span className="check-box">✓</span>
              Detailed explanations for every answer
            </li>

            <li>
              <span className="check-box">✓</span>
              Questions across all JAMB subjects
            </li>

            <li>
              <span className="check-box">✓</span>
              AI-powered study assistance
            </li>

            <li>
              <span className="check-box">✓</span>
              CBT practice and mock tests
            </li>

            <li>
              <span className="check-box">✓</span>
              Progress tracking and performance insights
            </li>

            <li>
              <span className="check-box">✓</span>
              Personalized learning experience
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default About;