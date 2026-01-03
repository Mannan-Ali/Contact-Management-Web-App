import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const AddContact = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Create New Contact
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Add a new contact to your list. Fields marked with an asterisk (*) are required.
        </p>
      </div>
      {/* Pass a function to navigate back to home on success */}
      <ContactForm onSuccess={() => navigate('/')} />
    </div>
  );
};

export default AddContact;