const express = require("express");
const router = express.Router();
const controller = require("../Controllers/friendController");

router.get("/", controller.getAllFriends);
router.get("/filter", controller.filterFriends);
router.get("/info", controller.getInfo);
router.get("/:id", controller.getFriendById);
router.post("/", controller.addFriend);
router.put("/:id", controller.updateFriend);

module.exports = router;
