const friends = require("../Models/friends");

const getAllFriends = (req,res) => res.json(friends);

const filterFriends = (req,res) => {
  const { gender, letter } = req.query;
  let filtered = [...friends];
  if (gender) {
    filtered = filtered.filter(f => f.gender === gender);
  }
  if (letter) {
    if (letter.length !== 1) return res.status(400).json({ error: "letter must be 1 char" });
    filtered = filtered.filter(f => f.name.toLowerCase().startsWith(letter.toLowerCase()));
  }
  if (filtered.length === 0) return res.status(404).json({ error: "No matches" });
  res.json(filtered);
};

const getInfo = (req,res) => {
  res.json({
    "user-agent": req.headers["user-agent"],
    "content-type": req.headers["content-type"],
    "accept": req.headers["accept"]
  });
};

const getFriendById = (req,res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "ID must be a number" });
  const friend = friends.find(f => f.id === id);
  if (!friend) return res.status(404).json({ error: "Friend not found" });
  res.json(friend);
};

const addFriend = (req,res) => {
  const { name, gender } = req.body;
  if (!name || !gender) return res.status(400).json({ error: "name and gender required" });
  const id = friends.length + 1;
  const newFriend = { id, name, gender };
  friends.push(newFriend);
  res.json(newFriend);
};

const updateFriend = (req,res) => {
  const id = parseInt(req.params.id);
  const idx = friends.findIndex(f => f.id === id);
  if (idx === -1) return res.status(404).json({ error: "Friend not found" });
  const { name, gender } = req.body;
  if (name) friends[idx].name = name;
  if (gender && (gender === "male" || gender === "female")) friends[idx].gender = gender;
  res.json({ message: "Updated", friend: friends[idx] });
};

module.exports = {
  getAllFriends,
  filterFriends,
  getInfo,
  getFriendById,
  addFriend,
  updateFriend
};