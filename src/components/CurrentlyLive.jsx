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
          <p onClick={() => setSeeAll(!seeAll)}>
            {seeAll ? "Hide" : "See All"}
          </p>
        </div>
        <div className="card-arrows">
          <FontAwesomeIcon
            style={{
              backgroundColor: !isOverflow && "#A6C9D8",
              cursor: !isOverflow && "not-allowed",
            }}
            icon={faChevronLeft}
            color="white"
            size="xl"
            onClick={() => isOverflow && scroll(-300)}
          />
          <FontAwesomeIcon
            style={{
              backgroundColor: !isOverflow && "#A6C9D8",
              cursor: !isOverflow && "not-allowed",
            }}
            icon={faChevronRight}
            color="white"
            size="xl"
            onClick={() => isOverflow && scroll(300)}
          />
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
