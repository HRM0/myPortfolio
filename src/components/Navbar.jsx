import React, {useState} from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav>
        <div>
          Robert Hess
        </div>
        <ul>
          <li>
            <a>Welcome</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>About Me</a>
          </li>
          <li>
            <a>Thank you</a>
          </li>
        </ul>
      </nav>
    );
  };

export default Navbar