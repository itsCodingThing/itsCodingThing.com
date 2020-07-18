import React from "react";
import Theme from "../components/Theme";
import fetchRepos from "../utils/gh-api";
import CardDeck from "../components/CardDeck";
import Navbar from "../components/Navbar";

export async function getStaticProps() {
  let data = await fetchRepos();
  return {
    props: {
      result: data,
    },
  };
}

export default function ProjectsPage(props) {
  let repos = props.result;
  return (
    <Theme>
      <Navbar>&lt;itscodingthing/&gt;</Navbar>
      <div className="projects">
        <div className="githubRepos">
          <CardDeck result={repos} />
        </div>
        <style jsx>{`
          .githubRepos {
            height: 100%;
            padding-left: 10px;
            padding-right: 10px;
          }

          .projects {
            position: relative;
            top: 95px;

            padding: 15px;
            height: 100vh;
            width: 100%;
          }

          @media (min-width: 576px) {
            .githubRepos {
              padding-left: 75px;
              padding-right: 75px;
            }
          }
        `}</style>
      </div>
    </Theme>
  );
}
