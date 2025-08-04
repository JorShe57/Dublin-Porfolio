import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
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

  const achievements = [
    { number: 2500000, label: 'Citizens Reached', suffix: '+' },
    { number: 1200000, label: 'Economic Impact', prefix: '€', suffix: '+' },
    { number: 300, label: 'Engagement Growth', suffix: '%' },
    { number: 4, label: 'Campaign Experiences', suffix: '' }
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
      
      {/* Dublin Vision Preview */}
      <section className="py-20 bg-gradient-to-br from-dublin-primary to-dublin-accent text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">DUBLIN VISION</h2>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              Four comprehensive digital campaigns designed to transform Dublin City Council's 
              online presence and community engagement
            </p>
            <Link
              to="/dublin-vision"
              className="inline-flex items-center space-x-3 bg-white text-dublin-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              <PlayCircleIcon className="h-6 w-6" />
              <span>Explore Interactive Campaigns</span>
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${campaign.color} flex items-center justify-center mb-4`}>
                  <campaign.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
                <p className="text-white/80 text-sm mb-4">{campaign.description}</p>
                <div className="text-dublin-accent font-semibold">{campaign.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dublin-primary mb-6">Projected Campaign Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven projections based on municipal marketing best practices and Dublin's demographic analysis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-dublin-primary mb-2">
                  <CountUp 
                    end={achievement.number} 
                    duration={3}
                    prefix={achievement.prefix}
                    suffix={achievement.suffix}
                  />
                </div>
                <p className="text-gray-600 font-medium">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-4xl font-bold text-dublin-primary mb-6">
                  Proven Expertise in Municipal Marketing
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  5+ years of hands-on experience in municipal marketing with the City of Westlake, 
                  delivering measurable results in digital engagement, community outreach, and strategic communications.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="px-4 py-2 bg-dublin-primary text-white rounded-full text-sm">Municipal Marketing</span>
                  <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm">Social Media Strategy</span>
                  <span className="px-4 py-2 bg-purple-500 text-white rounded-full text-sm">Community Engagement</span>
                  <span className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm">Data Analytics</span>
                </div>
                <Link
                  to="/experience"
                  className="inline-flex items-center space-x-2 text-dublin-primary hover:text-dublin-accent font-semibold"
                >
                  <span>View Full Experience</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '100%' }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        className={`${skill.color} h-3 rounded-full relative overflow-hidden`}
                      >
                        <motion.div
                          animate={{ x: [-20, 100, -20] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                        />
                      </motion.div>
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