import {
  faDiagramProject,
  faEllipsisVertical,
  faEnvelopesBulk,
  faReceipt,
  faShirt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Card({ error }) {
  return (
    <div className="card">
      <div>
        <header className="card-title">
          <h5>AVI1958872W - Ended</h5>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            color="#3383a8"
            size="lg"
          />
        </header>
        <div className="card-body">
          <div className="header">
            <div>
              <FontAwesomeIcon
                icon={faDiagramProject}
                color="white"
                size="sm"
              />
              <p>1</p>
            </div>
            <h6>Loyalty</h6>
          </div>
          <p className="title">Wine Cooler Loyalty Program</p>
          <p className="website">winecoolerdeal.com</p>
          <p className="date">06/01/2020 - 07/15/2021</p>
        </div>
      </div>
      <footer>
        <div>
          <FontAwesomeIcon icon={faEnvelopesBulk} color="#A7DCF5" size="2x" />
          <p>254</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faUsers} color="#A7DCF5" size="2x" />
          <p>197</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faShirt} color="#A7DCF5" size="2x" />
          <p>72</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faReceipt} color="#A7DCF5" size="2x" />
          <p>26</p>
        </div>
      </footer>
    </div>
  );
}

export default Card;
