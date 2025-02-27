import { Router } from "express";
import fs from "node:fs";
import path from "node:path";

const router = Router();
const __dirname = import.meta.dirname;
const file = path.join(__dirname, "..", "data", "cards.json");
let cards = [];

fs.readFile(file, (error, data) => {
  if (error) {
    cards = { error: "Houve um erro ao fazer busca pelos cartões" };

    return;
  }
  cards = JSON.parse(data);
});

router.get("/", (request, response) => {
  if (cards.error) {
    return response.status(404).json(cards);
  }

  return response.json(cards);
});

export { router };
