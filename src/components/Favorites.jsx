import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
  faDiagramProject,
  faEllipsisVertical,
  faEnvelopesBulk,
  faReceipt,
  faShirt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "./Card";

function Favorites() {
  return (
    <div className="dashboard-favorites">
      <div className="dashboard-favorites-title">
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
      <div className="dashboard-favorites-card">
        <Card />
        <Card error />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Favorites;
