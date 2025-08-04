import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ActionPlan: React.FC = () => {
  const [dayCounter, setDayCounter] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setDayCounter(prev => prev === 90 ? 1 : prev + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const mindsetPrinciples = [
    {
      title: "Champion the Always Dublin voice",
      description: "Consistent brand alignment across all channels",
      detail: "Dublin Place Brand guidelines implementation with 'Live, Work, Study, Invest, Visit' messaging framework"
    },
    {
      title: "Data in one hand, camera in the other",
      description: "Analytics-driven creative excellence",
      detail: "Real-time GA4 dashboard monitoring while capturing authentic Dublin moments for content creation"
    },
    {
      title: "Two-way engagement is non-negotiable",
      description: "Active community conversation leadership",
      detail: "< 2 hour response times with personalized, brand-aligned community engagement strategies"
    },
    {
      title: "Partner powered",
      description: "Strategic stakeholder ecosystem activation",
      detail: "15+ active partnerships with Trinity College, Chamber of Commerce, cultural institutions"
    },
    {
      title: "Flexible, fast, and fearless",
      description: "Adaptive content strategy with innovation mindset",
      detail: "Rapid response to trends while maintaining professional standards and brand consistency"
    }
  ]

  const weeklyPlan = [
    {
      week: "Week 1-2",
      title: "Foundation & Assessment",
      checklist: [
        "Meet with Social Media & Online Marketing team",
        "Review current content calendar and strategy",
        "Audit existing social media presence",
        "Assess current tools and workflows",
        "Understand Dublin Place Brand guidelines"
      ],
      deliverables: [
        "Team introduction presentation",
        "Current state analysis report",
        "Preliminary recommendations document",
        "Tool optimization suggestions"
      ]
    },
    {
      week: "Week 3-4",
      title: "Strategic Planning",
      checklist: [
        "Develop content strategy framework",
        "Create editorial calendar template",
        "Establish performance metrics",
        "Map stakeholder communication flows",
        "Design workflow optimization plan"
      ],
      deliverables: [
        "90-day content strategy",
        "Performance dashboard setup",
        "Stakeholder mapping document",
        "Process improvement roadmap"
      ]
    },
    {
      week: "Week 5-8",
      title: "Implementation & Optimization",
      checklist: [
        "Launch new content formats",
        "Implement performance tracking",
        "Begin stakeholder outreach",
        "Test new engagement strategies",
        "Monitor and adjust workflows"
      ],
      deliverables: [
        "Content series launches",
        "Weekly performance reports",
        "Partnership development updates",
        "Process refinement documentation"
      ]
    },
    {
      week: "Week 9-12",
      title: "Expansion & Innovation",
      checklist: [
        "Scale successful strategies",
        "Introduce innovative content formats",
        "Expand partner collaborations",
        "Implement advanced analytics",
        "Plan long-term initiatives"
      ],
      deliverables: [
        "Quarterly performance review",
        "Innovation pilot programs",
        "Partnership expansion plan",
        "Long-term strategy roadmap"
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="section-padding bg-dublin-primary text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              90-Day Action Plan
            </h1>
            <div className="w-24 h-1 bg-dublin-accent mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Strategic roadmap for immediate impact and long-term success in Dublin City Council's Social Media & Online Marketing role
            </p>
            
            {/* Day Counter */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
              <div className="text-2xl font-bold text-dublin-accent mb-2">Day {dayCounter} of 90</div>
              <div className="text-sm opacity-90">Continuous progress tracking</div>
            </div>
          </motion.div>

          {/* Mindset Principles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {mindsetPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl min-h-[280px] flex flex-col"
              >
                <h3 className="font-bold text-lg mb-3 text-dublin-accent">
                  {principle.title}
                </h3>
                <p className="text-sm opacity-90 mb-4 flex-grow">
                  {principle.description}
                </p>
                <div className="border-t border-white/20 pt-4 mt-auto">
                  <p className="text-xs text-dublin-accent">
                    {principle.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-Day Timeline */}
      <section className="section-padding">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dublin-primary mb-4">
              Detailed 90-Day Implementation Timeline
            </h2>
            <div className="w-20 h-1 bg-dublin-accent mx-auto mb-6"></div>
            <p className="text-dublin-gray-600 max-w-3xl mx-auto">
              Structured approach with clear milestones, deliverables, and measurable outcomes
            </p>
          </motion.div>

          <div className="space-y-8">
            {weeklyPlan.map((phase, index) => (
              <motion.div
                key={phase.week}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card min-h-[400px] flex flex-col"
              >
                <div className="bg-dublin-primary text-white card-padding flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                    <span className="bg-dublin-accent px-3 py-1 rounded-full text-sm font-medium">
                      {phase.week}
                    </span>
                  </div>
                </div>
                
                <div className="card-padding flex-grow">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-dublin-primary mb-4 text-lg">Key Actions:</h4>
                      <div className="space-y-3">
                        {phase.checklist.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-dublin-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-dublin-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dublin-primary mb-4 text-lg">Expected Deliverables:</h4>
                      <div className="space-y-3">
                        {phase.deliverables.map((deliverable, delivIndex) => (
                          <div key={delivIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-dublin-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-dublin-gray-700">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-padding bg-dublin-gray-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dublin-primary mb-4">
              Success Metrics & KPIs
            </h2>
            <div className="w-20 h-1 bg-dublin-accent mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center min-h-[200px] flex flex-col justify-center">
              <div className="card-padding">
                <div className="text-3xl font-bold text-dublin-accent mb-2">30 Days</div>
                <h3 className="text-xl font-semibold text-dublin-primary mb-3">Foundation Phase</h3>
                <ul className="text-dublin-gray-600 space-y-1 text-sm">
                  <li>Team integration complete</li>
                  <li>Current state analysis delivered</li>
                  <li>Initial optimizations implemented</li>
                </ul>
              </div>
            </div>

            <div className="card text-center min-h-[200px] flex flex-col justify-center">
              <div className="card-padding">
                <div className="text-3xl font-bold text-dublin-accent mb-2">60 Days</div>
                <h3 className="text-xl font-semibold text-dublin-primary mb-3">Growth Phase</h3>
                <ul className="text-dublin-gray-600 space-y-1 text-sm">
                  <li>New content strategies launched</li>
                  <li>Performance metrics improved</li>
                  <li>Stakeholder partnerships expanded</li>
                </ul>
              </div>
            </div>

            <div className="card text-center min-h-[200px] flex flex-col justify-center">
              <div className="card-padding">
                <div className="text-3xl font-bold text-dublin-accent mb-2">90 Days</div>
                <h3 className="text-xl font-semibold text-dublin-primary mb-3">Innovation Phase</h3>
                <ul className="text-dublin-gray-600 space-y-1 text-sm">
                  <li>Long-term strategy established</li>
                  <li>Innovation pilots running</li>
                  <li>Measurable impact achieved</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="section-padding bg-dublin-primary text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Deliver From Day One
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              This action plan represents my commitment to immediate impact and long-term excellence. 
              Built on proven municipal marketing experience and tailored specifically for Dublin's 
              unique opportunities, this roadmap ensures measurable progress every step of the way.
            </p>
            <div className="bg-dublin-accent/20 p-6 rounded-lg">
              <p className="text-lg font-semibold">
                "Excellence isn't a destination—it's a daily commitment to progress, innovation, and results."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ActionPlan