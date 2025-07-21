import React from "react";
import { useNavigate } from "react-router-dom";

const BoardCard = ({ board }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/board/${board._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer transition-all"
    >
      <h3 className="text-lg font-bold text-blue-700">{board.name}</h3>
    </div>
  );
};

export default BoardCard;
