import React from "react";

const PlayerComponent = (props) => {
  let Players = props.players;
  return (
    <div>
      <h1 className="display-5 font-weight-bold text-uppercase my-4 text-primary">
        List of players
      </h1>
      <div className="playerBlock">
        {Players.map((play) => (
          <div className="card">
            <img className="image-card-img " src={play.photo} alt={play.name} />
            <div className="card-body">
              <h5 className="card-title">{play.name}</h5>
              <p className="card-text">Runs : {play.runs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerComponent;
