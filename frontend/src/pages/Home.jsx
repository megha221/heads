import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
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
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
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
          
          {/* Project Description Banner */}
          {/* <div className="py-6 border-t" style={{ borderColor: 'rgba(239, 243, 223, 0.2)' }}>
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2" style={{ color: 'rgb(239, 243, 223)' }}>
                Human-in-the-loop Evaluation of Assisted Depression Screening
              </h2>
              <p className="text-sm leading-relaxed max-w-4xl mx-auto" style={{ color: 'rgb(239, 243, 223)' }}>
                A collaborative research initiative between <strong>NIMHANS Bengaluru</strong>, <strong>IIT Kharagpur</strong>, and <strong>LGBRIMH Tezpur</strong> 
                to develop culturally sensitive AI-assisted depression screening tools. Our project prioritizes <strong>Lived Experience Expert (LEE)</strong> 
                involvement, ensuring human oversight and cultural sensitivity in mental health diagnosis.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs" style={{ color: 'rgb(239, 243, 223)' }}>
                <span className="px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(239, 243, 223, 0.1)' }}>
                  🎤 Multilingual ASR System
                </span>
                <span className="px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(239, 243, 223, 0.1)' }}>
                  🧠 AI Diagnosis Support
                </span>
                <span className="px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(239, 243, 223, 0.1)' }}>
                  👥 Lived Experience Integration
                </span>
                <span className="px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(239, 243, 223, 0.1)' }}>
                  🌐 5 Languages Supported
                </span>
                <span className="px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(239, 243, 223, 0.1)' }}>
                  📊 5000+ Real-world Interviews
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </header>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-15"
          style={{ backgroundColor: 'rgb(213, 222, 197)' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-15"
          style={{ backgroundColor: 'rgb(213, 222, 197)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full mix-blend-multiply filter blur-xl opacity-10"
          style={{ backgroundColor: 'rgb(213, 222, 197)' }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Hero Section with Abstract Gradient Background */}
      <div 
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32"
        style={{ 
          backgroundColor: '#f5f5dc',
          background: `
            linear-gradient(135deg, rgba(44, 85, 48, 0.3) 0%, rgba(245, 245, 220, 0.6) 25%, rgba(44, 85, 48, 0.2) 50%, rgba(245, 245, 220, 0.7) 75%, rgba(44, 85, 48, 0.25) 100%),
            linear-gradient(45deg, transparent 20%, rgba(44, 85, 48, 0.15) 20%, rgba(44, 85, 48, 0.15) 80%, transparent 80%),
            linear-gradient(-45deg, transparent 20%, rgba(44, 85, 48, 0.1) 20%, rgba(44, 85, 48, 0.1) 80%, transparent 80%),
            radial-gradient(circle at 20% 80%, rgba(44, 85, 48, 0.2) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(44, 85, 48, 0.18) 0%, transparent 60%),
            radial-gradient(circle at 40% 40%, rgba(44, 85, 48, 0.15) 0%, transparent 60%)
          `
        }}
      >
        {/* Abstract Lines Overlay */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              linear-gradient(90deg, transparent 0%, rgba(44, 85, 48, 0.25) 15%, transparent 30%, rgba(44, 85, 48, 0.2) 45%, transparent 60%, rgba(44, 85, 48, 0.22) 75%, transparent 90%, rgba(44, 85, 48, 0.18) 100%),
              linear-gradient(0deg, transparent 0%, rgba(44, 85, 48, 0.15) 20%, transparent 40%, rgba(44, 85, 48, 0.18) 60%, transparent 80%, rgba(44, 85, 48, 0.12) 100%)
            `,
            backgroundSize: '180px 180px, 120px 120px'
          }}
        ></div>
        
        {/* Subtle overlay for better text readability */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(245, 245, 220, 0.2)' }}
        ></div>
      {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
          <div className="max-w-4xl mx-auto">
            
            {/* Trusted Patients Badge */}
        <motion.div
              className="flex items-center justify-center space-x-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
              {/* <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                    style={{ backgroundColor: `hsl(${i * 60}, 70%, 60%)` }}
                  >
                    <div className="w-full h-full bg-gray-300"></div>
                  </div>
                ))}
              </div> */}
              <div className="px-6 py-3 rounded-lg font-medium text-center" style={{ backgroundColor: '#2c5530', color: '#ffffff', fontSize: '1.1rem' }}>
                This project was supported by an award from Neuromatch, Inc. as part of the Generative AI for Mental Health Research Accelerator, funded by Wellcome Trust Limited.
              </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ color: '#000000' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
               Human-in-the-loop Evaluation of Assisted Depression Screening (HEADS)
          </motion.h1>

          {/* Subtitle */}
          <motion.p
              className="text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
              style={{ color: '#000000' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
              A collaborative research initiative developing culturally sensitive AI-assisted depression screening tools 
              with Lived Experience Expert (LEE) involvement, ensuring human oversight and cultural sensitivity 
              in mental health diagnosis across multiple languages and communities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              to="/announcements"
                className="flex items-center px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ 
                  backgroundColor: '#2c5530', 
                  color: '#ffffff' 
                }}
              >
                <span>View Project Updates</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
            
            <Link
              to="/blog"
                className="flex items-center px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#8b7355', 
                  color: '#ffffff' 
                }}
              >
                <span>Join as LEE</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
            </motion.div>
          </div>
        </div>


        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: 'rgba(0, 0, 0, 0.3)' }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 rounded-full mt-2"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Made in Framer Style Badge */}
        {/* <motion.div
          className="absolute bottom-8 right-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div 
            className="px-3 py-2 rounded-lg text-sm font-medium"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, .8)', 
              color: 'rgb(255, 255, 255)' 
            }}
          >
            Made with React
          </div>
        </motion.div> */}
      </div>

      {/* Stats Section */}
      {/* <motion.section
        className="py-20"
        style={{ backgroundColor: '#f5f5dc' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {[
              { number: "5000", label: "Real-world Interviews" },
              { number: "3000", label: "Synthetic Transcripts" },
              { number: "5", label: "Languages Supported" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              >
                <div className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: '#000000' }}>
                  {stat.number}
                </div>
                <div className="text-lg" style={{ color: '#000000' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section> */}

      {/* About Section - Hearts Unite */}
      <motion.section
        className="relative py-20"
        style={{ backgroundColor: '#f5f5dc' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6" style={{ color: '#000000' }}>
              About HEADS
            </h2>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Multilingual AI Support",
                description: "Accessible mental health tools, fostering resilience & encouraging individuals to embrace their mental health journey through culturally sensitive AI assistance.",
                
              },
              {
                title: "Research Collaboration",
                description: "Essential support and resources, fostering mental wellness and connection for researchers navigating complex mental health challenges.",
               
              },
              {
                title: "Lived Experience Integration",
                description: "Embedding personal experience of mental health challenges, ensuring effective , ethical AI technologies grounded in real world needs.",
          
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: 'rgba(0, 0, 0, 0.2)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                {/* <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div> */}
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>
                    {service.title}
                  </h3>
                  <p className="leading-relaxed mb-6" style={{ color: '#000000' }}>
                    {service.description}
                  </p>
                  
                  {/* Read More Button */}
                  {/* <button className="flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#2c5530' }}
                  >
                    <span className="font-semibold" style={{ color: '#ffffff' }}>Read More</span>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#2c5530' }}
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#ffffff' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Lived Experience Experts Section */}
      <motion.section
        className="relative py-20"
        style={{ backgroundColor: '#f5f5dc' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
              Lived Experience Experts (LEEs)
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#000000' }}>
              The heart of our project lies in the invaluable insights from those who have experienced 
              depression and mental health challenges firsthand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Who Are LEEs?</h3>
                <p className="leading-relaxed" style={{ color: '#000000' }}>
                  Lived Experience Experts are individuals who have personally experienced depression 
                  or other mental health difficulties. Your personal experience provides insights that 
                  books and machines cannot capture. You don't need professional training - what matters 
                  most is your willingness, openness, and interest in helping others.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Your Role</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mr-3 mt-2" style={{ backgroundColor: '#000000' }}></div>
                    <span style={{ color: '#000000' }}>Join co-design sessions to test interview questions and review translations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mr-3 mt-2" style={{ backgroundColor: '#000000' }}></div>
                    <span style={{ color: '#000000' }}>Spot mistakes in computer outputs that could change meanings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mr-3 mt-2" style={{ backgroundColor: '#000000' }}></div>
                    <span style={{ color: '#000000' }}>Guide us on handling sensitive situations and cultural contexts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mr-3 mt-2" style={{ backgroundColor: '#000000' }}></div>
                    <span style={{ color: '#000000' }}>Be a voice for others with depression in the community</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#000000' }}>Engagement Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center" style={{ color: '#000000' }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                      <span className="text-sm font-bold">📅</span>
                    </div>
                    <div>
                      <div className="font-semibold">Duration</div>
                      <div className="text-sm">Pilot phase until November 2025</div>
                    </div>
                  </div>
                  <div className="flex items-center" style={{ color: '#000000' }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                      <span className="text-sm font-bold">⏰</span>
                    </div>
                    <div>
                      <div className="font-semibold">Frequency</div>
                      <div className="text-sm">Once every ~2 weeks</div>
                    </div>
                  </div>
                  {/* <div className="flex items-center" style={{ color: '#000000' }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                      <span className="text-sm font-bold">💰</span>
                    </div>
                    <div>
                      <div className="font-semibold">Compensation</div>
                      <div className="text-sm">₹3,000/day in-person, ₹1,500 online</div>
                    </div>
                  </div> */}
                  <div className="flex items-center" style={{ color: '#000000' }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                      <span className="text-sm font-bold">🔒</span>
                    </div>
                    <div>
                      <div className="font-semibold">Privacy</div>
                      <div className="text-sm">Complete confidentiality maintained</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#000000' }}>Lived Experience Advisory Panel (LEAP)</h3>
                <p className="leading-relaxed" style={{ color: '#000000' }}>
                  Join our 10-15 member advisory panel with diverse backgrounds. We'll coordinate through 
                  WhatsApp/Google groups with BNBR (Be Nice and Be Respectful) guidelines. Your participation 
                  is completely voluntary, and you can withdraw at any time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* LEE Contribution Section */}
      <motion.section
        className="relative py-20"
        style={{ backgroundColor: '#f5f5dc' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* How LEEs Contribute Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
              How LEEs Contribute
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: "💬",
                title: "Co-Design",
                description: "Review interview questions and styles to ensure they feel supportive and natural",
                color: "from-purple-500 to-purple-700"
              },
              {
                icon: "🌐",
                title: "Translation Check", 
                description: "Verify that emotional meaning isn't lost across languages",
                color: "from-blue-500 to-blue-700"
              },
              {
                icon: "🔍",
                title: "Quality Control",
                description: "Spot AI mistakes that could change critical meanings",
                color: "from-blue-500 to-blue-700"
              },
              {
                icon: "🛡️",
                title: "Safeguarding",
                description: "Guide handling of self-harm, stigma, and private feelings",
                color: "from-blue-500 to-blue-700"
              }
            ].map((contribution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${contribution.color} flex items-center justify-center`}>
                    <span className="text-white text-2xl">{contribution.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>{contribution.title}</h3>
                  <p className="leading-relaxed" style={{ color: '#000000' }}>{contribution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

           {/* Why LEEs Are Essential Section */}
      <motion.section
        className="relative py-20"
        style={{ backgroundColor: '#f5f5dc' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12" style={{ color: '#000000' }}>
              Why LEEs Are Essential
            </h2>
            
            <div className="space-y-6">
              {[
                "Catch critical errors machines miss (like \"not sad\" becoming \"sad\")",
                "Ensure translations preserve emotional meaning",
                "Guide respectful handling of sensitive topics",
                "Bridge the gap between clinical language and lived reality",
                "Advocate for cultural sensitivity and ethical standards"
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0" style={{ backgroundColor: '#2c5530' }}>
                    <span className="text-sm" style={{ color: '#ffffff' }}>✓</span>
                  </div>
                  <span className="text-lg leading-relaxed" style={{ color: '#000000' }}>{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>


          {/* Together We Build Better Care Banner */}
          <motion.div
            className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
              Together, We Build Better Care
            </h2>
            <div className="text-xl max-w-4xl mx-auto" style={{ color: '#000000' }}>
              <span className="font-semibold">Your lived experience</span>
              <span className="mx-4">+</span>
              <span className="font-semibold">Our AI research</span>
              <span className="mx-4">=</span>
              <span className="font-semibold">Mental health tools that truly understand and help</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

     
      {/* Collaborative Institutions Section */}
      <motion.section
        className="relative py-20"
        style={{ backgroundColor: '#f5f5dc' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
              Collaborative Partners
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#000000' }}>
              A powerful collaboration bringing together expertise from mental health, technology, and research.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "NIMHANS",
                fullName: "National Institute of Mental Health and Neuro Sciences",
                location: "Bengaluru",
                role: "Clinical Expertise & Mental Health Research",
                description: "Leading mental health institute providing clinical expertise, patient care protocols, and research validation for depression screening methodologies.",
                color: "from-blue-600 to-blue-800"
              },
              {
                name: "IIT Kharagpur",
                fullName: "Indian Institute of Technology",
                location: "Kharagpur",
                role: "AI Technology Development",
                description: "Pioneering AI research and development, focusing on multilingual speech recognition, natural language processing, and interpretable machine learning systems.",
                color: "from-purple-600 to-purple-800"
              },
              {
                name: "LGBRIMH",
                fullName: "Lokopriya Gopinath Bordoloi Regional Institute of Mental Health",
                location: "Tezpur",
                role: "Regional Mental Health & Cultural Context",
                description: "Regional mental health expertise ensuring cultural sensitivity, local language support, and community-centered approach to mental health care.",
                color: "from-green-600 to-green-800"
              }
            ].map((institution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  {/* <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${institution.color} flex items-center justify-center`}>
                    <span className="text-white text-xl font-bold">{institution.name.charAt(0)}</span>
                  </div> */}
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>{institution.name}</h3>
                  <p className="mb-2" style={{ color: '#000000' }}>{institution.fullName}</p>
                  <p className="text-sm mb-4" style={{ color: '#000000' }}>{institution.location}</p>
                  <div className={`bg-gradient-to-r ${institution.color} text-white px-4 py-2 rounded-full text-sm font-medium mb-4`}>
                    {institution.role}
                </div>
                </div>
                <p className="leading-relaxed text-center" style={{ color: '#000000' }}>
                  {institution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Project Deliverables Section */}
      {/* <motion.section
        className="relative py-20"
        style={{ backgroundColor: '#f5f5dc' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
              Key Deliverables
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#000000' }}>
              Comprehensive datasets and systems for advancing depression screening technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "5000",
                title: "Real-world Interviews",
                description: "Annotated datasets from semi-structured ICD-11 interviews by trained psychiatrists"
              },
              {
                number: "3000",
                title: "Synthetic Transcripts",
                description: "Simulated edge cases for comprehensive model training and validation"
              },
              {
                number: "5000",
                title: "Audio Recordings",
                description: "With speaker diarisation for multilingual speech recognition development"
              },
              {
                number: "5",
                title: "Languages",
                description: "English, Hindi, Bangla, Assamese, and Kannada support"
              }
            ].map((deliverable, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold mb-4" style={{ color: '#000000' }}>{deliverable.number}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>{deliverable.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#000000' }}>{deliverable.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      {/* Research Approach Section */}
      {/* <motion.section
        className="relative py-20"
        style={{ backgroundColor: '#f5f5dc' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
              Research Approach
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#000000' }}>
              Systematic methodology ensuring ethical, culturally sensitive, and clinically validated outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: "Phase 1",
                title: "Data Collection & LEE Engagement",
                timeline: "Current - Nov 2025",
                activities: ["Semi-structured ICD-11 interviews by trained psychiatrists", "LEE co-design sessions (5-6 total)", "Adaptive sampling across languages and demographics", "Secure anonymization protocols", "LEAP formation and coordination"]
              },
              {
                phase: "Phase 2",
                title: "Model Development & Validation",
                timeline: "Ongoing",
                activities: ["Parameter-efficient fine-tuning of open-source models", "LEE-guided translation validation", "Stratified validation with LEE feedback", "Reasoning capability integration", "Cultural sensitivity testing"]
              },
              {
                phase: "Phase 3",
                title: "Clinical Validation & Deployment",
                timeline: "Future Phase",
                activities: ["Clinical validation studies with LEE oversight", "Human-in-the-loop testing", "Privacy-preserving deployment", "Continuous monitoring and LEE feedback", "Community impact assessment"]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>{phase.phase}</h3>
                  <p className="mb-4" style={{ color: '#000000' }}>{phase.timeline}</p>
                  <div className="px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: '#2c5530', color: '#ffffff' }}>
                    {phase.title}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {phase.activities.map((activity, activityIndex) => (
                    <motion.li
                      key={activityIndex}
                      className="flex items-center"
                      style={{ color: '#000000' }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: activityIndex * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#000000' }}></div>
                      {activity}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      {/* Call to Action Section */}
      <motion.section
        className="relative py-20"
        style={{ backgroundColor: '#f5f5dc' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-white rounded-3xl p-12 border border-gray-200 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
              Join Our Research Initiative
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#000000' }}>
              Be part of advancing mental health diagnosis through innovative AI technology. 
              Learn more about our research and potential collaboration opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/announcements"
                className="font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#2c5530', 
                  color: '#ffffff' 
                }}
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="border-2 font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
                style={{ 
                  borderColor: '#000000', 
                  color: '#000000',
                  backgroundColor: 'transparent'
                }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="relative py-12 border-t"
        style={{ backgroundColor: '#f5f5dc', borderColor: 'rgba(0, 0, 0, 0.2)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>HEADS Project</h3>
              <p className="mb-6 max-w-md" style={{ color: '#000000' }}>
                Human-in-the-loop Evaluation of Assisted Depression Screening - 
                Advancing mental health diagnosis through AI while ensuring human oversight.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "Facebook", "Instagram"].map((social, index) => (
                  <motion.div
                    key={social}
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-sm font-medium" style={{ color: '#000000' }}>{social[0]}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#000000' }}>Project Areas</h4>
              <ul className="space-y-2">
                {["ASR Development", "Translation Module", "Diagnosis System", "Data Collection"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="transition-colors duration-200" style={{ color: '#000000' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#000000' }}>Contact</h4>
              <ul className="space-y-2" style={{ color: '#000000' }}>
                <li>heads.project@research.org</li>
                <li>Mental Health Research</li>
                <li>Multilingual AI Systems</li>
                <li>Human-in-the-Loop AI</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: 'rgba(0, 0, 0, 0.2)' }}>
            <p style={{ color: '#000000' }}>
              © 2025 HEADS Project. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
