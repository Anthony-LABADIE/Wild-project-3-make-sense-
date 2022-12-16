const express = require("express");
const routerDecision = require("./routerDecision");
const userRouter = require("./userRouter");

const router = express.Router();

router.use("/decision", routerDecision);
router.use("/user", userRouter);

module.exports = router;
