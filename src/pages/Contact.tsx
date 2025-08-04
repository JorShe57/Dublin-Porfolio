import React from 'react'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'jshevel@cityofwestlake.org',
      link: 'mailto:jshevel@cityofwestlake.org'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '330-416-1376',
      link: 'tel:330-416-1376'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/jorden-shevel',
      link: 'https://www.linkedin.com/in/jorden-shevel/'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Elyria, Ohio',
      link: null
    }
  ]

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-width">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dublin-primary mb-6">
              Let's Connect
            </h1>
            <div className="w-24 h-1 bg-dublin-accent mx-auto mb-8"></div>
            <p className="text-xl text-dublin-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss how I can contribute to Dublin City Council's digital success
            </p>
          </motion.div>

          {/* Main Content Container */}
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-dublin-primary mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-dublin-gray-600 leading-relaxed max-w-4xl mx-auto">
                I'm excited about the opportunity to bring my municipal marketing expertise 
                to Dublin City Council. Let's discuss how my experience from Westlake can 
                benefit Dublin's digital presence and community engagement.
              </p>
            </motion.div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-20 h-20 bg-dublin-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dublin-accent/20 transition-colors duration-300">
                    <span className="text-4xl">{item.icon}</span>
                  </div>
                  <h3 className="font-bold text-dublin-primary mb-3 text-lg">{item.label}</h3>
                  {item.link ? (
                    <a 
                      href={item.link}
                      className="text-dublin-gray-600 hover:text-dublin-accent transition-colors font-medium text-sm leading-relaxed break-words"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-dublin-gray-600 font-medium text-sm">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Availability Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-dublin-primary via-dublin-primary-light to-dublin-accent text-white p-10 rounded-xl text-center mb-16 shadow-xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Available for Immediate Start
              </h3>
              <p className="text-lg opacity-95 max-w-3xl mx-auto mb-8 leading-relaxed">
                Ready to relocate to Dublin and begin contributing to the team immediately. 
                Work permit application process understood and prepared.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <span className="font-semibold text-sm">✓ Work Permit Ready</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <span className="font-semibold text-sm">✓ Relocation Prepared</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <span className="font-semibold text-sm">✓ Remote Work Capable</span>
                </div>
              </div>
            </motion.div>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="bg-dublin-gray-50 p-10 rounded-xl border border-dublin-gray-100">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-dublin-primary mb-6">
                    Ready to Transform Dublin's Digital Presence
                  </h3>
                  <p className="text-lg text-dublin-gray-600 leading-relaxed">
                    With 5+ years of municipal marketing experience, proven campaign successes, 
                    and genuine passion for Dublin, I'm prepared to make an immediate impact 
                    on Dublin City Council's digital strategy and community engagement initiatives.
                  </p>
                  
                  {/* Key Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-dublin-accent mb-2">5+</div>
                      <div className="text-dublin-gray-600 font-medium">Years Municipal Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-dublin-accent mb-2">300%</div>
                      <div className="text-dublin-gray-600 font-medium">Digital Growth Achieved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-dublin-accent mb-2">50+</div>
                      <div className="text-dublin-gray-600 font-medium">Campaigns Managed</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact