const friends = require("../models/friends");

// GET all friends
exports.getAllFriends = (req, res) => {
    res.json(friends);
};

// FILTER friends (gender + letter)
exports.filterFriends = (req, res) => {
    const { gender, letter } = req.query;
    let filtered = [...friends];

    if (gender) {
        filtered = filtered.filter(f => f.gender === gender);
    }

    if (letter) {
        if (letter.length !== 1) {
            return res.status(400).json({ error: "Letter must be one character" });
        }

        filtered = filtered.filter(f =>
            f.name.toLowerCase().startsWith(letter.toLowerCase())
        );
    }

    if (filtered.length === 0) {
        return res.status(404).json({ error: "No friends matched the filters" });
    }

    res.json(filtered);
};

// INFO route
exports.getInfo = (req, res) => {
    res.json({
        "user-agent": req.headers["user-agent"],
        "content-type": req.headers["content-type"],
        "accept": req.headers["accept"]
    });
};

// GET friend by ID
exports.getFriendById = (req, res) => {
    const id = parseInt(req.params.id);
    const friend = friends.find(f => f.id === id);

    if (!friend) {
        return res.status(404).json({ error: `Friend with ID ${id} not found` });
    }

    res.json(friend);
};

// POST add new friend
exports.addFriend = (req, res) => {
    const newFriend = req.body;

    if (!newFriend.name || !newFriend.gender) {
        return res.status(400).json({ error: "Friend must have name and gender" });
    }

    newFriend.id = friends.length + 1;
    friends.push(newFriend);

    res.json(newFriend);
};

// PUT update friend
exports.updateFriend = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;

    const index = friends.findIndex(f => f.id === id);

    if (index === -1) {
        return res.status(404).json({ error: `Friend with ID ${id} not found` });
    }

    if (updatedData.gender && !["male", "female"].includes(updatedData.gender)) {
        return res.status(400).json({ error: "Gender must be male or female" });
    }

    friends[index] = { ...friends[index], ...updatedData };

    res.json({
        message: "Friend updated successfully",
        friend: friends[index]
    });
};