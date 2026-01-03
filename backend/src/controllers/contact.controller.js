import { Contact } from "../models/contact.model.js";

// Function to handle storing a new contact
const storeContact = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Validation
        if (!name || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: "Name, Email, and Phone are required fields!"
            });
        }

        // 2. Create the entry in Database
        const contact = await Contact.create({
            name,
            email,
            phone,
            message: message || "" //optional
        });

        if (!contact) {
            return res.status(500).json({
                success: false,
                message: "Something went wrong while saving the contact"
            });
        }
        return res.status(201).json({
            success: true,
            data: contact,
            message: "Contact stored successfully!"
        });

    } catch (error) {
        // Handling the Email regex error or other DB errors
        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }
};

// Function to handle fetching all contacts
const getAllContacts = async (req, res) => {
    try {
        // Fetching all contacts, sorting by newest first
        const contacts = await Contact.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: contacts,
            message: "Contacts retrieved successfully!"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while fetching contacts",
            error: error.message
        });
    }
};

const deleteContact = async (req, res) => {
    try {
        const { contactId } = req.params;

        // Verify the contact exists first
        const contact = await Contact.findById(contactId);
        
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found! It may have already been deleted."
            });
        }

        // Delete the contact
        await Contact.findByIdAndDelete(contactId);

        return res.status(200).json({
            success: true,
            message: "Contact deleted successfully!"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error deleting contact",
            error: error.message
        });
    }
};
export {storeContact,getAllContacts,deleteContact};