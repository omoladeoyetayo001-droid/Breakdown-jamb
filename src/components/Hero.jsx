import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        {/* Left Side */}
        <div className="hero-left">

          <h1>
            Don't Guess.
            <br />
            Understand Why Every Answer Is Correct.
          </h1>

          <p>
            Prepare for JAMB with detailed explanations across every
            subject. Practice real exam questions, understand why every
            answer is correct, and build confidence one topic at a time.
          </p>

        </div>


        {/* Right Side */}
        <div className="hero-right">

          <div className="subject-circle">

            <div className="subject maths">
              English
            </div>

            <div className="subject english">
              Maths
            </div>

            <div className="subject economics">
              Economics
            </div>

            <div className="subject accounting">
              Accounting
            </div>


            <div className="circle-center">

              <h3>
              Other
              </h3>

              <span>
                Subjects..
              </span>

            </div>

          </div>

        </div>


      </div>

    </section>
  );
}

export default Hero;