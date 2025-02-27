import { Router } from "express";
import fs from "node:fs";
import path from "node:path";

const router = Router();
const __dirname = import.meta.dirname;
const file = path.join(__dirname, "..", "data", "users.json");
let users = [];

fs.readFile(file, (error, data) => {
  if (error) {
    users = { error: "Houve um erro ao fazer a leitura dos usuários" };

    return;
  }
  users = JSON.parse(data);
});

router.get("/", (request, response) => {
  if (users.error) {
    return response.status(404).json(users);
  }

  return response.json(users);
});

router.get("/:_id", (request, response) => {
  if (users.error) {
    return response.status(404).json(users);
  }

  const { _id } = request.params;
  const foundUser = users.find((user) => user._id == _id);

  if (!foundUser) {
    return response
      .status(404)
      .json({ message: `${_id} do usuário não encontrado` });
  }

  return response.json(foundUser);
});

export { router };
