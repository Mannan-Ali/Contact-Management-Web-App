import { useState,type FormEvent, type ChangeEvent } from 'react';
// import type { Contact } from '../types/contact';
import { addContact } from '../api/contactApi';

interface Props {
  onSuccess: () => void;
}

const ContactForm = ({ onSuccess }: Props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const { name, email, phone, message } = formData;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // Button is disabled if fields are empty or email is invalid
  const isFormInvalid = !name.trim() || !phone.trim() || !isEmailValid;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isFormInvalid) return;

    setIsSubmitting(true);
    try {
      await addContact(formData);
      setFormData({ name: '', email: '', phone: '', message: '' });
      onSuccess(); // Call parent function to navigate
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save contact.');
      setIsSubmitting(false);
    }
  };

  // Modern Tailwind input styling
  const inputClass = `mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
    focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 
    disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
    transition duration-150 ease-in-out`;
  
  const labelClass = "block text-sm font-medium text-gray-700";

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Contact Details</h2>
            <p className="mt-1 text-sm text-gray-500">Fill in the information below to create a new contact.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {error && (
                <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm border-l-4 border-red-500">
                    {error}
                </div>
            )}
            
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className={labelClass}>Name <span className="text-red-500">*</span></label>
                    <input type="text" name="name" id="name" value={name} onChange={handleChange} required className={inputClass} placeholder="e.g. Jane Doe" />
                </div>
                <div>
                    <label htmlFor="phone" className={labelClass}>Phone <span className="text-red-500">*</span></label>
                    <input type="tel" name="phone" id="phone" value={phone} onChange={handleChange} required className={inputClass} placeholder="e.g. +1 (555) 000-0000" />
                </div>
            </div>
            
            <div>
                <label htmlFor="email" className={labelClass}>Email <span className="text-red-500">*</span></label>
                <input type="email" name="email" id="email" value={email} onChange={handleChange} required className={inputClass} placeholder="e.g. jane@company.com" />
                {!isEmailValid && email && (
                  <p className="text-red-500 text-xs mt-1">Please enter a valid email address.</p>
                )}
            </div>
            
            <div>
                 <label htmlFor="message" className={labelClass}>Message <span className="text-gray-400 font-normal text-xs ml-1">(optional)</span></label>
                 <textarea name="message" id="message" rows={4} value={message} onChange={handleChange} className={inputClass} placeholder="Any additional notes, context, or details..." />
            </div>

            <div className="flex justify-end pt-4 border-t border-gray-100">
                <button
                  type="submit"
                  disabled={isFormInvalid || isSubmitting}
                  className={`inline-flex items-center justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ${
                    isFormInvalid || isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : 'Save Contact'}
                </button>
            </div>
        </form>
    </div>
  );
};

export default ContactForm;