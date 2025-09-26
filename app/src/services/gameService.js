import axios from "axios";

const API_URL = "http://localhost:2121/api/game";

export async function startGame() {
  const res = await axios.post(`${API_URL}/start`);
  return res.data;
}

export async function pickCard(gameId) {
  const res = await axios.post(`${API_URL}/card`, { gameId });
  return res.data;
}

export async function stop(gameId) {
  const res = await axios.post(`${API_URL}/stop`, { gameId });
  return res.data;
}
