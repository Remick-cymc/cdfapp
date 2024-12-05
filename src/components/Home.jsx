// src/HomePage.js
import React from "react";


const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="home-header">
        <h1>Welcome to the Community Development Fund</h1>
        <p>
          Empowering communities through sustainable development and funding initiatives.
        </p>
        <button className="cta-btn">Get Involved</button>
      </header>

      {/* Our Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At CDF, we aim to support local communities by providing grants and resources to initiatives that make a lasting impact on social, economic, and environmental well-being.
        </p>
      </section>

      {/* How We Help Section */}
      <section className="how-we-help">
        <h2>How We Help</h2>
        <div className="card">
          <h3>Grants for Projects</h3>
          <p>We fund projects that aim to improve infrastructure, education, healthcare, and more in underserved areas.</p>
        </div>
        <div className="card">
          <h3>Community Support</h3>
          <p>We provide technical and financial support to local leaders to ensure project sustainability.</p>
        </div>
        <div className="card">
          <h3>Capacity Building</h3>
          <p>We offer training and mentorship to enhance community skills and leadership abilities.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Make a Difference?</h2>
        <button className="cta-btn">Donate Now</button>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Community Development Fund. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
