import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-indigo-100 text-indigo-700'
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }`;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* A simple logo/title */}
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                ContactManager
              </span>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-4 items-center">
              {/* Navigation Links */}
              <NavLink to="/" className={linkClass} end>
                All Contacts
              </NavLink>
              <NavLink to="/add" className={linkClass}>
                Add New
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden border-t border-gray-200">
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            <NavLink to="/" className={linkClass} end>All Contacts</NavLink>
            <NavLink to="/add" className={linkClass}>Add New</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;