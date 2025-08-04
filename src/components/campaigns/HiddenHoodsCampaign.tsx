import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CountUp from 'react-countup'
import { 
  ArrowLeftIcon,
  CameraIcon,
  SpeakerWaveIcon,
  PhotoIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  PlayIcon,
  GiftIcon
} from '@heroicons/react/24/outline'

interface HiddenHoodsCampaignProps {
  onBack: () => void
}

const dublinNeighborhoods = [
  { 
    id: 'temple-bar', 
    name: 'Temple Bar', 
    x: 50, 
    y: 55, 
    stories: 87, 
    featured: true,
    category: 'cultural',
    description: 'Historic cobblestone quarter with hidden galleries'
  },
  { 
    id: 'smithfield', 
    name: 'Smithfield', 
    x: 45, 
    y: 45, 
    stories: 34, 
    featured: false,
    category: 'market',
    description: 'Victorian market square with modern twists'
  },
  { 
    id: 'portobello', 
    name: 'Portobello', 
    x: 48, 
    y: 68, 
    stories: 52, 
    featured: true,
    category: 'local',
    description: 'Canal-side community with authentic Dublin spirit'
  },
  { 
    id: 'docklands', 
    name: 'Docklands', 
    x: 70, 
    y: 55, 
    stories: 29, 
    featured: false,
    category: 'modern',
    description: 'Glass towers hiding maritime heritage'
  },
  { 
    id: 'rathmines', 
    name: 'Rathmines', 
    x: 52, 
    y: 75, 
    stories: 43, 
    featured: false,
    category: 'residential',
    description: 'Student haven with vintage charm'
  },
  { 
    id: 'phibsborough', 
    name: 'Phibsborough', 
    x: 48, 
    y: 35, 
    stories: 38, 
    featured: true,
    category: 'local',
    description: 'Northside gem with community spirit'
  }
]

const featuredStories = [
  {
    id: 1,
    title: 'The Secret Garden of Temple Bar',
    author: 'Sarah M.',
    neighborhood: 'Temple Bar',
    language: 'English',
    type: 'photo',
    likes: 245,
    views: 1200,
    thumbnail: 'secret-garden.jpg',
    audio: true
  },
  {
    id: 2,
    title: 'Seanchaí an Phortobello',
    author: 'Padraig Ó C.',
    neighborhood: 'Portobello',
    language: 'Gaeilge',
    type: 'video',
    likes: 156,
    views: 890,
    thumbnail: 'portobello-story.jpg',
    audio: false
  },
  {
    id: 3,
    title: 'Hidden Murals of Smithfield',
    author: 'Maria L.',
    neighborhood: 'Smithfield',
    language: 'English',
    type: 'photo',
    likes: 189,
    views: 750,
    thumbnail: 'smithfield-murals.jpg',
    audio: true
  },
  {
    id: 4,
    title: 'Coffee Culture Chronicles',
    author: 'Ahmed K.',
    neighborhood: 'Rathmines',
    language: 'Arabic',
    type: 'photo',
    likes: 134,
    views: 650,
    thumbnail: 'coffee-culture.jpg',
    audio: false
  }
]

const submissionCategories = [
  { id: 'hidden-gems', name: 'Hidden Gems', icon: '💎', color: 'bg-emerald-500' },
  { id: 'local-heroes', name: 'Local Heroes', icon: '🦸‍♀️', color: 'bg-blue-500' },
  { id: 'food-secrets', name: 'Food Secrets', icon: '🍽️', color: 'bg-orange-500' },
  { id: 'street-art', name: 'Street Art', icon: '🎨', color: 'bg-purple-500' },
  { id: 'community-spaces', name: 'Community Spaces', icon: '🏘️', color: 'bg-green-500' },
  { id: 'history-tales', name: 'History Tales', icon: '📚', color: 'bg-amber-500' }
]

const arChallenges = [
  {
    id: 1,
    title: 'Find the Hidden Harp',
    location: 'Temple Bar',
    reward: '€10 Restaurant Voucher',
    difficulty: 'Easy',
    participants: 234
  },
  {
    id: 2,
    title: 'Discover the Phoenix Story',
    location: 'Smithfield',
    reward: '€15 Shop Local Credit',
    difficulty: 'Medium',
    participants: 156
  },
  {
    id: 3,
    title: 'Unlock Canal Secrets',
    location: 'Portobello',
    reward: '€20 Experience Voucher',
    difficulty: 'Hard',
    participants: 89
  }
]

const weeklyWinners = [
  {
    week: 'Week 42',
    story: 'The Last Lamplighter of Dublin',
    author: 'Tom Sullivan',
    neighborhood: 'Phibsborough',
    views: 2400
  },
  {
    week: 'Week 41',
    story: 'Grandmother\'s Bakery Legacy',
    author: 'Elena Rossi',
    neighborhood: 'Rathmines',
    views: 1890
  },
  {
    week: 'Week 40',
    story: 'Digital Nomads of Docklands',
    author: 'Kevin Chen',
    neighborhood: 'Docklands',
    views: 1650
  }
]

const HiddenHoodsCampaign: React.FC<HiddenHoodsCampaignProps> = ({ onBack }) => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null)
  const [submissionForm, setSubmissionForm] = useState({
    title: '',
    category: '',
    neighborhood: '',
    language: 'english',
    description: ''
  })
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterLanguage, setFilterLanguage] = useState('all')
  const [submissionCount, setSubmissionCount] = useState(876)
  const [activeStory, setActiveStory] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setSubmissionCount(prev => prev + Math.floor(Math.random() * 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmissionCount(prev => prev + 1)
    setSubmissionForm({
      title: '',
      category: '',
      neighborhood: '',
      language: 'english',
      description: ''
    })
    // Show success animation
  }

  const filteredStories = featuredStories.filter(story => {
    const categoryMatch = filterCategory === 'all' || story.type === filterCategory
    const languageMatch = filterLanguage === 'all' || story.language.toLowerCase() === filterLanguage
    return categoryMatch && languageMatch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
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
              <h1 className="text-2xl font-bold text-dublin-primary">HIDDEN HOODS</h1>
              <p className="text-sm text-gray-600">Interactive UGC Storytelling Platform</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-6"
              >
                Dublin's Hidden Stories Await
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-8"
              >
                Discover the secret corners, local heroes, and untold tales that make 
                each Dublin neighborhood unique. Share your story, explore others, 
                and connect with your community.
              </motion.p>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Stories Submitted</span>
                  <PhotoIcon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold mb-2">
                  <CountUp end={submissionCount} duration={2} />
                </div>
                <div className="text-sm opacity-80">Path to 1,500 stories</div>
                <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                  <div 
                    className="bg-orange-300 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min((submissionCount / 1500) * 100, 100)}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-sm opacity-80">Neighborhoods Active</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm opacity-80">Languages Supported</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Interactive Neighborhood Preview */}
              <div className="relative h-64 bg-gradient-to-t from-orange-800 to-orange-600 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Floating story bubbles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-white/20 backdrop-blur-sm rounded-full p-3 cursor-pointer"
                    style={{
                      left: `${20 + (i % 3) * 25}%`,
                      top: `${20 + Math.floor(i / 3) * 30}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="text-2xl">
                      {['📸', '🎤', '🎨', '🏛️', '☕', '🎭', '🍽️', '🎵'][i]}
                    </div>
                  </motion.div>
                ))}

                {/* Central Dublin illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="text-6xl opacity-30"
                  >
                    🗺️
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User-Generated Content Simulator */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dublin-primary mb-6">
              Share Your Neighborhood Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working submission form and content creation tools. Your story could be 
              featured in our weekly showcase or Dublin City Libraries exhibition.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Submission Form */}
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-dublin-primary mb-6">Submit Your Story</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Story Title
                  </label>
                  <input
                    type="text"
                    value={submissionForm.title}
                    onChange={(e) => setSubmissionForm(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., The Hidden Café of Rathmines"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={submissionForm.category}
                      onChange={(e) => setSubmissionForm(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Category</option>
                      {submissionCategories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.icon} {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Neighborhood
                    </label>
                    <select
                      value={submissionForm.neighborhood}
                      onChange={(e) => setSubmissionForm(prev => ({ ...prev, neighborhood: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Neighborhood</option>
                      {dublinNeighborhoods.map(hood => (
                        <option key={hood.id} value={hood.id}>
                          {hood.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Language / Teanga
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {['english', 'gaeilge', 'polski', 'arabic'].map(lang => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => setSubmissionForm(prev => ({ ...prev, language: lang }))}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          submissionForm.language === lang
                            ? 'bg-orange-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {lang === 'english' ? 'EN' : 
                         lang === 'gaeilge' ? 'GA' :
                         lang === 'polski' ? 'PL' : 'AR'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell Your Story
                  </label>
                  <textarea
                    value={submissionForm.description}
                    onChange={(e) => setSubmissionForm(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Share the story behind your discovery, the people you met, or the hidden history you uncovered..."
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    <CameraIcon className="h-5 w-5" />
                    <span>Add Photos</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    <SpeakerWaveIcon className="h-5 w-5" />
                    <span>Record Audio</span>
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Submit Story
                </button>
              </form>
            </div>

            {/* Instagram Carousel Template */}
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 text-white">
                  <h3 className="font-bold text-lg">Instagram Carousel Template</h3>
                  <p className="text-sm opacity-90">Auto-generated from your submission</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="aspect-square bg-gradient-to-br from-orange-200 to-red-200 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-orange-200 to-red-200 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📸</span>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-orange-200 to-red-200 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">💬</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">
                      {submissionForm.title || "Your Story Title Here"}
                    </h4>
                    <p className="text-sm text-gray-600">
                      #{submissionForm.neighborhood || "YourNeighborhood"} #HiddenHoods #MyLocalDublin
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <HeartIcon className="h-4 w-4" />
                        <span>245</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <PlayIcon className="h-4 w-4" />
                        <span>1.2K</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live submission counter */}
              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="font-semibold text-dublin-primary mb-4">Live Submission Tracker</h4>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    <CountUp end={submissionCount} duration={1} />
                  </div>
                  <p className="text-sm text-gray-600">Stories submitted this month</p>
                  <div className="mt-4 text-xs text-gray-500">
                    Target: 1,500 stories by year-end
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Discovery Experience */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dublin-primary mb-6">
              Discover Hidden Dublin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore stories from every corner of Dublin. Filter by language, 
              category, or neighborhood to find exactly what interests you.
            </p>
          </motion.div>

          {/* Filter Controls */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Filter by Category
                </label>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
                >
                  <option value="all">All Categories</option>
                  <option value="photo">Photo Stories</option>
                  <option value="video">Video Stories</option>
                  <option value="audio">Audio Stories</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Filter by Language
                </label>
                <select
                  value={filterLanguage}
                  onChange={(e) => setFilterLanguage(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
                >
                  <option value="all">All Languages</option>
                  <option value="english">English</option>
                  <option value="gaeilge">Gaeilge</option>
                  <option value="polski">Polski</option>
                  <option value="arabic">العربية</option>
                </select>
              </div>

              <div className="flex items-end">
                <button className="flex items-center space-x-2 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  <MagnifyingGlassIcon className="h-5 w-5" />
                  <span>Search Stories</span>
                </button>
              </div>
            </div>
          </div>

          {/* Featured Stories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setActiveStory(activeStory === story.id ? null : story.id)}
              >
                <div className="bg-gradient-to-r from-orange-400 to-red-500 h-48 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">
                      {story.type === 'photo' ? '📸' : story.type === 'video' ? '🎥' : '🎤'}
                    </div>
                    <p className="font-semibold text-sm">{story.neighborhood}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{story.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">by {story.author}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1">
                        <HeartIcon className="h-4 w-4 text-red-500" />
                        <span>{story.likes}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <PlayIcon className="h-4 w-4 text-gray-500" />
                        <span>{story.views}</span>
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        story.language === 'English' ? 'bg-blue-100 text-blue-700' :
                        story.language === 'Gaeilge' ? 'bg-green-100 text-green-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {story.language}
                      </span>
                      {story.audio && (
                        <SpeakerWaveIcon className="h-4 w-4 text-orange-600" />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeStory === story.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <p className="text-sm text-gray-600 mb-3">
                          Experience this {story.type} story with interactive elements 
                          and location-based context.
                        </p>
                        <button className="w-full bg-orange-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                          Experience Story
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Dublin Map */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-center text-dublin-primary">
              Dublin Neighborhoods Story Map
            </h3>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {dublinNeighborhoods.map((neighborhood) => (
                <motion.div
                  key={neighborhood.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                    selectedNeighborhood === neighborhood.id 
                      ? 'border-dublin-accent bg-dublin-accent/10 scale-105' 
                      : 'border-gray-200 bg-gray-50 hover:border-dublin-primary hover:bg-dublin-primary/5'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedNeighborhood(
                    selectedNeighborhood === neighborhood.id ? null : neighborhood.id
                  )}
                >
                  <div className="text-center">
                    <div className="text-lg font-semibold text-dublin-primary mb-2">
                      {neighborhood.name}
                    </div>
                    <div className="text-2xl font-bold text-dublin-accent mb-1">
                      {neighborhood.stories}
                    </div>
                    <div className="text-sm text-gray-500">stories</div>
                  </div>
                  
                  <AnimatePresence>
                    {selectedNeighborhood === neighborhood.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <div className="text-sm text-gray-600 space-y-2">
                          <div className="flex justify-between">
                            <span>English Stories:</span>
                            <span className="font-semibold">{Math.floor(neighborhood.stories * 0.6)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Irish Stories:</span>
                            <span className="font-semibold">{Math.floor(neighborhood.stories * 0.25)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Other Languages:</span>
                            <span className="font-semibold">{Math.floor(neighborhood.stories * 0.15)}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AR Scavenger Hunt */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">AR Scavenger Hunt</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Find hidden neighborhood gems using augmented reality. 
              Complete challenges to unlock exclusive local vouchers and rewards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {arChallenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-xs px-3 py-1 rounded-full ${
                    challenge.difficulty === 'Easy' ? 'bg-green-500' :
                    challenge.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                  } text-white font-semibold`}>
                    {challenge.difficulty}
                  </div>
                  <GiftIcon className="h-8 w-8 text-orange-300" />
                </div>

                <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                <p className="text-white/80 mb-4">📍 {challenge.location}</p>

                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-orange-300 mb-1">Reward</h4>
                  <p className="text-sm">{challenge.reward}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">
                    {challenge.participants} participants
                  </span>
                  <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                    Start Hunt
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">How AR Scavenger Hunt Works</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-semibold mb-2">1. Open App</h4>
                <p className="text-sm text-white/80">Launch Hidden Hoods AR mode</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🗺️</span>
                </div>
                <h4 className="font-semibold mb-2">2. Choose Challenge</h4>
                <p className="text-sm text-white/80">Select neighborhood and difficulty</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h4 className="font-semibold mb-2">3. Find Hidden Items</h4>
                <p className="text-sm text-white/80">Use AR to discover secret spots</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎁</span>
                </div>
                <h4 className="font-semibold mb-2">4. Claim Rewards</h4>
                <p className="text-sm text-white/80">Unlock local business vouchers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement & Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dublin-primary mb-6">
              Community Impact & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating the storytellers and neighborhoods that make Dublin special. 
              See weekly winners and partnership initiatives.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Weekly Winners Showcase */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-dublin-primary mb-6 text-center">
                Weekly Winner Showcase
              </h3>
              
              <div className="space-y-4">
                {weeklyWinners.map((winner, index) => (
                  <motion.div
                    key={winner.week}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg ${
                      index === 0 ? 'bg-yellow-400 text-yellow-900' :
                      index === 1 ? 'bg-gray-300 text-gray-800' :
                      'bg-orange-300 text-orange-900'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{winner.story}</div>
                        <div className="text-sm opacity-80">
                          by {winner.author} • {winner.neighborhood}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl">
                          {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                        </div>
                        <div className="text-sm font-semibold">
                          {winner.views.toLocaleString()} views
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  View All Winners
                </button>
              </div>
            </div>

            {/* Partnership Integration */}
            <div className="space-y-8">
              <div className="bg-dublin-primary text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Dublin City Libraries Partnership</h3>
                <p className="mb-6">
                  Selected Hidden Hoods stories are featured in rotating exhibitions 
                  across Dublin's library network, bringing digital storytelling to 
                  physical community spaces.
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm opacity-80">Library Branches</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">48</div>
                    <div className="text-sm opacity-80">Stories Featured</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-dublin-primary mb-4">
                  Performance Metrics
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      <CountUp end={30} duration={2} suffix="%" />
                    </div>
                    <div className="text-sm text-gray-600">Page time increase</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      <CountUp end={5000000} duration={2} />
                    </div>
                    <div className="text-sm text-gray-600">#MyLocalDublin reach</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      <CountUp end={87} duration={2} suffix="%" />
                    </div>
                    <div className="text-sm text-gray-600">Engagement rate</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      <CountUp end={156} duration={2} />
                    </div>
                    <div className="text-sm text-gray-600">Local partnerships</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HiddenHoodsCampaign 