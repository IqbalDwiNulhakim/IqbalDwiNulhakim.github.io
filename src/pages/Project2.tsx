import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Smartphone,
  CreditCard,
  MapPin,
  Clock,
  Star,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Project2 = () => {
  const features = [
    {
      icon: <Smartphone />,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices with native-like experience",
    },
    {
      icon: <CreditCard />,
      title: "Payment Integration",
      description: "Multiple payment gateways (Stripe, GoPay, OVO)",
    },
    {
      icon: <MapPin />,
      title: "Real-time Tracking",
      description: "Live order tracking with GPS integration",
    },
    {
      icon: <Clock />,
      title: "Fast Delivery",
      description: "Optimized delivery routes and driver management",
    },
    {
      icon: <Star />,
      title: "Ratings & Reviews",
      description: "Customer feedback system for restaurants and drivers",
    },
    {
      icon: <Users />,
      title: "Multi-User Roles",
      description: "Separate apps for customers, restaurants, and drivers",
    },
  ];

  const technologies = [
    "React Native",
    "Firebase",
    "Redux",
    "Google Maps API",
    "Stripe API",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.io",
    "Push Notifications",
    "JWT",
    "Cloud Functions",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-8 group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 text-green-600 rounded-lg">
              <Smartphone size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">
              MOBILE APPLICATION
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sajiin Dong - Food Delivery
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            A complete food delivery ecosystem featuring restaurant management,
            real-time order tracking, and multiple payment options for seamless
            food ordering experience.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://github.com/IqbalDwiNulhakim/sajiin-dong"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github size={20} />
              View Code
            </a>
            <a
              href="/pdf/Sajiin Dong.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <ExternalLink size={20} />
              View Documentation (PDF)
            </a>
          </div>
        </motion.div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold">Project Documentation</h2>
            <p className="text-gray-600">
              Complete project documentation including requirements,
              architecture, and implementation details.
            </p>
          </div>
          <div className="p-4">
            <iframe
              src="/pdf/Sajiin Dong.pdf"
              className="w-full h-[600px] border rounded-lg"
              title="Sajiin Dong Documentation"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Sajiin Dong is a comprehensive food delivery platform that
                  connects customers with local restaurants. The platform
                  features three separate applications: one for customers to
                  browse and order food, one for restaurant owners to manage
                  their business, and one for delivery drivers to handle order
                  fulfillment.
                </p>
                <p className="mb-4">
                  The system implements real-time order tracking using GPS, push
                  notifications for order updates, and supports multiple payment
                  methods. Restaurant owners have access to a dashboard for
                  managing their menu, tracking orders, and viewing analytics.
                </p>
                <p>
                  Built with React Native for cross-platform compatibility, the
                  application delivers native-like performance on both iOS and
                  Android devices while maintaining a single codebase for
                  efficient development and maintenance.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="inline-flex p-3 bg-green-100 text-green-600 rounded-lg mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-green-50 text-green-700 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Project Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Category
                  </h3>
                  <p className="font-medium">Mobile Application</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Platforms
                  </h3>
                  <p className="font-medium">iOS & Android</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Timeline
                  </h3>
                  <p className="font-medium">4 Months Development</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Status
                  </h3>
                  <p className="font-medium text-green-600">Completed</p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <h2 className="text-2xl font-bold mb-6">Key Statistics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    3
                  </div>
                  <div className="text-sm text-gray-600">Separate Apps</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    5+
                  </div>
                  <div className="text-sm text-gray-600">Payment Methods</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    Real-time
                  </div>
                  <div className="text-sm text-gray-600">Order Tracking</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    Push
                  </div>
                  <div className="text-sm text-gray-600">Notifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all"
          >
            <ArrowLeft />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project2;
