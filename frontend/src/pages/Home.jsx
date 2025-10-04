import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"
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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Conference Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-sm font-medium text-white/90">DCNet 2025</span>
            <motion.div
              className="ml-2 w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Data Communication
            </span>
            <br />
            <span className="text-white">
              & Networking
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Join the premier conference bringing together researchers, engineers, and innovators 
            in data communication and networking technologies.
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
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">View Announcements</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            
            <Link
              to="/blog"
              className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105"
            >
              Read Our Blog
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {[
            { number: "500+", label: "Attendees" },
            { number: "50+", label: "Speakers" },
            { number: "3", label: "Days" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* About Section */}
      <motion.section
        className="relative py-20 bg-white/5 backdrop-blur-sm"
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About DCNet 2025
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              DCNet 2025 is the premier international conference on Data Communication and Networking, 
              bringing together leading researchers, industry professionals, and students to share 
              cutting-edge research and innovations in networking technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔬",
                title: "Research Excellence",
                description: "Present groundbreaking research in data communication, network protocols, and emerging technologies.",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center"
              },
              {
                icon: "🤝",
                title: "Industry Collaboration",
                description: "Connect with industry leaders and explore opportunities for collaboration and innovation.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop&crop=center"
              },
              {
                icon: "🎓",
                title: "Learning & Development",
                description: "Attend workshops, tutorials, and sessions designed to enhance your technical skills.",
                image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop&crop=center"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 text-4xl">{feature.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Keynote Speakers Section */}
      <motion.section
        className="relative py-20"
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Featured Speakers
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Learn from industry pioneers and academic leaders who are shaping the future of networking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                title: "Chief Technology Officer, NetTech Solutions",
                topic: "The Future of Quantum Networking",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Prof. Michael Chen",
                title: "Professor, Stanford University",
                topic: "5G and Beyond: Next-Gen Wireless",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Dr. Emily Rodriguez",
                title: "Research Director, Cisco Systems",
                topic: "Edge Computing Revolution",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
              }
            ].map((speaker, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{speaker.name}</h3>
                  <p className="text-white/70 mb-4">{speaker.title}</p>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {speaker.topic}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Conference Schedule Preview */}
      <motion.section
        className="relative py-20 bg-white/5 backdrop-blur-sm"
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Conference Schedule
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Three days of intensive learning, networking, and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                day: "Day 1",
                date: "March 15, 2025",
                title: "Opening & Keynotes",
                sessions: ["Opening Ceremony", "Keynote: Quantum Networking", "Panel: Future of 5G", "Networking Reception"]
              },
              {
                day: "Day 2",
                date: "March 16, 2025",
                title: "Technical Sessions",
                sessions: ["Edge Computing Workshop", "Network Security Symposium", "AI in Networking Panel", "Poster Session"]
              },
              {
                day: "Day 3",
                date: "March 17, 2025",
                title: "Innovation & Future",
                sessions: ["Startup Pitch Competition", "Industry Roundtable", "Closing Keynote", "Awards Ceremony"]
              }
            ].map((day, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{day.day}</h3>
                  <p className="text-white/70 mb-4">{day.date}</p>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                    {day.title}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {day.sessions.map((session, sessionIndex) => (
                    <motion.li
                      key={sessionIndex}
                      className="flex items-center text-white/80"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: sessionIndex * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {session}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="relative py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't miss out on the most important networking event of the year. 
              Register now and be part of the future of data communication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.button>
              
              <motion.button
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="relative py-12 bg-black/20 backdrop-blur-sm border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">DCNet 2025</h3>
              <p className="text-white/70 mb-6 max-w-md">
                The premier conference on Data Communication and Networking, 
                bringing together the brightest minds in technology.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "Facebook", "Instagram"].map((social, index) => (
                  <motion.div
                    key={social}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-white text-sm font-medium">{social[0]}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Schedule", "Speakers", "Venue", "Accommodation"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li>info@dcnet2025.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
                <li>March 15-17, 2025</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/50">
              © 2025 DCNet Conference. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
