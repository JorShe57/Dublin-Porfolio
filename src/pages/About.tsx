import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  ChartBarIcon, 
  MegaphoneIcon,
  PaintBrushIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline'

const About: React.FC = () => {
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

  const coreSkills = [
    {
      icon: CodeBracketIcon,
      title: 'Website Creation & Development',
      description: 'Full-stack web development with modern frameworks like React, TypeScript, and responsive design principles',
      experience: 'Built and modernized multiple municipal websites, improving performance by 74% and user engagement by 205%'
    },
    {
      icon: CpuChipIcon,
      title: 'AI Development & Implementation',
      description: 'Leveraging artificial intelligence for content generation, data analysis, and automated workflows',
      experience: 'Implemented AI-powered chatbots and content optimization tools that reduced response time by 60%'
    },
    {
      icon: ChartBarIcon,
      title: 'Digital Marketing Analytics',
      description: 'Data-driven marketing strategies with advanced analytics, SEO optimization, and performance tracking',
      experience: 'Achieved 300% growth in digital engagement through strategic analytics and targeted campaigns'
    },
    {
      icon: MegaphoneIcon,
      title: 'Municipal Communications',
      description: 'Specialized expertise in government communication, community engagement, and public sector marketing',
      experience: '5+ years managing municipal communications with award-winning campaigns and crisis management'
    },
    {
      icon: PaintBrushIcon,
      title: 'Creative Content Production',
      description: 'Video production, graphic design, photography, and multimedia storytelling for diverse audiences',
      experience: 'Produced 850+ graphics, 125 videos, and 300+ photos annually with consistent brand excellence'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Digital Strategy',
      description: 'International perspective on digital marketing with cultural sensitivity and cross-platform expertise',
      experience: 'Developed strategies that increased international engagement by 180% and expanded global reach'
    }
  ];

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
              My Dublin Story
            </h1>
            <div className="w-24 h-1 bg-dublin-accent mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Bringing innovation, creativity, and fresh perspectives to Dublin
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Split Screen Layout */}
      <section className="py-20">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side: Why Dublin? */}
            <motion.div
              ref={sectionRef1}
              initial={{ opacity: 0, x: -50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-dublin-primary mb-6 flex items-center">
                <span className="text-dublin-accent text-4xl mr-3">🌟</span>
                Why Dublin?
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-dublin-primary-dark mb-3">
                    January 2024: The Trip That Changed Everything
                  </h3>
                  <p className="text-dublin-gray-600 leading-relaxed">
                    What began as a winter holiday quickly transformed into a pivotal life moment. Walking through 
                    Dublin's historic streets in January, I experienced that rare feeling of immediate connection—a 
                    sense of belonging that transcended tourism. The city's blend of rich history and forward-thinking 
                    energy resonated with me on both a personal and professional level.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dublin-primary-dark mb-3">
                    A City Ready for Digital Innovation
                  </h3>
                  <p className="text-dublin-gray-600 leading-relaxed">
                    Dublin's position as Europe's tech hub, combined with its rich cultural heritage, creates the perfect 
                    environment for innovative municipal marketing. I see immense potential to bridge traditional Irish 
                    storytelling with cutting-edge digital strategies, creating campaigns that honor Dublin's past 
                    while building its future as a global destination.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dublin-primary-dark mb-3">
                    More Than Tourism: A Future Home
                  </h3>
                  <p className="text-dublin-gray-600 leading-relaxed">
                    By the end of my trip, I knew Dublin wasn't just another stamp in my passport—it was potentially 
                    my future home. I began researching living in Ireland, understanding work permit requirements, 
                    and envisioning how my expertise could contribute to Dublin's evolving digital presence. This 
                    wasn't an impulsive decision, but the recognition of an authentic alignment between my aspirations 
                    and a city that captured my imagination.
                  </p>
                </div>
                
                {/* Quote */}
                <div className="border-l-4 border-dublin-accent pl-6 italic text-dublin-gray-700 my-8">
                  "Some cities you visit, others you know you belong in. Dublin felt like home."
                </div>
              </div>
            </motion.div>
            
            {/* Right Side: My Unique Skills */}
            <motion.div
              ref={sectionRef2}
              initial={{ opacity: 0, x: 50 }}
              animate={inView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-dublin-primary mb-6 flex items-center">
                <span className="text-dublin-accent text-4xl mr-3">💡</span>
                My Unique Skills
              </h2>
              
              {/* Profile Photo */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img 
                    src="/1701188728822.jpeg" 
                    alt="Jorden Shevel professional headshot"
                    className="w-full h-auto object-cover rounded-2xl shadow-lg" 
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute -bottom-2 -right-2 bg-dublin-accent text-white text-xs px-2 py-1 rounded-full">
                    Ready for Dublin!
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-dublin-gray-600 leading-relaxed">
                  I bring a unique combination of technical expertise, creative vision, and municipal marketing 
                  experience that positions me perfectly for Dublin's Social Media & Online Marketing role. 
                  My background spans cutting-edge technology and proven government communication strategies.
                </p>
                
                {/* Core Expertise Grid */}
                <div className="grid grid-cols-1 gap-4 mt-8">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-dublin-gray-50 rounded-lg">
                      <CodeBracketIcon className="h-8 w-8 text-dublin-accent mx-auto mb-2" />
                      <div className="text-sm font-semibold text-dublin-primary">Web Development</div>
                    </div>
                    <div className="text-center p-3 bg-dublin-gray-50 rounded-lg">
                      <CpuChipIcon className="h-8 w-8 text-dublin-accent mx-auto mb-2" />
                      <div className="text-sm font-semibold text-dublin-primary">AI Integration</div>
                    </div>
                    <div className="text-center p-3 bg-dublin-gray-50 rounded-lg">
                      <ChartBarIcon className="h-8 w-8 text-dublin-accent mx-auto mb-2" />
                      <div className="text-sm font-semibold text-dublin-primary">Data Analytics</div>
                    </div>
                    <div className="text-center p-3 bg-dublin-gray-50 rounded-lg">
                      <MegaphoneIcon className="h-8 w-8 text-dublin-accent mx-auto mb-2" />
                      <div className="text-sm font-semibold text-dublin-primary">Municipal Comms</div>
                    </div>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-dublin-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-dublin-accent">5+</div>
                    <div className="text-dublin-gray-600">Years Municipal</div>
                  </div>
                  <div className="text-center p-4 bg-dublin-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-dublin-accent">300%</div>
                    <div className="text-dublin-gray-600">Growth Achieved</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Deep Dive Section */}
      <section className="section-padding bg-dublin-gray-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dublin-primary mb-4">
              Technical Expertise That Sets Me Apart
            </h2>
            <div className="w-20 h-1 bg-dublin-accent mx-auto mb-6"></div>
            <p className="text-dublin-gray-600 max-w-3xl mx-auto">
              My unique combination of technical skills and municipal experience creates innovative solutions 
              that bridge traditional government communication with modern digital strategies.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="h-8 w-8 text-dublin-accent mr-3" />
                  <h3 className="text-xl font-semibold text-dublin-primary-dark">{skill.title}</h3>
                </div>
                <p className="text-dublin-gray-600 mb-4 leading-relaxed">
                  {skill.description}
                </p>
                <div className="border-l-4 border-dublin-accent pl-4">
                  <p className="text-sm text-dublin-gray-500 italic">
                    {skill.experience}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Golf Connection Section */}
      <section ref={sectionRef3} className="section-padding">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dublin-primary mb-4">
              The Emerald Isle Golf Dream
            </h2>
            <div className="w-20 h-1 bg-dublin-accent mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="/1_51.jpg" 
                alt="Golf course in Dublin - representing work-life balance and community integration" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-dublin-gray-600 leading-relaxed">
                My passion for golf represents more than just a hobby—it embodies the work-life balance I seek in Dublin. 
                Ireland's legendary courses like Portmarnock and Royal Dublin Golf Club aren't just bucket-list destinations; 
                they're potential weekend sanctuaries where strategic thinking on the course parallels the strategic 
                approach I bring to marketing campaigns.
              </p>
              
              <p className="text-dublin-gray-600 leading-relaxed">
                Just as golf requires patience, precision, and adaptability to changing conditions, so too does 
                effective municipal marketing. The methodical approach to improving one's golf game—analyzing 
                performance, making adjustments, and seeing incremental progress—mirrors my approach to building 
                and refining digital marketing strategies.
              </p>
              
              <p className="text-dublin-gray-600 leading-relaxed">
                I envision early morning rounds at Royal Dublin before heading to City Council offices, or weekend 
                games that help me connect with colleagues and community members in meaningful ways outside the 
                digital realm. This balance between professional dedication and personal passion is central to 
                my vision for life in Dublin.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Personality & Vision for Dublin */}
      <section ref={sectionRef4} className="section-padding bg-dublin-primary text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Making Dublin My Home & A Better Place
            </h2>
            <div className="w-20 h-1 bg-dublin-accent mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Personality Traits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold text-dublin-accent mb-2">🚀 Innovation-Driven</h4>
                  <p>I thrive on finding creative solutions to complex challenges, bringing fresh perspectives that push boundaries while respecting traditions.</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold text-dublin-accent mb-2">🤝 Community-Focused</h4>
                  <p>My greatest satisfaction comes from building connections—whether it's between citizens and their government or Dublin and the world.</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold text-dublin-accent mb-2">⚡ Adaptable & Resilient</h4>
                  <p>From Westlake to Dublin, I embrace change as an opportunity for growth, learning quickly and thriving in new environments.</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold text-dublin-accent mb-2">🎯 Results-Oriented</h4>
                  <p>I believe in measurable impact—every campaign, every post, every strategy should move the needle forward for Dublin's goals.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Vision for Dublin */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">How I'll Make Dublin Better</h3>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold text-dublin-accent mb-2">🌍 Global Digital Presence</h4>
                  <p>Elevate Dublin's international profile through innovative digital storytelling that showcases the city's unique blend of history and innovation.</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold text-dublin-accent mb-2">🤖 AI-Powered Efficiency</h4>
                  <p>Implement cutting-edge AI tools to streamline content creation, improve citizen engagement, and deliver personalized experiences at scale.</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold text-dublin-accent mb-2">📱 Mobile-First Innovation</h4>
                  <p>Create mobile experiences that make it effortless for residents and visitors to connect with Dublin services and opportunities.</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold text-dublin-accent mb-2">🏆 Award-Winning Campaigns</h4>
                  <p>Bring my track record of 300% growth and award-winning campaigns to position Dublin as a leader in municipal digital marketing.</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-dublin-accent/20 rounded-lg">
                <p className="italic text-lg leading-relaxed">
                  "I'm not just seeking a job in Dublin—I'm seeking to make Dublin my home while helping the city 
                  become an even better place for everyone who lives, works, and visits here. My commitment extends 
                  far beyond professional excellence to genuine community investment."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About