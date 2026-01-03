import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const AddContact = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/', { state: { success: true } });
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Create New Contact
        </h2>
      </div>
      <ContactForm onSuccess={handleSuccess} />
    </div>
  );
};

export default AddContact;