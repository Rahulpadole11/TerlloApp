import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchBoards = () => API.get("/boards");
export const createBoard = (name) => API.post("/boards", { name });
export const createList = (boardId, title) => API.post(`/lists/${boardId}`, { title });
export const createCard = (listId, cardData) => API.post(`/cards/${listId}`, cardData);
export const moveCard = (data) => API.patch("/cards/move", data);
