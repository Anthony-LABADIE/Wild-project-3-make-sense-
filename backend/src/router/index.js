const express = require("express");
const routerDecision = require("./routerDecision");
const routerFirstDecision = require("./routerFirstDecision");
const userRouter = require("./userRouter");
const statusRouter = require("./routerStatus");
const UserDecisionRouter = require("./routerDecicionUser");
const conflictRouter = require("./conflictRouter");
const finalDecisionRouter = require("./finalDecisionRouter");
const authorizationRouter = require("./authorizationRouter");

const router = express.Router();

router.use("/decision", routerDecision);
router.use("/user", userRouter);
router.use("/status", statusRouter);
router.use("/user/decision", UserDecisionRouter);
router.use("/conflict", conflictRouter);
router.use("/finalDecision", finalDecisionRouter);
router.use("/firstdecsion", routerFirstDecision);
router.use("/authorization", authorizationRouter);

module.exports = router;
