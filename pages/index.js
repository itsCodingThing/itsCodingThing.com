import Theme from "../components/Theme";
import React from "react";
import RenderParticles from "../components/RenderParticles";
import Typed from "../components/Typed";
import Navbar from "../components/Navbar";

export default () => {
  return (
    <Theme>
      <Navbar>&lt;itscodingthing/&gt;</Navbar>

      <RenderParticles />
      <div className="main">
        <Typed />
        <button className="btn btn-primary btn-sm">Resume</button>
      </div>

      <style jsx>{`
        .main {
          text-align: center;
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translateX(-50%);

          height: 10rem;
          width: 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 576px) {
          .main {
            width: 45%;
            background-color: transparent;
            box-shadow: -8px 7px 22px -5px rgba(0, 0, 0, 0.58);
            border: 0.3rem solid #0033c7;
          }
        }
      `}</style>
    </Theme>
  );
};
