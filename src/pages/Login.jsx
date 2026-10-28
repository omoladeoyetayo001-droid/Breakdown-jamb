import "./Login.css";

function Login() {
  return (
    <div className="signup-page">


      <div className="signup-right">

        <div className="signup-card">

          

          <h2>Welcome Back!</h2>

          <p>
            Continue your learning journey.
          </p>

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <div className="forgot-password">
            <a href="#">
              Forgot Password?
            </a>
          </div>

          <button className="create-button">
            Sign In
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

            Don't have an account?

            <a href="/create-account">
              Sign Up
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;