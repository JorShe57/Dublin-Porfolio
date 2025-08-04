import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About: React.FC = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState<number | null>(null);
  
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
  
  const [sectionRef5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const timelineItems = [
    {
      year: '2018',
      title: 'Started in Communications/Marketing',
      description: 'Began my career in digital communications, focusing on community engagement and social media strategy development.'
    },
    {
      year: '2019',
      title: 'First Municipal Government Role',
      description: 'Joined the communications team at a local government agency, discovering my passion for public sector marketing.'
    },
    {
      year: '2020',
      title: 'Public Relations Manager for Westlake',
      description: 'Promoted to manage public relations and digital strategy for Westlake, leading a team of content creators and strategists.'
    },
    {
      year: '2022',
      title: 'Major Campaign Successes',
      description: 'Led award-winning campaigns that increased digital engagement by 300% and established Westlake as a leader in municipal communications.'
    },
    {
      year: '2024',
      title: 'Dublin Discovery',
      description: 'Visited Dublin and experienced a profound connection to the city, its culture, and its potential for digital innovation.'
    },
    {
      year: '2025',
      title: 'Dublin City Council Ambition',
      description: 'Ready to bring expertise, passion and fresh perspectives to Dublin\'s Social Media & Online Marketing team.'
    }
  ];
  
  const dublinPhotos = [
    { id: 1, alt: 'Dublin Castle', placeholder: 'Dublin Castle during my January visit' },
    { id: 2, alt: 'Temple Bar', placeholder: 'Evening at Temple Bar' },
    { id: 3, alt: 'Trinity College', placeholder: 'Trinity College Library' },
    { id: 4, alt: 'St. Stephen\'s Green', placeholder: 'Walking through St. Stephen\'s Green' }
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
              An authentic journey from Westlake to Dublin
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
                <span className="text-dublin-accent text-4xl mr-3">?</span>
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
                    Walking Through Dublin's Streets
                  </h3>
                  <p className="text-dublin-gray-600 leading-relaxed">
                    As I explored Dublin's neighborhoods, from the cobblestone paths of Temple Bar to the grand 
                    Georgian squares, I found myself analyzing the city's digital presence at every turn. I was 
                    instinctively noting opportunities to enhance how Dublin tells its story online—connecting 
                    historic landmarks with modern digital experiences, bridging local community engagement with 
                    global tourism appeal.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dublin-primary-dark mb-3">
                    More Than Tourism: A Future Home
                  </h3>
                  <p className="text-dublin-gray-600 leading-relaxed">
                    By the end of my trip, I knew Dublin wasn't just another stamp in my passport—it was potentially 
                    my future home. I began researching living in Ireland, understanding work permit requirements, 
                    and envisioning how my municipal marketing expertise could contribute to Dublin's evolving 
                    digital presence. This wasn't an impulsive decision, but the recognition of an authentic 
                    alignment between my career aspirations and a city that captured my imagination.
                  </p>
                </div>
                
                {/* Quote */}
                <div className="border-l-4 border-dublin-accent pl-6 italic text-dublin-gray-700 my-8">
                  "Some cities you visit, others you know you belong in. Dublin felt like home."
                </div>
                
                {/* Photo Gallery */}
                <div>
                  <h3 className="text-xl font-semibold text-dublin-primary-dark mb-4">
                    Dublin Memories
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {dublinPhotos.map(photo => (
                      <div 
                        key={photo.id} 
                        className="bg-dublin-gray-100 h-40 rounded-lg flex items-center justify-center text-center p-4"
                      >
                        <span className="text-dublin-gray-500 text-sm">{photo.placeholder}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Side: Why Me? */}
            <motion.div
              ref={sectionRef2}
              initial={{ opacity: 0, x: 50 }}
              animate={inView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-dublin-primary mb-6 flex items-center">
                <span className="text-dublin-accent text-4xl mr-3">?</span>
                Why Me?
              </h2>
              
              {/* Profile Photo */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img 
                    src="/1701188728822.jpeg" 
                    alt="Jorden Shevel" 
                    className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-dublin-accent/20"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-dublin-accent text-white text-xs px-2 py-1 rounded-full">
                    Ready for Dublin!
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-dublin-gray-600 leading-relaxed">
                  My journey to Dublin isn't just about seeking any international opportunity—it's about 
                  bringing proven municipal marketing expertise to a city I've genuinely connected with. 
                  My experience in Westlake has prepared me with the exact skills Dublin City Council needs 
                  for its next phase of digital evolution.
                </p>
                
                {/* Interactive Timeline */}
                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-dublin-primary-dark mb-6">
                    Professional Journey
                  </h3>
                  
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-dublin-gray-200"></div>
                    
                    {/* Timeline Items */}
                    {timelineItems.map((item, index) => (
                      <div key={index} className="mb-8 relative">
                        <div 
                          className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center z-10 
                            ${activeTimelineItem === index ? 'bg-dublin-accent' : 'bg-dublin-primary'}`}
                          onClick={() => setActiveTimelineItem(activeTimelineItem === index ? null : index)}
                        >
                          <span className="text-white text-xs font-bold">{item.year.substring(2)}</span>
                        </div>
                        
                        <div className="ml-12">
                          <h4 className="text-lg font-semibold text-dublin-primary-dark">{item.title}</h4>
                          
                          {activeTimelineItem === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.3 }}
                              className="text-dublin-gray-600 mt-2"
                            >
                              {item.description}
                            </motion.div>
                          )}
                        </div>
                      </div>
                    ))}
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
      
      {/* Golf Connection Section */}
      <section ref={sectionRef3} className="section-padding bg-dublin-gray-50">
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
              <div className="bg-dublin-gray-100 h-80 rounded-xl flex items-center justify-center">
                <span className="text-dublin-gray-500">Portmarnock Golf Course</span>
              </div>
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
      
      {/* Irish Connections */}
      <section ref={sectionRef4} className="section-padding">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dublin-primary mb-4">
              Lifelong Friends, Authentic Insights
            </h2>
            <div className="w-20 h-1 bg-dublin-accent mx-auto mb-6"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start mb-6">
                <div className="bg-dublin-gray-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <span className="text-dublin-gray-500">Photo</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dublin-primary-dark">Seán Murphy</h3>
                  <p className="text-dublin-gray-500">Dublin Native, Friend of 8 Years</p>
                </div>
              </div>
              <div className="border-l-4 border-dublin-accent pl-4 italic text-dublin-gray-600">
                "I've known them for years, and their genuine interest in Irish culture goes far beyond the 
                tourist experience. They've taken time to understand our history, politics, and daily life. 
                Dublin would be lucky to have someone with both professional expertise and authentic appreciation 
                for what makes our city special."
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start mb-6">
                <div className="bg-dublin-gray-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <span className="text-dublin-gray-500">Photo</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dublin-primary-dark">Aoife Kelly</h3>
                  <p className="text-dublin-gray-500">Cork Native, University Friend</p>
                </div>
              </div>
              <div className="border-l-4 border-dublin-accent pl-4 italic text-dublin-gray-600">
                "When they told me they were applying for the Dublin City Council position, it made perfect sense. 
                They've been asking me detailed questions about Irish local government and culture for years. This 
                isn't someone looking for any international job—this is someone who has specifically connected with 
                Ireland and has the professional skills to contribute meaningfully."
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-dublin-gray-600 max-w-3xl mx-auto">
              My connection to Ireland isn't just through tourism or research—it's through real relationships 
              with Irish friends who have shared their culture, insights, and perspectives with me over many years. 
              These friendships have given me an authentic understanding of Irish values, humor, and daily life 
              that goes far beyond what any visitor could gain.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Values Alignment & Commitment */}
      <section ref={sectionRef5} className="section-padding bg-dublin-primary text-white">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Values Alignment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6">Why Municipal Marketing Matters</h2>
              
              <p className="leading-relaxed">
                My passion for municipal marketing stems from a fundamental belief: effective communication 
                between local government and citizens creates stronger communities. In Westlake, I've seen 
                how strategic digital engagement can transform residents' relationship with their city government, 
                increasing participation, trust, and community pride.
              </p>
              
              <p className="leading-relaxed">
                This same principle applies to Dublin. While the cultural context differs, the core mission 
                remains: connecting citizens with their city through compelling digital storytelling and 
                accessible information. My American perspective can bring fresh ideas to Dublin's international 
                positioning while respecting and amplifying the city's unique character.
              </p>
              
              <p className="leading-relaxed">
                I understand that place branding isn't just marketing—it's community building. Every social 
                media post, website update, and digital campaign should strengthen Dubliners' connection to 
                their city while also showcasing Dublin's appeal to visitors, investors, and potential residents.
              </p>
            </motion.div>
            
            {/* Commitment Demonstration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Make Ireland Home</h2>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-dublin-accent mb-2">Work Authorization</h3>
                  <p>Critical Skills Employment Permit research completed; employer sponsorship pathway understood</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-dublin-accent mb-2">Housing Research</h3>
                  <p>Neighborhoods identified, rental market understood, realistic budget established</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-dublin-accent mb-2">Relocation Timeline</h3>
                  <p>Ready to relocate within 60 days of offer; remote work possible during permit processing</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-dublin-accent mb-2">Long-term Commitment</h3>
                  <p>Seeking to establish permanent roots in Dublin, not a temporary assignment</p>
                </div>
              </div>
              
              <p className="italic mt-6">
                "This isn't a whim—it's a calculated career and life decision backed by thorough research, 
                genuine connection, and professional readiness."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About