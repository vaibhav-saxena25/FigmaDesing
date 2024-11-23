import React from "react";
import "./PropertyCard.css";

function PropertyCard({ image, title, details, price, rating }) {
  return (
    <div className="property-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{details}</p>
      <div className="price-rating">
        <span>{price}</span>
        <span>{rating}⭐</span>
      </div>
    </div>
  );
}

export default PropertyCard;
