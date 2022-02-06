import express, { Response, Request } from "express";

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.get("/", (req: Request, res: Response) => res.send("😐👍"));

const start = () => {
  return app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Server ready! [PORT ${PORT}]`);
  });
};

export default { start };
