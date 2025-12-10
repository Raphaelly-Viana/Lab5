const express = require("express");
const router = express.Router();
const controller = require("../controllers/friendController");

// GET all friends
router.get("/", controller.getAllFriends);

// FILTER
router.get("/filter", controller.filterFriends);

// INFO
router.get("/info", controller.getInfo);

// GET by ID
router.get("/:id", controller.getFriendById);

// POST
router.post("/", controller.addFriend);

// PUT
router.put("/:id", controller.updateFriend);

module.exports = router;