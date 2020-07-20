import dynamic from "next/dynamic";

import Theme from "../components/Theme";
import Navbar from "../components/Navbar";

const Typed = dynamic(() => import("../components/Typed"), {
  ssr: false,
  loading: () => <p>...</p>,
});
const Particles = dynamic(() => import("../components/RenderParticles"), {
  ssr: false,
  loading: () => <p>...</p>,
});

export default function HomePage() {
  return (
    <Theme>
      <Navbar>&lt;itscodingthing/&gt;</Navbar>

      <Particles />
      <div className="main">
        <Typed />
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
      `}</style>
    </Theme>
  );
}
