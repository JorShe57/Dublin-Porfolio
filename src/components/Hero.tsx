import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const stats = [
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 300, suffix: '%', label: 'Growth Achieved' },
    { value: 50, suffix: '+', label: 'Campaigns' },
    { value: 1, suffix: '', label: 'Ready for Dublin', showText: true },
  ]

  const qualifications = [
    'Level 8 Degree',
    'Municipal Experience',
    'Adobe Suite',
    'Analytics',
    'WordPress',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dublin-primary via-dublin-primary-dark to-dublin-accent overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 container-width text-center text-white">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6 sm:space-y-8 lg:space-y-12"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              {qualifications.map((qual, index) => (
                <motion.span
                  key={qual}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  className="bg-white/20 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium"
                >
                  {qual}
                </motion.span>
              ))}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              JORDEN SHEVEL
            </h1>
            
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light opacity-90 mb-4 sm:mb-6 lg:mb-8">
              <div>Social Media & Online Marketing Officer</div>
              <div className="text-dublin-accent font-semibold mt-1 sm:mt-2">Dublin City Council</div>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed px-4 sm:px-0">
              Bringing 5+ years of proven municipal marketing expertise from Westlake, Ohio to elevate Dublin's digital presence and community engagement
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-white/20"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dublin-accent mb-1 sm:mb-2">
                  {stat.showText ? (
                    <span className="text-lg sm:text-xl lg:text-2xl">✓ Ready</span>
                  ) : (
                    inView && (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        suffix={stat.suffix}
                      />
                    )
                  )}
                </div>
                <div className="text-xs sm:text-sm font-medium opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-6 lg:pt-8"
          >
            <Link
              to="/experience"
              className="group bg-dublin-accent hover:bg-dublin-accent-dark text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto text-center justify-center"
            >
              <span>View Experience</span>
              <motion.span
                className="group-hover:translate-x-1 transition-transform"
              >
                →
              </motion.span>
            </Link>
            
            <Link
              to="/competencies"
              className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 border border-white/30 hover:border-white/50 w-full sm:w-auto text-center"
            >
              90-Day Action Plan
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-8 sm:pt-12 lg:pt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mx-auto w-6 h-6 sm:w-8 sm:h-8 border-2 border-white/50 rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"
              />
            </motion.div>
            <p className="text-xs sm:text-sm mt-2 opacity-70">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero