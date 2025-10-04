import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/announcements");
        setAnnouncements(response.data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
        // Fallback data for demo
        setAnnouncements([
          {
            id: 1,
            title: "Workshop Registration Open",
            description: "Registration for our hands-on workshops is now open. Limited seats available! Join us for intensive sessions on cutting-edge networking technologies.",
            created_at: "2025-01-15T10:00:00Z",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop&crop=center"
          },
          {
            id: 2,
            title: "Keynote Speaker Announcement",
            description: "We are excited to announce Dr. Sarah Johnson as our keynote speaker for DCNet 2025. Dr. Johnson will present on 'The Future of Quantum Networking'.",
            created_at: "2025-01-10T14:30:00Z",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center"
          },
          {
            id: 3,
            title: "Call for Papers Extended",
            description: "The deadline for paper submissions has been extended to March 15th, 2025. Submit your research on data communication and networking innovations.",
            created_at: "2025-01-05T09:15:00Z",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading announcements...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Conference Announcements
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Stay updated with the latest workshop updates, speaker announcements, and conference news.
          </motion.p>
        </div>
      </motion.div>

      {/* Announcements Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {announcements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Card Header with Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={announcement.image || "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop&crop=center"} 
                    alt={announcement.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <motion.div
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-blue-100 text-sm font-medium">
                      {formatDate(announcement.created_at)}
                    </span>
                    <h3 className="text-white text-xl font-bold group-hover:text-blue-100 transition-colors duration-200 mt-1">
                      {announcement.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {announcement.description}
                  </p>
                  
                  {/* Action Button */}
                  <motion.button
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Read More
                  </motion.button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-10">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {announcements.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">No Announcements Yet</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Check back soon for the latest conference updates and workshop announcements.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
