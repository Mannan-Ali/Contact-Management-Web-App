import { Router } from "express";
import { storeContact,getAllContacts, deleteContact } from "../controllers/contact.controller.js";
const router = Router();


router.route("/addContact").post(storeContact);
router.route("/getallContacts").get(getAllContacts);
router.route("/deleteContact/:contactId").delete(deleteContact);
export default router;
