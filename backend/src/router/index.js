const express = require("express");
const routerDecision = require("./routerDecision");
const userRouter = require("./userRouter");
const statusRouter = require("./routerStatus");

const router = express.Router();

router.use("/decision", routerDecision);
router.use("/user", userRouter);
router.use("/status", statusRouter);

module.exports = router;
