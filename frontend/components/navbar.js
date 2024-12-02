import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Navbar, LogoWrapper, UserButton, DropdownMenu, DropdownItem } from '@/frontend/styles/navbar.styles';

const NavbarComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(token ? true : false);
  }, []);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const closeDropdown = (e) => {
    if (menuRef.current && buttonRef.current) {
      if (!menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    router.push('/login');
  };

  const navigateToTable = () => {
    router.push('/table');
  };

  const navigateToProfile = () => {
    setIsDropdownOpen(false);
    router.push('/profile');
  };

  return (
    <Navbar>
      <LogoWrapper onClick={navigateToTable} style={{ cursor: 'pointer' }}>
        <img
          src="/img/logo.png"
          alt="Logo"
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        />
        <span style={{ fontSize: '1.5rem' }}>|</span>
        AquaClean
      </LogoWrapper>

      <div style={{ position: 'relative' }}>
        {isAuthenticated ? (
          <UserButton ref={buttonRef} onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faUser} />
          </UserButton>
        ) : (
          <UserButton onClick={() => router.push('/login')}>
            Iniciar sesión
          </UserButton>
        )}
        <DropdownMenu ref={menuRef} isOpen={isDropdownOpen}>
          {isAuthenticated && (
            <>
              <DropdownItem onClick={navigateToProfile}>
                <FontAwesomeIcon icon={faCog} />
                Configuración
              </DropdownItem>
              <DropdownItem onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Cerrar Sesión
              </DropdownItem>
            </>
          )}
        </DropdownMenu>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;