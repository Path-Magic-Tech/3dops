import "./Military.css";
import Logo from "./assets/3dops-logo.png";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import React, { useState } from 'react';
import QuoteModal from "./QuoteModal";

const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.95)",
    config: { tension: 80, friction: 20 },
  });

  const staggeredAnimation = (delay: number) =>
    useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(30px)",
      config: { tension: 80, friction: 20 },
      delay,
    });

  return (
    <section className="hero" ref={ref}>
      <div className="container">
        <animated.div style={fadeIn} className="hero-content">
          <animated.h1 style={staggeredAnimation(0)}>Additive Manufacturing</animated.h1>
          <animated.p style={staggeredAnimation(200)} className="tagline">
            ADAM Technology - Mission-Critical Parts On Demand
          </animated.p>

          <animated.div style={staggeredAnimation(400)} className="hero-metrics">
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
          </animated.div>

          <animated.div style={staggeredAnimation(600)} className="hero-cta">
            <a href="#quote" className="btn-primary">
              Request Quote
            </a>
            <a href="#technology" className="btn-secondary">
              View Technology
            </a>
          </animated.div>
        </animated.div>
      </div>
    </section>
  );
};

const ScrollAnimationGrid = () => {
  const items = [
    { number: "2-6", label: "Hours", desc: "From design to finished part" },
    { number: "99.8%", label: "Density", desc: "Near-theoretical material density" },
    { number: "500+", label: "Parts/Day", desc: "High-volume production capability" },
    { number: "±0.1mm", label: "Tolerance", desc: "Precision manufacturing standards" },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {items.map((item, index) => {
            const [ref, inView] = useInView({ triggerOnce: true });
            const animation = useSpring({
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-20px)",
              config: { duration: 1000, delay: index * 200 },
            });

            return (
              <animated.div
                key={index}
                ref={ref}
                style={animation}
                className="stat-item"
              >
                <span className="stat-number">{item.number}</span>
                <span className="stat-label">{item.label}</span>
                <p className="stat-desc">{item.desc}</p>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Military = () => {
   const [showQuoteModal, setShowQuoteModal] = useState(false);

  const openQuoteModal = (e) => {
    e.preventDefault();
    setShowQuoteModal(true);
  };

  const closeQuoteModal = () => {
    setShowQuoteModal(false);
  };
  return (
    <div>
      <header>
      <QuoteModal 
        isOpen={showQuoteModal} 
        onClose={closeQuoteModal} 
      />
        <nav className="container">
          <a href="#">
            <img src={Logo}></img>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#technology">Technology</a>
            </li>
            <li>
              <a href="#materials">Materials</a>
            </li>
            <li>
              <a href="#applications">Applications</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
          <a href="#contact" className="contact-btn" onClick={openQuoteModal}>Get Quote</a>
        </nav>
      </header>

      <HeroSection />

      <section className="adam-tech" id="technology">
        <div className="container">
          <h2 className="section-title">ADAM Technology</h2>
          <p className="section-subtitle">
            Atomic Diffusion Additive Manufacturing - Precision metal parts for
            mission-critical applications
          </p>

          <div className="adam-content">
            <div className="adam-text">
              <h3>Hello Adam</h3>
              <p>
                A new process called ADAM (Atomic Diffusion Additive
                Manufacturing) brings metal 3D printing into mainstream
                manufacturing for the first time ever at an affordable price.
                3DOps supplies mechanical properties equivalent to cast metal
                parts. These parts can replace traditional plastic injection
                molds, machined jaws and fixtures, and shorten the product
                development cycle by months. A part that has typically taken
                weeks or months to manufacture can now be 3D printed in 24
                hours.
              </p>
            </div>

            <div className="adam-visual"></div>
          </div>
        </div>
      </section>

      <ScrollAnimationGrid />

      <section className="materials" id="materials">
        <div className="container">
          <animated.div
          style={useSpring({
            from: { opacity: 0, transform: "translateY(50px)" },
            to: { opacity: 1, transform: "translateY(0)" },
            config: { tension: 120, friction: 40 },
          })}
          >
        <h2 className="section-title">Materials Arsenal</h2>
        <p className="section-subtitle">
          Military-grade materials for demanding operational environments
        </p>
          </animated.div>

          <div className="materials-grid">
        {[
          {
            title: "Stainless Steel",
            items: [
          { name: "17-4 Stainless Steel", desc: "High strength, corrosion resistant" },
          { name: "303 Stainless Steel", desc: "Excellent machinability" },
            ],
          },
          {
            title: "Tool Steel",
            items: [
          { name: "A-2 Tool Steel", desc: "Beta" },
          { name: "D-2 Tool Steel", desc: "Beta" },
            ],
          },
          {
            title: "Aluminum Alloys",
            items: [
          { name: "6061 Aluminum", desc: "Beta" },
          { name: "7075 Aluminum", desc: "Beta" },
            ],
          },
          {
            title: "Advanced Materials",
            items: [
          { name: "Titanium Ti-6Al-4V", desc: "Beta" },
          { name: "Carbon Fiber", desc: "Stronger than 6061 Al" },
          { name: "Kevlar", desc: "Ballistic-grade protection" },
          { name: "HSHT Fiberglass", desc: "High-temp applications" },
            ],
          },
        ].map((category, index) => {
          const [ref, inView] = useInView({ triggerOnce: true });
          const animation = useSpring({
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            config: { tension: 100, friction: 50 },
            delay: index * 200,
          });

          return (
            <animated.div
          key={index}
          ref={ref}
          style={animation}
          className="material-category"
            >
          <h4>{category.title}</h4>
          <ul className="material-list">
            {category.items.map((item, idx) => (
              <li key={idx}>
            {item.name} <span>{item.desc}</span>
              </li>
            ))}
          </ul>
            </animated.div>
          );
        })}
          </div>
        </div>
      </section>

      <section className="applications" id="applications">
        <div className="container">
          <h2 className="section-title">Mission Applications</h2>
          <p className="section-subtitle">
            Proven solutions for critical operations
          </p>

          <div className="applications-grid">
            <div className="application-card">
              <h4>Defense & Aerospace</h4>
              <p>
                Mission-critical components for military aircraft, UAVs, and
                defense systems. Rapid replacement parts for field operations
                with same-day delivery capabilities.
              </p>
            </div>

            <div className="application-card">
              <h4>Tactical Equipment</h4>
              <p>
                Custom tooling, fixtures, and specialized equipment for tactical
                operations. Carbon fiber components that outperform aluminum
                while reducing weight by 40%.
              </p>
            </div>

            <div className="application-card">
              <h4>Emergency Response</h4>
              <p>
                Rapid manufacturing of replacement parts and emergency
                equipment. Field-deployable solutions for critical
                infrastructure and emergency services.
              </p>
            </div>

            <div className="application-card">
              <h4>Industrial Operations</h4>
              <p>
                High-strength production tooling and load-bearing components.
                Reduce downtime with same-day part replacement and custom
                manufacturing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Mission-Ready Manufacturing</h2>
          <p>
            When failure is not an option, trust 3DOPS for mission-critical
            manufacturing solutions
          </p>
          <a href="#contact" className="btn-primary">
            Deploy Now
          </a>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>3DOPS</h4>
              <p>
                Advanced metal manufacturing using revolutionary ADAM technology
                for mission-critical applications.
              </p>
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
            <p>
              &copy; 2024 3DOPS. All rights reserved. | Mission-Critical
              Manufacturing Solutions
            </p>
          </div>
        </div>
      </footer>
      <QuoteModal 
        isOpen={showQuoteModal} 
        onClose={closeQuoteModal} 
      />
    </div>
  );
};

export default Military;
