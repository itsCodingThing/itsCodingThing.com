import Theme from "../components/Theme";

export default function AboutPage() {
  return (
    <Theme>
      <div className="about">
        <div className="description-about-me">
          <div className="myPic">
            <img src="/myPic2.jpg" width="315px" height="420px" alt="my-pic" />
          </div>
          <div className="say-something">
            <div className="hiContainer">
              <h1 className="display-2 say-heading">Hi,</h1>
              <img src="/hi2.png" alt="sayHi" width="100px" height="100px" />
            </div>
            <div className="description">
              <p>
                My name is Bhanu Pratap Singh. I am web developer sort of 🤷‍♂️. I
                am doing web develepoment for a quiet sometime. I am very
                passinate about my work. You can find me here
              </p>
            </div>
            <div className="social-icons">
              <span className="facebook">
                <a
                  href="https://www.facebook.com/bhanu1729"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/facebook.svg" alt="facebook-icon" />
                </a>
              </span>
              <span className="instagram">
                <a
                  href="https://www.instagram.com/bhanu.singh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/instagram.svg" alt="insta-icon" />
                </a>
              </span>
              <span className="github">
                <a
                  href="https://github.com/itsCodingThing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/github.svg" alt="github-icon" />
                </a>
              </span>
              <span className="twitter">
                <a
                  href="https://twitter.com/bhanu1729"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/twitter.svg" alt="twitter-icon" />
                </a>
              </span>
            </div>
          </div>
        </div>
        <style jsx>{`
          .about {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 100vh;
            padding-top: 5rem;
          }

          .description-about-me {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            padding: 10px;
            text-align: center;
          }

          .social-icons {
            display: flex;
            justify-content: center;
            padding: 0.5rem;
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
            width: 100%;
            text-align: center;
          }

          .hiContainer > h1 {
            font-size: 5rem;
            font-weight: 700;
            color: wheat;
          }

          .say-something {
            margin: 10px;
            font-family: "Roboto Condensed", sans-serif;
          }

          .description {
            text-align: center;
          }

          .description > p {
            color: wheat;
            font-size: 1.1rem;
          }

          @media (min-width: 576px) {
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
