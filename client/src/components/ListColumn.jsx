import React, { useEffect, useState } from "react";
import { createCard, fetchCardsByList } from "./services/api";
import CardItem from "./CardItem";

const ListColumn = ({ list }) => {
  const [cards, setCards] = useState([]);
  const [newCardTitle, setNewCardTitle] = useState("");

  useEffect(() => {
    const loadCards = async () => {
      try {
        const res = await fetchCardsByList(list._id);
        setCards(res.data);
      } catch (err) {
        console.error("Failed to load cards", err);
      }
    };

    loadCards();
  }, [list._id]);

  const handleAddCard = async () => {
    if (!newCardTitle.trim()) return;
    await createCard({ listId: list._id, title: newCardTitle });
    setNewCardTitle("");
    const updated = await fetchCardsByList(list._id);
    setCards(updated.data);
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow min-w-[250px]">
      <h2 className="font-bold text-xl mb-2">{list.title}</h2>

      <div className="space-y-2">
        {cards.map((card) => (
          <CardItem key={card._id} card={card} />
        ))}
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Add new card"
          value={newCardTitle}
          onChange={(e) => setNewCardTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleAddCard}
          className="mt-2 w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Add Card
        </button>
      </div>
    </div>
  );
};

export default ListColumn;
