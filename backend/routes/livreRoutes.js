const express = require("express");
const router = express.Router();
const livreController = require("../controllers/livreController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

router.get("/", livreController.getAll);
router.get("/:id", livreController.getById);
router.post("/", authMiddleware, isAdmin, livreController.create);
router.put("/:id", authMiddleware, isAdmin, livreController.update);
router.delete("/:id", authMiddleware, isAdmin, livreController.remove);

module.exports = router;
