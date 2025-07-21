import Card from "../models/Card.js";
import List from "../models/List.js";

export const createCard = async (req, res) => {
  const { listId } = req.params;
  const { title, description } = req.body;

  try {
    const newCard = new Card({ title, description });
    await newCard.save();

    const list = await List.findById(listId);
    list.cards.push(newCard._id);
    await list.save();

    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const moveCard = async (req, res) => {
  const { fromListId, toListId, cardId } = req.body;

  try {
    const fromList = await List.findById(fromListId);
    const toList = await List.findById(toListId);

    fromList.cards.pull(cardId);
    toList.cards.push(cardId);

    await fromList.save();
    await toList.save();

    res.status(200).json({ message: "Card moved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
