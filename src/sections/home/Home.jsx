import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useTheme } from '../../context/ThemeContext'
import { portfolioData } from '../../data/portfolioData'
import gsap from 'gsap'

const Home = () => {
  const themeContext = useTheme()
  const { colors } = themeContext
  const containerRef = useRef(null)
  const welcomeRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const socialRef = useRef(null)
  const logoRef = useRef(null)
  const typingTextRef = useRef(null)

  // Typing animation state
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0)
  const [currentText, setCurrentText] = React.useState('')
  const [isDeleting, setIsDeleting] = React.useState(false)

  // Typing animation effect
  useEffect(() => {
    const texts = portfolioData.personal.subtitle
    const typingSpeed = 50
    const deletingSpeed = 30
    const pauseTime = 2000

    const handleTyping = () => {
      const fullText = texts[currentTextIndex]

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentTextIndex((currentTextIndex + 1) % texts.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentTextIndex])

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([welcomeRef.current, titleRef.current, subtitleRef.current, socialRef.current, logoRef.current], {
        opacity: 0,
        y: 50
      })

      // Animation timeline
      const tl = gsap.timeline()

      tl.to(welcomeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
      .to(socialRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.2")
      .to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")

    }, containerRef)

    return () => ctx.revert()
  }, [])

  const socialIcons = [
    {
      icon: faFacebook,
      url: "https://www.facebook.com/103383758631665/posts/103385448631496/?substory_index=0",
      color: "#1877F2"
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/company/blink-c/",
      color: "#0A66C2"
    }
  ]

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="w-4/5 mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            
            {/* Welcome Section */}
            <div ref={welcomeRef} className="flex items-center space-x-4 mb-4">
              <span 
                className="text-lg sm:text-xl lg:text-2xl font-light montserrat-font tracking-wide"
                style={{ color: colors.text }}
              >
                WELCOME TO!
              </span>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Main Title */}
            <div ref={titleRef} className="space-y-2 lg:space-y-4">
              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-thin montserrat-font tracking-wider leading-none"
                style={{ color: colors.text, letterSpacing: '0.1em' }}
              >
                Blink
              </h1>
              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium montserrat-font tracking-wider leading-none"
                style={{ color: colors.text, letterSpacing: '0.125em' }}
              >
                Consolidate
              </h1>
            </div>

            {/* Animated Subtitle */}
            <div ref={subtitleRef} className="flex items-center space-x-3 h-8 lg:h-10">
              <FontAwesomeIcon 
                icon={faPlay} 
                className="text-2xl lg:text-3xl"
                style={{ color: colors.primary }}
              />
              <div 
                ref={typingTextRef}
                className="text-lg sm:text-xl lg:text-2xl font-light montserrat-font min-w-0"
                style={{ color: colors.text }}
              >
                {currentText}
                <span 
                  className="animate-pulse ml-1"
                  style={{ color: colors.primary }}
                >
                  |
                </span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div ref={socialRef} className="flex justify-center items-center gap-4 pt-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{ 
                    borderColor: colors.primary,
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      backgroundColor: colors.primary,
                      borderColor: colors.primary,
                      duration: 0.3
                    })
                    gsap.to(e.currentTarget.querySelector('svg'), {
                      color: colors.background,
                      duration: 0.3
                    })
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      backgroundColor: 'transparent',
                      borderColor: colors.primary,
                      duration: 0.3
                    })
                    gsap.to(e.currentTarget.querySelector('svg'), {
                      color: colors.primary,
                      duration: 0.3
                    })
                  }}
                >
                  <FontAwesomeIcon 
                    icon={social.icon}
                    className="text-lg lg:text-xl transition-colors duration-300"
                    style={{ color: colors.primary }}
                  />
                </a>
              ))}
            </div>

          </div>

          {/* Right Content - Logo/Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div 
              ref={logoRef}
              className="relative max-w-xs lg:max-w-sm xl:max-w-md"
            >
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/assets/images/logo.jfif" 
                  alt="Blink Consolidate Logo" 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              {/* Decorative elements */}
              <div 
                className="absolute -top-6 -right-6 w-24 h-24 lg:w-32 lg:h-32 rounded-full opacity-20 animate-pulse"
                style={{ backgroundColor: colors.primary }}
              />
              <div 
                className="absolute -bottom-4 -left-4 w-16 h-16 lg:w-20 lg:h-20 rounded-full opacity-30 animate-pulse"
                style={{ backgroundColor: colors.accent }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-twinkle opacity-60"
           style={{ backgroundColor: colors.primary }} />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 rounded-full animate-twinkle opacity-40"
           style={{ backgroundColor: colors.accent }} />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full animate-twinkle opacity-50"
           style={{ backgroundColor: colors.primary }} />
    </div>
  )
}

export default Home
