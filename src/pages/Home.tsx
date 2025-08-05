import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRightIcon, 
  GlobeAltIcon, 
  ChartBarIcon, 
  LightBulbIcon,
  UserGroupIcon,
  MapPinIcon,
  PlayCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import Hero from '../components/Hero'

const Home: React.FC = () => {
  const campaigns = [
    {
      id: 'always-greener',
      title: 'ALWAYS GREENER',
      description: 'Climate action gamification with AR integration',
      impact: '850K citizens reached',
      color: 'from-green-500 to-emerald-600',
      icon: LightBulbIcon
    },
    {
      id: 'always-awake',
      title: 'ALWAYS AWAKE', 
      description: 'Night economy activation and safety integration',
      impact: '€285K economic impact',
      color: 'from-purple-500 to-indigo-600',
      icon: GlobeAltIcon
    },
    {
      id: 'hidden-hoods',
      title: 'HIDDEN HOODS',
      description: 'UGC storytelling platform for community engagement',
      impact: '45K+ story submissions',
      color: 'from-orange-500 to-red-600', 
      icon: MapPinIcon
    },
    {
      id: 'always-welcome',
      title: 'ALWAYS WELCOME',
      description: 'Multilingual integration experience',
      impact: '8 languages supported',
      color: 'from-blue-500 to-cyan-600',
      icon: UserGroupIcon
    }
  ]

  const skills = [
    { name: 'Digital Strategy', level: 95, color: 'bg-dublin-primary' },
    { name: 'Social Media Marketing', level: 92, color: 'bg-green-500' },
    { name: 'Community Engagement', level: 88, color: 'bg-purple-500' },
    { name: 'Data Analytics', level: 85, color: 'bg-orange-500' },
    { name: 'Content Creation', level: 90, color: 'bg-blue-500' },
    { name: 'Municipal Marketing', level: 93, color: 'bg-red-500' }
  ]

  return (
    <div>
      <Hero />
      
      {/* Campaign Showcase */}
      <section className="section-padding bg-dublin-primary text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="heading-secondary text-white mb-4 sm:mb-6">
              Strategic Campaign Portfolio
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-dublin-accent mx-auto mb-4 sm:mb-6 lg:mb-8"></div>
            <p className="text-responsive-lg max-w-3xl mx-auto opacity-90">
              Proven campaign strategies ready for Dublin's digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-colors cursor-pointer min-h-[200px] sm:min-h-[240px] flex flex-col"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${campaign.color} flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0`}>
                  <campaign.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 flex-shrink-0">{campaign.title}</h3>
                <p className="text-white/80 text-sm sm:text-base mb-3 sm:mb-4 flex-grow leading-relaxed">{campaign.description}</p>
                <div className="text-dublin-accent font-semibold text-sm sm:text-base mt-auto">{campaign.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="heading-secondary mb-4 sm:mb-6">Why Dublin City Council?</h2>
            <p className="text-responsive-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
              My passion for Irish culture, combined with proven municipal marketing expertise, 
              makes me the ideal candidate to elevate Dublin's digital presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center bg-dublin-primary text-white p-6 sm:p-8 rounded-xl">
              <div className="bg-white/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <ChartBarIcon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Proven Results</h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Delivered 300% growth in digital engagement and €500K+ economic impact 
                through strategic municipal marketing campaigns
              </p>
            </div>

            <div className="text-center bg-dublin-accent text-white p-6 sm:p-8 rounded-xl">
              <div className="bg-white/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <SparklesIcon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Fresh Perspective</h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                International experience combined with deep appreciation for Irish culture 
                brings innovative approaches to traditional challenges
              </p>
            </div>

            <div className="text-center bg-dublin-primary text-white p-6 sm:p-8 rounded-xl">
              <div className="bg-white/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <UserGroupIcon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Ready From Day One</h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Comprehensive 90-day action plan with immediate implementation strategies 
                and measurable outcomes for Dublin's digital transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="heading-secondary text-dublin-primary mb-4 sm:mb-6">
                  Proven Expertise in Municipal Marketing
                </h2>
                <p className="text-responsive-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  5+ years of hands-on experience in municipal marketing with the City of Westlake, 
                  delivering measurable results in digital engagement, community outreach, and strategic communications.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-dublin-primary text-white rounded-full text-xs sm:text-sm">Municipal Marketing</span>
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500 text-white rounded-full text-xs sm:text-sm">Social Media Strategy</span>
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-500 text-white rounded-full text-xs sm:text-sm">Community Engagement</span>
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-500 text-white rounded-full text-xs sm:text-sm">Data Analytics</span>
                </div>
                <Link
                  to="/experience"
                  className="inline-flex items-center space-x-2 text-dublin-primary hover:text-dublin-accent font-semibold text-sm sm:text-base"
                >
                  <span>View Full Experience</span>
                  <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4 sm:space-y-6"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '100%' }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-800 text-sm sm:text-base">{skill.name}</span>
                      <span className="text-gray-600 text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                      <motion.div
                        className="bg-dublin-primary h-2 sm:h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dublin Section */}
      <section className="py-20 bg-dublin-primary text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Dublin City Council?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              My passion for Irish culture, combined with proven municipal marketing expertise, 
              makes me the ideal candidate to elevate Dublin's digital presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Proven Results</h3>
              <p className="text-white/90">
                Delivered 300% growth in digital engagement and €500K+ economic impact 
                through strategic municipal marketing campaigns
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <SparklesIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fresh Perspective</h3>
              <p className="text-white/90">
                International experience combined with deep appreciation for Irish culture 
                brings innovative approaches to traditional challenges
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Focus</h3>
              <p className="text-white/90">
                Deep understanding of diverse community needs and proven ability to create 
                inclusive, engaging digital experiences for all citizens
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-dublin-primary mb-6">
              Ready to Transform Dublin's Digital Future?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Let's discuss how these proven strategies and fresh perspectives can elevate 
              Dublin City Council's online presence and community engagement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-dublin-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-dublin-accent transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Get In Touch</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                to="/dublin-vision"
                className="border-2 border-dublin-primary text-dublin-primary px-8 py-4 rounded-xl font-semibold hover:bg-dublin-primary hover:text-white transition-colors inline-flex items-center justify-center space-x-2"
              >
                <PlayCircleIcon className="h-5 w-5" />
                <span>Explore Campaigns</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home