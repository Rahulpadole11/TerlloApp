import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchBoardById,
  createList,
  fetchListsByBoard,
} from "./services/api";
import ListColumn from "../components/ListColumn";

const BoardPage = () => {
  const { id } = useParams();
  const [board, setBoard] = useState(null);
  const [lists, setLists] = useState([]);
  const [newListTitle, setNewListTitle] = useState("");

  useEffect(() => {
    const getBoardAndLists = async () => {
      try {
        const boardData = await fetchBoardById(id);
        setBoard(boardData.data);
        const listData = await fetchListsByBoard(id);
        setLists(listData.data);
      } catch (err) {
        console.error("Error loading board:", err);
      }
    };

    getBoardAndLists();
  }, [id]);

  const handleAddList = async () => {
    if (!newListTitle.trim()) return;
    await createList({ boardId: id, title: newListTitle });
    setNewListTitle("");
    const updatedLists = await fetchListsByBoard(id);
    setLists(updatedLists.data);
  };

  if (!board) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{board.name}</h1>

      <div className="flex gap-4 overflow-auto">
        {lists.map((list) => (
          <ListColumn key={list._id} list={list} />
        ))}

        {/* Add New List */}
        <div className="min-w-[250px] bg-gray-200 p-4 rounded">
          <input
            type="text"
            placeholder="New list title"
            value={newListTitle}
            onChange={(e) => setNewListTitle(e.target.value)}
            className="w-full p-2 rounded border"
          />
          <button
            onClick={handleAddList}
            className="mt-2 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Add List
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
