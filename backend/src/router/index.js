const express = require("express");
const routerDecision = require("./routerDecision");
const userRouter = require("./userRouter");
const noticeRouter = require("./noticeRouter");

const router = express.Router();

router.use("/decision", routerDecision);
router.use("/user", userRouter);
router.use("/notice", noticeRouter);

module.exports = router;
