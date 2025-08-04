import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CountUp from 'react-countup'
import { 
  ArrowLeftIcon,
  TrophyIcon,
  CameraIcon,
  ChartBarIcon,
  GlobeAltIcon,
  BeakerIcon,
  ArrowPathIcon,
  CurrencyEuroIcon
} from '@heroicons/react/24/outline'

interface AlwaysGreenerCampaignProps {
  onBack: () => void
}

const ecoActions = [
  { id: 'cycling', name: 'Cycling', icon: '🚴‍♂️', points: 50, color: 'bg-green-500' },
  { id: 'composting', name: 'Composting', icon: '🌱', points: 30, color: 'bg-orange-500' },
  { id: 'energy-saving', name: 'Energy Saving', icon: '💡', points: 40, color: 'bg-blue-500' },
  { id: 'public-transport', name: 'Public Transport', icon: '🚌', points: 35, color: 'bg-purple-500' },
  { id: 'recycling', name: 'Recycling', icon: '♻️', points: 25, color: 'bg-green-600' },
  { id: 'tree-planting', name: 'Tree Planting', icon: '🌳', points: 100, color: 'bg-emerald-600' }
]

const dublinNeighborhoods = [
  { id: 'southside', name: 'Southside', x: 60, y: 70, score: 2450 },
  { id: 'northside', name: 'Northside', x: 55, y: 35, score: 1890 },
  { id: 'city-centre', name: 'City Centre', x: 50, y: 50, score: 3200 },
  { id: 'docklands', name: 'Docklands', x: 70, y: 55, score: 1650 },
  { id: 'phoenix-park', name: 'Phoenix Park', x: 25, y: 45, score: 980 }
]

const partners = [
  { name: 'Codema', description: 'Energy management agency collaboration', budget: 15000 },
  { name: 'TFI', description: 'Public transport integration', budget: 12000 },
  { name: 'Dublin Schools', description: 'Educational outreach program', budget: 8000 },
  { name: 'Community Groups', description: 'Local environmental initiatives', budget: 10000 }
]

const socialPosts = [
  {
    id: 1,
    type: 'tiktok',
    title: '30-Second Green Hack: Bike to Work',
    views: '15.2K',
    likes: '1.8K',
    thumbnail: 'cycling-hack.jpg'
  },
  {
    id: 2,
    type: 'instagram',
    title: 'Before/After: Community Garden',
    engagement: '892 likes',
    comments: '67 comments',
    thumbnail: 'garden-transformation.jpg'
  },
  {
    id: 3,
    type: 'tiktok',
    title: 'Composting Made Easy in Dublin',
    views: '8.7K',
    likes: '945',
    thumbnail: 'composting-tips.jpg'
  }
]

const AlwaysGreenerCampaign: React.FC<AlwaysGreenerCampaignProps> = ({ onBack }) => {
  const [greenProgress, setGreenProgress] = useState(0)
  const [selectedAction, setSelectedAction] = useState<string | null>(null)
  const [dropZone, setDropZone] = useState<string | null>(null)
  const [neighborhoodScores, setNeighborhoodScores] = useState(dublinNeighborhoods)
  const [currentMonth, setCurrentMonth] = useState(0)
  const [arFilterActive, setArFilterActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGreenProgress(prev => (prev < 100 ? prev + 1 : 0))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const handleActionDrop = (neighborhoodId: string) => {
    if (selectedAction) {
      const action = ecoActions.find(a => a.id === selectedAction)
      if (action) {
        setNeighborhoodScores(prev => 
          prev.map(n => 
            n.id === neighborhoodId 
              ? { ...n, score: n.score + action.points }
              : n
          )
        )
      }
    }
    setSelectedAction(null)
    setDropZone(null)
  }

  const milestones = [
    'Campaign Launch & Brand Activation',
    'Gamification Platform Beta Testing',
    'Partnership Integration Complete',
    'Community Challenge Events',
    'AR Filter Launch',
    'Mid-Campaign Assessment',
    'Seasonal Campaigns (Summer)',
    'Corporate Partnership Expansion',
    'Back-to-School Green Initiatives',
    'Autumn Community Challenges',
    'Holiday Sustainability Drive',
    'Campaign Evaluation & Awards'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-dublin-primary hover:text-dublin-accent transition-colors"
            >
              <ArrowLeftIcon className="h-6 w-6" />
              <span className="font-medium">Back to Campaigns</span>
            </button>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-dublin-primary">ALWAYS GREENER</h1>
              <p className="text-sm text-gray-600">Interactive Climate Action Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Animation */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-6"
              >
                Dublin's Green Transformation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-8"
              >
                Watch Dublin's skyline transform as citizens take eco-actions. 
                Every sustainable choice turns our city greener.
              </motion.p>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Eco-Actions Projected</span>
                  <BeakerIcon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold mb-2">
                  <CountUp end={25000} duration={3} />
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${greenProgress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Animated Dublin Skyline */}
              <div className="relative h-64 bg-gradient-to-t from-green-800 to-green-600 rounded-lg overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-900 to-transparent"></div>
                
                {/* Buildings that turn green */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bottom-0 bg-gray-400 transition-all duration-1000"
                    style={{
                      left: `${(i * 8) + 5}%`,
                      width: `${Math.random() * 4 + 2}%`,
                      height: `${Math.random() * 60 + 40}%`,
                    }}
                    animate={{
                      backgroundColor: greenProgress > (i * 8) ? '#22c55e' : '#9ca3af'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Building windows */}
                    <div className="grid grid-cols-2 gap-1 p-1 h-full">
                      {[...Array(8)].map((_, j) => (
                        <div
                          key={j}
                          className="bg-yellow-300 opacity-60 rounded-sm"
                          style={{ height: '8px' }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Growing trees */}
                <AnimatePresence>
                  {greenProgress > 50 && (
                    <motion.div
                      initial={{ scale: 0, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      className="absolute bottom-0 left-1/4 text-6xl"
                    >
                      🌳
                    </motion.div>
                  )}
                  {greenProgress > 70 && (
                    <motion.div
                      initial={{ scale: 0, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      className="absolute bottom-0 right-1/4 text-5xl"
                    >
                      🌲
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map with Gamification */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dublin-primary mb-6">
              Gamification Demo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Drag eco-actions onto Dublin neighborhoods to see the points system in action. 
              Real gamification would track actual citizen actions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Eco Actions Palette */}
            <div>
              <h3 className="text-xl font-bold mb-6">Available Eco-Actions</h3>
              <div className="space-y-4">
                {ecoActions.map((action) => (
                  <motion.div
                    key={action.id}
                    className={`${action.color} rounded-lg p-4 text-white cursor-grab ${
                      selectedAction === action.id ? 'ring-4 ring-yellow-400 scale-105' : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    draggable
                    onClick={() => setSelectedAction(action.id)}
                    onDragStart={() => setSelectedAction(action.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{action.icon}</span>
                        <div>
                          <div className="font-semibold">{action.name}</div>
                          <div className="text-sm opacity-90">{action.points} points</div>
                        </div>
                      </div>
                      <TrophyIcon className="h-6 w-6" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Dublin Map */}
            <div className="lg:col-span-2">
              <div className="relative bg-green-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Dublin Neighborhoods</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {neighborhoodScores.map((neighborhood) => (
                    <motion.div
                      key={neighborhood.id}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 bg-white shadow-lg border-2 ${
                        dropZone === neighborhood.id ? 'border-yellow-400 scale-105' : 'border-gray-200'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      onDragOver={(e) => {
                        e.preventDefault()
                        setDropZone(neighborhood.id)
                      }}
                      onDragLeave={() => setDropZone(null)}
                      onDrop={(e) => {
                        e.preventDefault()
                        handleActionDrop(neighborhood.id)
                      }}
                      onClick={() => selectedAction && handleActionDrop(neighborhood.id)}
                    >
                      <div className="text-center">
                        <div className="text-lg font-semibold text-dublin-primary mb-2">
                          {neighborhood.name}
                        </div>
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {neighborhood.score}
                        </div>
                        <div className="text-sm text-gray-500">points</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="mt-12 bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Community Leaderboard</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {neighborhoodScores
                .sort((a, b) => b.score - a.score)
                .map((neighborhood, index) => (
                  <div
                    key={neighborhood.id}
                    className={`text-center p-4 rounded-lg ${
                      index === 0 ? 'bg-yellow-400 text-yellow-900' :
                      index === 1 ? 'bg-gray-300 text-gray-800' :
                      index === 2 ? 'bg-orange-300 text-orange-900' :
                      'bg-white'
                    }`}
                  >
                    <div className="text-2xl mb-2">
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅'}
                    </div>
                    <div className="font-semibold">{neighborhood.name}</div>
                    <div className="text-lg font-bold">{neighborhood.score}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* AR Filter Mockup */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">AR Filter: "Plant a Virtual Tree"</h2>
              <p className="text-lg mb-8">
                Interactive augmented reality filter allowing users to plant virtual trees 
                around Dublin, with each tree representing real environmental actions taken.
              </p>
              
              <button
                onClick={() => setArFilterActive(!arFilterActive)}
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-3"
              >
                <CameraIcon className="h-6 w-6" />
                <span>{arFilterActive ? 'Stop AR Demo' : 'Try AR Filter Demo'}</span>
              </button>
            </div>

            <div className="relative">
              <div className="bg-black rounded-2xl aspect-video relative overflow-hidden">
                {arFilterActive ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-b from-blue-400 to-green-400 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-8xl mb-4"
                      >
                        🌳
                      </motion.div>
                      <p className="text-white font-semibold">AR Filter Active!</p>
                      <p className="text-white/80 text-sm">Tap to plant virtual trees</p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <CameraIcon className="h-16 w-16 mx-auto mb-4" />
                      <p>AR Camera View</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dublin-primary mb-6">
              Social Media Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TikTok green hacks, Instagram transformations, and hashtag tracking 
              demonstrate real social media strategy in action.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {socialPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: post.id * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-48 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">
                      {post.type === 'tiktok' ? '📱' : '📸'}
                    </div>
                    <p className="font-semibold">{post.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{post.views || post.engagement}</span>
                    <span>{post.likes || post.comments}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hashtag Tracker */}
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-dublin-primary mb-4">
                #AlwaysGreener Hashtag Growth
              </h3>
              <div className="text-4xl font-bold text-green-600 mb-2">
                <CountUp end={15000} duration={3} />
              </div>
              <p className="text-gray-600">Total hashtag uses projected</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">2.5K</div>
                <p className="text-sm text-gray-600">TikTok Posts</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">4.8K</div>
                <p className="text-sm text-gray-600">Instagram Posts</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">3.2K</div>
                <p className="text-sm text-gray-600">Twitter/X Posts</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">4.5K</div>
                <p className="text-sm text-gray-600">Other Platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Integration */}
      <section className="py-20 bg-dublin-primary text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Partnership Integration</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Strategic collaborations with key Dublin organizations to maximize campaign impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Partners</h3>
              <div className="space-y-4">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-lg">{partner.name}</h4>
                        <p className="text-white/80 text-sm">{partner.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-dublin-accent font-bold">
                          €{partner.budget.toLocaleString()}
                        </div>
                        <div className="text-white/60 text-sm">allocated</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Budget Breakdown</h3>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Total Campaign Budget</span>
                    <span className="font-bold text-dublin-accent text-xl">€45,000</span>
                  </div>
                  
                  {partners.map((partner) => {
                    const percentage = (partner.budget / 45000) * 100
                    return (
                      <div key={partner.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{partner.name}</span>
                          <span>€{partner.budget.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div 
                            className="bg-dublin-accent h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Slider */}
          <div className="bg-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              12-Month Campaign Timeline
            </h3>
            
            <div className="mb-6">
              <input
                type="range"
                min="0"
                max="11"
                value={currentMonth}
                onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm mt-2">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
              </div>
            </div>

            <motion.div
              key={currentMonth}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-lg font-semibold mb-2">
                Month {currentMonth + 1}: {new Date(2024, currentMonth).toLocaleString('default', { month: 'long' })}
              </div>
              <p className="text-white/80">{milestones[currentMonth]}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Measurement Dashboard */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dublin-primary mb-6">
              Impact Measurement Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time analytics and impact tracking demonstrate campaign effectiveness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <ChartBarIcon className="h-8 w-8 text-green-600" />
                <span className="text-green-600 text-sm font-semibold">+20%</span>
              </div>
              <div className="text-2xl font-bold text-dublin-primary mb-2">
                <CountUp end={45000} duration={2} />
              </div>
              <p className="text-gray-600 text-sm">Climate Page Views</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <ArrowPathIcon className="h-8 w-8 text-blue-600" />
                <span className="text-blue-600 text-sm font-semibold">+15%</span>
              </div>
              <div className="text-2xl font-bold text-dublin-primary mb-2">
                <CountUp end={12500} duration={2} />
              </div>
              <p className="text-gray-600 text-sm">Waste Reduction (kg)</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <GlobeAltIcon className="h-8 w-8 text-purple-600" />
                <span className="text-purple-600 text-sm font-semibold">85%</span>
              </div>
              <div className="text-2xl font-bold text-dublin-primary mb-2">Positive</div>
              <p className="text-gray-600 text-sm">Social Sentiment</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <CurrencyEuroIcon className="h-8 w-8 text-orange-600" />
                <span className="text-orange-600 text-sm font-semibold">ROI</span>
              </div>
              <div className="text-2xl font-bold text-dublin-primary mb-2">6.3x</div>
              <p className="text-gray-600 text-sm">Return on Investment</p>
            </div>
          </div>

          {/* Sentiment Visualization */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6">Social Media Sentiment Analysis</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">😊</div>
                <div className="text-2xl font-bold text-green-600">85%</div>
                <p className="text-gray-600">Positive</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">😐</div>
                <div className="text-2xl font-bold text-yellow-600">12%</div>
                <p className="text-gray-600">Neutral</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">😟</div>
                <div className="text-2xl font-bold text-red-600">3%</div>
                <p className="text-gray-600">Negative</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AlwaysGreenerCampaign 