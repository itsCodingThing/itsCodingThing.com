import ReactTyped from "react-typed";

export default function Typed() {
  return (
    <h1 className="typed">
      <ReactTyped
        strings={[
          "I am a dev",
          "I am a techie",
          "I am a foodie",
          "itsCodingThing",
        ]}
        typeSpeed={80}
        backSpeed={80}
        backDelay={5}
        loop
        smartBackspace
      />
      <style jsx>{`
        h1.typed {
          color: whitesmoke;
        }
      `}</style>
    </h1>
  );
}
