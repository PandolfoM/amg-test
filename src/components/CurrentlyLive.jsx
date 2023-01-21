import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { useIsOverflow } from "../hooks/useIsOverflow";
import Card from "./Card";

function CurrentlyLive() {
  const [seeAll, setSeeAll] = useState(false);
  const ref = useRef();
  const isOverflow = useIsOverflow(ref);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <section className="dashboard-section" style={{ marginTop: "1rem" }}>
      <div className="dashboard-section-title">
        <div>
          <FontAwesomeIcon icon={faCalendarDays} color="#292b2d" />
          <h3>Currently Live</h3>
          <p onClick={() => isOverflow && setSeeAll(!seeAll)}>
            {seeAll ? "Hide" : "See All"}
          </p>
        </div>
        <div className="card-arrows">
          <button
            style={{
              backgroundColor: !isOverflow && "#A6C9D8",
              cursor: !isOverflow && "default",
            }}
            onClick={() => isOverflow && scroll(-300)}>
            <FontAwesomeIcon icon={faChevronLeft} color="white" size="xl" />
          </button>
          <button
            style={{
              backgroundColor: !isOverflow && "#A6C9D8",
              cursor: !isOverflow && "default",
            }}
            onClick={() => isOverflow && scroll(300)}>
            <FontAwesomeIcon icon={faChevronRight} color="white" size="xl" />
          </button>
        </div>
      </div>
      <div
        ref={ref}
        className="dashboard-section-card"
        style={{ flexWrap: seeAll ? "wrap" : "nowrap" }}>
        <Card />
      </div>
    </section>
  );
}

export default CurrentlyLive;
