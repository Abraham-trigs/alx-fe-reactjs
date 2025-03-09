import { useState } from "react";

const RegistrationForm = () => {
  // State to track form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Destructure form data
  const { username, email, password } = formData;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    
    if (!username) newErrors.username = "Username is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); // Clear any previous errors
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
        value={username}
        onChange={handleChange}
      />
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

      {/* Email Field */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      {/* Password Field */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      {/* Submit Button */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
