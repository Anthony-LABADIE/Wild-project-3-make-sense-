const express = require("express");
const routerDecision = require("./routerDecision");
const userRouter = require("./userRouter");
const conflictRouter = require("./conflictRouter");
const finalDecisionRouter = require("./finalDecisionRouter");

const router = express.Router();

router.use("/decision", routerDecision);
router.use("/user", userRouter);
router.use("/conflict", conflictRouter);
router.use("/finalDecision", finalDecisionRouter);

module.exports = router;
