


import '../style/Nav.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const ham = () => {
    setIsOpen(!isOpen); // Toggle menu
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="nav">
        <div className="NavLogo">
          <h1 className="LogoName">SUNROCK</h1>
        </div>
        <div className="nav-bar">
          <ul>
            <li><NavLink to="/" className="navlink">Home</NavLink></li>
            <li>About us</li>
            <li>Project</li>
        
 <li>
    <NavLink to="/contact" className="navlink">Contact</NavLink>
  </li>

          </ul>
        </div>
        <div className="nav-btn">
          <span className="btn-title">Book Our Service</span>
          <button className="BookBtn">→</button>
        </div>
      </div>

      {/* Mobile Hamburger Navigation */}
      <div className="ham-nav">
        <div className="Ham-NavLogo">
          <h1 className="Ham-LogoName">SUNROCK</h1>
        </div>
        <div className="ham-btn" onClick={ham}>
          <div className="ham-line"></div>
          <div className="ham-line"></div>
          <div className="ham-line"></div>
        </div>

        {/* Show/hide with style based on isOpen */}
        <div
          className="Ham-nav-bar"
          style={{ top: isOpen ? '8%' : '-100%' }}
        >
          <ul className="ham-ul">
            <li className="ham-li" onClick={ham}>
  <NavLink to="/Home" className="navlink">Home</NavLink>
</li>

            <li className="ham-li">About us</li>
            <li className="ham-li">Project</li>
             <li className="ham-li">
    <NavLink to="/Contact" className="navlink" onClick={ham}>Contact</NavLink>
  </li>
            <li className="ham-li">Book Our Service</li>
          </ul>
        </div>
      </div>
    </>
  );
}

