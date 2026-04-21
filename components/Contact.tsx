"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { Loader2, MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon } from "./SocialIcons";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const services = [
  "Bridal Makeup",
  "Party Makeup",
  "Editorial Makeup",
  "Natural/Everyday Makeup",
  "Airbrush Makeup",
  "Special Effects Makeup",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  eventDate: string;
  message: string;
}

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        toast.success(result.message || "Message sent! I'll be in touch soon.");
        reset();
      } else {
        toast.error(result.errors?.[0]?.msg || "Something went wrong.");
      }
    } catch {
      toast.error("Could not send message. Please contact me directly on Instagram.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full border-b border-gray-300 bg-transparent text-[#1a1a1a] placeholder-gray-400 px-0 py-3 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors";

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, #faf7f2 0%, #f0ebe3 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-3">
            Get In Touch
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Book Your Session
          </h2>
          <div className="gold-divider w-24 mx-auto" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto text-sm">
            Ready to look and feel your absolute best? Fill out the form below and I&apos;ll get
            back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    {...register("name", { required: "Name required" })}
                    placeholder="Full Name *"
                    className={inputClass}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("email", {
                      required: "Email required",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Valid email required" },
                    })}
                    type="email"
                    placeholder="Email Address *"
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="Phone Number"
                    className={inputClass}
                  />
                </div>
                <div>
                  <select
                    {...register("service", { required: "Service required" })}
                    className={`${inputClass} cursor-pointer`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Service Required *
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  {...register("eventDate")}
                  type="date"
                  placeholder="Event Date"
                  className={inputClass}
                />
              </div>

              <div>
                <textarea
                  {...register("message", { required: "Message required" })}
                  rows={4}
                  placeholder="Tell me about your event, vision, and any special requirements *"
                  className={inputClass}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="flex items-center justify-center gap-2 w-full py-4 text-sm tracking-widest uppercase font-medium text-[#1a1a1a] disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:shadow-lg hover:shadow-[#c9a84c]/20 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97e, #a07830)" }}
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send Inquiry"
                )}
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-10"
          >
            {/* Contact details */}
            <div className="space-y-6">
              <h3
                className="text-2xl font-light text-[#1a1a1a]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Let&apos;s Create Magic Together
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Whether you&apos;re planning your dream wedding or need a show-stopping look for a
                photoshoot, I&apos;m here to bring your vision to life. Based in Mumbai, available
                for travel across India.
              </p>

              {[
                { icon: Phone, label: "+91 98765 XXXXX", sub: "Mon – Sat, 10am – 7pm" },
                { icon: Mail, label: "hello@poonambeauty.com", sub: "Replies within 24 hours" },
                { icon: MapPin, label: "Mumbai, Maharashtra", sub: "Available to travel pan-India" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #c9a84c20, #c9a84c10)", border: "1px solid #c9a84c40" }}
                  >
                    <Icon size={16} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-[#1a1a1a] font-medium text-sm">{label}</p>
                    <p className="text-gray-400 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-4">Follow My Journey</p>
              <div className="flex gap-4">
                {[
                  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/poonambeauty" },
                  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com/poonambeauty" },
                  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/poonambeauty" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 flex items-center justify-center border border-gray-300 text-gray-500 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick note */}
            <div className="p-6 border border-[#c9a84c]/30 bg-[#c9a84c]/5">
              <p className="text-xs tracking-widest uppercase text-[#c9a84c] mb-2">Booking Note</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dates fill up fast — especially during wedding season (Nov–Feb). I recommend
                booking at least <strong>3–6 months in advance</strong> for bridal services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
