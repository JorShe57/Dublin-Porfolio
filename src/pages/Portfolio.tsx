import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { 
  ChartBarIcon, 
  ArrowTopRightOnSquareIcon,
  PlayIcon,
  ClockIcon,
  UserGroupIcon,
  TrophyIcon,
  GlobeAltIcon,
  SpeakerWaveIcon,
  NewspaperIcon,
  ComputerDesktopIcon,
  ShareIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const Portfolio: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [metricsRef, metricsInView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const heroStats = [
    { value: 6, suffix: '', label: 'Major Projects', icon: TrophyIcon },
    { value: 36, suffix: 'K', label: 'Residents Served', icon: UserGroupIcon },
    { value: 2847, suffix: '%', label: 'Digital Growth', icon: ChartBarIcon },
    { value: 1, suffix: '', label: 'Cleveland Magazine Feature', icon: StarIcon, isSpecial: true }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', icon: GlobeAltIcon },
    { id: 'website', label: 'Website Projects', icon: ComputerDesktopIcon },
    { id: 'digital', label: 'Digital Campaigns', icon: ShareIcon },
    { id: 'print', label: 'Print Materials', icon: NewspaperIcon },
    { id: 'video', label: 'Video Content', icon: PlayIcon },
    { id: 'crisis', label: 'Crisis Communications', icon: ExclamationTriangleIcon },
    { id: 'events', label: 'Event Promotion', icon: SpeakerWaveIcon }
  ]

  const projects = [
    {
      id: 'website-transformation',
      title: 'Westlake Website Transformation',
      category: 'website',
      year: '2023-2024',
      impact: 'Site Performance Revolution',
      description: 'Complete redesign and modernization of the City of Westlake website with focus on user experience, accessibility, and mobile responsiveness.',
      metrics: {
        loadSpeed: { before: 8.2, after: 2.1, improvement: 74 },
        mobileScore: { before: 67, after: 94, improvement: 27 },
        visitors: { before: 4200, after: 12800, improvement: 205 },
        adaCompliance: { before: 45, after: 98, improvement: 53 },
        bounceRate: { before: 72, after: 34, improvement: 53 }
      },
      features: [
        'Streamlined navigation with user journey mapping',
        'Integrated "Report a Concern" system',
        'Council agenda access and utility bill payment',
        'Mobile-responsive design',
        'ADA accessibility features'
      ],
      dublinApplication: 'How I\'d modernize Dublin.ie with similar UX principles for Ireland\'s tech-forward audience',
      testimonial: {
        quote: "The new website has transformed how residents interact with city services. The improvement in accessibility and user experience is remarkable.",
        author: "Mayor Dennis Clough",
        title: "City of Westlake"
      }
    },
    {
      id: 'alert-center',
      title: 'City Alert Center Launch',
      category: 'crisis',
      year: '2023-2024',
      impact: 'Emergency Communication System',
      description: 'Comprehensive real-time communication platform connecting city officials with residents during emergencies and daily service updates.',
      metrics: {
        emailSubscribers: 8400,
        textSubscribers: 5200,
        emergencyReach: 92,
        openRate: 67,
        industryAverage: 21,
        stormResponse: {
          alertTime: 12,
          satisfaction: 89,
          serviceCallReduction: 31
        }
      },
      alertTypes: [
        'Emergency notifications (severe weather, road closures)',
        'Trash & recycling reminders',
        'Community event announcements',
        'Construction notices',
        'Senior program updates'
      ],
      caseStudy: {
        title: 'Winter Storm February 2024',
        details: [
          'Alert sent to 8,400 residents in 12 minutes',
          '89% reported feeling "well-informed"',
          '31% reduction in emergency service calls'
        ]
      },
      dublinApplication: 'Scalable emergency communication for 1.4M Dublin metro residents with multi-language support'
    },
    {
      id: 'social-growth',
      title: 'Social Media Growth Transformation',
      category: 'digital',
      year: '2022-2024',
      impact: '200%+ Growth Across Platforms',
      description: 'Strategic social media expansion focusing on community engagement, event promotion, and transparent government communication.',
      platforms: {
        facebook: { before: 1800, after: 5400, growth: 200 },
        youtube: { before: 280, after: 1100, growth: 293 },
        engagement: { before: 2.1, after: 7.3, improvement: 248 },
        videoViews: { before: 15000, after: 78000, growth: 420 }
      },
      contentHighlights: [
        'Rain & Garden Show 2024: Reached 18,000+ residents',
        'Memorial Day observances: 2,100 in-person attendance',
        'City Council meeting streams: 450 average live viewers',
        'Community highlights and resident spotlights'
      ],
      engagementMetrics: {
        responseTime: 4.2,
        communityContent: 156,
        shareRate: 278
      },
      dublinApplication: 'Multi-platform strategy for Dublin\'s diverse international audience and tourism promotion'
    },
    {
      id: 'podcast-video',
      title: '"What\'s Going On Westlake" Multimedia Series',
      category: 'video',
      year: '2023-2024',
      impact: 'Award-Winning Content Creation',
      description: 'Comprehensive multimedia content strategy including podcast series, video production, and live event coverage.',
      podcastMetrics: {
        monthlyDownloads: 1180,
        completionRate: 73,
        platform: 'Spotify with growing subscriber base'
      },
      videoContent: [
        'Council meeting production and streaming',
        'Recreation Center tour: 15,000 views',
        'Special event coverage and promotion',
        'Educational content for city services'
      ],
      productionQuality: [
        'Professional videography and editing',
        'Consistent branding across content',
        'ADA-compliant captions and clear audio',
        'Multi-platform distribution strategy'
      ],
      dublinApplication: 'Professional video content for Dublin\'s cultural events and tourism promotion'
    },
    {
      id: 'pathways-newsletter',
      title: 'Pathways Newsletter & Print Communications',
      category: 'print',
      year: '2022-2024',
      impact: '78% Reader Engagement',
      description: 'Bi-monthly publication reaching every household in Westlake with comprehensive city information and community highlights.',
      distribution: {
        households: 14500,
        frequency: 'Bi-monthly',
        engagement: 78,
        contentMix: ['City services', 'Programs', 'Events', 'Resident spotlights']
      },
      designPortfolio: [
        'Newsletter layouts with brand consistency',
        'Event flyers and program brochures',
        'Facility posters and signage',
        'Press-ready media kits'
      ],
      inclusivity: [
        'Large print versions available',
        'Multiple language considerations',
        'Digital accessibility compliance',
        'Print/digital integration strategy'
      ],
      dublinApplication: 'Multi-language print strategy for Dublin\'s diverse population and cultural communities'
    },
    {
      id: 'accessibility-innovation',
      title: 'Accessibility & Two-Way Communication Innovation',
      category: 'crisis',
      year: '2023-2024',
      impact: '98% ADA Compliance Achievement',
      description: 'Pioneering accessibility initiatives and innovative two-way communication channels between residents and city government.',
      accessibilityFeatures: [
        'WCAG 2.1 AA compliance across all digital platforms',
        'Screen reader optimization',
        'Keyboard navigation support',
        'Color contrast compliance',
        'Alternative text for all images'
      ],
      communicationChannels: [
        'Multi-language support initiatives',
        'Real-time translation services',
        'Senior-friendly communication options',
        'Mobile-first responsive design',
        'Voice-activated content access'
      ],
      dublinApplication: 'Inclusive communication strategy for Dublin\'s international business community and diverse residents'
    }
  ]

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter)

  const ProjectCard: React.FC<{ project: any, index: number }> = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-portfolio prevent-layout-shift hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="h-48 bg-gradient-to-br from-dublin-primary to-dublin-primary-light flex items-center justify-center relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-dublin-gray-100 text-sm">{project.impact}</p>
        </div>
        <div className="absolute top-4 right-4 bg-dublin-accent text-white px-2 py-1 rounded-full text-xs font-medium">
          {project.year}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-dublin-gray-600 mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>
        
        <div className="flex justify-between items-center mt-auto">
          <button
            onClick={() => setSelectedProject(project.id)}
            className="bg-dublin-primary text-white px-4 py-2 rounded-lg hover:bg-dublin-primary-dark transition-colors duration-200 flex items-center gap-2"
          >
            View Details
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </button>
          
          <div className="text-right">
            <div className="text-dublin-accent font-semibold text-sm">
              {project.category === 'website' && '+205% Traffic'}
              {project.category === 'digital' && '+200% Growth'}
              {project.category === 'video' && '15K+ Views'}
              {project.category === 'print' && '78% Engagement'}
              {project.category === 'crisis' && '92% Reach'}
            </div>
            <div className="text-dublin-gray-500 text-xs">
              Proven Results
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  const ProjectModal: React.FC<{ project: any }> = ({ project }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl max-w-6xl max-h-[90vh] overflow-y-auto w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-dublin-primary mb-2">{project.title}</h2>
              <p className="text-dublin-gray-600 text-lg">{project.description}</p>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="text-dublin-gray-500 hover:text-dublin-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Website Transformation Project */}
          {project.id === 'website-transformation' && (
            <div className="space-y-8">
              <div className="bg-dublin-accent text-white p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3">Interactive Before/After Showcase</h3>
                <p className="text-lg">Complete website redesign with dramatic performance improvements</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-red-700 mb-4">Before: Legacy Website</h4>
                  <div className="space-y-3 text-red-600">
                    <div className="flex justify-between">
                      <span>Page Load Speed:</span>
                      <span className="font-semibold">8.2 seconds</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mobile Usability:</span>
                      <span className="font-semibold">67%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Visitors:</span>
                      <span className="font-semibold">4,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ADA Compliance:</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bounce Rate:</span>
                      <span className="font-semibold">72%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-green-700 mb-4">After: Modern Platform</h4>
                  <div className="space-y-3 text-green-600">
                    <div className="flex justify-between">
                      <span>Page Load Speed:</span>
                      <span className="font-semibold">2.1 seconds (74% improvement)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mobile Usability:</span>
                      <span className="font-semibold">94%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Visitors:</span>
                      <span className="font-semibold">12,800 (205% increase)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ADA Compliance:</span>
                      <span className="font-semibold">98%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bounce Rate:</span>
                      <span className="font-semibold">34%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dublin-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-dublin-primary mb-4">Key Features Highlighted</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-dublin-accent mt-0.5 flex-shrink-0" />
                      <span className="text-dublin-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-dublin-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-dublin-primary mb-4">Mayor Dennis Clough Testimonial</h3>
                <blockquote className="text-lg italic text-dublin-gray-700 mb-4">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="text-dublin-gray-600">
                  <strong>{project.testimonial.author}</strong>, {project.testimonial.title}
                </div>
              </div>
              
              <div className="bg-dublin-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Dublin Application</h3>
                <p className="text-lg">{project.dublinApplication}</p>
              </div>
            </div>
          )}

          {/* Alert Center Project */}
          {project.id === 'alert-center' && (
            <div className="space-y-8">
              <div className="bg-dublin-accent text-white p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3">Real-Time Communication System</h3>
                <p className="text-lg">Comprehensive emergency and daily communication platform</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center bg-dublin-gray-50 p-6 rounded-lg">
                  <UserGroupIcon className="w-12 h-12 text-dublin-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-dublin-primary mb-2">8,400</div>
                  <div className="text-dublin-gray-600">Email Subscribers<br/>(23% of population)</div>
                </div>
                <div className="text-center bg-dublin-gray-50 p-6 rounded-lg">
                  <SpeakerWaveIcon className="w-12 h-12 text-dublin-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-dublin-primary mb-2">5,200</div>
                  <div className="text-dublin-gray-600">Text Alert Users<br/>(14% of population)</div>
                </div>
                <div className="text-center bg-dublin-gray-50 p-6 rounded-lg">
                  <ClockIcon className="w-12 h-12 text-dublin-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-dublin-primary mb-2">92%</div>
                  <div className="text-dublin-gray-600">Emergency reach<br/>under 15 minutes</div>
                </div>
              </div>

              <div className="bg-dublin-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-dublin-primary mb-4">Alert Categories</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.alertTypes.map((type: string, i: number) => (
                    <div key={i} className="flex items-start gap-2">
                      <ExclamationTriangleIcon className="w-5 h-5 text-dublin-accent mt-0.5 flex-shrink-0" />
                      <span className="text-dublin-gray-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Crisis Communication Success: {project.caseStudy.title}</h3>
                <div className="space-y-3">
                  {project.caseStudy.details.map((detail: string, i: number) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-dublin-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-dublin-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Dublin Application</h3>
                <p className="text-lg">{project.dublinApplication}</p>
              </div>
            </div>
          )}

          {/* Social Media Growth Project */}
          {project.id === 'social-growth' && (
            <div className="space-y-8">
              <div className="bg-dublin-accent text-white p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3">Platform-by-Platform Growth Showcase</h3>
                <p className="text-lg">Strategic social media expansion with measurable community engagement</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-blue-700 mb-4">Facebook Growth</h4>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        1,800 → 5,400
                      </div>
                      <div className="text-blue-600 font-semibold">200% Growth in 24 months</div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-red-700 mb-4">YouTube Growth</h4>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        280 → 1,100
                      </div>
                      <div className="text-red-600 font-semibold">293% Growth</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-green-700 mb-4">Engagement Rate</h4>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        2.1% → 7.3%
                      </div>
                      <div className="text-green-600 font-semibold">248% Improvement</div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-purple-700 mb-4">Video Views</h4>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        15K → 78K
                      </div>
                      <div className="text-purple-600 font-semibold">Monthly Average</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dublin-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-dublin-primary mb-4">Content Strategy Examples</h3>
                <div className="space-y-3">
                  {project.contentHighlights.map((highlight: string, i: number) => (
                    <div key={i} className="flex items-start gap-2">
                      <StarIcon className="w-5 h-5 text-dublin-accent mt-0.5 flex-shrink-0" />
                      <span className="text-dublin-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center bg-dublin-gray-50 p-6 rounded-lg">
                  <ClockIcon className="w-12 h-12 text-dublin-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-dublin-primary mb-2">4.2</div>
                  <div className="text-dublin-gray-600">Hours average<br/>response time</div>
                </div>
                <div className="text-center bg-dublin-gray-50 p-6 rounded-lg">
                  <UserGroupIcon className="w-12 h-12 text-dublin-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-dublin-primary mb-2">156%</div>
                  <div className="text-dublin-gray-600">Community content<br/>increase</div>
                </div>
                <div className="text-center bg-dublin-gray-50 p-6 rounded-lg">
                  <ShareIcon className="w-12 h-12 text-dublin-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-dublin-primary mb-2">278%</div>
                  <div className="text-dublin-gray-600">Share rate<br/>improvement</div>
                </div>
              </div>
              
              <div className="bg-dublin-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Dublin Application</h3>
                <p className="text-lg">{project.dublinApplication}</p>
              </div>
            </div>
          )}

          {/* Podcast & Video Project */}
          {project.id === 'podcast-video' && (
            <div className="space-y-8">
              <div className="bg-dublin-accent text-white p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3">Multimedia Content Creation Showcase</h3>
                <p className="text-lg">Professional podcast and video production for municipal communications</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-dublin-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-dublin-primary mb-4">Podcast Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Monthly Downloads:</span>
                      <span className="font-semibold text-dublin-accent">1,180 average</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Completion Rate:</span>
                      <span className="font-semibold text-dublin-accent">73%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Platform:</span>
                      <span className="font-semibold text-dublin-accent">Spotify + growing base</span>
                    </div>
                  </div>
                </div>

                <div className="bg-dublin-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-dublin-primary mb-4">Video Content Highlights</h4>
                  <div className="space-y-3">
                    {project.videoContent.map((content: string, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <PlayIcon className="w-5 h-5 text-dublin-accent mt-0.5 flex-shrink-0" />
                        <span className="text-dublin-gray-700">{content}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-dublin-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-dublin-primary mb-4">Production Quality Standards</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.productionQuality.map((quality: string, i: number) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-dublin-accent mt-0.5 flex-shrink-0" />
                      <span className="text-dublin-gray-700">{quality}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Featured Success: Recreation Center Grand Opening</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">15,000</div>
                  <div className="text-green-600 font-semibold">Video Views Generated</div>
                </div>
              </div>
              
              <div className="bg-dublin-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Dublin Application</h3>
                <p className="text-lg">{project.dublinApplication}</p>
              </div>
            </div>
          )}

          {/* Print Communications Project */}
          {project.id === 'pathways-newsletter' && (
            <div className="space-y-8">
              <div className="bg-dublin-accent text-white p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3">Comprehensive Print Strategy Showcase</h3>
                <p className="text-lg">Bi-monthly publication reaching every household with 78% engagement</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center bg-dublin-gray-50 p-6 rounded-lg">
                  <NewspaperIcon className="w-12 h-12 text-dublin-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-dublin-primary mb-2">14,500</div>
                  <div className="text-dublin-gray-600">Households reached<br/>(every residence)</div>
                </div>
                <div className="text-center bg-dublin-gray-50 p-6 rounded-lg">
                  <UserGroupIcon className="w-12 h-12 text-dublin-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-dublin-primary mb-2">78%</div>
                  <div className="text-dublin-gray-600">Reader engagement<br/>rate</div>
                </div>
                <div className="text-center bg-dublin-gray-50 p-6 rounded-lg">
                  <ClockIcon className="w-12 h-12 text-dublin-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-dublin-primary mb-2">Bi-Monthly</div>
                  <div className="text-dublin-gray-600">Publication<br/>frequency</div>
                </div>
              </div>

              <div className="bg-dublin-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-dublin-primary mb-4">Design Portfolio Examples</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.designPortfolio.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-dublin-accent mt-0.5 flex-shrink-0" />
                      <span className="text-dublin-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-dublin-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-dublin-primary mb-4">Inclusivity Focus</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.inclusivity.map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-dublin-accent mt-0.5 flex-shrink-0" />
                      <span className="text-dublin-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-dublin-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Dublin Application</h3>
                <p className="text-lg">{project.dublinApplication}</p>
              </div>
            </div>
          )}

          {/* Accessibility & Innovation Project */}
          {project.id === 'accessibility-innovation' && (
            <div className="space-y-8">
              <div className="bg-dublin-accent text-white p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3">Accessibility & Two-Way Communication Innovation</h3>
                <p className="text-lg">Pioneering inclusive communication and government transparency initiatives</p>
              </div>

              <div className="text-center bg-green-50 border border-green-200 p-8 rounded-lg">
                <div className="text-5xl font-bold text-green-600 mb-4">98%</div>
                <div className="text-xl text-green-700 font-semibold">ADA Compliance Achievement</div>
                <div className="text-green-600 mt-2">WCAG 2.1 AA Standards Met</div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-dublin-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-dublin-primary mb-4">Accessibility Features</h4>
                  <div className="space-y-3">
                    {project.accessibilityFeatures.map((feature: string, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-dublin-accent mt-0.5 flex-shrink-0" />
                        <span className="text-dublin-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-dublin-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-dublin-primary mb-4">Communication Channels</h4>
                  <div className="space-y-3">
                    {project.communicationChannels.map((channel: string, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <SpeakerWaveIcon className="w-5 h-5 text-dublin-accent mt-0.5 flex-shrink-0" />
                        <span className="text-dublin-gray-700">{channel}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-dublin-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Dublin Application</h3>
                <p className="text-lg">{project.dublinApplication}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <div className="pt-20">
      {/* Hero Section with Impact Metrics */}
      <section className="section-padding bg-gradient-to-br from-dublin-primary to-dublin-primary-dark text-white">
        <div className="container-width">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Municipal Communications Portfolio
            </h1>
            <div className="w-24 h-1 bg-dublin-accent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-dublin-gray-100 max-w-4xl mx-auto mb-12">
              Proven results from Westlake, Ohio • Ready to deliver for Dublin City Council
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="bg-dublin-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                Featured in Cleveland Magazine
              </span>
              <span className="bg-dublin-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                36,000 Residents Served
              </span>
              <span className="bg-dublin-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                Award-Winning Content
              </span>
            </div>
          </motion.div>

          {/* Stats Dashboard */}
          <motion.div
            ref={metricsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={metricsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-dublin-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {metricsInView && !stat.isSpecial ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : stat.isSpecial ? (
                    <StarIcon className="w-8 h-8 text-dublin-accent mx-auto" />
                  ) : (
                    `${stat.value}${stat.suffix}`
                  )}
                </div>
                <div className="text-dublin-gray-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Filter System */}
          <section className="section-padding bg-dublin-gray-50">
            <div className="container-width">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-dublin-primary mb-6">
                  Project Showcase
                </h2>
                <p className="text-xl text-dublin-gray-600 max-w-3xl mx-auto mb-8">
                  Real municipal communications work with measurable results
                </p>
              </motion.div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 ${
                      selectedFilter === filter.id
                        ? 'bg-dublin-primary text-white shadow-lg'
                        : 'bg-white text-dublin-gray-600 hover:bg-dublin-gray-100'
                    }`}
                  >
                    <filter.icon className="w-4 h-4" />
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFilter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 grid-stable-heights portfolio"
                >
                  {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <ProjectModal 
                project={projects.find(p => p.id === selectedProject)} 
              />
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}

export default Portfolio