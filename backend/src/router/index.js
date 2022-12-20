const express = require("express");
const routerDecision = require("./routerDecision");
const userRouter = require("./userRouter");
const conflictRouter = require("./conflictRouter");
const finalDecisionRouter = require("./finalDecisionRouter");
const authorizationRouter = require("./authorizationRouter");

const router = express.Router();

router.use("/decision", routerDecision);
router.use("/user", userRouter);
router.use("/conflict", conflictRouter);
router.use("/finalDecision", finalDecisionRouter);
router.use("/authorization", authorizationRouter);

module.exports = router;
