import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const handleFocus = () => {};

  const handleBlur = () => {};

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get In touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              placeholder="John"
              className="input"
              value={form.name}
              required
              onChange={handleChange}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              placeholder="John@gmail.com"
              className="input"
              value={form.email}
              required
              onChange={handleChange}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Name
            <textarea
              type="text"
              rows={4}
              name="message"
              placeholder="How I help you"
              className="textarea"
              value={form.message}
              required
              onChange={handleChange}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
            />
          </label>
          <button
            className="btn"
            type="submit"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
