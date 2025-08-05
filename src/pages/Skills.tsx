import React, { useState } from 'react'

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string>('')
  const [activeCampaign, setActiveCampaign] = useState<string>('')
  const [showCodeEditor, setShowCodeEditor] = useState(false)

  const skillCategories = [
    {
      category: 'Content Management Systems',
      level: 'Expert',
      color: 'bg-green-500',
      skills: [
        {
          name: 'CivicPlus',
          proficiency: 95,
          description: 'Currently managing Westlake\'s main city website with full CMS control',
          evidence: 'Daily management of 150+ pages, 89% page speed improvement',
          demonstration: 'Live website management dashboard',
          icon: '🏛️'
        },
        {
          name: 'Apptegy (Thrillshare CMS)',
          proficiency: 90,
          description: 'Advanced user for community engagement and content distribution',
          evidence: 'Managing 1,200+ community posts, 43% engagement increase',
          demonstration: 'Content distribution workflow',
          icon: '📱'
        },
        {
          name: 'WordPress',
          proficiency: 85,
          description: 'Extensive experience building and managing WordPress sites',
          evidence: 'Compatible with Dublin\'s WordPress infrastructure',
          demonstration: 'Custom theme development',
          icon: '🌐'
        }
      ]
    },
    {
      category: 'Adobe Creative Suite',
      level: 'Advanced',
      color: 'bg-red-500',
      skills: [
        {
          name: 'Adobe InDesign',
          proficiency: 92,
          description: 'Creating city newsletters, official documents, promotional materials',
          evidence: 'Monthly 16-page newsletters, 50+ official documents annually',
          demonstration: 'Newsletter design process',
          icon: '📄'
        },
        {
          name: 'Dreamweaver',
          proficiency: 88,
          description: 'Web development and HTML/CSS coding',
          evidence: 'Hand-coded responsive websites, custom integrations',
          demonstration: 'Live code editing',
          icon: '💻'
        },
        {
          name: 'Creative Suite Integration',
          proficiency: 90,
          description: 'Seamless workflow across all Adobe applications',
          evidence: 'Multi-format campaigns from print to digital',
          demonstration: 'Cross-platform design workflow',
          icon: '🎨'
        }
      ]
    },
    {
      category: 'Video Production & Animation',
      level: 'Advanced',
      color: 'bg-purple-500',
      skills: [
        {
          name: 'Final Cut Pro',
          proficiency: 87,
          description: 'Professional video editing for city campaigns',
          evidence: 'National Fire Safety Week series, Small Business Spotlights',
          demonstration: 'Video editing timeline walkthrough',
          icon: '🎬'
        },
        {
          name: 'Synthesia',
          proficiency: 85,
          description: 'AI-powered video creation for efficient content production',
          evidence: 'Educational video series, multilingual content capability',
          demonstration: 'AI video creation process',
          icon: '🤖'
        }
      ]
    },
    {
      category: 'Analytics & Data Management',
      level: 'Expert',
      color: 'bg-blue-500',
      skills: [
        {
          name: 'Google Analytics',
          proficiency: 94,
          description: 'Deep dive dashboards showing website performance improvements',
          evidence: '67% mobile engagement increase, real-time monitoring',
          demonstration: 'Live analytics dashboard',
          icon: '📊'
        },
        {
          name: 'Performance Reporting',
          proficiency: 90,
          description: 'Monthly analytics reports for city leadership',
          evidence: 'Executive dashboards, ROI tracking, citizen engagement metrics',
          demonstration: 'Report generation workflow',
          icon: '📈'
        }
      ]
    },
    {
      category: 'Social Media Platform Expertise',
      level: 'Expert',
      color: 'bg-indigo-500',
      skills: [
        {
          name: 'Facebook/Meta Business',
          proficiency: 93,
          description: 'Managing official city page with community engagement strategies',
          evidence: '36,000 followers, 92% community awareness campaigns',
          demonstration: 'Social media management interface',
          icon: '📘'
        },
        {
          name: 'YouTube',
          proficiency: 89,
          description: 'Content creation, optimization, and community building',
          evidence: 'Video content library, educational series distribution',
          demonstration: 'YouTube optimization workflow',
          icon: '📺'
        }
      ]
    },
    {
      category: 'Backend Development',
      level: 'Intermediate',
      color: 'bg-yellow-500',
      skills: [
        {
          name: 'Firebase',
          proficiency: 75,
          description: 'Database management and app backend development',
          evidence: 'Community portal backend, real-time data sync',
          demonstration: 'Database structure design',
          icon: '🔥'
        },
        {
          name: 'HTML/CSS',
          proficiency: 82,
          description: 'Hand-coding websites and custom solutions',
          evidence: 'Custom city website features, responsive design',
          demonstration: 'Live code editor',
          icon: '⚡'
        }
      ]
    }
  ]

  const campaigns = [
    {
      id: 'small-business',
      title: 'Small Business Spotlight Series',
      challenge: 'Promote 78 local businesses during COVID recovery',
      skills: ['Photography', 'Final Cut Pro', 'InDesign', 'Social Media Strategy'],
      process: ['Research', 'Photography', 'Design', 'Video Editing', 'Distribution'],
      results: '43% increase in business directory engagement',
      metrics: {
        businesses: 78,
        engagement: '+43%',
        reach: '89,000',
        conversion: '+67%'
      }
    },
    {
      id: 'fire-safety',
      title: 'National Fire Safety Week Campaign',
      challenge: 'Create engaging safety education for 36,000 residents',
      skills: ['Synthesia', 'Adobe Suite', 'Analytics', 'Multi-platform Distribution'],
      process: ['Content Planning', 'Video Production', 'Graphic Design', 'Distribution', 'Analytics'],
      results: '92% community awareness rate, featured by regional departments',
      metrics: {
        awareness: '92%',
        videos: 12,
        platforms: 5,
        engagement: '+156%'
      }
    },
    {
      id: 'website-redesign',
      title: 'City Website Redesign Project',
      challenge: 'Modernize city website for better citizen engagement',
      skills: ['CivicPlus CMS', 'Google Analytics', 'HTML/CSS', 'UX Design'],
      process: ['Analytics Audit', 'User Journey Mapping', 'Design', 'Implementation', 'Performance Tracking'],
      results: '89% page speed improvement, 67% mobile engagement increase',
      metrics: {
        speed: '+89%',
        mobile: '+67%',
        accessibility: 'AA',
        satisfaction: '94%'
      }
    }
  ]

  const requirementMapping = [
    { requirement: 'WordPress', experience: 'CivicPlus + WordPress', status: 'verified' },
    { requirement: 'Google Analytics', experience: 'Daily use for city performance tracking', status: 'verified' },
    { requirement: 'Meta Business Suite', experience: 'Facebook city page management', status: 'verified' },
    { requirement: 'Adobe Suite', experience: 'InDesign, Dreamweaver daily use', status: 'verified' },
    { requirement: 'HTML/CSS', experience: 'Hand-coding custom solutions', status: 'verified' },
    { requirement: 'Email Marketing', experience: 'Newsletter distribution systems', status: 'verified' },
    { requirement: 'Video Production', experience: 'Final Cut Pro + Synthesia', status: 'verified' },
    { requirement: 'Emerging Technologies', experience: 'AI tools, new CMS platforms', status: 'verified' }
  ]

  const codeExample = `<!-- Example: Custom HTML/CSS for City Website Feature -->
<section class="emergency-alerts">
  <div class="alert-container">
    <div class="alert-header">
      <span class="alert-icon">⚠️</span>
      <h3>Emergency Alerts</h3>
    </div>
    <div class="alert-content" id="alertFeed">
      <!-- Dynamic content loaded via JavaScript -->
    </div>
  </div>
</section>

<style>
.emergency-alerts {
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.alert-container {
  max-width: 100%;
  color: white;
}

.alert-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.alert-icon {
  font-size: 24px;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .emergency-alerts {
    padding: 15px;
    margin: 15px 0;
  }
}
</style>`

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-dublin-primary text-white">
        <div className="container-width">
          <div
            className="text-center space-y-responsive"
          >
            <h1 className="heading-primary text-white">
              Skills Laboratory
            </h1>
            <div className="w-20 sm:w-32 h-1 bg-dublin-accent mx-auto"></div>
            <p className="text-responsive-lg md:text-2xl max-w-4xl mx-auto">
              Interactive demonstrations of technical mastery for Dublin City Council role
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <span className="bg-dublin-accent px-3 py-2 sm:px-4 sm:py-2 rounded-full">Expert Level CMS Management</span>
              <span className="bg-dublin-accent px-3 py-2 sm:px-4 sm:py-2 rounded-full">Advanced Adobe Creative Suite</span>
              <span className="bg-dublin-accent px-3 py-2 sm:px-4 sm:py-2 rounded-full">Professional Video Production</span>
              <span className="bg-dublin-accent px-3 py-2 sm:px-4 sm:py-2 rounded-full">Analytics & Data Mastery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Skills Matrix */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center space-y-responsive mb-12 lg:mb-16">
            <h2 className="heading-secondary">
              Interactive Skills Matrix Dashboard
            </h2>
            <p className="text-responsive-lg text-dublin-gray-600 max-w-3xl mx-auto">
              Hover over skills to see live demonstrations and real-world evidence
            </p>
          </div>

          <div className="grid-responsive-3 xl:grid-cols-3 grid-stable-heights skills">
            {skillCategories.map((category) => (
              <div
                key={category.category}
                className="card-skills prevent-layout-shift"
              >
                <div className={`${category.color} text-white card-padding flex-shrink-0`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold">{category.category}</h3>
                    <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                      {category.level}
                    </span>
                  </div>
                </div>

                <div className="card-padding space-y-4 flex-grow">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group cursor-pointer smooth-layout-fast"
                      onMouseEnter={() => setActiveSkill(`${category.category}-${skill.name}`)}
                      onMouseLeave={() => setActiveSkill('')}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <span className="text-xl sm:text-2xl">{skill.icon}</span>
                          <span className="font-semibold text-dublin-primary text-sm sm:text-base">{skill.name}</span>
                        </div>
                        <span className="text-xs sm:text-sm text-dublin-gray-500">{skill.proficiency}%</span>
                      </div>
                      
                      <div className="progress-bar">
                        <div
                          className={`progress-fill ${category.color}`}
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>

                      {/* Reserved space for hover content to prevent layout shifts */}
                      <div className="mt-3 overflow-hidden">
                        <div
                          className={`bg-dublin-gray-50 p-3 sm:p-4 rounded-lg transition-all duration-300 ease-in-out ${
                            activeSkill === `${category.category}-${skill.name}` 
                              ? 'max-h-40 opacity-100' 
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <p className="text-sm text-dublin-gray-700 mb-2">{skill.description}</p>
                          <div className="text-xs text-dublin-gray-600 mb-2">
                            <strong>Evidence:</strong> {skill.evidence}
                          </div>
                          <div className="text-xs text-dublin-accent font-semibold">
                            📊 {skill.demonstration}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Demonstrations */}
      <section className="section-padding bg-dublin-gray-50">
        <div className="container-width">
          <div className="text-center space-y-responsive mb-12 lg:mb-16">
            <h2 className="heading-secondary">
              Real Campaign Skill Demonstrations
            </h2>
            <p className="text-responsive-lg text-dublin-gray-600 max-w-3xl mx-auto">
              Click on campaigns to see detailed breakdowns of skills applied
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className={`card-interactive ${
                  activeCampaign === campaign.id ? 'ring-2 ring-dublin-accent' : ''
                }`}
              >
                <div className="card-padding">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-6 mb-6">
                    <div className="flex-1">
                      <h3 className="heading-tertiary mb-2">
                        {campaign.title}
                      </h3>
                      <p className="text-dublin-gray-600 mb-4">{campaign.challenge}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {campaign.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-dublin-accent text-white px-3 py-1 rounded-full text-xs sm:text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveCampaign(
                        activeCampaign === campaign.id ? '' : campaign.id
                      )}
                      className="btn-primary w-full lg:w-auto"
                    >
                      {activeCampaign === campaign.id ? 'Hide Details' : 'View Process'}
                    </button>
                  </div>

                  {activeCampaign === campaign.id && (
                    <div
                      className="border-t border-dublin-gray-200 pt-6"
                    >
                      <div className="grid-responsive-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-dublin-primary mb-4">Process Breakdown</h4>
                          <div className="space-y-3">
                            {campaign.process.map((step, stepIndex) => (
                              <div key={step} className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-dublin-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                  {stepIndex + 1}
                                </div>
                                <span className="text-dublin-gray-700">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-dublin-primary mb-4">Results & Metrics</h4>
                          <div className="bg-dublin-gray-50 p-4 rounded-lg mb-4">
                            <p className="text-dublin-gray-700 font-semibold text-sm sm:text-base">{campaign.results}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(campaign.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-dublin-accent">{value}</div>
                                <div className="text-xs sm:text-sm text-dublin-gray-600 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Requirements Mapping */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center space-y-responsive mb-12 lg:mb-16">
            <h2 className="heading-secondary">
              Dublin Requirements vs My Experience
            </h2>
            <p className="text-responsive-lg text-dublin-gray-600 max-w-3xl mx-auto">
              Complete alignment with every technical requirement
            </p>
          </div>

          <div className="card">
            <div className="bg-dublin-primary text-white card-padding">
              <h3 className="text-xl sm:text-2xl font-bold">Technical Requirements Checklist</h3>
            </div>
            <div className="card-padding">
              <div className="space-y-4">
                {requirementMapping.map((item) => (
                  <div
                    key={item.requirement}
                    className="flex items-center justify-between p-3 sm:p-4 bg-dublin-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-dublin-primary text-sm sm:text-base">{item.requirement}</div>
                        <div className="text-xs sm:text-sm text-dublin-gray-600">{item.experience}</div>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold">
                      Verified
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Code Editor Demo */}
      <section className="section-padding bg-dublin-gray-50">
        <div className="container-width">
          <div className="text-center space-y-responsive mb-12 lg:mb-16">
            <h2 className="heading-secondary">
              Live Code Demonstration
            </h2>
            <p className="text-responsive-lg text-dublin-gray-600 max-w-3xl mx-auto">
              Interactive HTML/CSS skills demonstration
            </p>
          </div>

          <div className="card">
            <div className="bg-dublin-primary text-white card-padding flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold">HTML/CSS Code Editor</h3>
              <button
                onClick={() => setShowCodeEditor(!showCodeEditor)}
                className="bg-dublin-accent hover:bg-dublin-accent-dark px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base"
              >
                {showCodeEditor ? 'Hide Code' : 'Show Code'}
              </button>
            </div>
            
            {showCodeEditor && (
              <div
                className="card-padding"
              >
                <div className="bg-dublin-gray-900 text-green-400 p-4 sm:p-6 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
                  <pre>{codeExample}</pre>
                </div>
                <div className="mt-4 p-4 bg-dublin-gray-50 rounded-lg">
                  <p className="text-sm text-dublin-gray-600">
                    <strong>Code Explanation:</strong> This example shows a responsive emergency alerts section 
                    I created for the Westlake city website. It demonstrates modern CSS techniques, responsive 
                    design, and accessibility considerations - skills directly applicable to Dublin's web presence.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center space-y-responsive mb-12 lg:mb-16">
            <h2 className="heading-secondary">
              Professional Development & Certifications
            </h2>
          </div>

          <div className="grid-responsive-3">
            <div
              className="card text-center card-padding"
            >
              <div className="text-3xl sm:text-4xl mb-4">🎓</div>
              <h3 className="text-lg sm:text-xl font-bold text-dublin-primary mb-2">Bachelor's Degree</h3>
              <p className="text-dublin-gray-600 text-sm sm:text-base">Public Relations (Level 8 equivalent)</p>
            </div>

            <div
              className="card text-center card-padding"
            >
              <div className="text-3xl sm:text-4xl mb-4">🔄</div>
              <h3 className="text-lg sm:text-xl font-bold text-dublin-primary mb-2">Continuous Learning</h3>
              <p className="text-dublin-gray-600 text-sm sm:text-base">Digital marketing, municipal communications training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scalability Analysis */}
      <section className="section-padding bg-dublin-primary text-white">
        <div className="container-width">
          <div className="text-center space-y-responsive mb-12 lg:mb-16">
            <h2 className="heading-secondary text-white">
              Scalability: Westlake to Dublin
            </h2>
            <p className="text-responsive-lg max-w-3xl mx-auto">
              How my experience scales from 36K population to 1.4M metro area
            </p>
          </div>

          <div className="grid-responsive-4">
            <div
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-dublin-accent mb-2">39x</div>
              <div className="text-base sm:text-lg font-semibold mb-2">Population Scale</div>
              <div className="text-sm opacity-90">Ready for metropolitan-level campaigns</div>
            </div>

            <div
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-dublin-accent mb-2">100%</div>
              <div className="text-base sm:text-lg font-semibold mb-2">Technology Transfer</div>
              <div className="text-sm opacity-90">All skills directly applicable</div>
            </div>

            <div
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-dublin-accent mb-2">5x</div>
              <div className="text-base sm:text-lg font-semibold mb-2">Team Leadership</div>
              <div className="text-sm opacity-90">Scaled team management experience</div>
            </div>

            <div
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-dublin-accent mb-2">∞</div>
              <div className="text-base sm:text-lg font-semibold mb-2">Innovation Potential</div>
              <div className="text-sm opacity-90">Proven ability to implement new technologies</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills