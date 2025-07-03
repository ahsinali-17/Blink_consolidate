import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { portfolioData } from '../../data/portfolioData'
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  User, 
  FileText,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react'
import gsap from 'gsap'

const Contact = () => {
  const { colors } = useTheme()
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const subheadingRef = useRef(null)
  const leftSectionRef = useRef(null)
  const rightSectionRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with email service or backend here
  }

  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: portfolioData.contact.phone,
      href: `tel:${portfolioData.contact.phone}`
    },
    {
      icon: Mail,
      label: 'Email',
      value: portfolioData.contact.email,
      href: `mailto:${portfolioData.contact.email}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: portfolioData.contact.location,
      href: null
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Send Message',
      href: portfolioData.contact.whatsapp
    }
  ]

  const getIconComponent = (iconName) => {
    const iconMap = {
      github: Github,
      linkedin: Linkedin,
      twitter: Twitter,
      facebook: Facebook,
      instagram: Instagram,
      whatsapp: MessageCircle
    }
    return iconMap[iconName] || Github
  }

  const socialLinks = portfolioData.socialLinks.filter(link => 
    ['github', 'linkedin', 'twitter'].includes(link.platform)
  )

  return (
    <section 
      id="contact"
      ref={containerRef}
      className="min-h-screen py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin montserrat-font tracking-wider mb-4"
              style={{ 
                color: colors.text,
                letterSpacing: '0.05em'
              }}
            >
              Contact
            </h2>
            <p 
              ref={subheadingRef}
              className="text-lg md:text-xl lg:text-2xl font-light montserrat-font"
              style={{ color: colors.text }}
            >
              Let's discuss your next project
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <div ref={leftSectionRef} className="space-y-8">
              <div>
                <h3 
                  className="text-2xl md:text-3xl font-medium montserrat-font mb-6"
                  style={{ color: colors.text }}
                >
                  Get in Touch
                </h3>
                <p 
                  className="text-lg leading-relaxed mb-8"
                  style={{ color: colors.text, opacity: 0.8 }}
                >
                  Have a project in mind? Let's work together to bring your ideas to life. 
                  I'm always excited to take on new challenges and create amazing digital experiences.
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p 
                        className="text-sm font-medium"
                        style={{ color: colors.text, opacity: 0.7 }}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-lg font-medium hover:opacity-75 transition-opacity"
                          style={{ color: colors.text }}
                          target={item.label === 'WhatsApp' ? '_blank' : '_self'}
                          rel={item.label === 'WhatsApp' ? 'noopener noreferrer' : ''}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p 
                          className="text-lg font-medium"
                          style={{ color: colors.text }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 
                  className="text-lg font-medium mb-4"
                  style={{ color: colors.text }}
                >
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = getIconComponent(social.icon)
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{ 
                          backgroundColor: colors.surface,
                          color: colors.text
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.platform}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={rightSectionRef}>
              <div 
                className="rounded-2xl p-8"
                style={{ backgroundColor: colors.surface }}
              >
                <h3 
                  className="text-2xl font-medium montserrat-font mb-6"
                  style={{ color: colors.text }}
                >
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5" style={{ color: colors.text, opacity: 0.5 }} />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-opacity-20 focus:outline-none focus:ring-2 transition-all"
                        style={{
                          backgroundColor: colors.background,
                          color: colors.text,
                          borderColor: colors.text,
                          focusRingColor: colors.primary
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5" style={{ color: colors.text, opacity: 0.5 }} />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-opacity-20 focus:outline-none focus:ring-2 transition-all"
                        style={{
                          backgroundColor: colors.background,
                          color: colors.text,
                          borderColor: colors.text,
                          focusRingColor: colors.primary
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 w-5 h-5" style={{ color: colors.text, opacity: 0.5 }} />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-opacity-20 focus:outline-none focus:ring-2 transition-all"
                        style={{
                          backgroundColor: colors.background,
                          color: colors.text,
                          borderColor: colors.text,
                          focusRingColor: colors.primary
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-3 w-5 h-5" style={{ color: colors.text, opacity: 0.5 }} />
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-opacity-20 focus:outline-none focus:ring-2 transition-all resize-none"
                        style={{
                          backgroundColor: colors.background,
                          color: colors.text,
                          borderColor: colors.text,
                          focusRingColor: colors.primary
                        }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: colors.primary, color: '#FFFFFF' }}
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
