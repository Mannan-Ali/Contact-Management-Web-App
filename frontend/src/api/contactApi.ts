import type { Contact, ApiResponse } from "../types/contact.ts";

const BASE_URL = "http://localhost:8000/api/v1/contact";

export const getAllContacts = async (): Promise<ApiResponse<Contact[]>> => {
  const response = await fetch(`${BASE_URL}/getallContacts`);
  if (!response.ok) {
    throw new Error("Failed to fetch contacts");
  }
  return response.json();
};

export const addContact = async (
  contactData: Omit<Contact, "_id" | "createdAt">
): Promise<ApiResponse<Contact>> => {
  const response = await fetch(`${BASE_URL}/addContact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to add contact");
  }
  return response.json();
};

export const deleteContact = async (id: string): Promise<ApiResponse<null>> => {
  const response = await fetch(`${BASE_URL}/deleteContact/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete contact");
  return response.json();
};