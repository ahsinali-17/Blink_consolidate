import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome, 
  faUser, 
  faCog, 
  faHammer, 
  faPhone,
  faBars,
  faTimes,
  faBook,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../../context/ThemeContext'
import gsap from 'gsap'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const themeContext = useTheme()
  const { colors } = themeContext
  const { toggleTheme, isDark } = themeContext

  const sections = [
    { name: 'HOME', icon: faHome, id: 'home' },
    { name: 'ABOUT', icon: faUser, id: 'about' },
    { name: 'SERVICES', icon: faCog, id: 'services' },
    { name: 'PROJECTS', icon: faHammer, id: 'portfolio' },
    { name: 'CONTACT', icon: faPhone, id: 'contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const handleCareersClick = () => {
    // This is commented in Flutter - we can implement CV download here
    // window.open('https://drive.google.com/file/d/1FaHIzT9FigDHLx8NlxFIyQfjJTyN9WQ6/view?usp=sharing', '_blank')
    console.log('Careers button clicked - CV download functionality can be implemented here')
  }

  const NavbarLogo = ({ height = 20 }) => (
    <div className="flex items-center">
      {/* The original Flutter logo is commented out, keeping it consistent */}
      {/* 
      <span className="text-xl" style={{ color: colors.text }}>{"<"}</span>
      <span className="agustina-font text-xl mx-1" style={{ color: colors.text }}>Hamza</span>
      <span className="text-xl" style={{ color: colors.text }}>{" />"}</span>
      */}
    </div>
  )

  return (
    <>
      {/* Desktop/Tablet Navbar */}
      <nav 
        className="hidden md:flex fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-5 lg:px-10 py-4"
        style={{ 
          backgroundColor: isScrolled 
            ? (isDark ? 'rgba(235, 146, 87, 0.5)' : 'rgba(235, 146, 87, 0.5)') 
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: 'none'
        }}
      >
        <div className="w-full flex items-center justify-end">
          {/* Logo - Empty as in Flutter */}
          <div className="flex-shrink-0">
            <NavbarLogo height={window.innerWidth < 780 ? 20 : window.innerHeight * 0.035} />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            {sections.map((section, index) => (
              <div key={section.name} className="px-1 h-[60px] flex items-center">
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="text-base font-normal transition-colors duration-200 rounded"
                  style={{ 
                    color: colors.text,
                    fontFamily: 'inherit',
                    padding: '0.5rem 1rem'
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, { 
                      backgroundColor: '#d96254',
                      duration: 0.2
                    })
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, { 
                      backgroundColor: 'transparent',
                      duration: 0.2
                    })
                  }}
                >
                  {section.name}
                </button>
              </div>
            ))}

            {/* Careers Button */}
            
              <button
                onClick={handleCareersClick}
                className="rounded border border-solid transition-colors duration-200 montserrat-font font-light text-lg"
                style={{ 
                  borderColor: '#C0392B',
                  color: colors.text,
                  backgroundColor: 'transparent',
                  padding: '0.5rem 1.5rem'
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, { 
                    backgroundColor: '#d96254',
                    duration: 0.2
                  })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, { 
                    backgroundColor: 'transparent',
                    duration: 0.2
                  })
                }}
              >
                Careers
              </button>

            {/* Theme Toggle - Keep this since it's not in Flutter but useful */}
              <button
                onClick={toggleTheme}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  backgroundColor: isDark ? colors.primary : '#ccc',
                  focusRingColor: colors.primary,
                  margin: '0rem 1.25rem'
                }}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    isDark ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
      </nav>

      {/* Mobile Navbar */}
      <nav 
        className="md:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{ 
          backgroundColor: isScrolled 
            ? (isDark ? 'rgba(255, 140, 0, 0.9)' : 'rgba(255, 165, 0, 0.85)') 
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: 'none'
        }}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <NavbarLogo />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            style={{ color: colors.text }}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div 
          className="w-80 h-full p-6"
          style={{ backgroundColor: colors.background }}
        >
          <div className="flex flex-col space-y-6">
            {/* Logo */}
            <div className="text-center pb-4">
              <NavbarLogo height={28} />
            </div>
            
            <hr style={{ borderColor: isDark ? 'white' : '#E5E5E5' }} />

            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon 
                  icon={faLightbulb} 
                  style={{ color: '#C0392B' }} 
                />
                <span style={{ color: colors.text }}>Dark Mode</span>
              </div>
              <button
                onClick={toggleTheme}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
                style={{ backgroundColor: isDark ? '#C0392B' : '#ccc' }}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    isDark ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <hr style={{ borderColor: isDark ? 'white' : '#E5E5E5' }} />

            {/* Navigation Links */}
            {sections.map((section) => (
              <div key={section.name} className="p-2">
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="w-full flex items-center space-x-3 p-3 rounded transition-colors duration-200"
                  style={{ color: colors.text }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, { 
                      backgroundColor: 'rgba(192, 57, 43, 0.1)',
                      duration: 0.2
                    })
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, { 
                      backgroundColor: 'transparent',
                      duration: 0.2
                    })
                  }}
                >
                  <FontAwesomeIcon 
                    icon={section.icon} 
                    style={{ color: '#C0392B' }} 
                  />
                  <span>{section.name}</span>
                </button>
              </div>
            ))}

            {/* Careers Button */}
            <div className="p-2">
              <button
                onClick={handleCareersClick}
                className="w-full flex items-center space-x-3 p-3 rounded border transition-colors duration-200 montserrat-font font-light"
                style={{ 
                  borderColor: '#C0392B',
                  color: colors.text,
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, { 
                    backgroundColor: 'rgba(192, 57, 43, 0.1)',
                    duration: 0.2
                  })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, { 
                    backgroundColor: 'transparent',
                    duration: 0.2
                  })
                }}
              >
                <FontAwesomeIcon 
                  icon={faBook} 
                  style={{ color: '#C0392B' }} 
                />
                <span>Careers</span>
              </button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 -z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </>
  )
}

export default Navbar
