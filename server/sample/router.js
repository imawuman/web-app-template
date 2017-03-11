import express from "express";

const router = express.Router(); // eslint-disable-line

router.get("/list", (req, res) => {
  res.send([]);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ id });
});

export default router;
