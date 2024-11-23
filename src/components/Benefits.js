import React, { useState } from "react";
import "./Benefits.css";

function Benefits() {
  const [activeCategory, setActiveCategory] = useState("Renters");

  const benefitsData = {
    Renters: [
      {
        id: 1,
        title: "Match With Your Ideal Roommate",
        image: "/images/sec2.jpg",
      },
      {
        id: 2,
        title: "Seamless Communication",
        image: "/images/sec2_1.jpg",
      },
      {
        id: 3,
        title: "Discover Activities Around You",
        image: "/images/sec2_2.jpg",
      },
    ],
    "Landlords/Property Managers": [
      {
        id: 1,
        title: "Efficient Property Management",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        title: "Find Trustworthy Tenants",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        title: "Optimize Rental Income",
        image: "https://via.placeholder.com/150",
      },
    ],
    Agents: [
      {
        id: 1,
        title: "Expand Your Network",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        title: "Access Exclusive Listings",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        title: "Increase Efficiency",
        image: "https://via.placeholder.com/150",
      },
    ],
  };

  return (
    <div className="benefits-section">
      <h1>
        Discover The <span className="highlight">Benefits</span> Of Renting With Us
      </h1>
      <p>
        Beautifully curated rental homes that perfectly match your style and
        needs, making your search for the ideal living space effortless and
        enjoyable.
      </p>

      {/* Categories */}
      <div className="categories">
        {Object.keys(benefitsData).map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Benefits Cards */}
      <div className="benefits-cards">
        {benefitsData[activeCategory].map((benefit) => (
          <div className="benefit-card" key={benefit.id}>
            <img src={benefit.image} alt={benefit.title} />
            <h2>{benefit.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
