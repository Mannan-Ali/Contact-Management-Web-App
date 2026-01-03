import { Router } from "express";
import { storeContact,getAllContacts } from "../controllers/contact.controller.js";
const router = Router();


router.route("/addContact").post(storeContact);
router.route("/getallContacts").get(getAllContacts);
export default router;
