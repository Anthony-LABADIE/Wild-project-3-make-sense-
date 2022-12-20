const express = require("express");
const routerDecision = require("./routerDecision");
const userRouter = require("./userRouter");
const statusRouter = require("./routerStatus");
const UserDecisionRouter = require("./routerDecicionUser");

const router = express.Router();

router.use("/decision", routerDecision);
router.use("/user", userRouter);
router.use("/status", statusRouter);
router.use("/user/decision", UserDecisionRouter);

module.exports = router;
