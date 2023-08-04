import React, {useState} from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">My Website</div>
            {/* The menu icon for small screens */}
            <div className="md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5h18a1 1 0 01.117 1.993L21 7H3a1 1 0 01-.117-1.993L3 5h18-18zm0 7h18a1 1 0 01.117 1.993L21 15H3a1 1 0 01-.117-1.993L3 12h18-18zm0 7h18a1 1 0 01.117 1.993L21 22H3a1 1 0 01-.117-1.993L3 19h18-18z"
                  />
                </svg>
              </button>
            </div>
            {/* The menu items for large screens */}
            <ul className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
              <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar