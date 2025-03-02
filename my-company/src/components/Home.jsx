import React, { useState } from "react";
import { createRoot } from "react";

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: isHovered ? "#2980b9" : "#3498db",
      color: "white",
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      transition: "background-color 0.3s ease-in-out",
      textAlign: "center",
      padding: "20px",
      boxSizing: "border-box"
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <header style={{
        marginBottom: "40px",
        borderBottom: "3px solid white",
        paddingBottom: "20px"
      }}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          marginBottom: "20px" 
        }}>
          Welcome to Our Company
        </h1>
        <p style={{ 
          fontSize: "1.2rem", 
          maxWidth: "600px", 
          margin: "0 auto" 
        }}>
          We are dedicated to delivering excellence in all our services.
        </p>
      </header>

      <nav style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginBottom: "40px"
      }}>
        <NavButton href="/about">About Us</NavButton>
        <NavButton href="/services">Our Services</NavButton>
      </nav>

      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1
      }}>
        <section style={{
          backgroundColor: "rgba(255,255,255,0.2)",
          borderRadius: "10px",
          padding: "30px",
          maxWidth: "800px",
          width: "90%"
        }}>
          <h2 style={{ 
            borderBottom: "2px solid white", 
            paddingBottom: "10px",
            marginBottom: "20px"
          }}>
            Why Choose Us
          </h2>
          <ul style={{ 
            listStyleType: "none", 
            padding: 0,
            display: "flex",
            justifyContent: "space-between"
          }}>
            {[
              "🚀 Innovative Solutions", 
              "🤝 Trusted Partnership", 
              "💡 Expert Consulting"
            ].map((feature, index) => (
              <li 
                key={index} 
                style={{
                  flex: 1,
                  margin: "0 10px",
                  padding: "15px",
                  backgroundColor: "white",
                  color: "#34495e",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer style={{
        marginTop: "40px",
        padding: "20px",
        fontSize: "0.9rem"
      }}>
        <a 
          href={import.meta.url.replace("esm.town", "val.town")} 
          target="_top" 
          style={{ 
            color: 'white', 
            textDecoration: 'none' 
          }}
        >
          View Source
        </a>
      </footer>
    </div>
  );
}

function NavButton({ children, href }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={href}
      style={{
        backgroundColor: isHovered ? "white" : "rgba(255,255,255,0.2)",
        color: isHovered ? "#3498db" : "white",
        padding: "10px 20px",
        borderRadius: "5px",
        textDecoration: "none",
        transition: "all 0.3s ease"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
}

function App() {
  return <Home />;
}

function client() {
  createRoot(document.getElementById("root")).render(<App />);
}
if (typeof document !== "undefined") { client(); }

export default function server(request) {
  return new Response(`
    <html>
      <head>
        <title>Welcome - Our Company</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${css}</style>
      </head>
      <body>
        <div id="root"></div>
        <script src="https://esm.town/v/std/catch"></script>
        <script type="module" src="/client.js"></script>
      </body>
    </html>
  `, {
    headers: {
      "content-type": "text/html",
    },
  });
}

const css = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}
`;
