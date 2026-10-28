import { useState } from "react";
import "./Navbar.css";


function Navbar() {

  const [showContact, setShowContact] = useState(false);


  return (

    <header className="navbar">


      {/* Logo */}

      <a href="/" className="navbar-logo">


        <span className="navbar-cap">
          🎓
        </span>


        <div>

          <h1>
            Breakdown
          </h1>


          <span>
            JAMB
          </span>


        </div>


      </a>




      {/* Navigation Buttons */}

      <div className="nav-buttons">


        <div className="contact-wrapper">


          <button
  className="contact-btn"
  onClick={() => {
    console.log(showContact);
    setShowContact(!showContact);
  }}
>
  Contact
</button>



          {showContact && (

            <div className="contact-dropdown">


              <p>

                <strong>
                  Phone
                </strong>

                <br />

                +234 814 015 5982

              </p>



              <p>

                <strong>
                  Email
                </strong>

                <br />

                omoladeoyetayo001@gmail.com

              </p>


            </div>

          )}


        </div>




        <a
          href="/login"
          className="signin-btn"
        >

          Sign In

        </a>




        <a
          href="/create-account"
          className="start-btn"
        >

          Start Learning Free

        </a>



      </div>


    </header>

  );

}


export default Navbar;