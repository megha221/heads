import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // For demo purposes, we'll use mock data
        // In a real app, you'd fetch: const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        
        const mockBlogs = [
          {
            id: 1,
            title: "Welcome to DCNet 2025",
            content: `We are thrilled to welcome you to the premier conference on Data Communication and Networking. This year promises to be our biggest event yet with cutting-edge research presentations, hands-on workshops, and networking opportunities.

The DCNet 2025 conference represents a significant milestone in the field of data communication and networking. As we gather in San Francisco this March, we're bringing together the brightest minds from academia, industry, and research institutions worldwide.

## What to Expect

This year's conference features an unprecedented lineup of keynote speakers, including Dr. Sarah Johnson from NetTech Solutions, who will present groundbreaking research on quantum networking. We're also excited to host Prof. Michael Chen from Stanford University, who will share insights on the future of 5G and beyond.

## Conference Highlights

- **50+ Expert Speakers**: Leading researchers and industry professionals
- **Interactive Workshops**: Hands-on sessions on cutting-edge technologies
- **Networking Events**: Multiple opportunities to connect with peers
- **Paper Presentations**: Latest research in data communication
- **Industry Exhibits**: Showcase of innovative technologies

## Registration Information

Early bird registration is now open with significant discounts for students and academic participants. We encourage you to register early as seats are limited and we expect high demand this year.

Join us for three days of intensive learning, networking, and innovation in the heart of Silicon Valley.`,
            created_at: "2025-01-15T10:00:00Z",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop&crop=center",
            author: "DCNet Conference Team",
            readTime: "5 min read",
            category: "Conference News"
          },
          {
            id: 2,
            title: "Networking Best Practices",
            content: `Effective networking is crucial for career growth in the tech industry. Here are some comprehensive tips to make the most of your conference experience:

## Pre-Conference Preparation

### 1. Define Your Goals
Before attending, clearly define what you want to achieve:
- Are you looking for job opportunities?
- Do you want to learn about specific technologies?
- Are you seeking collaboration partners?
- Do you want to present your research?

### 2. Prepare Your Elevator Pitch
Create a compelling 30-second introduction that covers:
- Your name and current role
- Your expertise or research area
- What you're looking for
- A memorable detail that makes you stand out

### 3. Research Attendees and Speakers
- Review the speaker list and identify key people you want to meet
- Look up their recent work and publications
- Prepare thoughtful questions about their research
- Follow them on social media and engage with their content

## During the Conference

### 4. Attend Social Events
- Welcome receptions
- Coffee breaks
- Poster sessions
- Industry networking events
- After-hours meetups

### 5. Be Approachable
- Smile and make eye contact
- Ask open-ended questions
- Listen actively
- Share your own experiences
- Exchange business cards

### 6. Follow Up Effectively
- Send personalized LinkedIn connection requests
- Reference specific conversations you had
- Share relevant articles or resources
- Propose next steps for collaboration

Remember, networking is about building genuine relationships, not just collecting contacts.`,
            created_at: "2025-01-10T14:30:00Z",
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop&crop=center",
            author: "Dr. Emily Rodriguez",
            readTime: "7 min read",
            category: "Career Development"
          },
          {
            id: 3,
            title: "Future of Data Communication",
            content: `The landscape of data communication is rapidly evolving with the advent of 5G, edge computing, and quantum networking. This comprehensive exploration examines the emerging trends and technologies that will shape the future of our field.

## The 5G Revolution

### Beyond Speed: The Real Impact
While 5G is often associated with faster download speeds, its true potential lies in:

- **Ultra-Low Latency**: Enabling real-time applications like autonomous vehicles
- **Massive IoT Connectivity**: Supporting millions of connected devices
- **Network Slicing**: Creating virtual networks for specific applications
- **Edge Computing Integration**: Bringing processing closer to data sources

### 6G on the Horizon
Researchers are already working on 6G technologies, which promise:
- Terahertz frequency bands
- AI-native network architectures
- Holographic communications
- Integrated sensing and communication

## Edge Computing Revolution

### The Shift to Distributed Processing
Edge computing is transforming how we think about data processing:

- **Reduced Latency**: Processing data closer to its source
- **Bandwidth Optimization**: Reducing data transmission to central servers
- **Privacy Enhancement**: Keeping sensitive data local
- **Real-time Analytics**: Enabling instant decision-making

### Industry Applications
- **Smart Cities**: Traffic management and public safety
- **Healthcare**: Remote patient monitoring and diagnostics
- **Manufacturing**: Predictive maintenance and quality control
- **Autonomous Vehicles**: Real-time navigation and safety systems

## Quantum Networking

### The Next Frontier
Quantum networking represents a paradigm shift in secure communication:

- **Quantum Key Distribution**: Unbreakable encryption
- **Quantum Internet**: Ultra-secure global communication
- **Quantum Computing Integration**: Leveraging quantum processors
- **Quantum Sensors**: Ultra-precise measurement capabilities

## Challenges and Opportunities

### Technical Challenges
- **Interoperability**: Ensuring compatibility between different technologies
- **Security**: Protecting against increasingly sophisticated threats
- **Scalability**: Managing exponential growth in connected devices
- **Energy Efficiency**: Reducing power consumption in edge devices

### Research Opportunities
- **AI-Driven Networks**: Machine learning for network optimization
- **Blockchain Integration**: Decentralized network management
- **Biometric Security**: Advanced authentication methods
- **Sustainable Networking**: Green technologies for environmental responsibility

The future of data communication is bright, with unprecedented opportunities for innovation and growth.`,
            created_at: "2025-01-05T09:15:00Z",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",
            author: "Prof. Michael Chen",
            readTime: "10 min read",
            category: "Technology Trends"
          }
        ];

        const foundBlog = mockBlogs.find(b => b.id === parseInt(id));
        setBlog(foundBlog || mockBlogs[0]);
        
        // Set related blogs (exclude current blog)
        setRelatedBlogs(mockBlogs.filter(b => b.id !== parseInt(id)).slice(0, 2));
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
          <p className="text-gray-600 text-lg">Loading blog post...</p>
        </motion.div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <motion.div
        className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 text-white py-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center space-x-2 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="text-purple-200 hover:text-white transition-colors duration-200"
            >
              ← Back to Blog
            </Link>
          </motion.div>
          
          <motion.div
            className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {blog.category}
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {blog.title}
          </motion.h1>

          <motion.div
            className="flex flex-wrap items-center gap-6 text-purple-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">DC</span>
              </div>
              <div>
                <p className="font-medium">{blog.author}</p>
                <p className="text-sm">{formatDate(blog.created_at)} • {blog.readTime}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <motion.article
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {/* Featured Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Article Body */}
              <div className="p-8 sm:p-12">
                <div className="prose prose-lg max-w-none">
                  {blog.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return (
                        <motion.h2
                          key={index}
                          className="text-2xl font-bold text-gray-800 mt-8 mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                        >
                          {paragraph.replace('## ', '')}
                        </motion.h2>
                      );
                    } else if (paragraph.startsWith('### ')) {
                      return (
                        <motion.h3
                          key={index}
                          className="text-xl font-semibold text-gray-700 mt-6 mb-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                        >
                          {paragraph.replace('### ', '')}
                        </motion.h3>
                      );
                    } else if (paragraph.startsWith('- ')) {
                      return (
                        <motion.ul
                          key={index}
                          className="list-disc list-inside text-gray-600 space-y-2 my-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                        >
                          {paragraph.split('\n').map((item, itemIndex) => (
                            <li key={itemIndex}>{item.replace('- ', '')}</li>
                          ))}
                        </motion.ul>
                      );
                    } else {
                      return (
                        <motion.p
                          key={index}
                          className="text-gray-600 leading-relaxed mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                        >
                          {paragraph}
                        </motion.p>
                      );
                    }
                  })}
                </div>

                {/* Article Actions */}
                <motion.div
                  className="flex items-center justify-between pt-8 border-t border-gray-200 mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
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

                    <motion.button
                      className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.632-2.684 3 3 0 00-5.632 2.684zm0 9.316a3 3 0 105.632 2.684 3 3 0 00-5.632-2.684z" />
                      </svg>
                      <span className="text-sm">Share</span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Articles */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 mb-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Related Articles</h3>
              <div className="space-y-6">
                {relatedBlogs.map((relatedBlog, index) => (
                  <motion.div
                    key={relatedBlog.id}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -2 }}
                  >
                    <Link to={`/blog/${relatedBlog.id}`}>
                      <div className="relative h-32 overflow-hidden rounded-lg mb-3">
                        <img 
                          src={relatedBlog.image} 
                          alt={relatedBlog.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-200 mb-2">
                        {relatedBlog.title}
                      </h4>
                      <p className="text-sm text-gray-500">{formatDate(relatedBlog.created_at)}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-purple-100 mb-6">
                Get the latest conference updates and blog posts delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <motion.button
                  className="w-full bg-white text-purple-600 font-semibold py-3 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
