import { useState } from "react";

const RegistrationForm = () => {
  // State to track form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Destructure form data
  const { username, email, password } = formData;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }
    setError(""); // Clear any previous error
    console.log("User registered:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      {/* Username Field */}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username} // ✅ Now using destructured variable
        onChange={handleChange}
      />

      {/* Email Field */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email} // ✅ Now using destructured variable
        onChange={handleChange}
      />

      {/* Password Field */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password} // ✅ Now using destructured variable
        onChange={handleChange}
      />

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Submit Button */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
