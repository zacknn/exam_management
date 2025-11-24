import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Bell,
  Shield,
  FileText,
  Clock,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const features = [
  { icon: Calendar, title: "Centralized Calendar", description: "All exams and sessions in one real-time view." },
  { icon: Users, title: "No More Conflicts", description: "Automatic detection of room & teacher overlaps." },
  { icon: Bell, title: "Instant Notifications", description: "Get notified of any schedule change instantly." },
  { icon: FileText, title: "Publish & Export", description: "One-click PDF/Excel export and official publishing." },
  { icon: Shield, title: "Secure Role Access", description: "Tailored views for students, teachers, and admins." },
  { icon: Clock, title: "Save Time", description: "Reduce planning from days to just hours." },
];

const announcements = [
  {
    title: "2025-2026 Exam Planning Now Open",
    description: "Teachers can submit availability and preferences.",
    tags: ["New", "Important"],
    author: "Prof. Aizen Soseki",
  },
  {
    title: "Make-up Session Schedule Published",
    description: "L3 & M1 second session exams are now live.",
    tags: ["Rattrapage"],
    author: "Coordination Team",
  },
  {
    title: "Room B102 Available Again",
    description: "Renovation finished – capacity increased to 120 seats.",
    tags: ["Rooms"],
    author: "Technical Services",
  },
];

function ExamLanding() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-md px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/src/assets/jami3a.png" alt="University Logo" className="h-12 w-40" />
            </Link>
            <Link to="/auth/login">
              <button className="px-10 py-4 bg-white text-green-600 border-2 border-green-600 font-semibold rounded-lg hover:bg-green-50 transition text-lg">
                Login / Register
              </button>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Manage Exams <span className="text-green-600">Without Stress</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            The official platform of the Computer Science Department for planning,
            coordinating, and publishing exam schedules — fast, accurate, and transparent.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/dashboard">
              <button className="px-10 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition text-lg">
                Access the Platform
              </button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Everything You Need
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-gray-100 p-8 rounded-xl hover:shadow-xl transition-shadow text-left"
                  >
                    <Icon className="w-14 h-14 text-green-600 mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Latest Announcements */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold">Latest Announcements</h2>
              <Link to="/dashboard/announcements">
                <button className="text-green-600 hover:underline font-medium">
                  View all →
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {announcements.map((post, i) => (
                <div
                  key={i}
                  className="bg-white p-7 rounded-xl shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{post.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 text-center bg-green-600 text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready for a flawless exam session?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join the hundreds of teachers and students already using ExamFlow.
          </p>
          <Link to="/dashboard">
            <button className="px-12 py-5 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition text-lg">
              Enter the Platform
            </button>
          </Link>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">ExamFlow</h3>
              <p className="text-sm">
                Official Exam Management System – Computer Science Department
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/dashboard" className="hover:text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/calendar" className="hover:text-white">
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="hover:text-white">
                    Help & FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Support</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>exam.support@university.edu</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Room A-205, Building C</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Academic Year</h4>
              <p className="text-2xl font-bold text-green-400">2025 – 2026</p>
              <p className="text-sm mt-2">Developed by Capstone Team 2025</p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm">
            © {new Date().getFullYear()} Computer Science Department – All
            rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

export default ExamLanding;