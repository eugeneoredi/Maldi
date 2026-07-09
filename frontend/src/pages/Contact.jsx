import { useState } from 'react'

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
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-amber-600 text-sm uppercase tracking-widest mb-2">Get in Touch</p>
        <h1 className="text-4xl font-bold text-stone-800 mb-4">Contact Us</h1>
        <p className="text-stone-500 max-w-xl mx-auto">
          Have a question about an experience or stay? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold text-stone-800 mb-6">Send us a message</h2>
          {submitted ? (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">Message Sent!</h3>
              <p className="text-stone-500 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-amber-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-amber-400"
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-amber-400 resize-none"
              />
              <button
                onClick={handleSubmit}
                className="bg-amber-600 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-700 transition"
              >
                Send Message
              </button>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xl font-bold text-stone-800 mb-6">Find us</h2>
          <div className="flex flex-col gap-6 text-stone-500 text-sm">
            <div className="flex gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold text-stone-800">Location</p>
                <p>Malindi Town, Kilifi County, Kenya</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-semibold text-stone-800">Email</p>
                <p>hellomaldi003@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-semibold text-stone-800">Phone</p>
                <p>+254 741 157 181</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🕐</span>
              <div>
                <p className="font-semibold text-stone-800">Hours</p>
                <p>Open 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
