'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Platform', href: '#platform' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'For Builders', href: '#builders' },
    { label: 'Security', href: '#security' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - EXACT SVG FROM WEBSITE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
          >
            {/* OPTION 1: Using SVG file */}
            <div className="relative">
              <div className="w-[180px] h-[40px] relative">
                <Image
                  src="/svg/vision-maverick-logo.svg"
                  alt="Vision Maverick"
                  width={180}
                  height={40}
                  className="w-full h-full"
                  priority
                />
              </div>
            </div>
            
            {/* OPTION 2: Inline SVG (if file doesn't work) */}
            {/* 
            <div className="w-[180px] h-[40px]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 455 60" 
                className="w-full h-full"
              >
                <defs>
                  <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22D3EE" />
                    <stop offset="50%" stopColor="#2DD4BF" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
                <text 
                  x="0" 
                  y="45" 
                  fontFamily="Inter, sans-serif"
                  fontWeight="800"
                  fontSize="48"
                  fill="url(#logo-gradient)"
                  letterSpacing="-0.025em"
                >
                  Vision
                </text>
                <text 
                  x="192" 
                  y="45" 
                  fontFamily="Inter, sans-serif"
                  fontWeight="800"
                  fontSize="48"
                  fill="#FFFFFF"
                  letterSpacing="-0.025em"
                >
                  Maverick
                </text>
              </svg>
            </div>
            */}
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm text-gray-300 hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-muted/50"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-muted/95 backdrop-blur-lg border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-300 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar