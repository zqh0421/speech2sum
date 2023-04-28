import express from "express";
import testRoute from "./test.route.js";

const router = express.Router();

router.use("/test", testRoute);

export default router;