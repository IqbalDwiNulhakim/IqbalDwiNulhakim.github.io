import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  MessageSquare,
  User,
} from "lucide-react";
import { SOCIAL_LINKS } from "../data/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            <MessageSquare size={18} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm currently seeking opportunities in software development and
            security engineering. Feel free to reach out for collaboration, job
            opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <motion.a
              variants={fadeInUp}
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="group flex items-center gap-5 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative p-4 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-xl group-hover:scale-105 transition-transform">
                  <Mail size={24} />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Email Address
                </p>
                <p className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {SOCIAL_LINKS.email}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Typically replies within 24 hours
                </p>
              </div>
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href={`tel:${SOCIAL_LINKS.phone}`}
              className="group flex items-center gap-5 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-green-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative p-4 bg-gradient-to-r from-accent-500 to-green-500 text-white rounded-xl group-hover:scale-105 transition-transform">
                  <Phone size={24} />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Phone Number
                </p>
                <p className="text-lg font-semibold text-gray-900 group-hover:text-accent-600 transition-colors">
                  {SOCIAL_LINKS.phone}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Available for calls and WhatsApp
                </p>
              </div>
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl group-hover:scale-105 transition-transform">
                  <Linkedin size={24} />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 mb-1">
                  LinkedIn Profile
                </p>
                <p className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  linkedin.com/in/iqbal-dwi-nulhakim
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Connect professionally
                </p>
              </div>
            </motion.a>

            <motion.div
              variants={fadeInUp}
              className="group flex items-center gap-5 p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl">
                <MapPin size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Location
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {SOCIAL_LINKS.location}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Open to remote work and relocation
                </p>
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={fadeInUp}
              className="p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl border border-primary-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Current Status
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <span className="font-semibold text-primary-600">
                      Fresh Graduate Computer Science
                    </span>{" "}
                    actively seeking full-time opportunities in software
                    development, security engineering, or cloud computing. Open
                    to entry-level positions, graduate programs, and junior
                    developer roles. Available for on-site, hybrid, or remote
                    positions in Indonesia.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Send me a message
                </h3>
                <p className="text-gray-600">
                  Have a project in mind or want to discuss opportunities? Fill
                  out the form below and I'll get back to you soon.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex p-5 bg-green-100 text-green-600 rounded-full mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. I'll review your message and get
                    back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-ghost px-6 py-3 text-primary-600 hover:text-primary-700"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input pl-10"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input pl-10"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="textarea"
                      placeholder="Tell me about your project, job opportunity, or any questions you have..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary py-4 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        <Send size={20} />
                        Send Message
                      </span>
                    )}
                  </motion.button>

                  <p className="text-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                    Your information is secure and will only be used to respond
                    to your inquiry.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
