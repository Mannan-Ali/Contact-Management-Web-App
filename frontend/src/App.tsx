import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddContact from './pages/AddContact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans antialiased">
        {/* Navbar stays at the top of every page */}
        <Navbar />
        
        {/* Main content area where pages are switched */}
        <main className="py-12 px-4 sm:px-6 lg:px-8">
          <Routes>
            {/* Route for the homepage (Contact List) */}
            <Route path="/" element={<Home />} />
            {/* Route for the 'Add Contact' page */}
            <Route path="/add" element={<AddContact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;