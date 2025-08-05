import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
    { path: '/dublin-vision', label: 'Dublin Vision' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/competencies', label: 'Action Plan' },
    { path: '/dublin-research', label: 'Dublin Research' },
    { path: '/contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-dublin-gray-100'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Mobile First */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link 
                to="/" 
                className="flex items-center space-x-2 sm:space-x-3"
                onClick={closeMobileMenu}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-dublin-primary to-dublin-accent rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm md:text-base">JS</span>
                </div>
                <div className="block">
                  <span className="text-dublin-primary font-bold text-base sm:text-lg md:text-xl">Jorden Shevel</span>
                  <p className="text-dublin-gray-600 text-xs md:text-sm -mt-0.5 sm:-mt-1">Dublin Portfolio</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-dublin-primary bg-dublin-primary/10'
                      : 'text-dublin-gray-700 hover:text-dublin-primary hover:bg-dublin-gray-50'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-dublin-accent rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="xl:hidden p-3 text-dublin-primary hover:bg-dublin-gray-50 rounded-lg transition-colors duration-200 min-h-[44px] min-w-[44px]"
              style={{ touchAction: 'manipulation' }}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={isMobileMenuOpen ? 'open' : 'closed'}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0, opacity: 1 },
                    open: { rotate: 45, y: 3, opacity: 1 }
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-0.5 bg-dublin-primary block"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1, x: 0 },
                    open: { opacity: 0, x: -10 }
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-0.5 bg-dublin-primary block my-1"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0, opacity: 1 },
                    open: { rotate: -45, y: -3, opacity: 1 }
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-0.5 bg-dublin-primary block"
                />
              </motion.div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 xl:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 xl:hidden"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-dublin-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-dublin-primary to-dublin-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">JS</span>
                  </div>
                  <div>
                    <span className="text-dublin-primary font-bold text-lg">Jorden Shevel</span>
                    <p className="text-dublin-gray-600 text-sm -mt-1">Dublin Portfolio</p>
                  </div>
                </div>
                <motion.button
                  onClick={closeMobileMenu}
                  className="p-2 text-dublin-gray-400 hover:text-dublin-primary rounded-lg transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 overflow-y-auto py-6">
                <nav className="space-y-2 px-6">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <Link
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                          location.pathname === item.path
                            ? 'bg-dublin-primary text-white shadow-md'
                            : 'text-dublin-gray-700 hover:bg-dublin-gray-50 hover:text-dublin-primary'
                        }`}
                      >
                        {item.label}
                        {location.pathname === item.path && (
                          <motion.div
                            layoutId="activeMobileTab"
                            className="ml-auto w-2 h-2 bg-dublin-accent rounded-full"
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation