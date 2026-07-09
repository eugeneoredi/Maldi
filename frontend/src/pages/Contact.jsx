import { useState } from 'react'
import { MapPin, Mail, Phone, Clock, PartyPopper } from 'lucide-react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section className="bg-ocean text-warm-white">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20 text-center">
          <p className="text-gold text-[12px] tracking-[0.2em] uppercase mb-4">Get in Touch</p>
          <h1 className="font-display text-[36px] lg:text-[44px] text-balance">Contact Us</h1>
          <p className="mt-4 text-warm-white/70 max-w-xl mx-auto">
            Have a question about an experience or stay? We'd love to hear
            from you.
          </p>
        </div>
      </section>

      <section className="bg-shell px-6 py-16 lg:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="font-display text-[22px] text-charcoal mb-6">Send us a message</h2>
            {submitted ? (
              <div className="bg-sand border border-gold/30 rounded-2xl p-8 text-center">
                <PartyPopper size={32} className="mx-auto text-gold" />
                <h3 className="font-display text-[19px] text-charcoal mt-4 mb-2">Message Sent!</h3>
                <p className="text-stone text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="border border-charcoal/15 rounded-xl px-4 py-3 text-sm text-charcoal outline-none focus:border-gold transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  className="border border-charcoal/15 rounded-xl px-4 py-3 text-sm text-charcoal outline-none focus:border-gold transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="border border-charcoal/15 rounded-xl px-4 py-3 text-sm text-charcoal outline-none focus:border-gold transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="bg-ocean text-warm-white px-6 py-3.5 rounded-full font-semibold text-[13px] hover:bg-ocean-2 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="font-display text-[22px] text-charcoal mb-6">Find us</h2>
            <div className="flex flex-col gap-6 text-stone text-sm">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand text-gold shrink-0">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="font-semibold text-charcoal">Location</p>
                  <p>Malindi Town, Kilifi County, Kenya</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand text-gold shrink-0">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="font-semibold text-charcoal">Email</p>
                  <p>hellomaldi003@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand text-gold shrink-0">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="font-semibold text-charcoal">Phone</p>
                  <p>+254 741 157 181</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand text-gold shrink-0">
                  <Clock size={18} />
                </span>
                <div>
                  <p className="font-semibold text-charcoal">Hours</p>
                  <p>Open 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
