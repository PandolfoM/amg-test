import {
  faBullhorn,
  faChartPie,
  faChevronLeft,
  faChevronRight,
  faCircleUser,
  faEnvelopesBulk,
  faGauge,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import logoSmall from "../assets/amg-small.svg";
import logo from "../assets/amg.svg";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav className={`navbar ${isOpened ? "navbar-opened" : ""}`}>
      <div className="navbar-upper">
        <div className="navbar-upper-logo">
          <img src={isOpened ? logo : logoSmall} />
        </div>
        <div
          className="navbar-upper-arrow"
          onClick={() => setIsOpened(!isOpened)}>
          <FontAwesomeIcon
            icon={isOpened ? faChevronLeft : faChevronRight}
            size="xs"
            color="#46B3E5"
          />
        </div>
        <div className="navbar-upper-item">
          <FontAwesomeIcon icon={faGauge} color="#46B3E5" size="2x" />
          {isOpened && <p>Dashboard</p>}
        </div>
        <div className="navbar-upper-item">
          <FontAwesomeIcon icon={faBullhorn} color="#46B3E5" size="2x" />
          {isOpened && <p>Campaigns</p>}
        </div>
        <div className="navbar-upper-item">
          <FontAwesomeIcon icon={faEnvelopesBulk} color="#46B3E5" size="2x" />
          {isOpened && <p>Submissions</p>}
        </div>
        <div className="navbar-upper-item">
          <FontAwesomeIcon icon={faUsers} color="#46B3E5" size="2x" />
          {isOpened && <p>Users</p>}
        </div>
        <div className="navbar-upper-item">
          <FontAwesomeIcon icon={faChartPie} color="#46B3E5" size="2x" />
          {isOpened && <p>Custom Reports</p>}
        </div>
      </div>
      <div className="navbar-lower">
        <FontAwesomeIcon icon={faCircleUser} color="#46B3E5" size="2x" />
        {isOpened && (
          <>
            <p>Welcome Stephanie!</p>
            <div>
              <a href="/">My Account</a> <span>|</span> <a href="/">Sign Out</a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
