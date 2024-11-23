import React, { useState } from "react";
import "./Localities.css";

function Localities() {
  const [activeTab, setActiveTab] = useState("Popular");

  const localitiesData = [
    { name: "Mira Road", price: "₹9.6K/sq.ft", change: 1.57 },
    { name: "Andheri West", price: "₹28.1K/sq.ft", change: -4.8 },
    { name: "Chembur", price: "₹20.9K/sq.ft", change: 10.7 },
    { name: "Borivali West", price: "₹22.3K/sq.ft", change: -1.0 },
    { name: "Malad West", price: "₹18.8K/sq.ft", change: 4.67 },
    { name: "Kandivali West", price: "₹20.4K/sq.ft", change: 8.57 },
  ];

  const tabs = ["Popular", "Investment Hotspots", "Affordable", "Great Lifestyle"];

  return (
    <div className="localities-container">
      {/* Title */}
      <h1 className="localities-title">
        Leading <span className="highlight">Localities</span> To Explore
      </h1>
      <p className="localities-description">
        Explore a selection of the most desirable neighborhoods, where vibrant
        communities and exceptional amenities come together to create your perfect living environment.
      </p>

      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="localities-content">
        {/* Localities List */}
        <div className="localities-list">
          {localitiesData.map((locality, index) => (
            <div key={index} className="locality-item">
              <div className="locality-name">{locality.name}</div>
              <div className="locality-price">{locality.price}</div>
              <div
                className={`locality-change ${
                  locality.change > 0 ? "positive" : "negative"
                }`}
              >
                {locality.change > 0 ? "+" : ""}
                {locality.change}%
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="localities-map">
          <img
            src="/images/map.jpg"
            alt="Map"
            className="map-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Localities;
