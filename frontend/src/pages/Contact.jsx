import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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

  const itemVariants = {
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

      {/* Hero Section */}
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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8"
            style={{ color: '#000000' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Get in touch with the HEADS Project team. We'd love to hear from you!
          </motion.p>
        </div>
      </motion.div>

      {/* Success Message */}
      {submitSuccess && (
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
            ✅ Your message has been prepared! Your email client should open shortly.
          </div>
        </motion.div>
      )}

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <div className="rounded-2xl shadow-lg p-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Get in Touch</h2>
              <p className="text-lg mb-8" style={{ color: '#000000' }}>
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2c5530' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: '#000000' }}>Email</h3>
                    <a 
                      href="mailto:project.heads.ai@gmail.com"
                      className="text-lg hover:underline transition-colors"
                      style={{ color: '#2c5530' }}
                    >
                      project.heads.ai@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2c5530' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: '#000000' }}>Response Time</h3>
                    <p className="text-lg" style={{ color: '#000000' }}>Within 24-48 hours</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2c5530' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: '#000000' }}>Project Focus</h3>
                    <p className="text-lg" style={{ color: '#000000' }}>AI-assisted depression screening</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Additional Information */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="rounded-2xl shadow-lg p-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>About HEADS Project</h3>
            <p className="text-lg max-w-4xl mx-auto" style={{ color: '#000000' }}>
              The HEADS (Health Evaluation and Assessment for Depression Screening) Project is an innovative research initiative 
              focused on developing AI-assisted tools for early depression screening. Our goal is to create accessible, 
              accurate, and non-invasive methods to help identify individuals who may benefit from mental health support.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
