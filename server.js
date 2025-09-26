import app from "./api/src/app.js";

const PORTA = process.env.PORT || 2121;

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
