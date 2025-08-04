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
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Dublin Images Background */}
      <div className="absolute inset-0">
        {/* Primary background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/view-of-the-liffey-from-liberty-hall-dublin-ireland-conde-nast-traveller-4feb16-Tara-Morgan.webp')`
          }}
        />
        
        {/* Secondary image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url('/Guide+to+Dublin,+Ireland.jpeg')`
          }}
        />
        
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-dublin-primary/90 via-dublin-primary/70 to-dublin-accent/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center space-y-8 lg:space-y-12"
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          >
            From{' '}
            <span className="text-dublin-accent">Westlake</span>
            {' '}to{' '}
            <span className="text-dublin-accent">Dublin</span>
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light">
              Municipal Marketing Excellence
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-white/90 leading-relaxed"
          >
            Bringing proven municipal marketing expertise and innovative digital strategies 
            to Dublin City Council's Social Media & Online Marketing team
          </motion.p>

          {/* Stats Counter */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-dublin-accent mb-2">
                  {inView && !stat.showText && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      delay={index * 0.3}
                      suffix={stat.suffix}
                    />
                  )}
                  {stat.showText && '✓'}
                </div>
                <div className="text-sm sm:text-base md:text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Qualifications Checklist */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">
              Required Qualifications
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {qualifications.map((qualification, index) => (
                <motion.div
                  key={qualification}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.4 }}
                  className="flex items-center space-x-2 bg-dublin-accent/20 backdrop-blur-sm px-4 py-3 rounded-full border border-dublin-accent/40 hover:bg-dublin-accent/30 transition-colors"
                >
                  <span className="text-dublin-accent text-lg">✓</span>
                  <span className="font-medium text-base sm:text-lg">{qualification}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link to="/dublin-vision">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-dublin-accent text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:bg-dublin-accent/90 transition-colors w-full sm:w-auto"
              >
                Explore My Dublin Vision
              </motion.button>
            </Link>
            
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold text-lg w-full sm:w-auto transition-colors"
              >
                View Portfolio
              </motion.button>
            </Link>
          </motion.div>

          {/* Dublin Connection Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
          >
            <span className="text-2xl">🇮🇪</span>
            <span className="text-white font-medium">Ready to serve Dublin City Council</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Dublin elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-dublin-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, -60, -30],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero