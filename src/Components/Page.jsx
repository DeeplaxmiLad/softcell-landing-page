import React from 'react';

const Page = () => {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to SoftSell</h1>
        <p>Your reliable software solutions partner.</p>
        <a href="#about" className="cta-btn">Learn More</a>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>We provide IT services, software development, and system integration for businesses of all sizes.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Custom Software Development</li>
          <li>Web & Mobile App Development</li>
          <li>Cloud Solutions</li>
          <li>IT Consultancy</li>
        </ul>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          <div className="product-card">CRM Software</div>
          <div className="product-card">Inventory Management</div>
          <div className="product-card">Payroll System</div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews">
        <h2>What Our Clients Say</h2>
        <div className="review-grid">
          <div className="review-card">
            <p>"SoftSell transformed our business with their tailored CRM solution. Highly professional and responsive!"</p>
            <h4>- Priya Sharma, Phoenix Corp</h4>
          </div>
          <div className="review-card">
            <p>"Exceptional service and technical expertise. We couldn't ask for a better IT partner."</p>
            <h4>- Rahul Mehta, GreenLeaf Pvt. Ltd.</h4>
          </div>
          <div className="review-card">
            <p>"Their cloud migration support helped us scale efficiently and securely."</p>
            <h4>- Neha Desai, BuildTech Solutions</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 SoftSell Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page;
