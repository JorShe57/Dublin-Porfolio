import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CountUp from 'react-countup'
import { 
  ArrowLeftIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  PlayIcon
} from '@heroicons/react/24/outline'

interface AlwaysWelcomeCampaignProps {
  onBack: () => void
}

const languages = [
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'ga', name: 'Irish', native: 'Gaeilge', flag: '🇮🇪' },
  { code: 'pl', name: 'Polish', native: 'Polski', flag: '🇵🇱' },
  { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇸🇦' },
  { code: 'zh', name: 'Mandarin', native: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪' }
]

const journeyStories = [
  {
    id: 1,
    title: 'From Warsaw to Dublin: A Tech Journey',
    author: 'Katarzyna M.',
    duration: '2 years in Dublin',
    language: 'Polish',
    category: 'Career',
    preview: 'How I transitioned from Poland to Dublin\'s tech scene...',
    views: 3400,
    duetResponses: 12
  },
  {
    id: 2,
    title: 'مرحباً دبلن - Welcome Dublin',
    author: 'Ahmed S.',
    duration: '6 months in Dublin',
    language: 'Arabic',
    category: 'Community',
    preview: 'Finding my place in Dublin\'s diverse communities...',
    views: 2100,
    duetResponses: 8
  },
  {
    id: 3,
    title: '我的都柏林生活 - My Dublin Life',
    author: 'Li W.',
    duration: '1 year in Dublin',
    language: 'Mandarin',
    category: 'Student Life',
    preview: 'Studying and living in Dublin as an international student...',
    views: 1800,
    duetResponses: 15
  },
  {
    id: 4,
    title: 'Bienvenidos a Dublín',
    author: 'Carlos R.',
    duration: '3 years in Dublin',
    language: 'Spanish',
    category: 'Family',
    preview: 'Raising a family in Dublin while maintaining our culture...',
    views: 2800,
    duetResponses: 20
  }
]

const integrationMilestones = [
  { month: 1, title: 'Housing & Registration', completion: 85 },
  { month: 2, title: 'Banking & PPS Number', completion: 78 },
  { month: 3, title: 'Healthcare Registration', completion: 72 },
  { month: 6, title: 'Community Connections', completion: 65 },
  { month: 12, title: 'Cultural Integration', completion: 58 },
  { month: 24, title: 'Long-term Settlement', completion: 45 }
]

const workplaceBuddies = [
  {
    id: 1,
    company: 'Google Dublin',
    buddies: 45,
    logo: '🏢',
    since: '2022'
  },
  {
    id: 2,
    company: 'Meta',
    buddies: 32,
    logo: '🏢',
    since: '2023'
  },
  {
    id: 3,
    company: 'Accenture',
    buddies: 28,
    logo: '🏢',
    since: '2022'
  },
  {
    id: 4,
    company: 'Irish Life',
    buddies: 23,
    logo: '🏢',
    since: '2023'
  },
  {
    id: 5,
    company: 'Bank of Ireland',
    buddies: 19,
    logo: '🏢',
    since: '2023'
  }
]

const culturalEvents = [
  {
    id: 1,
    title: 'Polish Heritage Month',
    date: 'May 2024',
    venue: 'Central Library',
    attendees: 350,
    type: 'Cultural Celebration'
  },
  {
    id: 2,
    title: 'Arabic Calligraphy Workshop',
    date: 'March 2024',
    venue: 'Parnell Library',
    attendees: 85,
    type: 'Skills Workshop'
  },
  {
    id: 3,
    title: 'Chinese New Year Festival',
    date: 'February 2024',
    venue: 'Smithfield Square',
    attendees: 1200,
    type: 'Public Festival'
  },
  {
    id: 4,
    title: 'International Food Market',
    date: 'April 2024',
    venue: 'Temple Bar',
    attendees: 800,
    type: 'Community Market'
  }
]

const resourceCategories = [
  {
    id: 'housing',
    name: 'Housing & Accommodation',
    icon: '🏠',
    resources: 24,
    languages: 8
  },
  {
    id: 'employment',
    name: 'Employment & Jobs',
    icon: '💼',
    resources: 32,
    languages: 6
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Wellness',
    icon: '🏥',
    resources: 18,
    languages: 8
  },
  {
    id: 'education',
    name: 'Education & Training',
    icon: '🎓',
    resources: 28,
    languages: 7
  },
  {
    id: 'legal',
    name: 'Legal & Documentation',
    icon: '📄',
    resources: 15,
    languages: 8
  },
  {
    id: 'community',
    name: 'Community & Social',
    icon: '👥',
    resources: 21,
    languages: 8
  }
]

const AlwaysWelcomeCampaign: React.FC<AlwaysWelcomeCampaignProps> = ({ onBack }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [activeStory, setActiveStory] = useState<number | null>(null)
  const [buddySignups, setBuddySignups] = useState(187)
  const [resourceViews, setResourceViews] = useState(25000)
  const [currentMilestone, setCurrentMilestone] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    department: '',
    experience: '',
    languages: [] as string[]
  })

  useEffect(() => {
    const viewsInterval = setInterval(() => {
      setResourceViews(prev => prev + Math.floor(Math.random() * 50) + 10)
    }, 3000)

    const signupInterval = setInterval(() => {
      setBuddySignups(prev => prev + Math.floor(Math.random() * 2))
    }, 8000)

    const milestoneInterval = setInterval(() => {
      setCurrentMilestone(prev => (prev + 1) % integrationMilestones.length)
    }, 4000)

    return () => {
      clearInterval(viewsInterval)
      clearInterval(signupInterval)
      clearInterval(milestoneInterval)
    }
  }, [])

  const handleBuddySignup = (e: React.FormEvent) => {
    e.preventDefault()
    setBuddySignups(prev => prev + 1)
    setFormData({
      name: '',
      company: '',
      department: '',
      experience: '',
      languages: []
    })
  }

  const getTranslation = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      'welcome_title': {
        'en': 'Always Welcome in Dublin',
        'ga': 'Fáilte i gcónaí i mBaile Átha Cliath',
        'pl': 'Zawsze mile widziani w Dublinie',
        'ar': 'مرحباً بكم دائماً في دبلن',
        'zh': '永远欢迎来到都柏林',
        'es': 'Siempre bienvenidos en Dublín',
        'fr': 'Toujours les bienvenus à Dublin',
        'de': 'Immer willkommen in Dublin'
      },
      'subtitle': {
        'en': 'Building bridges, sharing stories, creating community',
        'ga': 'Droichid a thógáil, scéalta a roinnt, pobal a chruthú',
        'pl': 'Budowanie mostów, dzielenie się historiami, tworzenie społeczności',
        'ar': 'بناء الجسور، مشاركة القصص، خلق المجتمع',
        'zh': '架设桥梁，分享故事，创建社区',
        'es': 'Construyendo puentes, compartiendo historias, creando comunidad',
        'fr': 'Construire des ponts, partager des histoires, créer une communauté',
        'de': 'Brücken bauen, Geschichten teilen, Gemeinschaft schaffen'
      }
    }
    
    return translations[key]?.[selectedLanguage] || translations[key]?.['en'] || key
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
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
            
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.native}
                  </option>
                ))}
              </select>
              
              <div className="text-right">
                <h1 className="text-2xl font-bold text-dublin-primary">ALWAYS WELCOME</h1>
                <p className="text-sm text-gray-600">Interactive Integration Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multilingual Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                key={selectedLanguage}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-6"
              >
                {getTranslation('welcome_title')}
              </motion.h2>
              
              <motion.p
                key={`${selectedLanguage}-subtitle`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-8"
              >
                {getTranslation('subtitle')}
              </motion.p>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Multilingual Page Views</span>
                  <GlobeAltIcon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold mb-2">
                  <CountUp end={resourceViews} duration={2} />
                </div>
                <div className="text-sm opacity-80">
                  Month 1 projection: 250,000 views
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm opacity-80">Languages</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm opacity-80">Positive Sentiment</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Animated Cultural Elements */}
              <div className="relative h-64 bg-gradient-to-t from-blue-800 to-blue-600 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Floating cultural symbols */}
                {languages.slice(0, 6).map((lang, i) => (
                  <motion.div
                    key={lang.code}
                    className="absolute bg-white/20 backdrop-blur-sm rounded-full p-4 cursor-pointer"
                    style={{
                      left: `${15 + (i % 3) * 30}%`,
                      top: `${20 + Math.floor(i / 3) * 40}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      scale: selectedLanguage === lang.code ? [1, 1.2, 1] : [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                    whileHover={{ scale: 1.3 }}
                    onClick={() => setSelectedLanguage(lang.code)}
                  >
                    <div className="text-2xl">{lang.flag}</div>
                  </motion.div>
                ))}

                {/* Central Dublin icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-6xl opacity-40"
                  >
                    🏰
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles representing diversity */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'][i % 5]
              }}
              animate={{
                y: [-20, -60, -20],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </section>

      {/* Cultural Story Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dublin-primary mb-6">
              "My Dublin Journey" Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from newcomers to Dublin, sharing their experiences, 
              challenges, and triumphs. Discover how others found their place in our city.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {journeyStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setActiveStory(activeStory === story.id ? null : story.id)}
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-32 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-3xl mb-2">🎥</div>
                    <p className="font-semibold text-sm">{story.category}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{story.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {story.author}</p>
                  <p className="text-xs text-blue-600 mb-3">{story.duration}</p>
                  
                  <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                    {story.preview}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1">
                        <PlayIcon className="h-4 w-4 text-blue-500" />
                        <span>{story.views}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <ChatBubbleLeftRightIcon className="h-4 w-4 text-green-500" />
                        <span>{story.duetResponses}</span>
                      </span>
                    </div>
                    
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      story.language === 'Polish' ? 'bg-red-100 text-red-700' :
                      story.language === 'Arabic' ? 'bg-green-100 text-green-700' :
                      story.language === 'Mandarin' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {story.language}
                    </span>
                  </div>

                  <AnimatePresence>
                    {activeStory === story.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <div className="space-y-3">
                          <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                            Watch Full Story
                          </button>
                          <button className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                            Create Response
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* TikTok Duet Simulation */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              TikTok Duet: Longtime Dubliners Respond
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="font-semibold mb-4">How It Works:</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">1</span>
                    </div>
                    <span>Newcomers share their "first week in Dublin" experiences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">2</span>
                    </div>
                    <span>Longtime residents create welcoming duet responses</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">3</span>
                    </div>
                    <span>Content tagged with #AlwaysWelcome creates community connections</span>
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <p className="text-white/80 mb-4">Duet Response Simulator</p>
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <p className="text-sm">
                    "Welcome to Dublin! I've been here 20 years and here's my tip for your first month..."
                  </p>
                </div>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Create Duet Response
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Timeline & Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dublin-primary mb-6">
              Integration Journey Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track your integration progress with community-supported milestones. 
              See how others navigated their first years in Dublin.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-dublin-primary mb-8 text-center">
              Community Integration Milestones
            </h3>
            
            <div className="space-y-6">
              {integrationMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.month}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center space-x-6 p-4 rounded-lg transition-all ${
                    currentMilestone === index 
                      ? 'bg-blue-100 border-2 border-blue-500 scale-105' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                    currentMilestone === index 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {milestone.month}M
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{milestone.title}</h4>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${milestone.completion}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-green-600">
                        {milestone.completion}% complete
                      </span>
                    </div>
                  </div>

                  <div className={`text-2xl ${
                    currentMilestone === index ? 'animate-bounce' : ''
                  }`}>
                    {milestone.completion > 70 ? '✅' : 
                     milestone.completion > 50 ? '🔄' : '⏳'}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Success Stories Metrics */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <CountUp end={78} duration={2} suffix="%" />
              </div>
              <p className="text-gray-600 text-sm">Found employment within 3 months</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                <CountUp end={65} duration={2} suffix="%" />
              </div>
              <p className="text-gray-600 text-sm">Made local friendships in 6 months</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                <CountUp end={83} duration={2} suffix="%" />
              </div>
              <p className="text-gray-600 text-sm">Feel welcome in their neighborhood</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                <CountUp end={92} duration={2} suffix="%" />
              </div>
              <p className="text-gray-600 text-sm">Would recommend Dublin to others</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workplace Buddy System */}
      <section className="py-20 bg-dublin-primary text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Workplace Buddy Program</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Connect newcomers with experienced colleagues who can provide guidance, 
              support, and friendship in Dublin's workplace culture.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Sign-up Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Become a Workplace Buddy</h3>
              
              <form onSubmit={handleBuddySignup} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:ring-2 focus:ring-blue-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:ring-2 focus:ring-blue-300"
                      placeholder="Company name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Department
                  </label>
                  <input
                    type="text"
                    value={formData.department}
                    onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:ring-2 focus:ring-blue-300"
                    placeholder="e.g., Engineering, Marketing, Finance"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Years in Dublin
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-blue-300"
                    required
                  >
                    <option value="">Select experience</option>
                    <option value="1-2">1-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Languages You Speak
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {languages.slice(0, 8).map(lang => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          const newLangs = formData.languages.includes(lang.code)
                            ? formData.languages.filter(l => l !== lang.code)
                            : [...formData.languages, lang.code]
                          setFormData(prev => ({ ...prev, languages: newLangs }))
                        }}
                        className={`px-2 py-2 rounded-lg text-xs font-medium transition-colors ${
                          formData.languages.includes(lang.code)
                            ? 'bg-blue-600 text-white'
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        {lang.flag} {lang.code.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Join as Workplace Buddy
                </button>
              </form>
            </div>

            {/* Corporate Partners */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Corporate Partners</h3>
                <div className="space-y-4">
                  {workplaceBuddies.map((company, index) => (
                    <motion.div
                      key={company.id}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white/10 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{company.logo}</div>
                        <div>
                          <h4 className="font-semibold">{company.company}</h4>
                          <p className="text-sm text-white/80">Partner since {company.since}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-300">{company.buddies}</div>
                        <div className="text-xs text-white/70">active buddies</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Live Counter */}
              <div className="bg-white/5 rounded-xl p-6 text-center">
                <h4 className="font-semibold mb-4">Total Workplace Buddy Pledges</h4>
                <div className="text-4xl font-bold text-blue-300 mb-2">
                  <CountUp end={buddySignups} duration={1} />
                </div>
                <p className="text-sm text-white/80">
                  Target: 250 workplace buddies by Q4 2024
                </p>
                <div className="w-full bg-white/20 rounded-full h-2 mt-4">
                  <div 
                    className="bg-blue-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min((buddySignups / 250) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Events & Community Building */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dublin-primary mb-6">
              Cultural Celebrations & Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monthly watch parties, cultural celebrations, and community events 
              bringing Dublin's diverse communities together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {culturalEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    event.type === 'Cultural Celebration' ? 'bg-purple-100 text-purple-700' :
                    event.type === 'Skills Workshop' ? 'bg-green-100 text-green-700' :
                    event.type === 'Public Festival' ? 'bg-red-100 text-red-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {event.type}
                  </span>
                  <CalendarDaysIcon className="h-6 w-6 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-dublin-primary mb-2">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CalendarDaysIcon className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <UserGroupIcon className="h-4 w-4" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Event Details
                </button>
              </motion.div>
            ))}
          </div>

          {/* Community Impact Stats */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">Community Building Impact</h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={2750} duration={3} />
                </div>
                <p className="text-white/80">Total event attendees this year</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={24} duration={3} />
                </div>
                <p className="text-white/80">Cultural events hosted</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={89} duration={3} suffix="%" />
                </div>
                <p className="text-white/80">Participants report feeling more connected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Hub */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dublin-primary mb-6">
              Multilingual Resource Hub
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential guides and resources available in 8 languages, 
              covering everything from housing to healthcare to community connections.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-bold text-lg text-dublin-primary">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Resources:</span>
                    <span className="font-semibold text-blue-600">{category.resources}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Languages:</span>
                    <span className="font-semibold text-green-600">{category.languages}</span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Browse Resources
                </button>
              </motion.div>
            ))}
          </div>

          {/* Download Stats */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-dublin-primary text-center mb-6">
              Resource Download Statistics
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  <CountUp end={15420} duration={2} />
                </div>
                <p className="text-sm text-gray-600">Total downloads</p>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">
                  <CountUp end={8} duration={2} />
                </div>
                <p className="text-sm text-gray-600">Languages available</p>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  <CountUp end={95} duration={2} suffix="%" />
                </div>
                <p className="text-sm text-gray-600">Found resources helpful</p>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  <CountUp end={138} duration={2} />
                </div>
                <p className="text-sm text-gray-600">Resources available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AlwaysWelcomeCampaign 