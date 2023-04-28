import express from "express";
import { body } from "express-validator";
// import { tokenAuth } from "../middlewares/token.middleware.js";

const router = express.Router();

router.get(
  "/test1",
  // tokenAuth,
  (req, res) => res.status(200).json({
    test: "success"
  })
);

export default router;
