import dynamic from "next/dynamic";

import Theme from "../components/Theme";

const LoadingTyped = () => {
  return (
    <div className="loading-container-typed">
      <h1 className="loading">itsCodingThing</h1>

      <style jsx>{`
        h1.loading {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: whitesmoke;
        }

        .loading-container-typed {
          position: relative;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

const Typed = dynamic(() => import("../components/Typed"), {
  ssr: false,
  loading: () => <LoadingTyped />,
});

const LoadingParticle = () => {
  return (
    <div className="loading-container-particle">
      <style jsx>
        {`
          .loading-container-particle {
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};

const Particles = dynamic(() => import("../components/RenderParticles"), {
  ssr: false,
  loading: () => <LoadingParticle />,
});

export default function HomePage() {
  return (
    <Theme>
      <div className="particle-container">
        <Particles />
      </div>
      <div className="typed-container">
        <Typed />
      </div>

      <style jsx>{`
        .typed-container {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;

          height: 10rem;
          width: 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .particle-container {
          height: 100vh;
        }
      `}</style>
    </Theme>
  );
}
