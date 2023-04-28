import express from "express";
import testRoute from "./test.route.js";
import transcribeRoute from "./transcribe.route.js";

const router = express.Router();

router.use("/test", testRoute);
router.use("/transcribe", transcribeRoute);

export default router;