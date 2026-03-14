import { useState } from 'react'

const INITIAL = { name: '', email: '', role: 'developer', subscribe: false }

function ContactForm() {
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(null)

  const handleChange = ({ target: { name, value, type, checked } }) =>
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(form)
    setForm(INITIAL)
  }

  return (
    <div className="card">
      <h2>Controlled Form</h2>
      <p>Practice: controlled inputs, <code>onChange</code>, form submission</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>
        <label>
          Role
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="subscribe"
            checked={form.subscribe}
            onChange={handleChange}
          />
          Subscribe to newsletter
        </label>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div className="submission">
          <strong>Submitted:</strong>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default ContactForm
