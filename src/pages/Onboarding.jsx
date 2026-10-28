import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Onboarding.css";

function Onboarding() {
  const navigate = useNavigate();

  const [selectedScore, setSelectedScore] = useState("");
  const [selectedStudy, setSelectedStudy] = useState([]);


  const handleScoreSelect = (score) => {

    setSelectedScore(score);

  };


  const handleStudySelect = (option) => {

    setSelectedStudy((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );

  };


  const scores = [
    "180+",
    "200+",
    "250+",
    "280+",
    "300+",
    "I just want to improve"
  ];


  const studyOptions = [
    "Daily Practice",
    "Past Questions",
    "Full CBT Simulation",
    "Lesson Notes"
  ];


  return (
    <div className="onboarding-page">

      <div className="onboarding-card">


        <h1>
          BREAKDOWN JAMB
        </h1>


        <p className="sub-text">
          Are you ready to ace it up?
        </p>


        <p className="sub-text">
          Let's personalize your JAMB preparation journey.
        </p>



        {/* Question 1 */}

        <div className="question-section">

          <h2>
            What JAMB score are you aiming for?
          </h2>

          <p>
            Select your target score
          </p>


          <div className="options-grid">

            {scores.map((score) => (

              <button
                key={score}
                className={
                  selectedScore === score
                  ? "selected"
                  : ""
                }
                onClick={() => handleScoreSelect(score)}
              >

                {score}

              </button>

            ))}

          </div>

        </div>



        {/* Question 2 */}

        <div className="question-section">

          <h2>
            What subjects do you struggle with most?
          </h2>


          <input
            type="text"
            placeholder="Example: English, Mathematics, Physics"
          />

        </div>




        {/* Question 3 */}

        <div className="question-section">

          <h2>
            How do you want to study?
          </h2>


          <p>
            Select all that apply
          </p>


          <div className="study-options">


            {studyOptions.map((option) => (

              <button
                key={option}
                className={
                  selectedStudy.includes(option)
                  ? "selected"
                  : ""
                }
                onClick={() => handleStudySelect(option)}
              >

                {option}

              </button>

            ))}


          </div>


        </div>




        <button
  className="continue-btn"
  onClick={() => navigate("/dashboard")}
>
  Continue to Dashboard
</button>

      </div>

    </div>
  );
}

export default Onboarding;