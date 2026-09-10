"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <span className="font-mono text-xs text-accent-cyan tracking-wider font-semibold">
            07
          </span>
          <div className="h-px w-8 bg-white/20" />
          <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#A7A5AE]">
            LET'S CONNECT
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Info & Action Buttons */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                Have an AI, Machine Learning, or Automation project in mind?
              </h3>
              <p className="text-xl sm:text-2xl text-accent-cyan font-medium">
                Let&apos;s connect.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-3">
              {/* Email */}
              <div className="modular-card p-4 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#2B2935] text-accent-cyan">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-[#A7A5AE]">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-accent-cyan transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="p-2 rounded-md bg-[#1F1D26] border border-white/10 text-[#A7A5AE] hover:text-white transition-colors"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-accent-green" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="modular-card p-4 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#2B2935] text-accent-purple">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-[#A7A5AE]">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-accent-purple transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  title="Copy phone number"
                  className="p-2 rounded-md bg-[#1F1D26] border border-white/10 text-[#A7A5AE] hover:text-white transition-colors"
                >
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-accent-green" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="modular-card p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#2B2935] text-accent-green">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase text-[#A7A5AE]">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#1F1D26] font-semibold text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL ME</span>
              </a>

              <a
                href={socialLinks.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25232E] border border-white/10 text-white font-semibold text-xs font-mono uppercase tracking-wider hover:border-accent-blue transition-all"
              >
                <Linkedin className="w-4 h-4 text-accent-blue" />
                <span>LINKEDIN</span>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25232E] border border-white/10 text-white font-semibold text-xs font-mono uppercase tracking-wider hover:border-white/30 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-6 modular-card p-6 sm:p-8">
            <h4 className="text-lg font-bold text-white mb-2">Send a Message</h4>
            <p className="text-xs sm:text-sm text-[#A7A5AE] mb-6 font-sans">
              Feel free to reach out with project inquiries or technical collaborations.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h5 className="text-sm font-semibold text-white">Message Dispatched</h5>
                <p className="text-xs text-[#A7A5AE]">
                  Thank you for reaching out, {formData.name || "Muhamed"}. I will review and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[11px] font-mono uppercase text-[#A7A5AE] mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1F1D26] border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-cyan transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-mono uppercase text-[#A7A5AE] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1F1D26] border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-cyan transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-mono uppercase text-[#A7A5AE] mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Project details, timeline, or inquiries..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1F1D26] border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-white text-[#1F1D26] font-semibold text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
