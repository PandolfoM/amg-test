import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Card from "./Card";

function Favorites() {
  const [seeAll, setSeeAll] = useState(false);

  return (
    <section className="dashboard-section">
      <div className="dashboard-section-title">
        <div>
          <FontAwesomeIcon icon={faStar} color="#292b2d" />
          <h3>Favorites</h3>
          <p onClick={() => setSeeAll(!seeAll)}>
            {seeAll ? "Hide" : "See All"}
          </p>
        </div>
        <div className="card-arrows">
          <FontAwesomeIcon icon={faChevronLeft} color="white" size="xl" />
          <FontAwesomeIcon icon={faChevronRight} color="white" size="xl" />
        </div>
      </div>
      <div
        className="dashboard-section-card"
        style={{ flexWrap: seeAll ? "wrap" : "nowrap" }}>
        <Card />
        <Card error={true} />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Favorites;
