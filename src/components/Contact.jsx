import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Public EmailJS IDs (safe in the client). Env overrides when set at build time (e.g. Render).
// Production broke when VITE_* vars were missing from the host build — defaults keep mail working.
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'LhJ13t4vZppKNjVWS';
const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_u9ces18';
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_nzzy4vt';
const EMAILJS_AUTO_REPLY_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID || 'template_2441ggp';

const Contact = () => {
  const ref = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  
  // React Form State tracking
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big background text
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setStatus('idle');
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission via EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.permission) {
      alert('Please accept the contact permission checkbox.');
      return;
    }

    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setStatus('error');
      return;
    }

    // Required EmailJS vars: name, email, message, title, time, reply_to (see specs/009 data-model)
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const templateParams = {
      name: fullName,
      title: `Portfolio message from ${fullName}`,
      email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      time: new Date().toLocaleString(),
      // Optional aliases — templates must not depend on these alone
      from_name: fullName,
      from_email: formData.email,
    };

    const options = { publicKey: EMAILJS_PUBLIC_KEY };

    setStatus('sending');

    try {
      // 1) Owner notification (Contact Us — template_nzzy4vt)
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, options);

      // 2) Visitor acknowledgement (Auto-Reply — To Email must be {{email}} in dashboard)
      if (EMAILJS_AUTO_REPLY_TEMPLATE_ID) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTO_REPLY_TEMPLATE_ID,
          templateParams,
          options
        );
      }

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0b0b0b] w-full min-h-screen relative overflow-x-hidden flex items-end scroll-mt-24 pt-28 md:pt-32 pb-28 md:pb-0 border-t border-white/10 select-none">
      
      {/* Background Cinematic Red Ambient Glow */}
      <span id="hire" className="absolute top-0"></span>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* Huge Background Parallax Netflix Watermark Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12 opacity-10"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-red-600 uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
        >
          CONTACT
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#141414]/95 backdrop-blur-2xl border-t border-l border-white/15 w-full md:w-[90%] lg:w-[82%] p-5 md:p-16 text-white flex flex-col justify-between rounded-tl-[2rem] md:rounded-tl-[3rem] shadow-[0_-25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden"
        >
          {/* Subtle internal top crimson highlight glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-90"></div>

          <div className="flex items-center justify-between mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600/10 border border-red-600/30 text-xs font-mono uppercase tracking-widest text-red-500">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
              <span>EPISODE 04 // GET IN TOUCH</span>
            </div>
            <span className="text-xs font-mono text-white/40 tracking-wider hidden md:block">
              // LET'S BUILD SOMETHING CINEMATIC
            </span>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-10 md:mb-12 text-xs font-mono uppercase tracking-wider text-white/70">
            <a href="mailto:moizjawaad@gmail.com" className="min-h-11 inline-flex items-center hover:text-red-500 transition-colors">
              moizjawaad@gmail.com
            </a>
            <a href="tel:+923035414205" className="min-h-11 inline-flex items-center hover:text-red-500 transition-colors">
              +92 3035414205
            </a>
            <a
              href="https://moizjawad.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 inline-flex items-center hover:text-red-500 transition-colors"
            >
              moizjawad.dev
            </a>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input 
                    type="text" 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name" 
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-red-600 transition-colors placeholder-white/40 font-medium rounded-none text-white"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name" 
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-red-600 transition-colors placeholder-white/40 font-medium rounded-none text-white"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-red-600 transition-colors placeholder-white/40 font-medium rounded-none text-white"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..." 
                    required
                    className="w-full h-full min-h-[140px] bg-transparent border-b border-white/20 pb-3 text-lg focus:outline-none focus:border-red-600 transition-colors placeholder-white/40 font-medium resize-none rounded-none text-white"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-12 mt-4 pt-6 border-t border-white/10">
              {/* Left text */}
              <div className="flex-1 flex items-start gap-4 text-sm font-light text-white/70">
                <input 
                  type="checkbox" 
                  id="permission" 
                  checked={formData.permission}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded-sm border-white/30 bg-transparent text-red-600 focus:ring-0 focus:ring-offset-0 cursor-pointer" 
                  style={{ accentColor: "#E50914" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Right text & button */}
              <div className="flex-1 flex flex-col gap-8 text-xs text-white/50 font-light">
                <p className="leading-relaxed max-w-[400px]">
                  This site is protected by security protocols and industry-standard privacy guidelines.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <div className="max-w-[250px] space-y-2">
                    <p className="leading-relaxed">
                      Ready to start a project or collaboration? Send a direct signal.
                    </p>
                    {status === 'success' && (
                      <p className="text-green-400 text-xs tracking-wide" role="status">
                        Message sent. I&apos;ll get back to you soon.
                      </p>
                    )}
                    {status === 'error' && (
                      <p className="text-red-400 text-xs tracking-wide" role="alert">
                        Couldn&apos;t send right now. Try again or email me directly.
                      </p>
                    )}
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="min-h-11 px-8 py-3.5 rounded bg-red-600 text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-red-700 transition-all duration-300 group whitespace-nowrap shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                    {status !== 'sending' && (
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;