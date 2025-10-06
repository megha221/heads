import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

export default function JoinLEE() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    gender: "",
    occupation: "",
    residence: "",
    education: "",
    languages: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLanguageChange = (language) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(lang => lang !== language)
        : [...prev.languages, language]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.age.trim() || !formData.phone.trim() || !formData.gender.trim() || !formData.occupation.trim() || !formData.residence.trim() || !formData.education.trim() || formData.languages.length === 0) {
      setSubmitError("Please fill in all fields and select at least one language");
      return;
    }

    if (isNaN(formData.age) || parseInt(formData.age) < 18 || parseInt(formData.age) > 100) {
      setSubmitError("Please enter a valid age (18-100)");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await axios.post("http://localhost:3001/api/lee/register", formData);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", age: "", phone: "", gender: "", occupation: "", residence: "", education: "", languages: [] });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
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
            Join as Lived Experience Expert
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8"
            style={{ color: '#000000' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Share your lived experience to help us build better mental health tools. Your insights are invaluable to our research.
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
            ✅ Thank you for your interest! We'll be in touch with you soon about joining our LEE program.
          </div>
        </motion.div>
      )}

      {/* Error Message */}
      {submitError && (
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
            ❌ {submitError}
          </div>
        </motion.div>
      )}

      {/* Registration Form */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          className="rounded-2xl shadow-lg p-8"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: 'rgba(0, 0, 0, 0.2)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#000000' }}>
            Registration Form
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderColor: 'rgba(0, 0, 0, 0.3)', 
                  color: '#000000' 
                }}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderColor: 'rgba(0, 0, 0, 0.3)', 
                  color: '#000000' 
                }}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                Age *
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Enter your age"
                min="18"
                max="100"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderColor: 'rgba(0, 0, 0, 0.3)', 
                  color: '#000000' 
                }}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderColor: 'rgba(0, 0, 0, 0.3)', 
                  color: '#000000' 
                }}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                Gender *
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderColor: 'rgba(0, 0, 0, 0.3)', 
                  color: '#000000' 
                }}
                required
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="not-to-specify">Prefer not to specify</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                Current Occupation *
              </label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                placeholder="Enter your current occupation"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderColor: 'rgba(0, 0, 0, 0.3)', 
                  color: '#000000' 
                }}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                Current Residence *
              </label>
              <input
                type="text"
                name="residence"
                value={formData.residence}
                onChange={handleInputChange}
                placeholder="Enter your current city/state/country"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderColor: 'rgba(0, 0, 0, 0.3)', 
                  color: '#000000' 
                }}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                Education *
              </label>
              <select
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderColor: 'rgba(0, 0, 0, 0.3)', 
                  color: '#000000' 
                }}
                required
              >
                <option value="">Select your education level</option>
                <option value="high-school">High School</option>
                <option value="diploma">Diploma</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-3" style={{ color: '#000000' }}>
                Preferred Languages * (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { value: "english", label: "English" },
                  { value: "hindi", label: "Hindi" },
                  { value: "bengali", label: "Bengali" },
                  { value: "telugu", label: "Telugu" },
                  { value: "marathi", label: "Marathi" },
                  { value: "tamil", label: "Tamil" },
                  { value: "gujarati", label: "Gujarati" },
                  { value: "kannada", label: "Kannada" },
                  { value: "malayalam", label: "Malayalam" },
                  { value: "other", label: "Other" }
                ].map((lang) => (
                  <label key={lang.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.languages.includes(lang.value)}
                      onChange={() => handleLanguageChange(lang.value)}
                      className="w-4 h-4 rounded border-2 focus:ring-2 transition-all duration-200"
                      style={{ 
                        borderColor: 'rgba(0, 0, 0, 0.3)',
                        accentColor: '#2c5530'
                      }}
                    />
                    <span className="text-sm" style={{ color: '#000000' }}>
                      {lang.label}
                    </span>
                  </label>
                ))}
              </div>
              {formData.languages.length > 0 && (
                <p className="text-xs mt-2" style={{ color: '#666666' }}>
                  Selected: {formData.languages.join(', ')}
                </p>
              )}
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-semibold px-8 py-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: '#2c5530', 
                color: '#ffffff' 
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </motion.button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm" style={{ color: '#000000' }}>
              By submitting this form, you agree to be contacted about the LEE program. 
              Your information will be kept confidential and used only for research purposes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
