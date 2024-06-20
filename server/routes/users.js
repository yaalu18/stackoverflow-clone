import express  from "express";
import {login,signup} from '../controllers/Auth.js'
import { getAllUsers,updateProfile } from "../controllers/users.js";
import auth from "../middlewares/index.js";

const router=express.Router()
router.post('/signup',signup)
router.post('/login',login)
router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile);
export default router

