import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header() {
  return (
    <header className="dashboard-header">
      <div className="dashboard-header-title">
        <h1>Dashboard</h1>
        <h2>CAMPAIGN MANAGER</h2>
      </div>
      <div className="dashboard-header-search">
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} color="#292b2d" size="xl" />
          <input placeholder="Search" />
        </div>
        <a href="/">Advanced Search</a>
      </div>
    </header>
  );
}

export default Header;
