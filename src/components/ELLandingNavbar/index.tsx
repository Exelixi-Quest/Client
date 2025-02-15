import { useNavigate } from "react-router-dom";
import { transparentLogo } from "../../assets";
import { useState } from "react";

export const ELLandingNavbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="el-landing-header container">
      <nav className="el-landing_left">
        <img
          className="el-landing-logo nav-start"
          src={transparentLogo}
          alt="logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
        
        <div 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <ul className={`el-landing-menu ${isMobileMenuOpen ? 'mobile-menu-visible' : 'mobile-menu-hidden'}`}>
        <li className="landing-menu-items">For Students</li>
        <li 
          className="landing-menu-items"
          onClick={() => navigate('/admin')}
        >
          Sign In
        </li>
        <li 
          className="landing-menu-items glowing-button"
          onClick={() => navigate('/login/user-registration')}
        >
          <div className="glowing-button-gradient"></div>
          <div className="glowing-button-inner">
            <div className="glowing-button-text">Join Exelixi today</div>
            <div className="glowing-button-inner-overlay"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};