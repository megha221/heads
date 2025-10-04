import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        // Fallback data for demo
        setBlogs([
          {
            id: 1,
            title: "Welcome to DCNet 2025",
            content: "We are thrilled to welcome you to the premier conference on Data Communication and Networking. This year promises to be our biggest event yet with cutting-edge research presentations, hands-on workshops, and networking opportunities.",
            created_at: "2025-01-15T10:00:00Z",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop&crop=center"
          },
          {
            id: 2,
            title: "Networking Best Practices",
            content: "Effective networking is crucial for career growth in the tech industry. Here are some tips to make the most of your conference experience: 1) Prepare your elevator pitch, 2) Bring plenty of business cards, 3) Attend social events, 4) Follow up with new connections.",
            created_at: "2025-01-10T14:30:00Z",
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop&crop=center"
          },
          {
            id: 3,
            title: "Future of Data Communication",
            content: "The landscape of data communication is rapidly evolving with the advent of 5G, edge computing, and quantum networking. This blog explores the emerging trends and technologies that will shape the future of our field.",
            created_at: "2025-01-05T09:15:00Z",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;

    setSubmitting(true);
    try {
      await axios.post("http://localhost:5000/api/blogs", form);
      setForm({ title: "", content: "" });
      setShowForm(false);
      
      // Refresh blogs
      const response = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error creating blog:", error);
      // For demo purposes, add to local state
      const newBlog = {
        id: Date.now(),
        title: form.title,
        content: form.content,
        created_at: new Date().toISOString()
      };
      setBlogs([newBlog, ...blogs]);
      setForm({ title: "", content: "" });
      setShowForm(false);
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading blog posts...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header Section */}
      <motion.div
        className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 text-white py-20"
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
            Conference Blog
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-purple-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Share insights, experiences, and thoughts about data communication and networking.
          </motion.p>
          
          {/* Write Blog Button */}
          <motion.button
            onClick={() => setShowForm(!showForm)}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showForm ? "Cancel" : "Write New Post"}
          </motion.button>
        </div>
      </motion.div>

      {/* Blog Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Blog Post</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your blog title..."
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  <textarea
                    placeholder="Write your blog post content..."
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                    required
                  />
                </div>
                
                <div className="flex gap-4">
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {submitting ? "Publishing..." : "Publish Post"}
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-300 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop&crop=center"} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">DC</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">DCNet Conference</p>
                      <p className="text-xs text-white/80">{formatDate(blog.created_at)}</p>
                    </div>
                  </div>
                  <h2 className="text-white text-xl font-bold">
                    {blog.title}
                  </h2>
                </div>
              </div>

              <div className="p-8">
                {/* Blog Content */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {blog.content}
                </p>

                {/* Blog Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <motion.button
                      className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="text-sm">Like</span>
                    </motion.button>
                    
                    <motion.button
                      className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="text-sm">Comment</span>
                    </motion.button>
                  </div>
                  
                  <motion.button
                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={`/blog/${blog.id}`}>Read More</Link>
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {blogs.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">No Blog Posts Yet</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-6">
              Be the first to share your thoughts and insights about the conference.
            </p>
            <motion.button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Write First Post
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
