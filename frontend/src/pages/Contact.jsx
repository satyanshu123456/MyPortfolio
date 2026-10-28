import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  AtSign,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import BackToHome from '../components/BackToHome';
import SocialLinks from '../components/SocialLinks';
import PageTransition from '../components/PageTransition';
import { submitContactForm } from '../services/contactService';
import { developerInfo } from '../data/socialLinks';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');
  const [deliveryNotice, setDeliveryNotice] = useState('');

  // Validate form inputs
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Please enter a valid email address (e.g. name@domain.com).';
      }
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Please provide a subject.';
    } else if (formData.subject.trim().length < 2) {
      errors.subject = 'Subject must be at least 2 characters.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please write a message.';
    } else if (formData.message.trim().length < 5) {
      errors.message = 'Message must be at least 5 characters.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setStatusMessage('');
    setDeliveryNotice('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitContactForm(formData);

      if (response.success) {
        setSubmitStatus('success');
        setStatusMessage(response.message || 'Your message has been sent successfully!');
        if (response.data && response.data.notice) {
          setDeliveryNotice(response.data.notice);
        }
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(response.message || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      setSubmitStatus('error');
      setStatusMessage(err.message || 'An unexpected error occurred while sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation & Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <BackToHome />
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40">
            Get in Touch
          </span>
        </div>

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Have a question, feedback, or a job/internship opportunity? Send me a message below or reach out directly through my social channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN: Contact Details & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

              <h2 className="font-heading text-2xl font-bold text-white mb-2">
                Contact Information
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                I am based in Bhopal, MP, India, and open to remote, hybrid, or on-site developer roles.
              </p>

              <div className="space-y-5">
                {/* Email Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${developerInfo.email}`}
                      className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      {developerInfo.email}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Location</span>
                    <span className="text-sm font-semibold text-slate-200">
                      {developerInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-8 mt-8 border-t border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-4">
                  Verified Social Channels
                </span>
                <SocialLinks size="md" />
              </div>
            </div>

            {/* Quick Response Notice */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800 text-xs text-slate-300 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>
                All inquiries submitted through this form are securely recorded and forwarded directly to my mailbox.
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below and I'll get back to you as soon as possible.
              </p>

              {/* Feedback Alert Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-sm flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{statusMessage}</p>
                    {deliveryNotice && (
                      <p className="text-xs text-emerald-400/80 mt-1">{deliveryNotice}</p>
                    )}
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/40 text-rose-300 text-sm flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Unable to send message</p>
                    <p className="text-xs text-rose-300/90 mt-1">{statusMessage}</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        placeholder="e.g. Alex Smith"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                          formErrors.name
                            ? 'border-rose-500 focus:ring-rose-500/50'
                            : 'border-slate-800 focus:border-cyan-400/60 focus:ring-cyan-400/30'
                        }`}
                      />
                    </div>
                    {formErrors.name && (
                      <p className="text-xs text-rose-400 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <AtSign className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        placeholder="e.g. alex@example.com"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                          formErrors.email
                            ? 'border-rose-500 focus:ring-rose-500/50'
                            : 'border-slate-800 focus:border-cyan-400/60 focus:ring-cyan-400/30'
                        }`}
                      />
                    </div>
                    {formErrors.email && (
                      <p className="text-xs text-rose-400 mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-300">
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="e.g. Job Opportunity / Collaboration"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        formErrors.subject
                          ? 'border-rose-500 focus:ring-rose-500/50'
                          : 'border-slate-800 focus:border-cyan-400/60 focus:ring-cyan-400/30'
                      }`}
                    />
                  </div>
                  {formErrors.subject && (
                    <p className="text-xs text-rose-400 mt-1">{formErrors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Write your message here..."
                    className={`w-full p-4 rounded-xl bg-slate-900/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-y ${
                      formErrors.message
                        ? 'border-rose-500 focus:ring-rose-500/50'
                        : 'border-slate-800 focus:border-cyan-400/60 focus:ring-cyan-400/30'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-rose-400 mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-heading font-bold text-sm text-slate-900 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-neon-accent hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-900" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-900" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;

