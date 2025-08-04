import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ActionPlan: React.FC = () => {
  const [dayCounter, setDayCounter] = useState(1)
  const [activeTab, setActiveTab] = useState('30-day')
  const [expandedWeek, setExpandedWeek] = useState<string | null>(null)
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())

  useEffect(() => {
    const interval = setInterval(() => {
      setDayCounter(prev => prev === 90 ? 1 : prev + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const toggleCheck = (item: string) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(item)) {
      newChecked.delete(item)
    } else {
      newChecked.add(item)
    }
    setCheckedItems(newChecked)
  }

  const mindsetPrinciples = [
    {
      title: "Champion the Always Dublin voice",
      description: "Consistent brand alignment across all channels",
      hoverContent: "Dublin Place Brand guidelines implementation with 'Live, Work, Study, Invest, Visit' messaging framework"
    },
    {
      title: "Data in one hand, camera in the other",
      description: "Analytics-driven creative excellence",
      hoverContent: "Real-time GA4 dashboard monitoring while capturing authentic Dublin moments for content creation"
    },
    {
      title: "Two-way engagement is non-negotiable",
      description: "Active community conversation leadership",
      hoverContent: "< 2 hour response times with personalized, brand-aligned community engagement strategies"
    },
    {
      title: "Partner powered",
      description: "Strategic stakeholder ecosystem activation",
      hoverContent: "15+ active partnerships with Trinity College, Chamber of Commerce, cultural institutions"
    },
    {
      title: "Flexible, fast, and fearless",
      description: "Agile response to opportunities and challenges",
      hoverContent: "Real-time crisis communication protocols with pre-approved response templates and escalation procedures"
    }
  ]

  const thirtyDayPlan = {
    week1: {
      title: "Week 1: Audit & Assessment",
      checklist: [
        "Review GA4, Meta Business Suite, Twitter Analytics baselines",
        "Audit current content performance across all channels",
        "Map Q4 2025 city events and policy milestones",
        "Assess current brand guideline compliance",
        "Meet with Dublin Place Brand team members"
      ],
      deliverables: [
        "Comprehensive analytics audit report",
        "Content calendar template for Q4 2025",
        "Channel performance baseline dashboard",
        "Brand alignment assessment with improvement recommendations"
      ]
    },
    week2: {
      title: "Week 2: Content Infrastructure",
      checklist: [
        "Create asset library with Live/Work/Study/Invest/Visit categories",
        "Organize video snippets by Dublin neighborhoods",
        "Develop template library (Canva/PSD) for quick content creation",
        "Launch 'Always Brighter Stories' pilot campaign"
      ],
      deliverables: [
        "Organized photo and video asset library",
        "Brand-compliant social media templates",
        "TikTok/Reels content format guidelines",
        "Community champion spotlight series launch"
      ]
    },
    week3: {
      title: "Week 3: Paid Strategy & Partnerships",
      checklist: [
        "Launch Meta Ads A/B test for autumn events (€2,500 budget)",
        "Schedule stakeholder coffee chats with key departments",
        "Establish Media Relations collaboration protocols",
        "Initiate Smart Dublin cross-promotion opportunities"
      ],
      deliverables: [
        "Active paid campaign with 4.2% CTR target",
        "Audience segmentation for locals vs. international visitors",
        "Partnership agreements with 3 key departments",
        "Economic Development integration plan"
      ]
    },
    week4: {
      title: "Week 4: Compliance & Optimization",
      checklist: [
        "Implement GDPR compliance for all social channels",
        "Establish Official Languages Act bilingual workflow",
        "Deploy accessibility standards across content",
        "Optimize content approval process efficiency"
      ],
      deliverables: [
        "GDPR-compliant data collection protocols",
        "Bilingual content creation guidelines",
        "Accessibility checklist for all content types",
        "Streamlined approval workflow reducing turnaround by 50%"
      ]
    }
  }

  const TabButton: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = 
    ({ label, isActive, onClick }) => (
      <button
        onClick={onClick}
        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
          isActive 
            ? 'bg-dublin-primary text-white shadow-lg' 
            : 'bg-white text-dublin-primary border border-dublin-primary hover:bg-dublin-primary hover:text-white'
        }`}
      >
        {label}
      </button>
    )

  const ChecklistItem: React.FC<{ item: string; id: string }> = ({ item, id }) => (
    <div 
      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-dublin-gray-50 cursor-pointer transition-colors"
      onClick={() => toggleCheck(id)}
    >
      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
        checkedItems.has(id) 
          ? 'bg-dublin-accent border-dublin-accent text-white' 
          : 'border-dublin-gray-300 hover:border-dublin-accent'
      }`}>
        {checkedItems.has(id) && <span className="text-sm">✓</span>}
      </div>
      <span className={`flex-1 ${checkedItems.has(id) ? 'line-through text-dublin-gray-500' : 'text-dublin-gray-700'}`}>
        {item}
      </span>
    </div>
  )

  const WeekSection: React.FC<{ weekKey: string; week: any }> = ({ weekKey, week }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card mb-6 prevent-layout-shift"
    >
      <div 
        className="card-padding cursor-pointer"
        onClick={() => setExpandedWeek(expandedWeek === weekKey ? null : weekKey)}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-dublin-primary">{week.title}</h3>
          <div className={`transform transition-transform ${expandedWeek === weekKey ? 'rotate-180' : ''}`}>
            <svg className="w-6 h-6 text-dublin-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        {/* Reserved space for expandable content */}
        <div className="overflow-hidden">
          <motion.div
            initial={false}
            animate={{
              height: expandedWeek === weekKey ? 'auto' : 0,
              opacity: expandedWeek === weekKey ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-dublin-primary mb-3">Checklist:</h4>
                <div className="space-y-2">
                  {week.checklist.map((item: string, index: number) => (
                    <ChecklistItem key={`${weekKey}-${index}`} item={item} id={`${weekKey}-${index}`} />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-dublin-primary mb-3">Expected Deliverables:</h4>
                <div className="space-y-2">
                  {week.deliverables.map((deliverable: string, index: number) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-dublin-accent rounded-full mt-2"></div>
                      <span className="text-dublin-gray-700">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="pt-20">
      {/* Hero Section - Day One Ready */}
      <section className="section-padding bg-gradient-to-br from-dublin-primary to-dublin-primary-dark text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-6xl md:text-8xl font-bold text-dublin-accent mb-4">
              DAY {dayCounter}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              READY TO TRANSFORM
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 opacity-90">
              Dublin's Digital Presence
            </h2>
            <div className="w-24 h-1 bg-dublin-accent mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              A comprehensive 90-day strategic implementation roadmap for Dublin City Council's 
              Social Media & Online Marketing Officer position
            </p>
          </motion.div>

          {/* Mindset Principles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 grid-stable-heights">
            {mindsetPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-action-plan prevent-layout-shift group bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-2 text-dublin-accent">
                    {principle.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    {principle.description}
                  </p>
                </div>
                <div className="mt-auto overflow-hidden">
                  <motion.div
                    initial={false}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                  >
                    <div className="border-t border-white/20 pt-4">
                      <p className="text-xs text-dublin-accent">
                        {principle.hoverContent}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="section-padding">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dublin-primary mb-6">
              90-Day Implementation Roadmap
            </h2>
            <div className="w-24 h-1 bg-dublin-accent mx-auto mb-8"></div>
            <p className="text-xl text-dublin-gray-600 max-w-3xl mx-auto">
              Strategic milestones with measurable outcomes and immediate ROI
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <TabButton 
              label="30-Day Sprint" 
              isActive={activeTab === '30-day'} 
              onClick={() => setActiveTab('30-day')} 
            />
            <TabButton 
              label="60-Day Expansion" 
              isActive={activeTab === '60-day'} 
              onClick={() => setActiveTab('60-day')} 
            />
            <TabButton 
              label="90-Day Mastery" 
              isActive={activeTab === '90-day'} 
              onClick={() => setActiveTab('90-day')} 
            />
          </div>

          {/* 30-Day Content */}
          {activeTab === '30-day' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-dublin-accent/10 p-8 rounded-xl mb-8">
                <h3 className="text-3xl font-bold text-dublin-primary mb-4">
                  Foundation & Quick Wins
                </h3>
                <p className="text-lg text-dublin-gray-600 mb-6">
                  Establish systems, processes, and immediate impact campaigns that demonstrate value from day one.
                </p>
                
                {/* Progress Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dublin-accent">+15%</div>
                    <div className="text-sm text-dublin-gray-600">Social Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dublin-accent">+25%</div>
                    <div className="text-sm text-dublin-gray-600">Event Page Traffic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dublin-accent">&lt;2hrs</div>
                    <div className="text-sm text-dublin-gray-600">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dublin-accent">3</div>
                    <div className="text-sm text-dublin-gray-600">New Partnerships</div>
                  </div>
                </div>
              </div>

              {/* Weekly Breakdown */}
              <div>
                <WeekSection weekKey="week1" week={thirtyDayPlan.week1} />
                <WeekSection weekKey="week2" week={thirtyDayPlan.week2} />
                <WeekSection weekKey="week3" week={thirtyDayPlan.week3} />
                <WeekSection weekKey="week4" week={thirtyDayPlan.week4} />
              </div>
            </motion.div>
          )}

          {/* 60-Day Content */}
          {activeTab === '60-day' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-dublin-primary/10 p-8 rounded-xl">
                <h3 className="text-3xl font-bold text-dublin-primary mb-4">
                  Scale & Innovate
                </h3>
                <p className="text-lg text-dublin-gray-600 mb-6">
                  Expand successful initiatives and introduce innovative campaigns that showcase Dublin's vibrancy.
                </p>
                
                {/* 60-Day Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dublin-accent">+40%</div>
                    <div className="text-sm text-dublin-gray-600">Overall Reach</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dublin-accent">8.5/10</div>
                    <div className="text-sm text-dublin-gray-600">Engagement Quality</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dublin-accent">€4.80</div>
                    <div className="text-sm text-dublin-gray-600">ROI per €1</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dublin-accent">12</div>
                    <div className="text-sm text-dublin-gray-600">Active Partners</div>
                  </div>
                </div>
              </div>

              {/* Major Campaigns */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card card-padding">
                  <h4 className="text-xl font-bold text-dublin-primary mb-4">
                    "Dublin After Dark" Campaign
                  </h4>
                  <ul className="space-y-2 text-dublin-gray-600">
                    <li>• Night economy partnership activation</li>
                    <li>• TikTok content series with venues</li>
                    <li>• Expected reach: 150,000+ residents</li>
                    <li>• Revenue attribution tracking</li>
                  </ul>
                </div>
                
                <div className="card card-padding">
                  <h4 className="text-xl font-bold text-dublin-primary mb-4">
                    "International Student Welcome"
                  </h4>
                  <ul className="space-y-2 text-dublin-gray-600">
                    <li>• Multi-language content strategy</li>
                    <li>• University partnership integration</li>
                    <li>• Dublin.ie welcome hub creation</li>
                    <li>• Target: 25,000+ international students</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* 90-Day Content */}
          {activeTab === '90-day' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-dublin-primary/10 to-dublin-accent/10 p-8 rounded-xl">
                <h3 className="text-3xl font-bold text-dublin-primary mb-4">
                  Leadership & Innovation
                </h3>
                <p className="text-lg text-dublin-gray-600 mb-6">
                  Establish Dublin as a digital leader among European capitals with innovative campaigns and measurable impact.
                </p>
                
                {/* 90-Day Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dublin-accent">+60%</div>
                    <div className="text-sm text-dublin-gray-600">Following Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dublin-accent">+85%</div>
                    <div className="text-sm text-dublin-gray-600">Website Traffic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dublin-accent">92%</div>
                    <div className="text-sm text-dublin-gray-600">Positive Sentiment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dublin-accent">25+</div>
                    <div className="text-sm text-dublin-gray-600">Press Mentions</div>
                  </div>
                </div>
              </div>

              {/* Major Campaign Launch */}
              <div className="card card-padding">
                <h4 className="text-2xl font-bold text-dublin-primary mb-4">
                  "Always Greener Dublin 2030" Campaign Launch
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold text-dublin-primary mb-2">Community Engagement</h5>
                    <ul className="text-dublin-gray-600 space-y-1">
                      <li>• Gamification elements</li>
                      <li>• 10,000+ participant target</li>
                      <li>• User-generated content</li>
                      <li>• Environmental partnerships</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-dublin-primary mb-2">Innovation Features</h5>
                    <ul className="text-dublin-gray-600 space-y-1">
                      <li>• AR filters for landmarks</li>
                      <li>• "Dublin Voices" podcast</li>
                      <li>• Interactive map integration</li>
                      <li>• AI content personalization</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-dublin-primary mb-2">Partnership Network</h5>
                    <ul className="text-dublin-gray-600 space-y-1">
                      <li>• 15+ environmental orgs</li>
                      <li>• Dublin universities</li>
                      <li>• Local business network</li>
                      <li>• International city partners</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Success Metrics Dashboard */}
      <section className="section-padding bg-dublin-gray-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dublin-primary mb-6">
              Measurable Impact & ROI
            </h2>
            <p className="text-lg text-dublin-gray-600 max-w-2xl mx-auto">
              Every initiative tracked with clear KPIs and revenue attribution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center card-padding">
              <div className="text-4xl font-bold text-dublin-accent mb-2">€75,000+</div>
              <div className="text-dublin-primary font-semibold mb-2">Revenue Attribution</div>
              <div className="text-dublin-gray-600">Direct campaign impact on Dublin tourism and business</div>
            </div>
            <div className="card text-center card-padding">
              <div className="text-4xl font-bold text-dublin-accent mb-2">+60%</div>
              <div className="text-dublin-primary font-semibold mb-2">Digital Presence Growth</div>
              <div className="text-dublin-gray-600">Across all social media channels and web traffic</div>
            </div>
            <div className="card text-center card-padding">
              <div className="text-4xl font-bold text-dublin-accent mb-2">40%</div>
              <div className="text-dublin-primary font-semibold mb-2">Efficiency Improvement</div>
              <div className="text-dublin-gray-600">Team productivity and content creation workflow</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-dublin-primary text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Dublin's Digital Future?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              This comprehensive action plan can be implemented immediately, with measurable results starting from day one.
            </p>
            <div className="text-dublin-accent font-bold text-lg">
              Strategic. Measurable. Dublin-Ready.
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ActionPlan