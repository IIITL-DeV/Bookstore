import React from "react";
import "./About.css";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

const GITHUB_URL = "https://github.com/Mrhb787/Bookstore-Frontend";
const WEBSITE_URL = "https://bookstore-in.web.app/";

function About() {
  const openWebsite = () => window.open(WEBSITE_URL, "_blank").focus();
  const openGithub = () => window.open(GITHUB_URL, "_blank").focus();

  return (
    <>
      <Helmet>
        <title>About | Bookstore</title>
        <meta
          name="description"
          content="We are a team of students who are enthusiastic developers. We are trying to create a platform for students who cannot afford to buy books due to financial problems."
        />
      </Helmet>

      <div className="About-bg">
        <div className="night">
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src="/images/smallLogo.svg" alt="bookstore" height="60px" />

          <div className="About-title">
            <p>Bookstore</p>
          </div>

          <div className="About-description">
            <p>E-commerce platform to buy and sell used books</p>
          </div>

          <div className="About-textbox">
            <p>
              We are a small team of students who are enthusiastic developers.
              We are trying to create a better viable platform for students who
              want to learn but due to financial issues can't afford new books.
              We also want to help those who want to sell thier books which they
              don't need. We hope that you will find this platform usefull. We
              are always trying to make this platform better and better.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "150px",
              alignItems: "center",
            }}
          >
            <button className="About-button" onClick={openWebsite}>
              <p>Website</p>
            </button>
            <button className="About-button" onClick={openGithub}>
              Github
            </button>
          </div>

          <section className="about-social-media">
            <div className="social-media-wrap">
              <div className="social-icons">
                <Link
                  className="social-icon-link facebook"
                  to={{
                    pathname: "",
                  }}
                  target="_blank"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  className="social-icon-link instagram"
                  to={{
                    pathname: "",
                  }}
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link
                  className="social-icon-link twitter"
                  to={{
                    pathname: "",
                  }}
                  target="_blank"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  className="social-icon-link linkedin"
                  to={{
                    pathname: "",
                  }}
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>
                <Link
                  className="social-icon-link youtube"
                  to={{
                    pathname: "",
                  }}
                  target="_blank"
                  aria-label="Youtube"
                >
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default About;
