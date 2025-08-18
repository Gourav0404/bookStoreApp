import express from "express";
import { contactForm } from "../controller/form.controller.js";

const router = express.Router();

router.post("/send", contactForm);

export default router;