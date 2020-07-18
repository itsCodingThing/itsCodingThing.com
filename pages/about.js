import Theme from "../components/Theme";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <Theme>
      <Navbar>&lt;itscodingthing/&gt;</Navbar>
      <div className="about">
        <div className="description-about-me">
          <div className="myPic">
            <img
              src="../static/myPic2.jpg"
              width="315px"
              height="420px"
              alt="my-pic"
            />
          </div>
          <div className="say-something">
            <div className="hiContainer">
              <h1 className="display-2 say-heading">Hi,</h1>
              <img
                src="../static/hi2.png"
                alt="sayHi"
                width="100px"
                height="100px"
              />
            </div>
            <p>
              My name is Bhanu Pratap Singh. I am developer and techie. I am
              very passinate about my work. You can find me here{" "}
              <img
                src="../static/point-down.png"
                alt="point-down"
                width="50px"
                height="50px"
              />{" "}
            </p>
            <div className="social-icons">
              <span className="facebook">
                <a
                  href="https://www.facebook.com/bhanu1729"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../static/facebook.svg" alt="facebook-icon" />
                </a>
              </span>
              <span className="instagram">
                <a
                  href="http://https://www.instagram.com/bhanu.singh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../static/instagram.svg" alt="insta-icon" />
                </a>
              </span>
              <span className="github">
                <a
                  href="https://github.com/itsCodingThing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../static/github.svg" alt="github-icon" />
                </a>
              </span>
              <span className="twitter">
                <a
                  href="https://twitter.com/bhanu1729"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../static/twitter.svg" alt="twitter-icon" />
                </a>
              </span>
            </div>
          </div>
        </div>
        <style jsx>{`
          .about {
            position: relative;
            top: 95px;
            display: flex;
            justify-content: center;
            width: 100%;
            height: 100vh;
          }

          .description-about-me {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            padding: 10px;
            text-align: center;
          }

          .social-icons > span {
            margin: 10px;
            font-size: 48px;
            color: dodgerblue;
          }

          .myPic {
            margin: 10px;
          }

          .myPic > img {
            border: 10px solid #fffcab;
          }

          .hiContainer {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hiContainer > h1 {
            font-weight: 700;
            color: wheat;
          }

          .say-something {
            margin: 10px;
            font-family: "Roboto Condensed", sans-serif;
          }

          .say-something > p {
            color: wheat;
          }

          @media (min-width: 576px) {
            .about {
              top: 65px;
            }

            .description-about-me {
              display: flex;
              flex-direction: row;
              width: 70%;
              text-align: left;
            }

            .hiContainer {
              display: inline-flex;
            }
          }
        `}</style>
      </div>
    </Theme>
  );
}
