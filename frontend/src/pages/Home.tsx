import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import ContactList from "../components/ContactList";
import { getAllContacts } from "../api/contactApi";
import type { Contact } from "../types/contact";

const Home = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchContacts = useCallback(async () => {
    try {
      setError("");
      const response = await getAllContacts();
      if (response.success) {
        setContacts(response.data);
      }
    } catch (err) {
      setError(
        "Failed to connect to the server. Please ensure backend is running."
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            All Contacts
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            A list of all your submitted contacts and their messages.
          </p>
        </div>
        <div className="mt-6 flex md:mt-0 md:ml-4">
          <Link
            to="/add"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add New Contact
          </Link>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-indigo-600"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      ) : (
        <ContactList contacts={contacts} onRefresh={fetchContacts} />
      )}
    </div>
  );
};

export default Home;
