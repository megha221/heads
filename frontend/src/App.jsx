import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Announcements from "./pages/Announcements";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import AdminPanel from "./pages/AdminPanel";
import Contact from "./pages/Contact";
import JoinLEE from "./pages/JoinLEE";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1e3523' }}>
      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/joinlee" element={<JoinLEE />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;