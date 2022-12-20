const express = require("express");
const routerDecision = require("./routerDecision");
const routerFirstDecision = require("./routerFirstDecision");
const userRouter = require("./userRouter");
const authorizationRouter = require("./authorizationRouter");

const router = express.Router();

router.use("/decision", routerDecision);
router.use("/user", userRouter);
router.use("/firstdecsion", routerFirstDecision);
router.use("/authorization", authorizationRouter);

module.exports = router;
