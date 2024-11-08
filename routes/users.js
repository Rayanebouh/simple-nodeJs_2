const express = require("express")
const router = express.Router()
const { getAllUsers, createNewUser, updateUser, deleteUser } = require("../controllers/usersControllers")

const db = require("../database")

router.get("/users", getAllUsers)

router.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)

	// trouve son index, verifier si le userIndex est positive
	const userIndex = users.findIndex((user) => user.id === id)

	// utilisateur non trouvé
	if (userIndex < 0)
		return res.status(404).json({ msg: "utilisateur non trouvé" })

    // si el est trouvé

	res.json(users[userIndex])
})

// POST : CRÉER un nouvel utilisateur, basé sur les données passées dans le corps(body) de la requête
router.post("/users", createNewUser)

router.put("/users/:id", updateUser)

router.delete("/users/:id", deleteUser)

module.exports = router