import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CountUp from 'react-countup'
import { 
  PlayCircleIcon, 
  MapPinIcon, 
  GlobeAltIcon, 
  UserGroupIcon,
  ChartBarIcon,
  LightBulbIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline'

// Import campaign components
import AlwaysGreenerCampaign from '../components/campaigns/AlwaysGreenerCampaign'
import AlwaysAwakeCampaign from '../components/campaigns/AlwaysAwakeCampaign'
import HiddenHoodsCampaign from '../components/campaigns/HiddenHoodsCampaign'
import AlwaysWelcomeCampaign from '../components/campaigns/AlwaysWelcomeCampaign'

const campaigns = [
  {
    id: 'always-greener',
    title: 'ALWAYS GREENER',
    subtitle: 'Interactive Climate Action Experience',
    description: 'Gamified environmental engagement with AR integration and community challenges',
    color: 'bg-green-600',
    gradient: 'from-green-500 to-emerald-600',
    icon: LightBulbIcon,
    metrics: {
      reach: '850K',
      actions: '25,000',
      impact: '€285K'
    },
    preview: 'Dublin skyline transforming green with interactive eco-actions'
  },
  {
    id: 'always-awake',
    title: 'ALWAYS AWAKE',
    subtitle: 'Interactive Night Economy Experience',
    description: 'Night-passport system with cultural trails and 24/7 transit integration',
    color: 'bg-purple-600',
    gradient: 'from-purple-500 to-indigo-600',
    icon: StarIcon,
    metrics: {
      reach: '620K',
      checkIns: '10,000+',
      impact: '€395K'
    },
    preview: 'Interactive Dublin night scene with venue passport stamps'
  },
  {
    id: 'hidden-hoods',
    title: 'HIDDEN HOODS',
    subtitle: 'Interactive UGC Storytelling Platform',
    description: 'Community-driven neighborhood discovery with bilingual storytelling',
    color: 'bg-orange-600',
    gradient: 'from-orange-500 to-red-500',
    icon: MapPinIcon,
    metrics: {
      reach: '720K',
      stories: '1,500',
      impact: '€340K'
    },
    preview: 'User-generated neighborhood stories with interactive Dublin map'
  },
  {
    id: 'always-welcome',
    title: 'ALWAYS WELCOME',
    subtitle: 'Interactive Integration Experience',
    description: 'Multilingual community building with workplace buddy system',
    color: 'bg-blue-600',
    gradient: 'from-blue-500 to-cyan-600',
    icon: UserGroupIcon,
    metrics: {
      reach: '310K',
      partnerships: '50+',
      impact: '€180K'
    },
    preview: 'Multilingual welcome hub with cultural integration tools'
  }
]

const DublinVision: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null)
  const [hoveredCampaign, setHoveredCampaign] = useState<string | null>(null)
  const [progressPhase, setProgressPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressPhase(prev => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const renderCampaign = () => {
    switch (selectedCampaign) {
      case 'always-greener':
        return <AlwaysGreenerCampaign onBack={() => setSelectedCampaign(null)} />
      case 'always-awake':
        return <AlwaysAwakeCampaign onBack={() => setSelectedCampaign(null)} />
      case 'hidden-hoods':
        return <HiddenHoodsCampaign onBack={() => setSelectedCampaign(null)} />
      case 'always-welcome':
        return <AlwaysWelcomeCampaign onBack={() => setSelectedCampaign(null)} />
      default:
        return null
    }
  }

  if (selectedCampaign) {
    return renderCampaign()
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dublin-primary via-dublin-primary-light to-dublin-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-dublin-accent bg-clip-text text-transparent">
              DUBLIN VISION
            </h1>
            <div className="w-32 h-1 bg-dublin-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed">
              Four Campaigns to Transform Dublin's Digital Presence
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mt-6">
              Strategic, implementable campaigns demonstrating innovative digital marketing 
              and community engagement for Dublin City Council
            </p>
          </motion.div>

          {/* Combined Impact Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-16 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Combined Campaign Impact</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-dublin-accent mb-2">
                  <CountUp end={2.5} duration={2} decimals={1} suffix="M" />
                </div>
                <p className="text-white/80">Citizens Reached</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-dublin-accent mb-2">
                  €<CountUp end={1.2} duration={2} decimals={1} suffix="M" />
                </div>
                <p className="text-white/80">Economic Impact</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-dublin-accent mb-2">
                  <CountUp end={25000} duration={2} suffix="+" />
                </div>
                <p className="text-white/80">Hashtag Uses</p>
              </div>
            </div>
          </motion.div>

          {/* Implementation Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-12"
          >
            <h3 className="text-xl font-semibold mb-4 text-center">12-Month Implementation Timeline</h3>
            <div className="relative">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-dublin-accent to-green-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((progressPhase + 1) * 25)}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className={progressPhase >= 0 ? 'text-dublin-accent font-semibold' : 'text-white/60'}>
                  Q1: Always Greener
                </span>
                <span className={progressPhase >= 1 ? 'text-dublin-accent font-semibold' : 'text-white/60'}>
                  Q2: Always Awake
                </span>
                <span className={progressPhase >= 2 ? 'text-dublin-accent font-semibold' : 'text-white/60'}>
                  Q3: Hidden Hoods
                </span>
                <span className={progressPhase >= 3 ? 'text-dublin-accent font-semibold' : 'text-white/60'}>
                  Q4: Always Welcome
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campaign Selector */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dublin-primary mb-6">
              Interactive Campaign Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any campaign to explore the full interactive experience, 
              including working prototypes, data visualizations, and implementation details.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredCampaign(campaign.id)}
                onMouseLeave={() => setHoveredCampaign(null)}
                onClick={() => setSelectedCampaign(campaign.id)}
              >
                <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${campaign.gradient} p-8 text-white transition-all duration-500 ${
                  hoveredCampaign === campaign.id ? 'scale-105 shadow-2xl' : 'scale-100 shadow-lg'
                }`}>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <campaign.icon className="h-12 w-12" />
                      <ChartBarIcon className="h-8 w-8 opacity-60" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{campaign.title}</h3>
                    <p className="text-lg opacity-90 mb-4">{campaign.subtitle}</p>
                    <p className="text-sm opacity-80 mb-6">{campaign.description}</p>
                    
                    {/* Metrics Preview */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="font-bold text-lg">{campaign.metrics.reach}</div>
                        <div className="text-xs opacity-80">Reach</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-lg">
                          {campaign.metrics.actions || campaign.metrics.checkIns || campaign.metrics.stories || campaign.metrics.partnerships}
                        </div>
                        <div className="text-xs opacity-80">
                          {campaign.id === 'always-greener' ? 'Actions' : 
                           campaign.id === 'always-awake' ? 'Check-ins' :
                           campaign.id === 'hidden-hoods' ? 'Stories' : 'Partners'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-lg">{campaign.metrics.impact}</div>
                        <div className="text-xs opacity-80">Impact</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-80">{campaign.preview}</span>
                      <PlayCircleIcon className="h-8 w-8 transform transition-transform group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <AnimatePresence>
                    {hoveredCampaign === campaign.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center"
                      >
                        <div className="text-center">
                          <PlayCircleIcon className="h-16 w-16 mx-auto mb-4 animate-pulse" />
                          <p className="text-xl font-semibold">Explore Interactive Experience</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alignment Section */}
      <section className="py-20 bg-dublin-primary text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Strategic Alignment</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Every campaign directly supports Dublin City Council's strategic objectives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <GlobeAltIcon className="h-12 w-12 text-dublin-accent mb-4" />
              <h3 className="text-xl font-semibold mb-4">Climate Action Plan 2024-2029</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-dublin-accent rounded-full mr-3"></div>
                  <span>Community engagement initiatives</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-dublin-accent rounded-full mr-3"></div>
                  <span>Behavioral change campaigns</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-dublin-accent rounded-full mr-3"></div>
                  <span>Digital innovation for sustainability</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <HeartIcon className="h-12 w-12 text-dublin-accent mb-4" />
              <h3 className="text-xl font-semibold mb-4">Night-Time Economy Strategy</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-dublin-accent rounded-full mr-3"></div>
                  <span>Cultural venue promotion</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-dublin-accent rounded-full mr-3"></div>
                  <span>Safe transport connectivity</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-dublin-accent rounded-full mr-3"></div>
                  <span>Economic impact measurement</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <UserGroupIcon className="h-12 w-12 text-dublin-accent mb-4" />
              <h3 className="text-xl font-semibold mb-4">Integration Strategy 2021-2025</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-dublin-accent rounded-full mr-3"></div>
                  <span>Multilingual community support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-dublin-accent rounded-full mr-3"></div>
                  <span>Workplace integration programs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-dublin-accent rounded-full mr-3"></div>
                  <span>Cultural celebration and inclusion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DublinVision