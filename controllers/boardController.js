import Board from "../models/Board.js";

export const getBoards = async (req, res) => {
  try {
    const boards = await Board.find().populate("lists");
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBoard = async (req, res) => {
  try {
    const newBoard = new Board({ name: req.body.name });
    await newBoard.save();
    res.status(201).json(newBoard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
