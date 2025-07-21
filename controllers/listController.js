import List from "../models/List.js";
import Board from "../models/Board.js";

export const createList = async (req, res) => {
  const { boardId } = req.params;
  const { title } = req.body;

  try {
    const newList = new List({ title, cards: [] });
    await newList.save();

    const board = await Board.findById(boardId);
    board.lists.push(newList._id);
    await board.save();

    res.status(201).json(newList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
