const express = require("express");
const routerDecision = require("./routerDecision");
const userRouter = require("./userRouter");
const authorizationRouter = require("./authorizationRouter");

const router = express.Router();

router.use("/decision", routerDecision);
router.use("/user", userRouter);
router.use("/authorization", authorizationRouter);

module.exports = router;
