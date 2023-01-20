import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "./Card";

function Favorites() {
  return (
    <section className="dashboard-section">
      <div className="dashboard-section-title">
        <div>
          <FontAwesomeIcon icon={faStar} color="#292b2d" />
          <h3>Favorites</h3>
          <a href="/">See All</a>
        </div>
        <div className="card-arrows">
          <FontAwesomeIcon icon={faChevronLeft} color="white" size="xl" />
          <FontAwesomeIcon icon={faChevronRight} color="white" size="xl" />
        </div>
      </div>
      <div className="dashboard-section-card">
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
