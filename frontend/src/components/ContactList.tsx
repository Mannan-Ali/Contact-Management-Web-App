import type { Contact } from '../types/contact';
import { deleteContact } from '../api/contactApi';
import { useState } from 'react';

interface Props {
  contacts: Contact[];
  onRefresh: () => void; 
}

const ContactList = ({ contacts, onRefresh }: Props) => {
  const [feedback, setFeedback] = useState<{msg: string, type: 'success' | 'error'} | null>(null);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;

    try {
      const result = await deleteContact(id);
      if (result.success) {
        setFeedback({ msg: "Contact removed successfully!", type: 'success' });
        onRefresh(); 
        setTimeout(() => setFeedback(null), 3000); 
      }
    } catch (err) {
      console.error("Delete Error:", err);
      setFeedback({ msg: "Failed to delete contact.", type: 'error' });
    }
  };

  return (
    <div className="space-y-4">
      {/* Toast Notification for Delete Action */}
      {feedback && (
        <div className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg z-50 animate-bounce ${
          feedback.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
        }`}>
          {feedback.msg}
        </div>
      )}

      {contacts.map((contact) => (
        <div key={contact._id} className="bg-white shadow-sm rounded-lg border border-gray-200 hover:border-indigo-300 transition-all p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group">
          <div className="flex items-start space-x-4 flex-1 min-w-0">
            {/* Avatar */}
            <div className="h-12 w-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold border border-indigo-100 flex-shrink-0">
              {contact.name.charAt(0).toUpperCase()}
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-900 truncate">{contact.name}</h3>
              <p className="text-sm text-gray-500 mb-2 truncate">
                {contact.phone} <span className="mx-1 text-gray-300">|</span> {contact.email}
              </p>

              {/* FIXED: Displaying the stored message */}
              {contact.message && (
                <div className="mt-2 bg-gray-50 border border-gray-100 rounded-md p-3 text-sm text-gray-600 italic">
                  <p className="line-clamp-2">"{contact.message}"</p>
                </div>
              )}
            </div>
          </div>

          <button 
            onClick={() => handleDelete(contact._id)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 flex-shrink-0"
            title="Delete Contact"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;