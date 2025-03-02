import React from "react";

const Services = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#3498db", // Blue background
        color: "white",
        fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        fontSize: "2rem",
        fontWeight: "bold",
        transition: "background-color 0.3s ease-in-out",
        padding: "20px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2980b9")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3498db")}>
      <h1 style={{ borderBottom: "3px solid white", paddingBottom: "10px" }}>
        Our Services
      </h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {["Technology Consulting", "Market Analysis", "Product Development"].map(
          (service, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "white",
                margin: "15px 0",
                padding: "15px 20px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                color: "#34495e",
                fontWeight: "500",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(10px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 4px rgba(0, 0, 0, 0.1)";
              }}
            >
              {service}
            </li>
          )
        )}
      </ul>
      <a
        href="#"
        style={{
          display: "block",
          marginTop: "20px",
          color: "white",
          textDecoration: "none",
          fontSize: "1rem",
        }}
      >
        View More
      </a>
    </div>
  );
};

export default Services;
