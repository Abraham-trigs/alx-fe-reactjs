import { Link } from "react-router-dom"; 
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <div>
      <nav
        style={{
          backgroundColor: "#2c3e50", 
          padding: "15px",
          textAlign: "center",
        }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "0 15px",
            fontSize: "1.2rem",
            transition: "color 0.3s ease-in-out",
            marginRight: '980px',
          }}
          onMouseEnter={(e) => (e.target.style.color = "#f39c12")} // Change color on hover
          onMouseLeave={(e) => (e.target.style.color = "white")} // Revert color
        >
          Home
        </Link>
        |
        <Link
          to="/about"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "0 15px",
            fontSize: "1.2rem",
            transition: "color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#3498db")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          About
        </Link>
        |
        <Link
          to="/services"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "0 15px",
            fontSize: "1.2rem",
            transition: "color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#3498db")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Services
        </Link>
        |
        <Link
          to="/contact"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "0 15px",
            fontSize: "1.2rem",
            transition: "color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#3498db")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
