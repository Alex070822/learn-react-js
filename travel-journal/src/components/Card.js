import "../App.css";

function Card(props) {
  return (
    <div className="card--divider">
      <div className="card--main-container">
        <img
          src={require(`../media/${props.coverImg}`)}
          alt={props.landmark}
          className="card--location-picture"
        />
        <div className="card--info-container">
          <div className="card--first-line-container">
            <img src={require("../media/location.png")} alt="Location icon" />
            <span className="card--country">{props.country}</span>
            <span className="card--maps-link">
              <a
                href={props.mapsLocation}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </span>
          </div>
          <h1 className="card--landmark">{props.landmark}</h1>
          <p className="card--date">{props.date}</p>
          <p className="card--description">{props.landmarkInfo}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Card;
