// HomePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/boards`)
      .then((res) => setBoards(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">All Boards</h1>
      {boards.map((board) => (
        <div key={board._id} className="border p-2 my-2 rounded">
          {board.title}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
