import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  return response.json({ users: "ok" });
});

export { router };
