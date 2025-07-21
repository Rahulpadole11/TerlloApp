import React from "react";

const CardItem = ({ card }) => {
  return (
    <div className="bg-white p-3 rounded shadow hover:shadow-md transition">
      <p className="text-gray-800">{card.title}</p>
    </div>
  );
};

export default CardItem;
