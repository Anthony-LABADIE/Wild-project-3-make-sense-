const express = require("express");
const routerDecision = require("./routerDecision");
const routerFirstDecision = require("./routerFirstDecision");
const userRouter = require("./userRouter");
const noticeRouter = require("./noticeRouter");
const statusRouter = require("./routerStatus");
const UserDecisionRouter = require("./routerDecicionUser");
const conflictRouter = require("./conflictRouter");
const finalDecisionRouter = require("./finalDecisionRouter");
const authorizationRouter = require("./authorizationRouter");
const AuthorisationUserDecisionRouter = require("./routerAuthorizationDecisionUser");

const router = express.Router();

router.use("/decision", routerDecision);
router.use("/user", userRouter);
router.use("/notice", noticeRouter);
router.use("/status", statusRouter);
router.use("/user/decision", UserDecisionRouter);
router.use("/conflict", conflictRouter);
router.use("/finalDecision", finalDecisionRouter);
router.use("/firstdecsion", routerFirstDecision);
router.use("/authorization", authorizationRouter);
router.use("/decision/authorization/user", AuthorisationUserDecisionRouter);

module.exports = router;
