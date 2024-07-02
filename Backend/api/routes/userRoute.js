import express from "express";
import {
  registerUser,
  loginUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getUserDetails
} from "../controllers/userController.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

// Login
router.post("/login", loginUser);

// Register a new user
router.post("/register", registerUser);

// Retrieve a single user
router.get("/details",requireAuth, getUserDetails);

// Retrieve all users
router.get("/", getUsers);

// Retrieve a single user by ID
router.get("/:id", getUserById);

// Update a user by ID
router.put("/:id", updateUserById);

// Delete a user by ID
router.delete("/:id", deleteUserById);

export default router;
