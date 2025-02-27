import express from "express";
import { router as userRouter } from "./routes/users";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log(
    `${new Intl.DateTimeFormat("pt-BR").format(Date.now())} - ${req.method} - ${
      req.url
    }`
  );
  next();
}

app.use(logger);

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
