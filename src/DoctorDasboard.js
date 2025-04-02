import React, { useState } from 'react';
import './DoctorDashboard.css';

function DoctorDasboard() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const appointments = [
    {
      id: 1,
      type: 'Cardiology Consultation',
      patient: 'John Doe',
      date: 'March 10 2025',
      time: '3:30 PM',
      status: 'Confirmed',
      icon: 'consultation.png'
    },
    {
      id: 2,
      type: 'ECG & Stress Testing',
      patient: 'Sahar Iqbal',
      date: 'March 10 2025',
      time: '3:30 PM',
      status: 'Confirmed',
      icon: 'ecg.png'
    },
    {
      id: 3,
      type: 'Heart Health Screening',
      patient: 'Ali Khan',
      date: 'March 10 2025',
      time: '3:30 PM',
      status: 'Confirmed',
      icon: 'screening.png'
    }
  ];

  const filteredAppointments = appointments.filter(appointment => 
    appointment.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <div className="main-container">
        <header className="header">
          <div className="logo">
            <h1>iqbal <span>cardiocare</span></h1>
          </div>
          <nav className="navigation">
            <a href="#home">home</a>
            <a href="#services">services</a>
            <a href="#contact">contact</a>
            <a href="#portal">patient portal</a>
          </nav>
          <button className="logout-btn">log out</button>
        </header>

        <main className="main-content">
          <section className="welcome-section">
            <h1>WELCOME, <br />PROFESSOR NAEEM</h1>
            <p>Here's A Brief Overview Of Today's Appointments</p>
          </section>

          <section className="appointments-section">
            <h2>TODAY'S APPOINTMENTS</h2>
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="appointment-cards">
              {filteredAppointments.map(appointment => (
                <div key={appointment.id} className="appointment-card">
                  <div className="card-options">...</div>
                  <div className="card-content">
                    <div className="card-icon">
                      <img src={appointment.icon} alt={appointment.type} />
                    </div>
                    <div className="card-details">
                      <h3>{appointment.type}</h3>
                      <p><strong>Patient: </strong>{appointment.patient}</p>
                      <p><strong>Date & Time: </strong>{appointment.date} | {appointment.time}</p>
                      <p><strong>Status: </strong>{appointment.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="records-section">
            <h2>PATIENT RECORDS</h2>
            {/* Patient records content would go here */}
          </section>
        </main>

        <footer className="footer">
          <div className="footer-logo">
            <h2>IQBAL<br />CARDIOCARE</h2>
          </div>
          <div className="footer-nav">
            <a href="#home">home</a>
            <a href="#services">services</a>
            <a href="#contact">contact</a>
            <a href="#portal">patient portal</a>
          </div>
          <div className="footer-contact">
            <div className="contact-item">
              <i className="location-icon"></i>
              <p>Time Square Plaza, G-8<br />Markaz G-8 Markaz G-8,<br />Islamabad, 44000,<br />Pakistan</p>
            </div>
            <div className="contact-item">
              <i className="email-icon"></i>
              <p>drnaeempims@gmail.com</p>
            </div>
            <div className="contact-item">
              <i className="phone-icon"></i>
              <p>03335195321</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default DoctorDasboard;