import React from "react";
import "./RentalHome.css";
import PropertyCard from "./PropertyCard";

function RentalHome() {
   

const properties = [
    {
      id: 1,
      image: "/images/img.jpg", // Direct path from the public folder
      title: "Flat In North Goa",
      details: "2 beds",
      price: "₹62,758 month",
      rating: 4.3,
    },
    {
      id: 2,
      image: "/images/img1.jpg",
      title: "Flat In Anarbol",
      details: "Studio apartment",
      price: "₹43,758 month",
      rating: 4.5,
    },
    {
      id: 3,
      image: "/images/img2.jpg",
      title: "Flat In Stay In Sikkim",
      details: "Jewly's home",
      price: "₹76,258 month",
      rating: 4.3,
    },
  ];
  

  return (
    <div className="rental-home">
      <h1>
        Find Your Perfect <span className="highlight">Rental Home</span>
      </h1>
      <p>
        Beautifully curated rental homes that perfectly match your vibe and
        needs, making your search for the ideal living space effortless and
        exciting.
      </p>
      <div className="city-buttons">
        {["Goa", "Mumbai", "Kolkata", "Jaipur", "Bangalore", "Karnal"].map(
          (city) => (
            <button key={city}>{city}</button>
          )
        )}
        <button>Find your city</button>
      </div>
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
      <button className="view-all">View All</button>
    </div>
  );
}

export default RentalHome;
