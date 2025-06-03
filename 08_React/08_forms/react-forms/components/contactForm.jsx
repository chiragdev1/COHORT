import React, { useState } from "react";
import { useContactForm } from "../src/hooks/useContactForm.js";

function contactForm() {
   const [form, setForm] = useState();
   const { successMessage, loading, errorMessage, submitContact } =
      useContactForm();

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   return (
      <div>
         Contact Form
         <form onSubmit={handleSubmit}>
            <input
               name="name"
               value={form.name}
               type="text"
               placeholder="Your Name"
               onChange={handleChange}
            />
            <input
               name="email"
               value={form.email}
               type="text"
               placeholder="Your Email"
               onChange={handleChange}
            />
            <textarea
               name="message"
               value={form.message}
               type="text"
               placeholder="Write your message here..."
               onChange={handleChange}
            />
            <button type="submit" disabled={loading}>
               {loading ? "Submitting..." : "Submit"}
            </button>
         </form>
         {successMessage && <p>{successMessage}</p>}
         {errorMessage && <p>{errorMessage}</p>}
      </div>
   );
}

export default contactForm;
