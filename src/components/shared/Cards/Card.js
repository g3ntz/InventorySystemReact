import React from "react";
import { StyledCard } from "./Card.styled";
import { Link } from "react-router-dom";

const Card = ({ image, title, link, stats }) => {
  return (
    <StyledCard>
      <div className="card-head">
        <div className="card-title">
          <img
            src={image}
            width="20px"
            height="20px"
            alt=""
          />
          <p>{title}</p>
        </div>

        <div className="card-link">
          <Link to={link}>
            <p>View All</p>
            <img src="../../images/right-arrow-icon.svg" alt="" />
          </Link>
        </div>
      </div>

      <div className="card-body">
        {stats.map((stat,index) => {
          return (
            <div key={index} className="stat-item">
              <p className="value">{stat.value}</p>
              <p className="text">{stat.text}</p>
            </div>
          );
        })}
      </div>
    </StyledCard>
  );
};

export default Card;
