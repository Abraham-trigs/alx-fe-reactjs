import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        backgroundColor: "#f4f6f9",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          color: "#2c3e50",
          borderBottom: "3px solid #3498db",
          paddingBottom: "10px",
          marginBottom: "30px",
          fontSize: "2.5rem",
          fontWeight: "600",
        }}
      >
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: "12px 15px",
            border: "1px solid #d1d8e0",
            borderRadius: "8px",
            fontSize: "1rem",
            backgroundColor: "white",
            transition: "border-color 0.3s ease",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: "12px 15px",
            border: "1px solid #d1d8e0",
            borderRadius: "8px",
            fontSize: "1rem",
            backgroundColor: "white",
            transition: "border-color 0.3s ease",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            padding: "12px 15px",
            border: "1px solid #d1d8e0",
            borderRadius: "8px",
            fontSize: "1rem",
            minHeight: "150px",
            backgroundColor: "white",
            resize: "vertical",
            transition: "border-color 0.3s ease",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px 20px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2980b9")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3498db")}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
