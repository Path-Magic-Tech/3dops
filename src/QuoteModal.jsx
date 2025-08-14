import React, { useState } from 'react';
import './QuoteModal.css';

// QuoteModal Component
const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDescription: '',
    quantity: '',
    timeline: '',
    material: '',
    specifications: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          projectDescription: '',
          quantity: '',
          timeline: '',
          material: '',
          specifications: null
        });
      }, 2000);
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    setSubmitSuccess(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Request Quote</h3>
          <button className="close-btn" onClick={handleClose}>✕</button>
        </div>
        
        {submitSuccess ? (
          <div className="success-message">
            Mission Accepted! Your quote request has been deployed to our tactical operations team.
          </div>
        ) : (
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group half">
                <label className="form-label">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group half">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group half">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Project Description *</label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Describe your mission-critical manufacturing requirements..."
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label className="form-label">Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g., 100 units"
                />
              </div>
              <div className="form-group half">
                <label className="form-label">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP - Emergency</option>
                  <option value="1-3-days">1-3 Days</option>
                  <option value="1-week">1 Week</option>
                  <option value="2-4-weeks">2-4 Weeks</option>
                  <option value="1-3-months">1-3 Months</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Preferred Material</label>
              <select
                name="material"
                value={formData.material}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select material</option>
                <option value="17-4-stainless">17-4 Stainless Steel</option>
                <option value="303-stainless">303 Stainless Steel</option>
                <option value="a2-tool-steel">A-2 Tool Steel</option>
                <option value="d2-tool-steel">D-2 Tool Steel</option>
                <option value="6061-aluminum">6061 Aluminum</option>
                <option value="7075-aluminum">7075 Aluminum</option>
                <option value="titanium">Titanium Ti-6Al-4V</option>
                <option value="carbon-fiber">Carbon Fiber</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Deploying Mission...' : 'Deploy Quote Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;