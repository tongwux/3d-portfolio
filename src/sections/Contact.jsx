import { useState } from 'react';
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nReply to: ${form.email}`);
    window.location.href = `mailto:tarynwux@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-[75vh] flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="" className="absolute inset-0 min-h-[75vh]" />
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">Have a project in mind? Send me a message.</p>
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3"><span className="field-label">Full name</span><input type="text" name="name" autoComplete="name" required className="field-input" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></label>
            <label className="space-y-3"><span className="field-label">Email address</span><input type="email" name="email" autoComplete="email" required className="field-input" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></label>
            <label className="space-y-3"><span className="field-label">Your message</span><textarea name="message" required rows={5} className="field-input" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /></label>
            <button type="submit" className="btn">Open email draft <span aria-hidden="true">↗</span></button>
            <p className="text-sm text-white-600">Opens your email app; send the message there. Or email <a className="underline" href="mailto:tarynwux@gmail.com">tarynwux@gmail.com</a>.</p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
