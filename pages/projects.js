import React from "react";
import Theme from "../components/Theme";
import fetchRepos from "../utils/gh-api";
import CardDeck from "../components/CardDeck";
import Navbar from "../components/Navbar";

export default class aboutPage extends React.Component {
  static async getInitialProps({ req }) {
    let data = await fetchRepos();
    return {
      result: data
    };
  }

  render() {
    let repos = this.props.result;
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
}
