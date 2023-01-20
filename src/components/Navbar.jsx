import {
  faBullhorn,
  faChartPie,
  faChevronRight,
  faCircleUser,
  faEnvelopesBulk,
  faGauge,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import logoSmall from "../assets/amg-small.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-upper">
        <div className="navbar-upper-logo">
          <img src={logoSmall} />
        </div>
        <div className="navbar-upper-arrow">
          <FontAwesomeIcon icon={faChevronRight} size="xs" color="#46B3E5" />
        </div>
        <FontAwesomeIcon icon={faGauge} color="#46B3E5" size="xl" />
        <FontAwesomeIcon icon={faBullhorn} color="#46B3E5" size="xl" />
        <FontAwesomeIcon icon={faEnvelopesBulk} color="#46B3E5" size="xl" />
        <FontAwesomeIcon icon={faUsers} color="#46B3E5" size="xl" />
        <FontAwesomeIcon icon={faChartPie} color="#46B3E5" size="xl" />
      </div>
      <div className="navbar-lower">
        <FontAwesomeIcon icon={faCircleUser} color="#46B3E5" size="xl" />
      </div>
    </nav>
  );
}

export default Navbar;
