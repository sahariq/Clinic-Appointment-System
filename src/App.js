import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import images
import doctorProfile from './images/doctor.jpg';
import cardiologyConsultation from './images/pic3.png';
import ecgTesting from './images/pic6.png';
import heartScreening from './images/pic5.png';
import hypertension from './images/pic1.png';
import cholesterolTesting from './images/pic4.png';
import emergencyCare from './images/pic2.png';
import locationIcon from './images/location.svg';
import emailIcon from './images/person.svg';
import phoneIcon from './images/notifications.svg';

function App() {
  const services = [
    {
      id: 1,
      title: "Cardiology Consultation",
      description: "Expert heart health assessments by Professor Mohammad Naeem Malik.",
      image: cardiologyConsultation
    },
    {
      id: 2,
      title: "ECG & Stress Testing",
      description: "Accurate diagnosis of heart function through advanced ECG tests.",
      image: ecgTesting
    },
    {
      id: 3,
      title: "Heart Health Screening",
      description: "Preventive heart checkups to detect risks early and ensure well-being.",
      image: heartScreening
    },
    {
      id: 4,
      title: "Manage Hypertension",
      description: "Personalized plans to control high blood pressure and improve heart health",
      image: hypertension
    },
    {
      id: 5,
      title: "Cholesterol & Lipid Testing",
      description: "Advanced blood tests to monitor cholesterol levels and heart disease risk",
      image: cholesterolTesting
    },
    {
      id: 6,
      title: "Emergency Cardiac Care",
      description: "Immediate medical attention for heart-related emergencies.",
      image: emergencyCare
    }
  ];

  return (
    <div className="app">
      <header>
        <div className="logo">
          <h1>iqbal<br />cardiocare</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#services">services</a></li>
            <li><a href="#contact">contact</a></li>
            <li><a href="#patient-portal">patient portal</a></li>
          </ul>
        </nav>
        <button className="appointment-btn">book an appointment</button>
      </header>

      <main>
        <section className="welcome-section">
          <h2>WELCOME</h2>
          <div className="doctor-intro">
            <div className="doctor-info">
              <h3>PROFESSOR<br />MOHAMMAD<br />NAEEM<br />MALIK</h3>
            </div>
            <div className="doctor-image">
              <img src={doctorProfile} alt="Professor Mohammad Naeem Malik" />
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>OUR SERVICES</h2>
          <div className="services-grid">
            {services.map(service => (
              <div className="service-card" key={service.id}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-logo">
          <h2>IQBAL<br />CARDIOCARE</h2>
        </div>
        
        <div className="footer-nav">
          <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#services">services</a></li>
            <li><a href="#contact">contact</a></li>
            <li><a href="#patient-portal">patient portal</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <div className="contact-item">
            <img src={locationIcon} alt="Location" className="contact-icon" />
            <p>
              Time Square Plaza, G-8<br />
              Markaz G 8 Markaz G-8,<br />
              Islamabad, 44000,<br />
              Pakistan
            </p>
          </div>
          
          <div className="contact-item">
            <img src={emailIcon} alt="Email" className="contact-icon" />
            <p>drnaeepmims@gmail.com</p>
          </div>
          
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone" className="contact-icon" />
            <p>03335195321</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;