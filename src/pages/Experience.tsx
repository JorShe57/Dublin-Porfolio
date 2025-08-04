import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const Experience: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null);
  const [hoveredRequirement, setHoveredRequirement] = useState<string | null>(null);
  
  const [sectionRef1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [sectionRef2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [sectionRef3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [sectionRef4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const dublinRequirements = [
    {
      id: 'social-media',
      requirement: 'Social media management across platforms',
      match: 98,
      experience: 'Grew Westlake\'s combined social following from 4,200 to 11,800 (181% growth)',
      color: 'bg-green-500'
    },
    {
      id: 'content-creation',
      requirement: 'Content creation and graphic design',
      match: 96,
      experience: 'Produced 850+ graphics, 125 videos, 300+ photos annually',
      color: 'bg-green-500'
    },
    {
      id: 'ppc-advertising',
      requirement: 'PPC advertising and budget management',
      match: 94,
      experience: 'Managed $18,000 annual digital ad budget with 4.2% avg CTR',
      color: 'bg-green-500'
    },
    {
      id: 'budget-oversight',
      requirement: 'Budget oversight and financial responsibility',
      match: 97,
      experience: 'Managed $52,000 total marketing/communications budget',
      color: 'bg-green-500'
    },
    {
      id: 'stakeholder-coordination',
      requirement: 'Stakeholder coordination and partnerships',
      match: 95,
      experience: 'Worked with 12 city departments + 45 community partners',
      color: 'bg-green-500'
    },
    {
      id: 'analytics-reporting',
      requirement: 'Analytics reporting and performance tracking',
      match: 99,
      experience: 'Monthly reports showing 340% website traffic growth',
      color: 'bg-green-500'
    },
    {
      id: 'campaign-development',
      requirement: 'Campaign development and execution',
      match: 93,
      experience: 'Led 24 major campaigns with avg 67% engagement increase',
      color: 'bg-green-500'
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Discover Hidden Westlake',
      challenge: 'Boost local tourism and business visibility in competitive Cleveland metro',
      strategy: 'User-generated content highlighting unique local spots',
      budget: '$3,200',
      execution: 'Instagram contest (#HiddenWestlake), partnerships with 18 local businesses',
      results: [
        '23,000 people reached (64% of city population)',
        '1,847 contest entries from 650 participants',
        '31% increase in visitor center inquiries',
        '19% boost in local business social media mentions'
      ],
      dublinApplication: 'Scale to "Dublin Locals Know Best" for 1.4M metro population',
      category: 'Tourism & Business'
    },
    {
      id: 2,
      title: 'Westlake Business Spotlight',
      challenge: 'Support 480+ local businesses during post-COVID recovery',
      strategy: 'Weekly business features across all channels',
      budget: '$2,800',
      execution: 'Professional photos, owner interviews, success story videos',
      results: [
        'Featured 78 businesses over 18 months',
        '43% increase in business directory page views (2,100 → 3,000 monthly)',
        '12 new business openings citing campaign visibility',
        '89% of featured businesses reported increased foot traffic'
      ],
      dublinApplication: 'Perfect for Dublin\'s 35,000+ businesses and economic goals',
      category: 'Economic Development'
    },
    {
      id: 3,
      title: 'Community Voices Initiative',
      challenge: 'Increase civic engagement (only 18% attended public meetings)',
      strategy: 'Resident spotlights and accessible government communication',
      budget: '$1,950',
      execution: 'Monthly resident features, city council preview videos, Q&A sessions',
      results: [
        'Town hall attendance: 180 → 520 average (189% increase)',
        'City survey response rate: 12% → 34%',
        'Social media engagement up 156% during campaign months',
        '67% of residents reported feeling "more connected to city government"'
      ],
      dublinApplication: 'Essential for Dublin\'s community engagement and "What\'s On" strategy',
      category: 'Civic Engagement'
    },
    {
      id: 4,
      title: 'Winter Ready Westlake',
      challenge: 'Communicate safety during Lake Erie winter storms',
      strategy: 'Proactive, multi-channel emergency preparedness campaign',
      budget: '$1,400',
      execution: 'Infographic series, prep videos, real-time storm updates, media partnerships',
      results: [
        'Reached 28,000+ residents (78% of population)',
        '92% awareness rate in post-storm survey',
        '34% reduction in weather-related emergency calls',
        'Featured by Cleveland.com as "model municipal communication"'
      ],
      dublinApplication: 'Critical crisis communication skills for any major city',
      category: 'Crisis Communication'
    },
    {
      id: 5,
      title: 'Recreation Center Grand Opening',
      challenge: 'Generate excitement for $12M facility serving 36,000 residents',
      strategy: '8-week anticipation campaign with community involvement',
      budget: '$4,100',
      execution: 'Behind-scenes videos, countdown posts, influencer partnerships, sneak peek events',
      results: [
        'Opening day attendance: 2,847 people (8% of total population)',
        'Social video views: 47,000+ across all platforms',
        'Membership sign-ups: 1,240 in first month (target was 800)',
        'Generated $73,000 in first-quarter membership revenue'
      ],
      dublinApplication: 'Major facility/event promotion for Dublin\'s tourism and community facilities',
      category: 'Event Promotion'
    },
    {
      id: 6,
      title: 'Your Tax Dollars at Work',
      challenge: 'Make $48M city budget understandable to residents',
      strategy: 'Visual storytelling campaign breaking down complex budget information',
      budget: '$980',
      execution: 'Infographic series, budget breakdown videos, interactive online tool',
      results: [
        'Budget presentation video: 8,300 views (23% of population)',
        'Budget meeting attendance: 45 → 127 people',
        'Post-campaign survey: 81% "better understand city spending"',
        'Featured in Government Technology magazine as best practice'
      ],
      dublinApplication: 'Essential transparency skills for major municipal budget communication',
      category: 'Transparency'
    }
  ];

  const technicalSkills = [
    {
      skill: 'WordPress',
      details: 'Managed 3 city websites, 89% uptime, 47% speed improvement',
      proficiency: 95
    },
    {
      skill: 'Google Analytics',
      details: 'Grew website traffic from 4,200 to 14,300 monthly visitors',
      proficiency: 92
    },
    {
      skill: 'Meta Business Suite',
      details: 'Average 5.8% engagement rate (industry average: 1.9%)',
      proficiency: 98
    },
    {
      skill: 'Adobe Creative Suite',
      details: 'Created 850+ graphics annually with 94% approval rate',
      proficiency: 90
    },
    {
      skill: 'Email Marketing',
      details: '22% open rate, 3.1% click rate (above municipal average)',
      proficiency: 88
    },
    {
      skill: 'PPC Management',
      details: '$18K annual budget, 4.2% CTR, $1.30 avg cost per click',
      proficiency: 85
    }
  ];

  const overallMetrics = {
    socialMedia: {
      facebook: { from: 2100, to: 6400, growth: 205 },
      instagram: { from: 800, to: 3200, growth: 300 },
      twitter: { from: 400, to: 2200, growth: 450 }
    },
    engagement: {
      rate: 6.2,
      benchmark: 2.1,
      shares: 278,
      ugc: 340
    },
    website: {
      visitors: { from: 4200, to: 14300, growth: 240 },
      duration: 89,
      bounceRate: { from: 68, to: 34 }
    },
    budget: {
      managed: 52000,
      underBudget: 3.2,
      roi: 8.4
    }
  };

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="section-padding bg-dublin-primary text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Municipal Marketing Excellence
            </h1>
            <div className="w-24 h-1 bg-dublin-accent mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Proven results from Westlake, Ohio (population 36,000) demonstrating readiness for Dublin City Council
            </p>
          </motion.div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-dublin-accent mb-2">
                {inView1 && <CountUp end={96} duration={2} suffix="%" />}
              </div>
              <div className="text-sm md:text-base">Overall Match</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-dublin-accent mb-2">
                {inView1 && <CountUp end={52000} duration={2} prefix="$" />}
              </div>
              <div className="text-sm md:text-base">Budget Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-dublin-accent mb-2">
                {inView1 && <CountUp end={181} duration={2} suffix="%" />}
              </div>
              <div className="text-sm md:text-base">Social Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-dublin-accent mb-2">
                {inView1 && <CountUp end={24} duration={2} />}
              </div>
              <div className="text-sm md:text-base">Major Campaigns</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Role Comparison Dashboard */}
      <section ref={sectionRef1} className="section-padding">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dublin-primary mb-4">
              Dublin Requirements vs. My Experience
            </h2>
            <div className="w-20 h-1 bg-dublin-accent mx-auto mb-6"></div>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              {dublinRequirements.map((req, index) => (
                <motion.div
                  key={req.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView1 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => setHoveredRequirement(req.id)}
                  onMouseLeave={() => setHoveredRequirement(null)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-dublin-primary">
                      {req.requirement}
                    </h3>
                    <span className="text-dublin-accent font-bold">
                      {req.match}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-dublin-gray-200 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full ${req.color}`}
                      initial={{ width: 0 }}
                      animate={inView1 ? { width: `${req.match}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  
                  {hoveredRequirement === req.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute z-10 bg-dublin-primary text-white p-4 rounded-lg shadow-lg mt-2 w-full"
                    >
                      <p className="text-sm">{req.experience}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-block bg-dublin-accent/10 px-6 py-3 rounded-lg">
                <span className="text-dublin-accent font-bold text-xl">96% Overall Match</span>
                <span className="text-dublin-gray-600 ml-2">Exceeds qualification requirements</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaign Case Studies */}
      <section ref={sectionRef2} className="section-padding bg-dublin-gray-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dublin-primary mb-4">
              Featured Campaign Case Studies
            </h2>
            <div className="w-20 h-1 bg-dublin-accent mx-auto mb-6"></div>
            <p className="text-dublin-gray-600 max-w-3xl mx-auto">
              Six detailed examples of successful municipal marketing campaigns with measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedCampaign(selectedCampaign === campaign.id ? null : campaign.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-dublin-primary">{campaign.title}</h3>
                  <span className="bg-dublin-accent/10 text-dublin-accent px-2 py-1 rounded text-sm">
                    {campaign.category}
                  </span>
                </div>
                
                <p className="text-dublin-gray-600 mb-4">{campaign.challenge}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-dublin-accent font-semibold">Budget: {campaign.budget}</span>
                  <span className="text-dublin-gray-500 text-sm">Click to expand</span>
                </div>
                
                {selectedCampaign === campaign.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="border-t pt-4 space-y-4"
                  >
                    <div>
                      <h4 className="font-semibold text-dublin-primary-dark">Strategy:</h4>
                      <p className="text-dublin-gray-600 text-sm">{campaign.strategy}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dublin-primary-dark">Execution:</h4>
                      <p className="text-dublin-gray-600 text-sm">{campaign.execution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dublin-primary-dark">Results:</h4>
                      <ul className="text-dublin-gray-600 text-sm space-y-1">
                        {campaign.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-dublin-accent mr-2">•</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-dublin-accent/10 p-3 rounded">
                      <h4 className="font-semibold text-dublin-accent">Dublin Application:</h4>
                      <p className="text-dublin-gray-700 text-sm">{campaign.dublinApplication}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section ref={sectionRef3} className="section-padding">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dublin-primary mb-4">
              Technical Skills with Quantified Results
            </h2>
            <div className="w-20 h-1 bg-dublin-accent mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.skill}
                initial={{ opacity: 0, y: 20 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-dublin-primary">{skill.skill}</h3>
                  <span className="text-dublin-accent font-bold">{skill.proficiency}%</span>
                </div>
                
                <div className="w-full bg-dublin-gray-200 rounded-full h-2 mb-3">
                  <motion.div
                    className="h-2 bg-dublin-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={inView3 ? { width: `${skill.proficiency}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                
                <p className="text-dublin-gray-600 text-sm">{skill.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Achievement Dashboard */}
      <section ref={sectionRef4} className="section-padding bg-dublin-primary text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Overall Achievement Dashboard
            </h2>
            <div className="w-20 h-1 bg-dublin-accent mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Social Media Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white/10 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4">Social Media Growth</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Facebook:</span>
                  <span className="text-dublin-accent">
                    {inView4 && <CountUp start={overallMetrics.socialMedia.facebook.from} end={overallMetrics.socialMedia.facebook.to} duration={2} />}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Instagram:</span>
                  <span className="text-dublin-accent">
                    {inView4 && <CountUp start={overallMetrics.socialMedia.instagram.from} end={overallMetrics.socialMedia.instagram.to} duration={2} />}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Twitter:</span>
                  <span className="text-dublin-accent">
                    {inView4 && <CountUp start={overallMetrics.socialMedia.twitter.from} end={overallMetrics.socialMedia.twitter.to} duration={2} />}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Engagement Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4">Engagement Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Avg Rate:</span>
                  <span className="text-dublin-accent">
                    {inView4 && <CountUp end={6.2} decimals={1} duration={2} suffix="%" />}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>vs Benchmark:</span>
                  <span className="text-dublin-accent">+295%</span>
                </div>
                <div className="flex justify-between">
                  <span>Shares Growth:</span>
                  <span className="text-dublin-accent">
                    {inView4 && <CountUp end={278} duration={2} suffix="%" />}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Website Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4">Website Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Visitors:</span>
                  <span className="text-dublin-accent">
                    {inView4 && <CountUp start={4200} end={14300} duration={2} />}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="text-dublin-accent">+89%</span>
                </div>
                <div className="flex justify-between">
                  <span>Bounce Rate:</span>
                  <span className="text-dublin-accent">
                    {inView4 && <CountUp start={68} end={34} duration={2} suffix="%" />}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Budget & ROI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4">Budget & ROI</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Managed:</span>
                  <span className="text-dublin-accent">
                    ${inView4 && <CountUp end={52000} duration={2} />}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Under Budget:</span>
                  <span className="text-dublin-accent">3.2%</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI:</span>
                  <span className="text-dublin-accent">
                    ${inView4 && <CountUp end={8.4} decimals={1} duration={2} />}:$1
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Team Leadership Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-white/10 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Team Leadership & Collaboration</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-dublin-accent mb-2">
                  {inView4 && <CountUp end={6} duration={2} />}
                </div>
                <div>External Contractors Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dublin-accent mb-2">
                  {inView4 && <CountUp end={12} duration={2} />}
                </div>
                <div>City Departments Coordinated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dublin-accent mb-2">
                  {inView4 && <CountUp end={156} duration={2} />}
                </div>
                <div>Mayor Communications</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Experience