/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import {useState} from "react";

function App() {
  const [click, setClick] = useState(true);
  console.log(click);
  return (
    <div className="App">
      <>
        <header className="header">
          <div className="header_left">
            <img src="./assets/logo.png" alt="logo" className="header_logo" />
            <h2> Software M4 </h2>
          </div>
          <div className="header_right">
            <ul className="navmenu">
              <li> Home </li>
              <li> About </li>
              <li> Services </li>
              <li> Contact </li>
            </ul>
          </div>
          <div className="mobileMenu">
            {click ? (
              <div onClick={() => setClick(!click)} className="hamburgerMenu">
                <img src="./assets/icons8-menu.svg" alt="" />
              </div>
            ) : (
              <div>
                <div onClick={() => setClick(!click)} className="hamburgerMenu">
                  <img src="./assets/icons8-menu.svg" alt="" />
                  <div>
                    <ul className="mobile_navMenu">
                      <li> Home </li>
                      <li> About </li>
                      <li> Services </li>
                      <li> Contact </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
        <section className="landingPage">
          <div className="landingPage__bgImage">
            <img src="./assets/background1.jpg" alt="" />
          </div>
          <div className="landingPage_details">
            <h6> Developer Company </h6>
            <h2> Software App </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
              porttitor egestas fermentum nulla.
            </p>
            <div className="landingpage_buttons">
              <button className="button-1">Our Services</button>
              <button className="button-2">Learn More</button>
            </div>
          </div>
        </section>
        <section className="coreFeatures">
          <div className="coreFeatures_left">
            <img src="./assets/features1.jpg" alt="" />
          </div>
          <div className="coreFeatures_right">
            <h6>Core Features</h6>
            <h1>Best Business Software Solution</h1>
            <div className="featureLists">
              <div className="featureList">
                <img src="./assets/design.jpg" alt="" />
                <h6>Design</h6>
              </div>
              <div className="featureList">
                <img src="./assets/usage.jpg" alt="" />
                <h6>Usage</h6>
              </div>
              <div className="featureList">
                <img src="./assets/testing.jpg" alt="" />
                <h6>Testing</h6>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
              porttitor egestas fermentum nulla.
            </p>
            <button className="featureList_button">Read More</button>
          </div>
        </section>

        <section className="featureDisplay">
          <div className="featureDisplay_title">
            <h1> Core Features</h1>
          </div>
          <div className="featureDisplay_lists">
            <div className="featureDisplay_list">
              <img src="./assets/feature_1.jpg" alt="" />
              <p>Software, Interface</p>
              <h2>Development</h2>
            </div>
            <div className="featureDisplay_list">
              <img src="./assets/features_2.jpg" alt="" />
              <p>Software, Design</p>
              <h2>Design</h2>
            </div>
            <div className="featureDisplay_list">
              <img src="./assets/features_3.jpg" alt="" />
              <p>Software, Interface</p>
              <h2>Optimization</h2>
            </div>
          </div>
        </section>
        <section className="team">
          <div className="teamMembers">
            <h6> Experts</h6>
            <h1> Our Team members</h1>
          </div>
          <div className="membersInfo">
            <div className="memberInfo">
              <img src="./assets/john.jpg" alt="" />
              <h3>John Smith</h3>
              <p>Programmer</p>
            </div>
            <div className="memberInfo">
              <img src="./assets/sarah.jpg" alt="" />
              <h3>Sarah Palmer</h3>
              <p>Manager</p>
            </div>
            <div className="memberInfo">
              <img src="./assets/adam.jpg" alt="" />
              <h3>Adam Swift</h3>
              <p>Analyst</p>
            </div>
            <div className="memberInfo">
              <img src="./assets/helen.jpg" alt="" />
              <h3>Helen Smith</h3>
              <p>Designer</p>
            </div>
          </div>
        </section>

        <section className="gallery">
          <h1> Gallery </h1>
          <img src="./assets/gallery.jpg" alt="" />
        </section>

        <section className="subscribe">
          <h6>Estimate For Projects </h6>
          <h1>Share Work Details</h1>
          <div className="subscribe_input">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="E-mail Address" />
            <input type="text" placeholder="Subject" />
          </div>
          <div className="subscribe_input2">
            <textarea type="text" placeholder="Work Details" />
          </div>
          <div className="subscribe_button">
            <button> Subrcibe Now </button>
          </div>
        </section>
      </>
    </div>
  );
}

export default App;
