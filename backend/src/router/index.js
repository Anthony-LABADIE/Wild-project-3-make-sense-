const express = require("express");
const routerDecision = require("./routerDecision");
const routerFirstDecision = require("./routerFirstDecision");
const userRouter = require("./userRouter");

const router = express.Router();

router.use("/decision", routerDecision);
router.use("/user", userRouter);
router.use("/firstdecsion", routerFirstDecision);

module.exports = router;
