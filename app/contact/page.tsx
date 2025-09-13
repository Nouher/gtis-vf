"use client"

import { MapPin, Instagram, Linkedin, Facebook, ArrowRight, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="relative min-h-screen bg-black">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
          style={{
            backgroundImage: "url('/bg-projects.jpeg')",
          }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-start pt-62 pb-31">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Panel - Contact Info */}
              <div className="text-white space-y-8">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                    You Have Questions,
                    <br />
                    We Have Answers
                  </h1>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Discover experiences you won't find anywhere else — thoughtfully designed to immerse you in the
                    heart of the destination.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-amber-400">Location</h3>
                    <p className="text-gray-300">
                      GTIS Global Technical Services
                      <br />
                      123 Industrial Boulevard
                      <br />
                      Houston, TX 77001
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-1 text-amber-400">Email</h4>
                      <a href="mailto:contact@gtis.com" className="text-gray-300 hover:text-white transition-colors">
                        contact@gtis.com
                      </a>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-amber-400">Contact</h4>
                      <a
                        href="tel:+17135551234"
                        className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                      >
                        +212 667 060 089
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1 text-amber-400">Hours</h4>
                    <p className="text-gray-300">Monday–Friday | 08:00 – 18:00</p>
                  </div>

                  <div className="flex gap-4">
                    <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                    <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>

              {/* Right Panel - Contact Form */}
              <div className="bg-black/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-3">Tell Us What You Need</h2>
                  <p className="text-gray-100">Our team is ready to assist you with every detail, big or small.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-100 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-white placeholder-gray-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-100 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-white placeholder-gray-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-100 mb-2">Country</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-white placeholder-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-100 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-black/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-white placeholder-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-100 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-black/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-white placeholder-gray-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-100 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-black/20 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-white placeholder-gray-300"
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="opt-in"
                      className="mt-1 rounded border-white/30 bg-black/20 text-amber-400 focus:ring-amber-400"
                    />
                    <label htmlFor="opt-in" className="text-sm text-gray-100">
                      I'd like to receive exclusive offers and updates
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-400 text-black py-3 px-6 rounded-lg hover:bg-amber-300 transition-colors font-medium"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <MapPin className="w-8 h-8 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">GTIS Global Technical Services</h3>
              <p className="text-gray-600">123 Industrial Boulevard, Houston, TX 77001</p>
            </div>
            <p className="text-sm text-gray-500">Located 15 minutes from George Bush Intercontinental Airport.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Contact us if you still have any questions to make your experience smoother.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What industrial services do you provide?",
                answer:
                  "We offer comprehensive technical services including equipment maintenance, industrial automation, safety consulting, and project management across various industrial sectors.",
              },
              {
                question: "Do you provide 24/7 emergency support?",
                answer:
                  "Yes, we provide round-the-clock emergency support for critical industrial operations to ensure minimal downtime.",
              },
              {
                question: "What industries do you serve?",
                answer:
                  "We serve oil & gas, petrochemical, manufacturing, power generation, and other heavy industrial sectors.",
              },
              {
                question: "How can I request a project quote?",
                answer:
                  "You can request a quote through our contact form above, by calling us directly, or by emailing our sales team.",
              },
              {
                question: "Do you offer training services?",
                answer:
                  "Yes, we provide comprehensive training programs for industrial safety, equipment operation, and maintenance procedures.",
              },
              {
                question: "What certifications do your technicians hold?",
                answer:
                  "Our technicians hold industry-standard certifications including OSHA, API, ASME, and other relevant technical certifications.",
              },
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-slate-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
            Your Industrial Solutions Partner
            <br />
            Get Started With Your Project Today
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Whether you need technical consulting, equipment maintenance, or comprehensive project management, our
            expert team delivers industrial excellence you can trust.
          </p>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors font-medium text-lg">
            GET QUOTE NOW
          </button>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-8">Stay updated with industry insights and exclusive technical resources.</p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              required
            />
            <button
              type="submit"
              className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
