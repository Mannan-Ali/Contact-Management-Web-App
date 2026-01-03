import type { Contact } from '../types/contact';

interface Props {
  contacts: Contact[];
}

const ContactList = ({ contacts }: Props) => {
  if (contacts.length === 0) {
    return (
      <div className="text-center py-16 bg-white shadow-sm rounded-lg border-2 border-dashed border-gray-300">
        <h3 className="mt-2 text-sm font-medium text-gray-900">No contacts yet</h3>
        <p className="mt-1 text-sm text-gray-500">Get started by adding a new contact.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div 
          key={contact._id} 
          className="bg-white shadow-sm rounded-lg border border-gray-200 hover:border-indigo-300 transition-all duration-200 overflow-hidden"
        >
          <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            <div className="flex items-center space-x-4 flex-1 min-w-0">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg border border-indigo-200">
                {contact.name.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-gray-900 truncate">
                  {contact.name}
                </h3>
                <div className="flex flex-col sm:flex-row sm:space-x-4 text-sm text-gray-500">
                  <span className="truncate">{contact.email}</span>
                  <span className="hidden sm:inline text-gray-300">•</span>
                  <span>{contact.phone}</span>
                </div>
              </div>
            </div>

            {contact.message && (
              <div className="flex-1 sm:max-w-md lg:max-w-lg">
                <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md border border-gray-100 italic">
                  <p className="line-clamp-2" title={contact.message}>
                    <span className="text-indigo-400 font-serif mr-1">"</span>
                    {contact.message}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;