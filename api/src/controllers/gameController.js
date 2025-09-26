import * as gameService from "../services/gameService.js";

export function gameStart(req, res) {
  try {
    const game = gameService.iniciarJogo();
    res.json(game);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
}

export function pickCard(req, res) {
  try {
    const { gameId } = req.body;
    const game = gameService.pedirCarta(gameId);
    res.json(game);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
}

export function stop(req, res) {
  try {
    const { gameId } = req.body;
    const result = gameService.parar(gameId);
    res.json(result);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
}
