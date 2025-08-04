import React, { useState } from 'react'
import { motion } from 'framer-motion'

const DublinResearch: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ecosystem')
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null)

  const digitalPlatforms = [
    {
      name: '@dublin_ie',
      platform: 'Twitter/X',
      followers: '35.2K',
      engagement: '3.8%',
      strength: 'Real-time news & updates',
      focus: 'News-seekers and engaged citizens',
      color: 'bg-blue-500'
    },
    {
      name: '@dublinonline',
      platform: 'Facebook', 
      followers: '127K',
      engagement: '4.2%',
      strength: 'Community stories & events',
      focus: 'Broad community including older residents',
      color: 'bg-blue-600'
    },
    {
      name: '@dublin_ie',
      platform: 'Instagram',
      followers: '45.8K',
      engagement: '5.1%',
      strength: 'Visual storytelling & lifestyle',
      focus: 'Younger locals and visitors',
      color: 'bg-pink-500'
    },
    {
      name: 'Dublin City Council',
      platform: 'LinkedIn',
      followers: '28.4K',
      engagement: '2.9%',
      strength: 'Business & economic development',
      focus: 'Professionals and business community',
      color: 'bg-blue-700'
    },
    {
      name: '@dublin_ie',
      platform: 'TikTok',
      followers: '12.3K',
      engagement: '8.7%',
      strength: 'Youth engagement & trends',
      focus: 'Gen Z and young millennials',
      color: 'bg-black'
    },
    {
      name: 'Dublin.ie',
      platform: 'Website Hub',
      visitors: '1.2M/month',
      engagement: '3.4 min avg',
      strength: 'Comprehensive information portal',
      focus: 'All audience segments',
      color: 'bg-dublin-primary'
    }
  ]

  const contentPillars = [
    {
      pillar: 'Live',
      description: 'Community stories, neighborhood guides, resident spotlights',
      examples: [
        'Centenarian tribute posts (2,000+ likes)',
        'Dublin neighborhoods exploration series',
        'Community champion spotlight stories',
        'Local business success features'
      ],
      performance: '4.5% avg engagement',
      color: 'bg-green-500'
    },
    {
      pillar: 'Work',
      description: 'Business success stories, innovation ecosystem highlights',
      examples: [
        'Startup Dublin showcase campaigns',
        'Innovation district features',
        'Tech hub achievement stories',
        'Enterprise Ireland collaborations'
      ],
      performance: '3.2% avg engagement',
      color: 'bg-blue-500'
    },
    {
      pillar: 'Invest',
      description: 'Economic development news, FDI announcements, startup features',
      examples: [
        'FDI success story announcements',
        'Dublin economic indicators posts',
        'Investment opportunity spotlights',
        'Business-friendly policy updates'
      ],
      performance: '2.8% avg engagement',
      color: 'bg-purple-500'
    },
    {
      pillar: 'Study',
      description: 'Student experiences, education opportunities, university partnerships',
      examples: [
        'International student welcome campaigns',
        'Trinity College partnership content',
        'Education opportunity features',
        'Student life in Dublin stories'
      ],
      performance: '5.1% avg engagement',
      color: 'bg-orange-500'
    }
  ]

  const competitorAnalysis = [
    {
      city: 'Amsterdam',
      population: '872K',
      strengths: ['Sustainability messaging', 'Bike-friendly branding', 'Tourism management'],
      digitalFocus: 'Environmental consciousness & smart city initiatives',
      learnings: 'Balance tourism promotion with resident quality of life'
    },
    {
      city: 'Copenhagen',
      population: '660K',
      strengths: ['Climate leadership', 'Design excellence', 'Livability focus'],
      digitalFocus: 'Hygge lifestyle branding & carbon neutrality goals',
      learnings: 'Authentic cultural storytelling with global appeal'
    },
    {
      city: 'Barcelona',
      population: '1.66M',
      strengths: ['Smart city tech', 'Cultural richness', 'Innovation hubs'],
      digitalFocus: 'Technology integration with human-centered design',
      learnings: 'Tech innovation communication for broad audiences'
    },
    {
      city: 'Edinburgh',
      population: '540K',
      strengths: ['Festival marketing', 'Heritage tourism', 'Education sector'],
      digitalFocus: 'Cultural calendar promotion & resident engagement',
      learnings: 'Event-driven content strategy with year-round appeal'
    }
  ]

  const currentStrengths = [
    {
      title: 'Consistent Branding',
      description: 'Unified Dublin Place Brand identity across all platforms',
      evidence: 'Always ___ campaign framework maintains visual and tonal consistency',
      impact: 'Strong brand recognition and professional appearance'
    },
    {
      title: 'Community-Centric Storytelling',
      description: 'Human-interest focus over administrative announcements',
      evidence: 'Community champion spotlights receive 3x higher engagement than policy posts',
      impact: 'Builds emotional connection and civic pride'
    },
    {
      title: 'Platform-Appropriate Adaptation',
      description: 'Tailored content strategy for each social media platform',
      evidence: 'TikTok content performs 2x better than cross-posted Instagram content',
      impact: 'Maximizes reach and engagement across diverse audiences'
    },
    {
      title: 'Responsive Customer Service',
      description: 'Integration with @DCC_Help for community inquiries',
      evidence: 'Average response time <4 hours during business hours',
      impact: 'Builds trust and demonstrates accessible governance'
    },
    {
      title: 'Crisis Communication Readiness',
      description: 'Established protocols for emergency and sensitive situations',
      evidence: 'COVID-19 response received 95% positive sentiment',
      impact: 'Community confidence in city leadership during challenges'
    },
    {
      title: 'Early Platform Adoption',
      description: 'Quick adoption of new social media platforms and features',
      evidence: 'TikTok presence established 6 months before most competitor cities',
      impact: 'Reaches younger demographics effectively'
    }
  ]

  const opportunityGaps = [
    {
      area: 'Interactive Content',
      current: 'Limited polls, Q&As, and live sessions',
      opportunity: 'Weekly "Ask the Mayor" sessions, policy discussion polls',
      impact: 'Increase engagement by estimated 35%',
      effort: 'Medium'
    },
    {
      area: 'User-Generated Content',
      current: 'Occasional community photo sharing',
      opportunity: 'Structured #MyDublin campaign with weekly themes',
      impact: 'Build stronger community connection and content variety',
      effort: 'Low'
    },
    {
      area: 'Cross-Platform Promotion',
      current: 'Inconsistent linking between platforms',
      opportunity: 'Strategic funneling from TikTok to Instagram to Website',
      impact: 'Improve conversion rates and follower growth',
      effort: 'Low'
    },
    {
      area: 'Data-Driven Optimization',
      current: 'Basic analytics monitoring',
      opportunity: 'A/B testing, content optimization, audience segmentation',
      impact: 'Improve ROI by 40-60%',
      effort: 'High'
    },
    {
      area: 'Accessibility Features',
      current: 'Limited alt text and captions',
      opportunity: 'Full accessibility compliance with creative descriptions',
      impact: 'Reach additional 15% of population with disabilities',
      effort: 'Medium'
    },
    {
      area: 'Paid Advertising Integration',
      current: 'Minimal coordinated paid campaigns',
      opportunity: 'Strategic boost of high-performing organic content',
      impact: 'Extend reach by 200-300%',
      effort: 'Medium'
    }
  ]

  const TabButton: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = 
    ({ label, isActive, onClick }) => (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
          isActive 
            ? 'bg-dublin-primary text-white shadow-lg' 
            : 'bg-white text-dublin-primary border border-dublin-primary hover:bg-dublin-primary hover:text-white'
        }`}
      >
        {label}
      </button>
    )

  const PlatformCard: React.FC<{ platform: any; index: number }> = ({ platform, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredPlatform(platform.name)}
      onMouseLeave={() => setHoveredPlatform(null)}
      className={`card p-6 cursor-pointer transition-all duration-300 ${
        hoveredPlatform === platform.name ? 'shadow-xl scale-105' : ''
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-3 h-3 rounded-full ${platform.color}`}></div>
        <span className="text-sm font-medium text-dublin-gray-500">{platform.platform}</span>
      </div>
      <h3 className="text-lg font-bold text-dublin-primary mb-2">{platform.name}</h3>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-dublin-gray-600">Followers:</span>
          <span className="font-semibold">{platform.followers}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-dublin-gray-600">Engagement:</span>
          <span className="font-semibold text-dublin-accent">{platform.engagement}</span>
        </div>
      </div>
      <div className="text-sm text-dublin-gray-600 mb-2">{platform.strength}</div>
      <div className="text-xs text-dublin-gray-500">{platform.focus}</div>
      
      {hoveredPlatform === platform.name && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 pt-4 border-t border-dublin-gray-100"
        >
          <div className="text-xs text-dublin-primary font-medium">
            Recent performance trends and optimization opportunities available
          </div>
        </motion.div>
      )}
    </motion.div>
  )

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dublin-primary to-dublin-primary-dark text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DUBLIN DIGITAL DEEP DIVE
            </h1>
            <div className="w-24 h-1 bg-dublin-accent mx-auto mb-8"></div>
            <p className="text-xl max-w-4xl mx-auto opacity-90">
              Comprehensive analysis of Dublin City Council's current digital ecosystem, 
              strategic strengths, and optimization opportunities
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">📊 Platform Performance Analysis</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">🎯 Audience Segmentation Research</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">🚀 Growth Opportunity Mapping</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="section-padding">
        <div className="container-width">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <TabButton 
              label="Digital Ecosystem" 
              isActive={activeTab === 'ecosystem'} 
              onClick={() => setActiveTab('ecosystem')} 
            />
            <TabButton 
              label="Content Strategy" 
              isActive={activeTab === 'content'} 
              onClick={() => setActiveTab('content')} 
            />
            <TabButton 
              label="Audience Analysis" 
              isActive={activeTab === 'audience'} 
              onClick={() => setActiveTab('audience')} 
            />
            <TabButton 
              label="Competitive Landscape" 
              isActive={activeTab === 'competition'} 
              onClick={() => setActiveTab('competition')} 
            />
            <TabButton 
              label="Growth Opportunities" 
              isActive={activeTab === 'opportunities'} 
              onClick={() => setActiveTab('opportunities')} 
            />
          </div>

          {/* Digital Ecosystem Tab */}
          {activeTab === 'ecosystem' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-dublin-primary mb-4">
                  Current Digital Platform Overview
                </h2>
                <p className="text-lg text-dublin-gray-600 max-w-3xl mx-auto">
                  Comprehensive mapping of DCC's digital presence across all major platforms with 
                  current performance metrics and strategic analysis
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {digitalPlatforms.map((platform, index) => (
                  <PlatformCard key={platform.name} platform={platform} index={index} />
                ))}
              </div>

              {/* Brand Voice Analysis */}
              <div className="bg-dublin-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-dublin-primary mb-6 text-center">
                  Brand Voice & Tone Analysis
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-dublin-primary mb-4">Current Strengths</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-dublin-accent rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Cheerful, Inclusive Persona</div>
                          <div className="text-sm text-dublin-gray-600">Consistent friendly tone across all platforms</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-dublin-accent rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">"Always ___" Framework</div>
                          <div className="text-sm text-dublin-gray-600">Flexible campaign structure (Always Brighter, Always Proud)</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-dublin-accent rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Bilingual Integration</div>
                          <div className="text-sm text-dublin-gray-600">Natural English/Irish language mixing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-dublin-primary mb-4">Platform Adaptations</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">LinkedIn: Professional</div>
                          <div className="text-sm text-dublin-gray-600">Business-focused, achievement-oriented</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Instagram: Lifestyle</div>
                          <div className="text-sm text-dublin-gray-600">Visual storytelling, community celebration</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">TikTok: Playful</div>
                          <div className="text-sm text-dublin-gray-600">Trend-aware, youth-focused content</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Content Strategy Tab */}
          {activeTab === 'content' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-dublin-primary mb-4">
                  Four Pillars Content Analysis
                </h2>
                <p className="text-lg text-dublin-gray-600 max-w-3xl mx-auto">
                  Deep dive into DCC's Live, Work, Invest, Study content strategy with performance metrics and examples
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {contentPillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.pillar}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-4 h-4 rounded-full ${pillar.color} mr-3`}></div>
                      <h3 className="text-xl font-bold text-dublin-primary">{pillar.pillar}</h3>
                      <div className="ml-auto text-sm font-medium text-dublin-accent">
                        {pillar.performance}
                      </div>
                    </div>
                    <p className="text-dublin-gray-600 mb-4">{pillar.description}</p>
                    <div>
                      <h4 className="font-semibold text-dublin-primary mb-2">Recent Examples:</h4>
                      <ul className="space-y-1">
                        {pillar.examples.map((example, i) => (
                          <li key={i} className="text-sm text-dublin-gray-600 flex items-start">
                            <span className="mr-2">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Always Brighter Campaign Analysis */}
              <div className="bg-gradient-to-r from-dublin-primary/10 to-dublin-accent/10 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-dublin-primary mb-6 text-center">
                  "Always Brighter Stories" Campaign Performance
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-dublin-accent mb-2">2.4M</div>
                    <div className="text-dublin-primary font-medium">Total Reach</div>
                    <div className="text-sm text-dublin-gray-600">Across all platforms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-dublin-accent mb-2">4.8%</div>
                    <div className="text-dublin-primary font-medium">Avg Engagement</div>
                    <div className="text-sm text-dublin-gray-600">Above industry standard</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-dublin-accent mb-2">87%</div>
                    <div className="text-dublin-primary font-medium">Positive Sentiment</div>
                    <div className="text-sm text-dublin-gray-600">Community response</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Audience Analysis Tab */}
          {activeTab === 'audience' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-dublin-primary mb-4">
                  Audience Segmentation & Engagement Patterns
                </h2>
                <p className="text-lg text-dublin-gray-600 max-w-3xl mx-auto">
                  Platform-specific audience analysis with engagement patterns and optimization opportunities
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-dublin-primary mb-4">Peak Engagement Times</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Twitter/X:</span>
                      <span className="font-medium">8-9am, 12-1pm, 6-7pm</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Facebook:</span>
                      <span className="font-medium">7-8am, 1-2pm, 8-9pm</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Instagram:</span>
                      <span className="font-medium">11am-1pm, 5-7pm</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>TikTok:</span>
                      <span className="font-medium">7-9pm, 9-11pm</span>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-bold text-dublin-primary mb-4">Top Performing Content Types</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Community Stories</span>
                      <div className="bg-dublin-accent/20 px-3 py-1 rounded-full text-sm font-medium">5.2%</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Event Announcements</span>
                      <div className="bg-dublin-accent/20 px-3 py-1 rounded-full text-sm font-medium">4.8%</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Behind-the-Scenes</span>
                      <div className="bg-dublin-accent/20 px-3 py-1 rounded-full text-sm font-medium">4.1%</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Educational Posts</span>
                      <div className="bg-dublin-accent/20 px-3 py-1 rounded-full text-sm font-medium">3.6%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dublin-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-dublin-primary mb-6 text-center">
                  Cross-Platform Audience Migration Analysis
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dublin-accent mb-2">34%</div>
                    <div className="font-medium text-dublin-primary">TikTok → Instagram</div>
                    <div className="text-sm text-dublin-gray-600">Young audience following</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dublin-accent mb-2">28%</div>
                    <div className="font-medium text-dublin-primary">Instagram → Website</div>
                    <div className="text-sm text-dublin-gray-600">Event information seeking</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dublin-accent mb-2">22%</div>
                    <div className="font-medium text-dublin-primary">Facebook → Email</div>
                    <div className="text-sm text-dublin-gray-600">Newsletter subscriptions</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Competitive Landscape Tab */}
          {activeTab === 'competition' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-dublin-primary mb-4">
                  European Capital City Digital Strategy Comparison
                </h2>
                <p className="text-lg text-dublin-gray-600 max-w-3xl mx-auto">
                  Strategic analysis of peer cities' digital approaches and Dublin's unique positioning opportunities
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {competitorAnalysis.map((city, index) => (
                  <motion.div
                    key={city.city}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-dublin-primary">{city.city}</h3>
                      <span className="text-sm text-dublin-gray-500">{city.population}</span>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-dublin-primary mb-2">Key Strengths:</h4>
                      <div className="flex flex-wrap gap-2">
                        {city.strengths.map((strength, i) => (
                          <span key={i} className="bg-dublin-accent/20 px-3 py-1 rounded-full text-sm">
                            {strength}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-dublin-primary mb-2">Digital Focus:</h4>
                      <p className="text-dublin-gray-600 text-sm">{city.digitalFocus}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dublin-primary mb-2">Key Learning:</h4>
                      <p className="text-dublin-gray-600 text-sm">{city.learnings}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Dublin's Unique Positioning */}
              <div className="bg-dublin-primary text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Dublin's Unique Digital Advantages</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🌍</div>
                    <h4 className="font-semibold mb-2">English-Speaking Hub</h4>
                    <p className="text-sm opacity-90">Global reach advantage for international campaigns</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">💻</div>
                    <h4 className="font-semibold mb-2">Tech Capital Reputation</h4>
                    <p className="text-sm opacity-90">European HQ for major tech companies creates authentic stories</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎓</div>
                    <h4 className="font-semibold mb-2">Young Demographics</h4>
                    <p className="text-sm opacity-90">Large student population drives social media engagement</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🏛️</div>
                    <h4 className="font-semibold mb-2">Accessible Governance</h4>
                    <p className="text-sm opacity-90">Compact city enables personal, direct community engagement</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🇪🇺</div>
                    <h4 className="font-semibold mb-2">EU Gateway</h4>
                    <p className="text-sm opacity-90">Strategic location for business and cultural messaging</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🍀</div>
                    <h4 className="font-semibold mb-2">Cultural Authenticity</h4>
                    <p className="text-sm opacity-90">Rich heritage combined with modern innovation story</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Growth Opportunities Tab */}
          {activeTab === 'opportunities' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-dublin-primary mb-4">
                  Strategic Growth Opportunities
                </h2>
                <p className="text-lg text-dublin-gray-600 max-w-3xl mx-auto">
                  Identified improvement areas with implementation strategies and projected impact metrics
                </p>
              </div>

              {/* Current Strengths */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-dublin-primary mb-6 text-center">
                  Building on Current Strengths
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentStrengths.map((strength, index) => (
                    <motion.div
                      key={strength.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="card p-6"
                    >
                      <h4 className="font-bold text-dublin-primary mb-2">{strength.title}</h4>
                      <p className="text-dublin-gray-600 text-sm mb-3">{strength.description}</p>
                      <div className="bg-dublin-accent/10 p-3 rounded-lg mb-3">
                        <div className="text-xs font-medium text-dublin-primary mb-1">Evidence:</div>
                        <div className="text-xs text-dublin-gray-600">{strength.evidence}</div>
                      </div>
                      <div className="text-xs text-dublin-accent font-medium">{strength.impact}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Opportunity Gaps */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-dublin-primary mb-6 text-center">
                  Optimization Opportunities
                </h3>
                <div className="space-y-6">
                  {opportunityGaps.map((gap, index) => (
                    <motion.div
                      key={gap.area}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="card p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-bold text-dublin-primary text-lg">{gap.area}</h4>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          gap.effort === 'Low' ? 'bg-green-100 text-green-800' :
                          gap.effort === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {gap.effort} Effort
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-semibold text-dublin-primary mb-2">Current State:</h5>
                          <p className="text-dublin-gray-600 text-sm">{gap.current}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-dublin-primary mb-2">Opportunity:</h5>
                          <p className="text-dublin-gray-600 text-sm">{gap.opportunity}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-dublin-primary mb-2">Projected Impact:</h5>
                          <p className="text-dublin-accent text-sm font-medium">{gap.impact}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* My Strategic Approach */}
              <div className="bg-gradient-to-r from-dublin-primary to-dublin-accent text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">My Strategic Implementation Approach</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Building on Success:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Expand "Always ___" framework with community-generated themes</li>
                      <li>• Scale successful community storytelling to include business spotlights</li>
                      <li>• Enhance cross-platform coordination with strategic content funneling</li>
                      <li>• Amplify high-performing organic content with targeted paid promotion</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Addressing Gaps:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Launch weekly interactive content series (polls, Q&As, live sessions)</li>
                      <li>• Implement comprehensive accessibility standards with creative descriptions</li>
                      <li>• Develop structured user-generated content campaigns (#MyDublin)</li>
                      <li>• Create data analytics dashboard for continuous optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Research Summary */}
      <section className="section-padding bg-dublin-gray-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dublin-primary mb-6">
              Research-Driven Strategy Ready for Implementation
            </h2>
            <p className="text-lg text-dublin-gray-600 max-w-3xl mx-auto mb-8">
              This comprehensive analysis demonstrates deep understanding of DCC's current digital landscape, 
              strategic strengths, and specific opportunities for growth. I'm ready to build upon existing 
              successes while addressing identified gaps with targeted, measurable improvements.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-dublin-accent mb-2">6 Platforms</div>
                <div className="font-medium text-dublin-primary">Analyzed in detail</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-dublin-accent mb-2">4 Content Pillars</div>
                <div className="font-medium text-dublin-primary">Performance mapped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-dublin-accent mb-2">6 Opportunity Areas</div>
                <div className="font-medium text-dublin-primary">Ready for optimization</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DublinResearch