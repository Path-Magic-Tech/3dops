import './Military.css';

const Military = () => {

  return (
    <div>
      
      <header>
        <nav className="container">
          <a href="#" className="logo">3DOPS</a>
          <ul className="nav-links">
            <li><a href="#technology">Technology</a></li>
            <li><a href="#materials">Materials</a></li>
            <li><a href="#applications">Applications</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <a href="#contact" className="contact-btn">Get Quote</a>
        </nav>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Tactical Metal Manufacturing</h1>
            <p className="tagline">ADAM Technology - Mission-Critical Parts On Demand</p>
            
            <div className="hero-metrics">
              <div className="metric">
                <span className="metric-value">50%</span>
                <span className="metric-label">Faster Production</span>
              </div>
              <div className="metric">
                <span className="metric-value">20x</span>
                <span className="metric-label">Cost Reduction</span>
              </div>
              <div className="metric">
                <span className="metric-value">100%</span>
                <span className="metric-label">Cast Quality</span>
              </div>
              <div className="metric">
                <span className="metric-value">24/7</span>
                <span className="metric-label">Operations</span>
              </div>
            </div>
            
            <div className="hero-cta">
              <a href="#quote" className="btn-primary">Request Quote</a>
              <a href="#technology" className="btn-secondary">View Technology</a>
            </div>
          </div>
        </div>
      </section>

      <section className="adam-tech" id="technology">
        <div className="container">
          <h2 className="section-title">ADAM Technology</h2>
          <p className="section-subtitle">Atomic Diffusion Additive Manufacturing - Precision metal parts for mission-critical applications</p>
          
          <div className="adam-content">
            <div className="adam-text">
              <h3>Combat-Proven Process</h3>
              <p>ADAM utilizes bound metal powder that transforms into dense, high-strength metal components through precision sintering. Our bulk sintering process delivers crystal growth through all axes, ensuring superior mechanical properties in every direction.</p>
              
              <ul className="adam-benefits">
                <li>Mechanical properties equivalent to cast metal parts</li>
                <li>Replace traditional tooling and fixtures</li>
                <li>Complex internal geometries impossible with conventional methods</li>
                <li>Closed-cell honeycomb and lattice structures</li>
                <li>Rapid deployment capabilities</li>
                <li>Field-proven reliability</li>
              </ul>
            </div>
            
            <div className="adam-visual"></div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">2-6</span>
              <span className="stat-label">Hours</span>
              <p className="stat-desc">From design to finished part</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.8%</span>
              <span className="stat-label">Density</span>
              <p className="stat-desc">Near-theoretical material density</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Parts/Day</span>
              <p className="stat-desc">High-volume production capability</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">±0.1mm</span>
              <span className="stat-label">Tolerance</span>
              <p className="stat-desc">Precision manufacturing standards</p>
            </div>
          </div>
        </div>
      </section>

      <section className="materials" id="materials">
        <div className="container">
          <h2 className="section-title">Materials Arsenal</h2>
          <p className="section-subtitle">Military-grade materials for demanding operational environments</p>
          
          <div className="materials-grid">
            <div className="material-category">
              <h4>Stainless Steel</h4>
              <ul className="material-list">
                <li>17-4 Stainless Steel <span>High strength, corrosion resistant</span></li>
                <li>303 Stainless Steel <span>Excellent machinability</span></li>
              </ul>
            </div>
            
            <div className="material-category">
              <h4>Tool Steel</h4>
              <ul className="material-list">
                <li>A-2 Tool Steel <span className="beta-tag">Beta</span></li>
                <li>D-2 Tool Steel <span className="beta-tag">Beta</span></li>
              </ul>
            </div>
            
            <div className="material-category">
              <h4>Aluminum Alloys</h4>
              <ul className="material-list">
                <li>6061 Aluminum <span className="beta-tag">Beta</span></li>
                <li>7075 Aluminum <span className="beta-tag">Beta</span></li>
              </ul>
            </div>
            
            <div className="material-category">
              <h4>Advanced Materials</h4>
              <ul className="material-list">
                <li>Titanium Ti-6Al-4V <span className="beta-tag">Beta</span></li>
                <li>Carbon Fiber <span>Stronger than 6061 Al</span></li>
                <li>Kevlar <span>Ballistic-grade protection</span></li>
                <li>HSHT Fiberglass <span>High-temp applications</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="applications" id="applications">
        <div className="container">
          <h2 className="section-title">Mission Applications</h2>
          <p className="section-subtitle">Proven solutions for critical operations</p>
          
          <div className="applications-grid">
            <div className="application-card">
              <h4>Defense & Aerospace</h4>
              <p>Mission-critical components for military aircraft, UAVs, and defense systems. Rapid replacement parts for field operations with same-day delivery capabilities.</p>
            </div>
            
            <div className="application-card">
              <h4>Tactical Equipment</h4>
              <p>Custom tooling, fixtures, and specialized equipment for tactical operations. Carbon fiber components that outperform aluminum while reducing weight by 40%.</p>
            </div>
            
            <div className="application-card">
              <h4>Emergency Response</h4>
              <p>Rapid manufacturing of replacement parts and emergency equipment. Field-deployable solutions for critical infrastructure and emergency services.</p>
            </div>
            
            <div className="application-card">
              <h4>Industrial Operations</h4>
              <p>High-strength production tooling and load-bearing components. Reduce downtime with same-day part replacement and custom manufacturing solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Mission-Ready Manufacturing</h2>
          <p>When failure is not an option, trust 3DOPS for mission-critical manufacturing solutions</p>
          <a href="#contact" className="btn-primary">Deploy Now</a>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>3DOPS</h4>
              <p>Advanced metal manufacturing using revolutionary ADAM technology for mission-critical applications.</p>
              <p>Operational Excellence. Mission Ready.</p>
            </div>
            <div className="footer-section">
              <h4>Technologies</h4>
              <a href="#">ADAM Process</a>
              <a href="#">Metal 3D Printing</a>
              <a href="#">Carbon Fiber Manufacturing</a>
              <a href="#">Rapid Prototyping</a>
            </div>
            <div className="footer-section">
              <h4>Industries</h4>
              <a href="#">Defense & Military</a>
              <a href="#">Aerospace</a>
              <a href="#">Emergency Services</a>
              <a href="#">Industrial Manufacturing</a>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <a href="#">Technical Specifications</a>
              <a href="#">Material Data Sheets</a>
              <a href="#">Quality Certifications</a>
              <a href="#">24/7 Support</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 3DOPS. All rights reserved. | Mission-Critical Manufacturing Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Military;