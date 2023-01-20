const express = require("express");

const noticeRouter = express.Router();

const noticeController = require("../controllers/noticeController");

noticeRouter.get("/", noticeController.getAllNotice);
noticeRouter.get("/email", noticeController.getOneNoticeByEmail);
noticeRouter.get("/:id", noticeController.getOneNotice);
noticeRouter.post("/:id", noticeController.createOneNotice);
noticeRouter.put("/:id", noticeController.modifyNotice);
noticeRouter.delete("/:id", noticeController.deleteNotice);

module.exports = noticeRouter;
