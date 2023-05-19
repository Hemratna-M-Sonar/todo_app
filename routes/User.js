import express from "express";
import {register, verify, login, logout, addTask, removeTask, updateTask, getMyProfile, updateProfile, updatePassword, forgotPassword} from "../controllers/UserController.js";
import { isAunthenticated } from './../middleware/auth.js';
const router = express.Router();

router.route("/register").post(register);
router.route("/verify").post(isAunthenticated ,verify);
router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/me").get(isAunthenticated, getMyProfile);

router.route("/newtask").post(isAunthenticated, addTask);
router.route("/task/:taskId").get(isAunthenticated, updateTask).delete(isAunthenticated, removeTask);

router.route("/updateprofile").put(isAunthenticated, updateProfile);
router.route("/updatepassword").put(isAunthenticated, updatePassword);

router.route("/forgotpassword").post(forgotPassword);
export default router;

