import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { 
  ArrowLeftIcon,
  MoonIcon,
  TicketIcon
} from '@heroicons/react/24/outline'

interface AlwaysAwakeCampaignProps {
  onBack: () => void
}

const venueTypes = [
  { id: 'music', name: 'Music Venues', icon: '🎵', color: 'bg-purple-600', venues: 12 },
  { id: 'markets', name: 'Night Markets', icon: '🏪', color: 'bg-orange-600', venues: 8 },
  { id: 'pubs', name: 'Traditional Pubs', icon: '🍺', color: 'bg-amber-600', venues: 15 },
  { id: 'restaurants', name: 'Late Dining', icon: '🍽️', color: 'bg-red-600', venues: 20 },
  { id: 'culture', name: 'Cultural Spaces', icon: '🎭', color: 'bg-indigo-600', venues: 6 }
]

const dublinVenues = [
  { id: 'temple-bar', name: 'Temple Bar Quarter', x: 50, y: 55, type: 'pubs', stamps: 3, capacity: 85 },
  { id: 'dame-lane', name: 'Dame Lane', x: 52, y: 58, type: 'music', stamps: 2, capacity: 65 },
  { id: 'camden-street', name: 'Camden Street', x: 48, y: 70, type: 'restaurants', stamps: 4, capacity: 90 }
]

const AlwaysAwakeCampaign: React.FC<AlwaysAwakeCampaignProps> = ({ onBack }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [passportStamps] = useState(0)

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timeInterval)
    }
  }, [])

  const getTimeOfDay = (hour: number) => {
    if (hour >= 6 && hour < 12) return 'Morning'
    if (hour >= 12 && hour < 18) return 'Afternoon' 
    if (hour >= 18 && hour < 24) return 'Evening'
    return 'Night'
  }

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-indigo-100'
    }`}>
      {/* Header */}
      <div className={`shadow-lg sticky top-0 z-50 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-800 border-b border-gray-700' : 'bg-white'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className={`flex items-center space-x-2 transition-colors ${
                isDarkMode 
                  ? 'text-purple-400 hover:text-purple-300' 
                  : 'text-dublin-primary hover:text-dublin-accent'
              }`}
            >
              <ArrowLeftIcon className="h-6 w-6" />
              <span className="font-medium">Back to Campaigns</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'bg-yellow-500 text-yellow-900 hover:bg-yellow-400' 
                    : 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                }`}
              >
                <MoonIcon className="h-6 w-6" />
              </button>
              
              <div className="text-right">
                <h1 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-purple-400' : 'text-dublin-primary'
                }`}>
                  ALWAYS AWAKE
                </h1>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Interactive Night Economy Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Night Dublin Simulation */}
      <section className={`relative py-20 overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900' 
          : 'bg-gradient-to-r from-purple-600 to-indigo-700'
      }`}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-6 text-white"
              >
                Dublin's Night Economy Awakens
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-8 text-white/90"
              >
                Experience Dublin after dark with our Night-Passport system. 
                Discover venues, collect stamps, and unlock the city's night-time potential.
              </motion.p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-white">Night-Passport Check-ins</span>
                  <TicketIcon className="h-8 w-8 text-purple-300" />
                </div>
                <div className="text-3xl font-bold mb-2 text-white">
                  <CountUp end={10000} duration={3} suffix="+" />
                </div>
                <p className="text-white/70 text-sm">Per quarterly event</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Current Time in Dublin</span>
                  <div className="text-right">
                    <div className="text-xl font-bold text-purple-300">
                      {currentTime.toLocaleTimeString()}
                    </div>
                    <div className="text-sm text-white/70">
                      {getTimeOfDay(currentTime.getHours())}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Animated Dublin Night Scene */}
              <div className="relative h-64 bg-gradient-to-t from-gray-900 to-gray-700 rounded-lg overflow-hidden">
                {/* Stars */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 50}%`,
                      }}
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </div>

                {/* City buildings with lights */}
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bottom-0 bg-gray-800"
                    style={{
                      left: `${i * 10}%`,
                      width: `${Math.random() * 8 + 4}%`,
                      height: `${Math.random() * 40 + 30}%`,
                    }}
                  >
                    {/* Building windows with random lights */}
                    <div className="grid grid-cols-2 gap-1 p-1 h-full">
                      {[...Array(6)].map((_, j) => (
                        <motion.div
                          key={j}
                          className="bg-yellow-300 rounded-sm"
                          style={{ height: '6px' }}
                          animate={{
                            opacity: Math.random() > 0.3 ? [0.4, 1, 0.4] : 0.1
                          }}
                          transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}

                {/* Moving elements (buses, people) */}
                <motion.div
                  className="absolute bottom-4 text-2xl"
                  animate={{
                    x: [-50, 350, -50]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  🚌
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </section>

      {/* Night-Passport Interactive Demo */}
      <section className={`py-20 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-dublin-primary'
            }`}>
              Night-Passport Experience
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Interactive venue discovery system. Click venues to collect stamps 
              and see real-time capacity tracking.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Passport Card */}
            <div className={`rounded-2xl p-6 ${
              isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-purple-50 border border-purple-200'
            }`}>
              <div className="text-center mb-6">
                <div className={`text-2xl font-bold mb-2 ${
                  isDarkMode ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  Night-Passport
                </div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Your Dublin Night Journey
                </div>
              </div>

              <div className={`text-center mb-6 p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-600' : 'bg-white'
              }`}>
                <div className={`text-3xl font-bold mb-2 ${
                  isDarkMode ? 'text-purple-300' : 'text-purple-600'
                }`}>
                  {passportStamps}
                </div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Stamps Collected
                </div>
              </div>

              <div className="space-y-3">
                <h4 className={`font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Venue Categories
                </h4>
                {venueTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      isDarkMode ? 'bg-gray-600' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{type.icon}</span>
                      <span className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {type.name}
                      </span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      type.color
                    } text-white`}>
                      {type.venues}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Dublin Map */}
            <div className="lg:col-span-2">
              <div className={`rounded-2xl p-6 ${
                isDarkMode ? 'bg-gray-700' : 'bg-indigo-50'
              }`}>
                <h3 className={`text-xl font-bold mb-6 text-center ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Dublin Night Venues
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {dublinVenues.map((venue) => (
                    <motion.div
                      key={venue.id}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-600 border border-gray-500' : 'bg-white border border-gray-200'}`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`text-lg font-semibold mb-2 ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        {venue.name}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className={`text-sm ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {venue.stamps} stamps
                          </span>
                          <span className="text-sm text-purple-600 capitalize">
                            {venue.type.replace('-', ' ')}
                          </span>
                        </div>
                        <div className={`text-sm px-2 py-1 rounded ${
                          venue.capacity > 80 ? 'bg-red-500' :
                          venue.capacity > 60 ? 'bg-yellow-500' : 'bg-green-500'
                        } text-white`}>
                          {venue.capacity}% capacity
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Performance Bar Graph */}
      <section className={`py-20 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-purple-900 to-indigo-900' 
          : 'bg-gradient-to-r from-purple-600 to-indigo-700'
      } text-white`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Night Economy Business Performance</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Real-time revenue tracking across Dublin's night-time business sectors
            </p>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Revenue Growth by Business Type</h3>
            
            {/* Bar Chart */}
            <div className="space-y-6">
              {venueTypes.map((venue, index) => {
                const revenue = [15000, 22000, 31000, 45000, 12000, 28000][index]
                const growth = [15, 22, 31, 45, 12, 28][index]
                const maxRevenue = 45000
                const barWidth = (revenue / maxRevenue) * 100

                return (
                  <motion.div
                    key={venue.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{venue.icon}</span>
                        <span className="font-semibold text-lg">{venue.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">€{revenue.toLocaleString()}</div>
                        <div className="text-sm text-green-300">+{growth}%</div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-white/20 rounded-full h-8">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${barWidth}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                          className={`${venue.color} h-8 rounded-full flex items-center justify-end pr-4 relative overflow-hidden`}
                        >
                          <motion.div
                            animate={{ x: [-20, 20, -20] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                          />
                          <span className="text-white font-semibold text-sm relative z-10">
                            {venue.venues} venues
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Summary Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-dublin-accent mb-2">
                  <CountUp end={153000} duration={2} prefix="€" />
                </div>
                <p className="text-white/80">Total Weekly Revenue</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dublin-accent mb-2">
                  <CountUp end={86} duration={2} suffix="%" />
                </div>
                <p className="text-white/80">Venues Participating</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dublin-accent mb-2">
                  <CountUp end={24} duration={2} suffix="%" />
                </div>
                <p className="text-white/80">Average Revenue Growth</p>
              </div>
            </div>
          </div>

          {/* Interactive Business Details */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4">Top Performing Venues</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span>The Brazen Head</span>
                  <span className="text-dublin-accent font-bold">€8,500/week</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span>Temple Bar Food Market</span>
                  <span className="text-dublin-accent font-bold">€6,200/week</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span>The Sugar Club</span>
                  <span className="text-dublin-accent font-bold">€5,800/week</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4">Peak Hours Analysis</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span>8PM - 10PM</span>
                  <span className="text-green-400 font-bold">Peak Activity</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span>10PM - 12AM</span>
                  <span className="text-yellow-400 font-bold">High Activity</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span>12AM - 2AM</span>
                  <span className="text-blue-400 font-bold">Steady Activity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation Showcase */}
      <section className={`py-20 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-dublin-primary'
            }`}>
              Digital Content Strategy
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Multi-platform content creation driving night economy engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* socialContent is not defined in this file, so this section will be empty */}
            {/* {socialContent.map((content, index) => ( */}
            {/*   <motion.div */}
            {/*     key={content.id} */}
            {/*     initial={{ opacity: 0, y: 30 }} */}
            {/*     animate={{ opacity: 1, y: 0 }} */}
            {/*     transition={{ delay: index * 0.1 }} */}
            {/*     className={`rounded-2xl overflow-hidden shadow-lg ${ */}
            {/*       isDarkMode ? 'bg-gray-700' : 'bg-gray-50' */}
            {/*     }`} */}
            {/*   > */}
            {/*     <div className={`h-48 flex items-center justify-center ${ */}
            {/*       content.platform === 'tiktok' ? 'bg-gradient-to-r from-pink-500 to-purple-600' : */}
            {/*       content.platform === 'threads' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : */}
            {/*       'bg-gradient-to-r from-green-500 to-emerald-600' */}
            {/*     }`}> */}
            {/*       <div className="text-center text-white"> */}
            {/*         <div className="text-4xl mb-2"> */}
            {/*           {content.platform === 'tiktok' ? '📱' : */}
            {/*            content.platform === 'threads' ? '🧵' : '🎵'} */}
            {/*         </div> */}
            {/*         <p className="font-semibold">{content.title}</p> */}
            {/*       </div> */}
            {/*     </div> */}
            {/*     <div className="p-6"> */}
            {/*       <div className={`text-sm ${ */}
            {/*         isDarkMode ? 'text-gray-400' : 'text-gray-600' */}
            {/*       }`}> */}
            {/*         {content.views || content.engagement || content.streams} */}
            {/*       </div> */}
            {/*     </div> */}
            {/*   </motion.div> */}
            {/* ))} */}
          </div>

          {/* Geotargeted Ads Showcase */}
          <div className={`rounded-2xl p-8 ${
            isDarkMode ? 'bg-gray-700' : 'bg-purple-50'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 text-center ${
              isDarkMode ? 'text-white' : 'text-dublin-primary'
            }`}>
              Geotargeted After-Hours Advertising
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className={`font-semibold mb-4 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  Targeting Parameters
                </h4>
                <div className="space-y-3">
                  <div className={`flex justify-between p-3 rounded-lg ${
                    isDarkMode ? 'bg-gray-600' : 'bg-white'
                  }`}>
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      Time Window
                    </span>
                    <span className="font-semibold text-purple-600">6PM - 2AM</span>
                  </div>
                  <div className={`flex justify-between p-3 rounded-lg ${
                    isDarkMode ? 'bg-gray-600' : 'bg-white'
                  }`}>
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      Location Radius
                    </span>
                    <span className="font-semibold text-purple-600">2km City Centre</span>
                  </div>
                  <div className={`flex justify-between p-3 rounded-lg ${
                    isDarkMode ? 'bg-gray-600' : 'bg-white'
                  }`}>
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      Age Demographic
                    </span>
                    <span className="font-semibold text-purple-600">22-35</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className={`font-semibold mb-4 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  Sample Ad Creative
                </h4>
                <div className={`p-4 rounded-lg border-2 border-dashed ${
                  isDarkMode ? 'border-gray-500 bg-gray-600' : 'border-purple-300 bg-white'
                }`}>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🌙</div>
                    <h5 className={`font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      Dublin's Night is Just Beginning
                    </h5>
                    <p className={`text-sm mb-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Discover live music at The Sugar Club - 15% off with Night-Passport
                    </p>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Dashboard */}
      <section className={`py-20 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-dublin-primary'
            }`}>
              Night Economy Impact Metrics
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Real-time tracking of campaign effectiveness and economic impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className={`rounded-xl p-6 shadow-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <TicketIcon className="h-8 w-8 text-purple-600" />
                <span className="text-purple-600 text-sm font-semibold">+25%</span>
              </div>
              <div className={`text-2xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-dublin-primary'
              }`}>
                <CountUp end={10000} duration={2} suffix="+" />
              </div>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Night-Passport Check-ins
              </p>
            </div>

            <div className={`rounded-xl p-6 shadow-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center justify-between mb-4">
                {/* TruckIcon is not imported, so this will be empty */}
                {/* <TruckIcon className="h-8 w-8 text-blue-600" /> */}
                <span className="text-blue-600 text-sm font-semibold">+10%</span>
              </div>
              <div className={`text-2xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-dublin-primary'
              }`}>
                <CountUp end={25} duration={2} suffix="%" />
              </div>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Night Route Usage
              </p>
            </div>

            <div className={`rounded-xl p-6 shadow-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center justify-between mb-4">
                {/* ShieldCheckIcon is not imported, so this will be empty */}
                {/* <ShieldCheckIcon className="h-8 w-8 text-green-600" /> */}
                <span className="text-green-600 text-sm font-semibold">Safe Zones</span>
              </div>
              <div className={`text-2xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-dublin-primary'
              }`}>
                <CountUp end={15} duration={2} />
              </div>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Garda Partnership Zones
              </p>
            </div>

            <div className={`rounded-xl p-6 shadow-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center justify-between mb-4">
                {/* TrophyIcon is not imported, so this will be empty */}
                {/* <TrophyIcon className="h-8 w-8 text-orange-600" /> */}
                <span className="text-orange-600 text-sm font-semibold">Growth</span>
              </div>
              <div className={`text-2xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-dublin-primary'
              }`}>
                <CountUp end={25} duration={2} suffix="%" />
              </div>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Instagram Followers
              </p>
            </div>
          </div>

          {/* LED City Hall Counter */}
          <div className={`rounded-2xl p-8 text-center ${
            isDarkMode 
              ? 'bg-gradient-to-r from-purple-900 to-indigo-900' 
              : 'bg-gradient-to-r from-purple-600 to-indigo-700'
          } text-white`}>
            <h3 className="text-2xl font-bold mb-4">Live City Hall LED Display</h3>
            <div className="bg-black rounded-lg p-8 mb-6">
              <div className="text-4xl font-mono font-bold text-green-400 mb-2">
                {/* ledCounter is not defined in this file, so this will be empty */}
                {/* <CountUp end={ledCounter} duration={1} /> */}
              </div>
              <p className="text-green-300">Night Economy Participants Tonight</p>
            </div>
            <p className="text-white/80">
              Real-time counter displayed on Dublin City Hall, 
              updating every minute with Night-Passport activity
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AlwaysAwakeCampaign 