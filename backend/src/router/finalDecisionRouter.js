const express = require("express");

const finalDecisiontRouter = express.Router();

const finalDecisionControllers = require("../controllers/finalDecisionController");

finalDecisiontRouter.get("/", finalDecisionControllers.getAllFinalDecision);
finalDecisiontRouter.get("/:id", finalDecisionControllers.getOneFinalDecision);
finalDecisiontRouter.post("/", finalDecisionControllers.postFinalDecision);
finalDecisiontRouter.delete(
  "/:id",
  finalDecisionControllers.deleteFinalDecision
);
finalDecisiontRouter.put("/:id", finalDecisionControllers.updateFinalDecision);

module.exports = finalDecisiontRouter;
