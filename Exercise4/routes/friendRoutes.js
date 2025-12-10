const express = require("express");
const router = express.Router();
const friends = require("../models/friends"); 



// GET all friends

router.get("/", (req, res) => {
    res.json(friends);
});



// PART 1 — Filter by gender AND starting letter

router.get("/filter", (req, res) => {
    const { gender, letter } = req.query;
    let filtered = [...friends];

    // Filter by gender if provided
    if (gender) {
        filtered = filtered.filter(f => f.gender === gender);

        if (filtered.length === 0) {
            return res.status(404).json({ error: `No friends with gender: ${gender}` });
        }
    }

    // Filter by starting letter
    if (letter) {
        if (letter.length !== 1) {
            return res.status(400).json({ error: "Letter parameter must be one character" });
        }

        filtered = filtered.filter(f =>
            f.name.toLowerCase().startsWith(letter.toLowerCase())
        );

        if (filtered.length === 0) {
            return res.status(404).json({ error: `No friends starting with: ${letter}` });
        }
    }

    res.json(filtered);
});



// PART 2 — Info Route (return only 3 headers)

router.get("/info", (req, res) => {
    const info = {
        "user-agent": req.headers["user-agent"],
        "content-type": req.headers["content-type"],
        "accept": req.headers["accept"]
    };

    res.json(info);
});



// PART 3 — Dynamic GET /friends/:id
// Return a single friend by ID

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: "ID must be a number" });
    }

    const friend = friends.find(f => f.id === id);

    if (!friend) {
        return res.status(404).json({ error: `Friend with ID ${id} not found` });
    }

    res.json(friend);
});



// POST — Add new friend (already provided)

router.post("/", (req, res) => {
    const newFriend = req.body;

    if (!newFriend.name || !newFriend.gender) {
        return res.status(400).json({ error: "Friend must have name and gender" });
    }

    newFriend.id = friends.length + 1;
    friends.push(newFriend);

    res.json(newFriend);
});



// PART 4 — PUT /friends/:id
// Update an existing friend

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const update = req.body;

    const index = friends.findIndex(f => f.id === id);

    if (index === -1) {
        return res.status(404).json({ error: `Friend with ID ${id} not found` });
    }

    // Basic validation
    if (update.name && typeof update.name !== "string") {
        return res.status(400).json({ error: "Name must be a string" });
    }

    if (update.gender && !["male", "female"].includes(update.gender)) {
        return res.status(400).json({ error: "Gender must be male or female" });
    }

    // Update the friend
    friends[index] = { ...friends[index], ...update };

    res.json({
        message: "Friend updated successfully",
        friend: friends[index]
    });
});

module.exports = router;