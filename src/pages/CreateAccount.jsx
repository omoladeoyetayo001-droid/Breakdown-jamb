
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";

function CreateAccount() {

  const navigate = useNavigate();

  return (

    <div className="signup-page">



      {/* Right Side */}

      <div className="signup-right">


        <div className="signup-card">


          <h2>
            Create Your Account
          </h2>


          <p>
            Let's get you started on your learning journey.
          </p>



          <input
            type="text"
            placeholder="Full Name"
          />



          <input
            type="email"
            placeholder="Email Address"
          />



          <input
            type="password"
            placeholder="Create Password"
          />



          <div className="password-info">

            Password must contain at least 8 characters, letters and numbers.

          </div>



          <input
            type="password"
            placeholder="Confirm Password"
          />




          <label className="terms">

            <input type="checkbox" />

            <span>
              I agree to the Terms & Privacy Policy
            </span>

          </label>




          <button
            className="create-button"
            onClick={() => navigate("/onboarding")}
          >

            Create Free Account

          </button>




          <div className="divider">

            or

          </div>




          <button className="google-button">


            <img
              src="/google-icon.png"
              alt="Google"
              className="google-icon"
            />


            Continue with Google


          </button>




          <div className="signin-text">


            Already have an account?


            <a href="/login">

              Sign In

            </a>


          </div>



        </div>


      </div>



    </div>

  );

}


export default CreateAccount;