import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Card from "./Card";

function CurrentlyLive() {
  const [seeAll, setSeeAll] = useState(false);

  return (
    <section className="dashboard-section" style={{ marginTop: "1rem" }}>
      <div className="dashboard-section-title">
        <div>
          <FontAwesomeIcon icon={faCalendarDays} color="#292b2d" />
          <h3>Currently Live</h3>
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
      </div>
    </section>
  );
}

export default CurrentlyLive;
