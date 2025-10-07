import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { speakersData } from "../data/speakers.js";

export default function Announcements() {
  // Use speaker data from external file - easy to modify
  const [speakers] = useState(speakersData);

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDay, setActiveDay] = useState('day1'); // For tabs approach

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch only events data
        const eventsResponse = await axios.get("http://localhost:3001/api/events");
        setEvents(eventsResponse.data);
        console.log('Events loaded:', eventsResponse.data);
        console.log('Events count:', eventsResponse.data.length);
        console.log('Speakers loaded directly from component:', speakers.length);
      } catch (error) {
        console.error("Error fetching events:", error);
        // Show empty state if no data
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [speakers.length]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Function to highlight "Onsite" text with green background
  const highlightOnsite = (text) => {
    if (!text) return text;
    return text.replace(/\bOnsite\b/gi, (match) => 
      `<span style="background-color: #2c5530; color: #ffffff; padding: 2px 6px; border-radius: 4px; font-weight: 600;">${match}</span>`
    );
  };

  // Helper function to get events by day (already sorted by backend)
  const getEventsByDay = (day) => {
    const filteredEvents = events.filter(event => event.day_number === day);
    console.log(`Events for ${day}:`, filteredEvents);
    // Events are already sorted chronologically by the backend
    return filteredEvents;
  };

  // Helper function to get day title
  const getDayTitle = (day) => {
    const titles = {
      'day1': 'Day 1 - Data Privacy, Security, Governance and Sovereignty',
      'day2': 'Day 2 - Methodological Anglocentrism & Cultural Loss',
      'day3': 'Day 3 - Representation, Fairness & Safety'
    };
    return titles[day] || `Day ${day}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#f5f5dc' }}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#f5f5dc' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold" style={{ color: '#000000' }}>HEADS Project</h1>
              </div>
              
              {/* Navigation Links */}
              <nav className="hidden md:flex space-x-8">
                <Link to="/" className="hover:text-gray-600 transition-colors font-medium" style={{ color: '#000000' }}>Home</Link>
                <Link to="/announcements" className="hover:text-gray-600 transition-colors font-medium" style={{ color: '#000000' }}>Announcements</Link>
                <Link to="/blog" className="hover:text-gray-600 transition-colors font-medium" style={{ color: '#000000' }}>Blog</Link>
              </nav>
              
              {/* Contact Us Button */}
              <div className="hidden md:block">
                <Link
                  to="/contact"
                  className="px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: '#2c5530', 
                    color: '#ffffff' 
                  }}
                >
                  Contact Us
                </Link>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button 
                  onClick={toggleMobileMenu}
                  className="hover:text-gray-600 transition-colors" 
                  style={{ color: '#000000' }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden border-t"
              style={{ borderColor: 'rgba(0, 0, 0, 0.2)' }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-4">
                <Link 
                  to="/" 
                  className="block px-4 py-2 hover:bg-opacity-10 transition-colors"
                  style={{ color: '#000000' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/announcements" 
                  className="block px-4 py-2 hover:bg-opacity-10 transition-colors"
                  style={{ color: '#000000' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Announcements
                </Link>
                <Link 
                  to="/blog" 
                  className="block px-4 py-2 hover:bg-opacity-10 transition-colors"
                  style={{ color: '#000000' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/contact" 
                  className="block px-4 py-2 rounded-lg mx-4 mt-4 text-center font-semibold"
                  style={{ 
                    backgroundColor: '#2c5530', 
                    color: '#ffffff' 
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </header>

        <div className="min-h-screen flex items-center justify-center pt-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
            <div className="w-16 h-16 border-4 border-transparent border-t-current rounded-full animate-spin mx-auto mb-4" style={{ borderTopColor: '#000000' }}></div>
            <p className="text-lg" style={{ color: '#000000' }}>Loading speakers...</p>
        </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#f5f5dc' }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#f5f5dc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h1 className="text-2xl font-bold" style={{ color: '#000000' }}>Pilot Phase</h1>
            </div>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-gray-600 transition-colors font-medium" style={{ color: '#000000' }}>Home</Link>
              <Link to="/announcements" className="hover:text-gray-600 transition-colors font-medium" style={{ color: '#000000' }}>Announcements</Link>
              <Link to="/blog" className="hover:text-gray-600 transition-colors font-medium" style={{ color: '#000000' }}>Blog</Link>
            </nav>
            
            {/* Contact Us Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#2c5530', 
                  color: '#ffffff' 
                }}
              >
                Contact Us
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="hover:text-gray-600 transition-colors" 
                style={{ color: '#000000' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden border-t"
            style={{ borderColor: 'rgba(0, 0, 0, 0.2)' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 space-y-4">
              <Link 
                to="/" 
                className="block px-4 py-2 hover:bg-opacity-10 transition-colors"
                style={{ color: '#000000' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/announcements" 
                className="block px-4 py-2 hover:bg-opacity-10 transition-colors"
                style={{ color: '#000000' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Announcements
              </Link>
              <Link 
                to="/blog" 
                className="block px-4 py-2 hover:bg-opacity-10 transition-colors"
                style={{ color: '#000000' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-2 rounded-lg mx-4 mt-4 text-center font-semibold"
                style={{ 
                  backgroundColor: '#2c5530', 
                  color: '#ffffff' 
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* Header Section */}
      <motion.div
        className="py-20 pt-32"
        style={{ backgroundColor: '#f5f5dc' }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: '#000000' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Responsible AI for Psychiatry in India
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl max-w-4xl mx-auto mb-4"
            style={{ color: '#000000' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Navigating Ethical, Legal and Cultural Frontiers
          </motion.p>
          <motion.div
            className="max-w-6xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Event Details Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Date Card */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg border h-full flex flex-col"
                style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#2c5530' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: '#000000' }}>Event Dates</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-lg font-semibold mb-2" style={{ color: '#2c5530' }}>17th - 19th October 2025</p>
                  <p className="text-sm" style={{ color: '#666666' }}>3-Day Workshop</p>
                </div>
              </motion.div>

              {/* Venue Card */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg border h-full flex flex-col"
                style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#2c5530' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: '#000000' }}>Venue</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-sm leading-relaxed" style={{ color: '#000000' }}>
                    Virtual Knowledge Network<br />
                    3rd Floor, Female CAM<br />
                    NIMHANS Campus, Bengaluru
                  </p>
                </div>
              </motion.div>

              {/* Mode Card */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg border h-full flex flex-col"
                style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#2c5530' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: '#000000' }}>Mode</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-lg font-semibold mb-2" style={{ color: '#2c5530' }}>Hybrid</p>
                  <p className="text-sm" style={{ color: '#666666' }}>Zoom link available</p>
                </div>
              </motion.div>
            </div>

            {/* Organizers Section */}
           

            {/* Funding Support */}
            <motion.div
              className="bg-gradient-to-r rounded-xl p-6 shadow-lg border text-center"
              style={{ 
                background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                borderColor: 'rgba(0, 0, 0, 0.1)' 
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-3">
               
                <h3 className="text-lg font-bold text-white">Funding Support</h3>
              </div>
              <p className="text-white text-base leading-relaxed">
                This event is supported by an award from <strong>Neuromatch, Inc.</strong> as part of the 
                <strong> Generative AI for Mental Health Research Accelerator</strong>, funded by <strong>Wellcome Trust Limited</strong>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Schedule Section - APPROACH 1: TABS */}
      <motion.div
        // className="py-16"
        style={{ backgroundColor: '#f5f5dc' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#000000' }}>
              Workshop Schedule
            </h2>
            {/* <p className="text-lg mb-8" style={{ color: '#000000' }}>
              Choose your preferred view
            </p> */}
            
            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="flex rounded-lg p-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                <button
                  onClick={() => setActiveDay('day1')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                    activeDay === 'day1' 
                      ? 'text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                  style={{ 
                    backgroundColor: activeDay === 'day1' ? '#2c5530' : 'transparent'
                  }}
                >
                  Day 1
                </button>
                <button
                  onClick={() => setActiveDay('day2')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                    activeDay === 'day2' 
                      ? 'text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                  style={{ 
                    backgroundColor: activeDay === 'day2' ? '#2c5530' : 'transparent'
                  }}
                >
                  Day 2
                </button>
                <button
                  onClick={() => setActiveDay('day3')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                    activeDay === 'day3' 
                      ? 'text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                  style={{ 
                    backgroundColor: activeDay === 'day3' ? '#2c5530' : 'transparent'
                  }}
                >
                  Day 3
                </button>
                <button
                  onClick={() => setActiveDay('combined')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                    activeDay === 'combined' 
                      ? 'text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                  style={{ 
                    backgroundColor: activeDay === 'combined' ? '#2c5530' : 'transparent'
                  }}
                >
                  Combined View
                </button>
              </div>
            </div>
          </div>

          {/* Day 1 Data */}
          {activeDay === 'day1' && (
            <div className="space-y-4">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>
                  {getDayTitle('day1')}
                </h3>
              </div>
              {getEventsByDay('day1').map((item, index) => (
              <motion.div
                key={index}
                className="rounded-lg p-6"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderColor: 'rgba(0, 0, 0, 0.2)',
                  border: '1px solid'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  {/* Time and Duration */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className="px-3 py-1 rounded-full text-sm font-semibold"
                        style={{ 
                          backgroundColor: '#2c5530', 
                          color: '#ffffff' 
                        }}
                      >
                        {item.time_slot}
                      </div>
                      <div 
                        className="px-3 py-1 rounded-full text-sm"
                        style={{ 
                          backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                          color: '#000000' 
                        }}
                      >
                        {item.duration}
                      </div>
                    </div>
                    <div 
                      className="text-lg font-bold"
                      style={{ color: '#000000' }}
                    >
                      {item.type}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* {item.category && (
                      <div 
                        className="text-sm font-medium mb-2"
                        style={{ color: '#2c5530' }}
                      >
                        {item.category}
                      </div>
                    )} */}
                    {item.title && (
                      <h3 
                        className="text-lg font-semibold mb-2"
                        style={{ color: '#000000' }}
                      >
                        {item.title}
                      </h3>
                    )}
                    {item.speaker && (
                      <div className="mb-2">
                        <span 
                          className="text-sm font-medium"
                          style={{ color: '#000000' }}
                        >
                          Speaker: 
                        </span>
                        <span 
                          className="text-sm ml-1"
                          style={{ color: '#000000' }}
                        >
                          {item.speaker}
                        </span>
                        {item.location && (
                          <span 
                            className="text-sm ml-2"
                            style={{ color: '#000000' }}
                          >
                            ({item.location})
                          </span>
                        )}
                      </div>
                    )}
                    {item.description && (
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: '#000000' }}
                        dangerouslySetInnerHTML={{ __html: highlightOnsite(item.description) }}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          )}

          {/* Day 2 Data */}
          {activeDay === 'day2' && (
            <div className="space-y-4">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>
                  {getDayTitle('day2')}
                </h3>
              </div>
              {getEventsByDay('day2').map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg p-6"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                    border: '1px solid'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    {/* Time and Duration */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div 
                          className="px-3 py-1 rounded-full text-sm font-semibold"
                          style={{ 
                            backgroundColor: '#2c5530', 
                            color: '#ffffff' 
                          }}
                        >
                          {item.time_slot}
                        </div>
                        <div 
                          className="px-3 py-1 rounded-full text-sm"
                          style={{ 
                            backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                            color: '#000000' 
                          }}
                        >
                          {item.duration}
                        </div>
                      </div>
                      <div 
                        className="text-lg font-bold"
                        style={{ color: '#000000' }}
                      >
                        {item.type}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {item.category && (
                        <div 
                          className="text-sm font-medium mb-2"
                          style={{ color: '#2c5530' }}
                        >
                          {item.category}
                        </div>
                      )}
                      {item.title && (
                        <h3 
                          className="text-lg font-semibold mb-2"
                          style={{ color: '#000000' }}
                        >
                          {item.title}
                        </h3>
                      )}
                      {item.speaker && (
                        <div className="mb-2">
                          <span 
                            className="text-sm font-medium"
                            style={{ color: '#000000' }}
                          >
                            Speaker: 
                          </span>
                          <span 
                            className="text-sm ml-1"
                            style={{ color: '#000000' }}
                          >
                            {item.speaker}
                          </span>
                          {item.location && (
                            <span 
                              className="text-sm ml-2"
                              style={{ color: '#000000' }}
                            >
                              ({item.location})
                            </span>
                          )}
                        </div>
                      )}
                      {item.description && (
                        <p 
                          className="text-sm leading-relaxed"
                          style={{ color: '#000000' }}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Day 3 Data */}
          {activeDay === 'day3' && (
            <div className="space-y-4">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>
                  {getDayTitle('day3')}
                </h3>
              </div>
              {getEventsByDay('day3').map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg p-6"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                    border: '1px solid'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    {/* Time and Duration */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div 
                          className="px-3 py-1 rounded-full text-sm font-semibold"
                          style={{ 
                            backgroundColor: '#2c5530', 
                            color: '#ffffff' 
                          }}
                        >
                          {item.time_slot}
                        </div>
                        <div 
                          className="px-3 py-1 rounded-full text-sm"
                          style={{ 
                            backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                            color: '#000000' 
                          }}
                        >
                          {item.duration}
                        </div>
                      </div>
                      <div 
                        className="text-lg font-bold"
                        style={{ color: '#000000' }}
                      >
                        {item.type}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {item.category && (
                        <div 
                          className="text-sm font-medium mb-2"
                          style={{ color: '#2c5530' }}
                        >
                          {item.category}
                        </div>
                      )}
                      {item.title && (
                        <h3 
                          className="text-lg font-semibold mb-2"
                          style={{ color: '#000000' }}
                        >
                          {item.title}
                        </h3>
                      )}
                      {item.speaker && (
                        <div className="mb-2">
                          <span 
                            className="text-sm font-medium"
                            style={{ color: '#000000' }}
                          >
                            Speaker: 
                          </span>
                          <span 
                            className="text-sm ml-1"
                            style={{ color: '#000000' }}
                          >
                            {item.speaker}
                          </span>
                          {item.location && (
                            <span 
                              className="text-sm ml-2"
                              style={{ color: '#000000' }}
                            >
                              ({item.location})
                            </span>
                          )}
                        </div>
                      )}
                      {item.description && (
                        <p 
                          className="text-sm leading-relaxed"
                          style={{ color: '#000000' }}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Combined View */}
          {activeDay === 'combined' && (
            <div className="space-y-8">
              {/* Day 1 */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>
                    {getDayTitle('day1')}
                  </h3>
                </div>
                <div className="space-y-4">
                  {getEventsByDay('day1').map((item, index) => (
                    <motion.div
                      key={`day1-${index}`}
                      className="rounded-lg p-6"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                        borderColor: 'rgba(0, 0, 0, 0.2)',
                        border: '1px solid'
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                      whileHover={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center gap-3 mb-2">
                            <div 
                              className="px-3 py-1 rounded-full text-sm font-semibold"
                              style={{ 
                                backgroundColor: '#2c5530', 
                                color: '#ffffff' 
                              }}
                            >
                              {item.time_slot}
                            </div>
                            <div 
                              className="px-3 py-1 rounded-full text-sm"
                              style={{ 
                                backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                                color: '#000000' 
                              }}
                            >
                              {item.duration}
                            </div>
                          </div>
                          <div 
                            className="text-lg font-bold"
                            style={{ color: '#000000' }}
                          >
                            {item.type}
                          </div>
                        </div>
                        <div className="flex-1">
                          {item.category && (
                            <div 
                              className="text-sm font-medium mb-2"
                              style={{ color: '#2c5530' }}
                            >
                              {item.category}
                            </div>
                          )}
                          {item.title && (
                            <h3 
                              className="text-lg font-semibold mb-2"
                              style={{ color: '#000000' }}
                            >
                              {item.title}
                            </h3>
                          )}
                          {item.speaker && (
                            <div className="mb-2">
                              <span 
                                className="text-sm font-medium"
                                style={{ color: '#000000' }}
                              >
                                Speaker: 
                              </span>
                              <span 
                                className="text-sm ml-1"
                                style={{ color: '#000000' }}
                              >
                                {item.speaker}
                              </span>
                              {item.location && (
                                <span 
                                  className="text-sm ml-2"
                                  style={{ color: '#000000' }}
                                >
                                  ({item.location})
                                </span>
                              )}
                            </div>
                          )}
                          {item.description && (
                            <p 
                              className="text-sm leading-relaxed"
                              style={{ color: '#000000' }}
                            >
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Day 2 */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>
                    {getDayTitle('day2')}
                  </h3>
                </div>
                <div className="space-y-4">
                  {getEventsByDay('day2').map((item, index) => (
                    <motion.div
                      key={`day2-${index}`}
                      className="rounded-lg p-6"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                        borderColor: 'rgba(0, 0, 0, 0.2)',
                        border: '1px solid'
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                      whileHover={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center gap-3 mb-2">
                            <div 
                              className="px-3 py-1 rounded-full text-sm font-semibold"
                              style={{ 
                                backgroundColor: '#2c5530', 
                                color: '#ffffff' 
                              }}
                            >
                              {item.time_slot}
                            </div>
                            <div 
                              className="px-3 py-1 rounded-full text-sm"
                              style={{ 
                                backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                                color: '#000000' 
                              }}
                            >
                              {item.duration}
                            </div>
                          </div>
                          <div 
                            className="text-lg font-bold"
                            style={{ color: '#000000' }}
                          >
                            {item.type}
                          </div>
                        </div>
                        <div className="flex-1">
                          {item.category && (
                            <div 
                              className="text-sm font-medium mb-2"
                              style={{ color: '#2c5530' }}
                            >
                              {item.category}
                            </div>
                          )}
                          {item.title && (
                            <h3 
                              className="text-lg font-semibold mb-2"
                              style={{ color: '#000000' }}
                            >
                              {item.title}
                            </h3>
                          )}
                          {item.speaker && (
                            <div className="mb-2">
                              <span 
                                className="text-sm font-medium"
                                style={{ color: '#000000' }}
                              >
                                Speaker: 
                              </span>
                              <span 
                                className="text-sm ml-1"
                                style={{ color: '#000000' }}
                              >
                                {item.speaker}
                              </span>
                              {item.location && (
                                <span 
                                  className="text-sm ml-2"
                                  style={{ color: '#000000' }}
                                >
                                  ({item.location})
                                </span>
                              )}
                            </div>
                          )}
                          {item.description && (
                            <p 
                              className="text-sm leading-relaxed"
                              style={{ color: '#000000' }}
                            >
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Day 3 */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>
                    {getDayTitle('day3')}
                  </h3>
                </div>
                <div className="space-y-4">
                  {getEventsByDay('day3').map((item, index) => (
                    <motion.div
                      key={`day3-${index}`}
                      className="rounded-lg p-6"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                        borderColor: 'rgba(0, 0, 0, 0.2)',
                        border: '1px solid'
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                      whileHover={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center gap-3 mb-2">
                            <div 
                              className="px-3 py-1 rounded-full text-sm font-semibold"
                              style={{ 
                                backgroundColor: '#2c5530', 
                                color: '#ffffff' 
                              }}
                            >
                              {item.time_slot}
                            </div>
                            <div 
                              className="px-3 py-1 rounded-full text-sm"
                              style={{ 
                                backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                                color: '#000000' 
                              }}
                            >
                              {item.duration}
                            </div>
                          </div>
                          <div 
                            className="text-lg font-bold"
                            style={{ color: '#000000' }}
                          >
                            {item.type}
                          </div>
                        </div>

                        <div className="flex-1">
                          {item.category && (
                            <div 
                              className="text-sm font-medium mb-2"
                              style={{ color: '#2c5530' }}
                            >
                              {item.category}
                            </div>
                          )}
                          {item.title && (
                            <h3 
                              className="text-lg font-semibold mb-2"
                              style={{ color: '#000000' }}
                            >
                              {item.title}
                            </h3>
                          )}
                          {item.speaker && (
                            <div className="mb-2">
                              <span 
                                className="text-sm font-medium"
                                style={{ color: '#000000' }}
                              >
                                Speaker: 
                              </span>
                              <span 
                                className="text-sm ml-1"
                                style={{ color: '#000000' }}
                              >
                                {item.speaker}
                              </span>
                              {item.location && (
                                <span 
                                  className="text-sm ml-2"
                                  style={{ color: '#000000' }}
                                >
                                  ({item.location})
                                </span>
                              )}
                            </div>
                          )}
                          {item.description && (
                            <p 
                              className="text-sm leading-relaxed"
                              style={{ color: '#000000' }}
                            >
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Speakers Section */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#000000' }}>
            Our Distinguished Speakers
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#000000' }}>
            Meet the experts leading the conversation on responsible AI in mental healthcare
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.speaker}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
              
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={speaker.speaker_photo || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face"} 
                    alt={speaker.speaker}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold transition-colors duration-200" style={{ color: '#ffffff' }}>
                      {speaker.speaker}
                    </h3>
                    {speaker.speaker_title && (
                      <p className="text-sm font-medium mt-1" style={{ color: '#ffffff' }}>
                        {speaker.speaker_title}
                      </p>
                    )}
                    {speaker.speaker_affiliation && (
                      <p className="text-sm mt-1" style={{ color: '#ffffff' }}>
                        {speaker.speaker_affiliation}
                      </p>
                    )}
                  </div>
                </div>

         
                <div className="p-6">
                  {speaker.speaker_bio && (
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#000000' }}>
                      {speaker.speaker_bio}
                    </p>
                  )}
                  
                  
                  {(speaker.speaker_google_scholar || speaker.speaker_linkedin || speaker.speaker_twitter || speaker.speaker_website) && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold mb-2" style={{ color: '#000000' }}>Connect:</h4>
                      <div className="flex flex-wrap gap-2">
                        {speaker.speaker_google_scholar && (
                          <motion.a
                            href={speaker.speaker_google_scholar}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-all duration-200 hover:scale-105"
                            style={{ 
                              backgroundColor: '#4285f4', 
                              color: '#ffffff' 
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5s-5.548 1.749-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                            </svg>
                            Scholar
                          </motion.a>
                        )}
                        {speaker.speaker_linkedin && (
                          <motion.a
                            href={speaker.speaker_linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-all duration-200 hover:scale-105"
                            style={{ 
                              backgroundColor: '#0077b5', 
                              color: '#ffffff' 
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            LinkedIn
                          </motion.a>
                        )}
                        {speaker.speaker_twitter && (
                          <motion.a
                            href={speaker.speaker_twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-all duration-200 hover:scale-105"
                            style={{ 
                              backgroundColor: '#1da1f2', 
                              color: '#ffffff' 
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                            Twitter
                          </motion.a>
                        )}
                        {speaker.speaker_website && (
                          <motion.a
                            href={speaker.speaker_website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-all duration-200 hover:scale-105"
                    style={{ 
                      backgroundColor: '#2c5530', 
                      color: '#ffffff' 
                    }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                            Website
                          </motion.a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
        {speakers.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <svg className="w-12 h-12" style={{ color: '#000000' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Speakers Coming Soon</h3>
            <p className="max-w-md mx-auto" style={{ color: '#000000' }}>
              We're assembling an incredible lineup of experts for the HEADS project workshop.
            </p>
          </motion.div>
        )}
      </div> */}
    </div>
  );
}
