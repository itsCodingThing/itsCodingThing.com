function randomColor() {
  let color = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
  ];
  let randomNumber = Math.floor(Math.random() * (7 - 0) + 0);
  return color[randomNumber];
}

function Card(props) {
  let color = randomColor();

  let ts = new Date(props.update);
  return (
    <div className={`card border-${color}`}>
      <div className={`card-body text-${color}`}>
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          {`last updated` + `-` + ts.toDateString()}
        </small>
        <a className="btn btn-primary" href={props.link}>
          Visit Repo
        </a>
      </div>

      <style jsx>{`
        h5 {
          font-size: 1rem;
        }

        p {
          font-size: 0.6rem;
        }

        a {
          font-size: 0.6rem;
        }

        small {
          font-size: 0.6rem;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: centter;
          padding: -2px;
        }
      `}</style>
    </div>
  );
}

export default function CardDeck(props) {
  return (
    <div className="card-columns">
      {props.result.map((repo) => (
        <Card
          key={repo.id}
          name={repo.name}
          description={repo.description}
          link={repo.html_url}
          update={repo.updated_at}
        />
      ))}
    </div>
  );
}
