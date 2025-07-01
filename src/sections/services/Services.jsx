import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const Services = () => {
  const themeContext = useTheme()
  const { colors } = themeContext

  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: colors.surface }}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20 lg:py-24">
        <h2 
          className="text-4xl md:text-6xl font-bold text-center mb-8"
          style={{ color: colors.text }}
        >
          Services Section
        </h2>
        <p 
          className="text-center text-lg"
          style={{ color: colors.textSecondary }}
        >
          Services section content will be implemented here
        </p>
      </div>
    </div>
  )
}

export default Services
