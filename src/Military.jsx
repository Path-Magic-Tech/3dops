import React, { useState, useEffect, Suspense } from 'react';
import './Military.css';

// Constants
const DEPARTMENTS = [
  { id: 'manufacturing', icon: "🔧", text: "Manufacturing", subtext: "ADAM 3D Printing" },
  { id: 'electrical', icon: "⚡", text: "Electrical", subtext: "Circuit Design" },
  { id: 'sales', icon: "📈", text: "Sales", subtext: "Market Strategy" },
  { id: 'software', icon: "💻", text: "Software", subtext: "Digital Solutions" }
];

const MATERIALS = [
  { name: "17-4 Stainless Steel", desc: "High strength, corrosion resistant", status: "ACTIVE" },
  { name: "303 Stainless Steel", desc: "Excellent machinability", status: "ACTIVE" },
  { name: "A-2 Tool Steel", desc: "High hardness, wear resistant", status: "BETA" },
  { name: "6061 Aluminum", desc: "Lightweight, strong", status: "BETA" },
  { name: "Carbon Fiber", desc: "Stronger than aluminum, 40% lighter", status: "ACTIVE" },
  { name: "Titanium Ti-6Al-4V", desc: "Aerospace grade", status: "BETA" }
];

const ELECTRICAL_SERVICES = [
  {
    title: "PCB Design & Layout",
    icon: "⚡",
    desc: "Professional printed circuit board design from schematic to manufacturing files.",
    features: ["Multi-layer PCB design", "High-frequency circuit layout", "Signal integrity analysis", "Manufacturing optimization"]
  },
  {
    title: "Embedded Systems",
    icon: "🔧",
    desc: "Complete embedded hardware and firmware development solutions.",
    features: ["Microcontroller programming", "Real-time system design", "Hardware abstraction layers", "Power management systems"]
  }
];

const SALES_SERVICES = [
  {
    title: "Market Research",
    icon: "🎯",
    desc: "Comprehensive market analysis and competitive intelligence.",
    features: ["Target audience analysis", "Competitive landscape mapping", "Market size estimation", "Pricing strategy development"]
  },
  {
    title: "Brand Development",
    icon: "🏆",
    desc: "Complete brand identity and positioning strategy.",
    features: ["Brand identity design", "Messaging framework", "Visual identity systems", "Brand guidelines creation"]
  },
  {
    title: "Digital Marketing",
    icon: "📈",
    desc: "Modern marketing strategies for rapid growth.",
    features: ["Social media marketing", "Search engine optimization", "Content marketing", "Paid advertising campaigns"]
  }
];

const SOFTWARE_SERVICES = [
  {
    title: "Mobile Applications",
    icon: "📱",
    desc: "Native and cross-platform mobile app development.",
    tech: ["React Native", "Flutter", "iOS/Android", "Progressive Web Apps"]
  },
  {
    title: "Web Development",
    icon: "🌐",
    desc: "Modern web applications and responsive design.",
    tech: ["React/Next.js", "Node.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Database Systems",
    icon: "🗄️",
    desc: "Scalable database design and optimization.",
    tech: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
  },
  {
    title: "Cloud Architecture",
    icon: "☁️",
    desc: "Scalable cloud infrastructure and DevOps.",
    tech: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD Pipelines"]
  }
];

// Custom hook for form management
const useForm = (initialState, validationRules = {}) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    Object.keys(validationRules).forEach(field => {
      const rule = validationRules[field];
      const value = formData[field];
      
      if (rule.required && !value.trim()) {
        newErrors[field] = rule.message || `${field} is required`;
      } else if (rule.pattern && !rule.pattern.test(value)) {
        newErrors[field] = rule.patternMessage || `Invalid ${field}`;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formData,
    errors,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    validate,
    setFormData
  };
};

// Header Component
const Header = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getPageTitle = () => {
    const titles = {
      manufacturing: 'Manufacturing',
      electrical: 'Electrical',
      sales: 'Sales',
      software: 'Software',
      contact: 'Contact'
    };
    return titles[activeSection] || 'Product Development';
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-top-row">
          <button 
            onClick={() => handleNavClick('home')} 
            className="logo-btn"
            aria-label="Return to homepage"
          >
            <div className="logo-text">3DOPS</div>
            <div className="logo-tagline">{getPageTitle()}</div>
          </button>
          
          <div className="nav-actions">
            <a href="tel:+15553367724" className="nav-phone">
              📞 (555) 3DOPS-24
            </a>
            <button 
              onClick={() => handleNavClick('home')} 
              className="nav-cta"
            >
              {activeSection === 'home' ? 'Get Started' : 'Back to Home'}
            </button>
            
            {/* Mobile hamburger button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'hamburger-open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
        
        {/* Desktop navigation */}
        {activeSection === 'home' && (
          <div className="nav-bottom-row desktop-nav">
            <ul className="nav-links">
              {DEPARTMENTS.map(dept => (
                <li key={dept.id}>
                  <button 
                    onClick={() => handleNavClick(dept.id)}
                    className="nav-btn"
                  >
                    {dept.text}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="nav-btn"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
        
        {/* Mobile navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <ul className="mobile-nav-links">
            {DEPARTMENTS.map(dept => (
              <li key={dept.id}>
                <button 
                  onClick={() => handleNavClick(dept.id)}
                  className="mobile-nav-btn"
                >
                  <span className="mobile-nav-icon">{dept.icon}</span>
                  <span className="mobile-nav-text">{dept.text}</span>
                </button>
              </li>
            ))}
            <li>
              <button 
                onClick={() => handleNavClick('contact')}
                className="mobile-nav-btn"
              >
                <span className="mobile-nav-icon">📞</span>
                <span className="mobile-nav-text">Contact</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

// Loading Component
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="loading-text">Loading...</div>
  </div>
);

// Error Display Component
const ErrorMessage = ({ error, onClear }) => (
  error ? (
    <div className="error-message">
      <span>{error}</span>
      {onClear && (
        <button onClick={onClear} className="error-clear">
          ✕
        </button>
      )}
    </div>
  ) : null
);

// Form Components
const FormField = ({ label, error, children, required = false }) => (
  <div className="form-field">
    <label className="form-label">
      {label} {required && <span className="required-indicator">*</span>}
    </label>
    {children}
    <ErrorMessage error={error} />
  </div>
);

const Input = ({ error, ...props }) => (
  <input
    className={`form-input ${error ? 'form-input-error' : ''}`}
    {...props}
  />
);

const Select = ({ error, children, ...props }) => (
  <select
    className={`form-select ${error ? 'form-select-error' : ''}`}
    {...props}
  >
    {children}
  </select>
);

// Hero Section Component
const HeroSection = ({ setActiveSection }) => (
  <section className="hero">
    <div className="hero-bg"></div>
    
    <div className="hero-content">
      <div className="hero-inner">
        <div className="hero-badge">
          🚀 Complete Product Development Solutions
        </div>
        
        <h1 className="hero-title">
          From Concept to Market<br />In Record Time
        </h1>
        
        <p className="hero-subtitle">
          Integrated Product Development Services.<br />
          Manufacturing. Engineering. Sales. Software. Delivered.
        </p>
        
        <div className="department-grid">
          {DEPARTMENTS.map((department) => (
            <button 
              key={department.id}
              onClick={() => setActiveSection(department.id)}
              className="department-card"
            >
              <div className="department-icon">{department.icon}</div>
              <div className="department-text">{department.text}</div>
              <div className="department-subtext">{department.subtext}</div>
              <div className="department-hint">Click to Explore</div>
            </button>
          ))}
        </div>
        
        <div className="hero-cta">
          <a href="#start" className="btn-primary">Start Project</a>
          <button onClick={() => setActiveSection('contact')} className="btn-secondary">
            View Process
          </button>
        </div>
      </div>
    </div>
  </section>
);

// Project Form Component
const ProjectForm = () => {
  const validationRules = {
    product: { required: true, message: 'Product concept is required' },
    stage: { required: true, message: 'Please select current stage' },
    timeline: { required: true, message: 'Timeline is required' },
    budget: { required: true, message: 'Budget range is required' },
    email: { 
      required: true, 
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
      message: 'Email is required',
      patternMessage: 'Please enter a valid email address'
    }
  };

  const {
    formData,
    errors,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    validate,
    setFormData
  } = useForm({
    product: '',
    stage: '',
    timeline: '',
    budget: '',
    email: ''
  }, validationRules);

  const handleSubmit = async () => {
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Thank you! Our team will contact you within 24 hours with a comprehensive development strategy.');
      setFormData({
        product: '',
        stage: '',
        timeline: '',
        budget: '',
        email: ''
      });
    } catch (error) {
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="start" className="form-section">
      <div className="content-wrapper">
        <div className="form-container">
          <h2 className="form-title">Start Your Project</h2>
          <p className="form-subtitle">
            Schedule a Strategic Consultation - Tell Us About Your Product
          </p>
          
          <div className="form-card">
            <h3 className="form-card-title">
              🎯 Project Brief
            </h3>
            
            <div className="form-fields">
              <FormField label="Product Concept" error={errors.product} required>
                <Input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="e.g., Smart fitness tracker with AI coaching"
                  error={errors.product}
                />
              </FormField>
              
              <FormField label="Current Stage" error={errors.stage} required>
                <Select
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                  error={errors.stage}
                >
                  <option value="">Select Development Phase</option>
                  <option value="idea">CONCEPT: Just an idea</option>
                  <option value="prototype">PROTOTYPE: Have basic prototype</option>
                  <option value="testing">TESTING: Ready for validation</option>
                  <option value="manufacturing">PRODUCTION: Ready to scale</option>
                  <option value="launch">LAUNCH: Ready for market</option>
                </Select>
              </FormField>
              
              <div className="form-row">
                <FormField label="Timeline Goals" error={errors.timeline} required>
                  <Select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    error={errors.timeline}
                  >
                    <option value="">Select Timeline</option>
                    <option value="emergency">URGENT: Under 8 weeks</option>
                    <option value="fast">FAST: 8-12 weeks</option>
                    <option value="standard">STANDARD: 3-6 months</option>
                    <option value="flexible">FLEXIBLE: 6+ months</option>
                  </Select>
                </FormField>
                
                <FormField label="Project Budget" error={errors.budget} required>
                  <Select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    error={errors.budget}
                  >
                    <option value="">Select Budget Range</option>
                    <option value="startup">STARTUP: $10K - $50K</option>
                    <option value="growth">GROWTH: $50K - $200K</option>
                    <option value="enterprise">ENTERPRISE: $200K - $500K</option>
                    <option value="premium">PREMIUM: $500K+</option>
                  </Select>
                </FormField>
              </div>
              
              <FormField label="Contact Email" error={errors.email} required>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="founder@startup.com"
                  error={errors.email}
                />
              </FormField>
              
              <button 
                onClick={handleSubmit} 
                disabled={isSubmitting}
                className={`form-submit ${isSubmitting ? 'form-submit-loading' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : '🚀 Request Consultation 🚀'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Page Components
const ManufacturingPage = () => (
  <div className="page-content">
    <div className="content-wrapper">
      <div className="section-header">
        <h2 className="page-title">Manufacturing Division</h2>
        <p className="page-subtitle">
          Advanced Manufacturing Solutions - From Concept to Production
        </p>
      </div>

      <div className="grid-two-col margin-bottom-lg">
        <div className="feature-card">
          <h3 className="card-title">
            🔥 ADAM 3D Printing Technology
          </h3>
          <div className="card-content">
            <p className="card-text">Revolutionary Atomic Diffusion Additive Manufacturing (ADAM) brings metal 3D printing into mainstream production at unprecedented speed and cost efficiency.</p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">50%</div>
                <div className="stat-label">Faster Production</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20x</div>
                <div className="stat-label">Cost Reduction</div>
              </div>
            </div>
            <ul className="feature-list">
              {["Same-day delivery capabilities", "Cast-quality mechanical properties", "Complex internal geometries", "Multiple material options"].map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="feature-card">
          <h3 className="card-title">Materials Portfolio</h3>
          <div className="materials-list">
            {MATERIALS.map((material, index) => (
              <div key={index} className="material-item">
                <div className="material-info">
                  <div className="material-name">{material.name}</div>
                  <div className="material-desc">{material.desc}</div>
                </div>
                <div className={`status-badge ${material.status === 'BETA' ? 'status-beta' : 'status-active'}`}>
                  {material.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ElectricalPage = () => (
  <div className="page-content">
    <div className="content-wrapper">
      <div className="section-header">
        <h2 className="page-title">Electrical Engineering</h2>
        <p className="page-subtitle">
          Complete Electronic Design Solutions - From Circuit to System
        </p>
      </div>

      <div className="grid-two-col margin-bottom-lg">
        {ELECTRICAL_SERVICES.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-header">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
            </div>
            <p className="service-desc">{service.desc}</p>
            <ul className="feature-list">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SalesPage = () => (
  <div className="page-content">
    <div className="content-wrapper">
      <div className="section-header">
        <h2 className="page-title">Sales & Business Development</h2>
        <p className="page-subtitle">
          Strategic Market Domination - From Launch to Scale
        </p>
      </div>

      <div className="grid-three-col margin-bottom-lg">
        {SALES_SERVICES.map((service, index) => (
          <div key={index} className="service-card-center">
            <div className="service-icon-center">{service.icon}</div>
            <h3 className="service-title-center">{service.title}</h3>
            <p className="service-desc-center">{service.desc}</p>
            <ul className="feature-list">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SoftwarePage = () => (
  <div className="page-content">
    <div className="content-wrapper">
      <div className="section-header">
        <h2 className="page-title">Software Development</h2>
        <p className="page-subtitle">
          Full-Stack Development Solutions - Web, Mobile, and Cloud
        </p>
      </div>

      <div className="grid-two-col margin-bottom-lg">
        {SOFTWARE_SERVICES.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-header">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
            </div>
            <p className="service-desc">{service.desc}</p>
            <div className="tech-grid">
              {service.tech.map((tech, idx) => (
                <div key={idx} className="tech-item">
                  <div className="tech-name">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="page-content">
    <div className="content-wrapper">
      <div className="section-header">
        <h2 className="page-title">Contact Center</h2>
        <p className="page-subtitle">
          Connect with Our Expert Team
        </p>
      </div>

      <div className="grid-two-col">
        <div className="contact-card">
          <h3 className="card-title">Direct Contact</h3>
          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-info">
                <div className="contact-label">Main Line</div>
                <div className="contact-value">(555) 3DOPS-24</div>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-info">
                <div className="contact-label">Email</div>
                <div className="contact-value">hello@3dops.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <h3 className="card-title">Department Leads</h3>
          <div className="department-list">
            {[
              { name: "Manufacturing", lead: "Director: Marcus Steel" },
              { name: "Electrical Engineering", lead: "Director: Elena Circuit" },
              { name: "Sales & Business Development", lead: "Director: Alex Revenue" },
              { name: "Software Development", lead: "Director: Sam Binary" }
            ].map((dept, index) => (
              <div key={index} className="department-item">
                <div className="department-name">{dept.name}</div>
                <div className="department-lead">{dept.lead}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-center">
        <h4 className="footer-title">3DOPS</h4>
        <p className="footer-desc">
          Complete product development solutions for innovative startups.
        </p>
        <p className="footer-phone">📞 (555) 3DOPS-24</p>
        <p className="footer-tagline">
          Business Development Hotline
        </p>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; 2024 3DOPS. All rights reserved. | Complete Product Development Solutions
        </p>
      </div>
    </div>
  </footer>
);

// Main App Component
const Military = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Focus management for accessibility
  useEffect(() => {
    if (activeSection !== 'home') {
      const pageTitle = document.querySelector('.page-title');
      if (pageTitle) {
        pageTitle.focus();
        pageTitle.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  const renderPageContent = () => {
    const pageComponents = {
      manufacturing: ManufacturingPage,
      electrical: ElectricalPage,
      sales: SalesPage,
      software: SoftwarePage,
      contact: ContactPage
    };

    const PageComponent = pageComponents[activeSection];
    
    if (PageComponent) {
      return (
        <div className="page-container">
          <Suspense fallback={<LoadingSpinner />}>
            <PageComponent />
          </Suspense>
          <div className="center-content margin-top-lg">
            <button 
              onClick={() => setActiveSection('home')} 
              className="btn-primary"
            >
              Back to Home
            </button>
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="app-container">      
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' ? (
        <>
          <HeroSection setActiveSection={setActiveSection} />
          <ProjectForm />
          <Footer />
        </>
      ) : (
        <>
          {renderPageContent()}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Military;