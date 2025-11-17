import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import me from "../assets/me.jpg"

export default function Profito() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const projects = [
    {
      title: "CARFFERET — Car & Driver Rental System",
      desc: "Full stack system with web + Android apps, live tracking for cars & drivers.",
      tech: ["Java", "Python", "Django", "MySQL"],
      link: "https://github.com/neenaneenu",
    },
    {
      title: "WEATHER APP",
      desc: "Responsive weather site showing forecasts for countries with a clean UI.",
      tech: ["React", "CSS", "OpenWeather API"],
      link: "https://github.com/neenaneenu",
    },
    {
      title: "ShoppingCart",
      desc: "Shopping cart with add/remove, quantity updates and total calculation.",
      tech: ["React", "Redux"],
      link: "https://github.com/neenaneenu",
    },
    {
      title: "Food Recipe Blog",
      desc: "Full-stack app to discover and share recipes. CRUD, auth and uploads.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://github.com/neenaneenu",
    },
  ];

  const skills = [
    "HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB",
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(form.message + "\n\nFrom: " + form.email);
    window.location.href = `mailto:neenat@example.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div
      className="min-vh-100 text-light"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden"
      }}
    >
      {/* Enhanced Header */}
      <header className="container py-4 d-flex justify-content-between align-items-center">
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }}
          className="d-flex align-items-center gap-3"
        >
          <div className="bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
            <span className="fw-bold text-white">NT</span>
          </div>
          <div>
            <h1 className="fw-bold fs-3 text-white mb-1">Neena T</h1>
            <p className="mb-0 text-light-emphasis small">Web Developer — React.js | MERN Stack</p>
          </div>
        </motion.div>

        <motion.nav
          className="d-none d-md-flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {["Projects", "Skills", "About", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-light text-decoration-none fw-medium position-relative hover-effect"
              style={{ 
                padding: "8px 0",
                transition: "all 0.3s ease"
              }}
            >
              {item}
            </a>
          ))}
        </motion.nav>
      </header>

      <main className="container py-5">
        {/* Enhanced Hero Section */}
        <section className="row align-items-center mb-5 py-5 text-center text-md-start">
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h6 className="text-info mb-3 fw-semibold">HELLO, I'M</h6>
              <h1 className="fw-bold display-4 mb-4 text-white">
                Neena T
                <span className="text-gradient d-block">Web Developer</span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="mt-3 fs-5 text-light-emphasis mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Passionate about crafting <strong className="text-info">modern, elegant, and responsive</strong> web experiences 
              using React.js and the MERN stack. I transform ideas into pixel-perfect, accessible user interfaces.
            </motion.p>

            <motion.div 
              className="mt-4 d-flex gap-3 justify-content-center justify-content-md-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="https://github.com/neenaneenu" target="_blank" rel="noreferrer" 
                 className="btn btn-outline-light px-4 py-2 rounded-pill fw-semibold border-2">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/neena-t-ab5730306/" target="_blank" rel="noreferrer" 
                 className="btn btn-gradient px-4 py-2 rounded-pill fw-semibold text-white">
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="col-md-6 mt-5 mt-md-0 position-relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="position-relative">
              <div className="card border-0 shadow-lg bg-dark bg-opacity-50 backdrop-blur rounded-4 overflow-hidden">
                <img
                  src={me}
                  alt="creative"
                  className="card-img-top rounded-4"
                  style={{ filter: "brightness(0.9)" }}
                />
              </div>
              {/* Floating elements */}
              <div className="position-absolute top-0 start-0 mt-4 ms-4 bg-primary rounded-3 p-3 shadow">
                <span className="text-white fw-semibold">3+ Projects</span>
              </div>
              <div className="position-absolute bottom-0 end-0 mb-4 me-4 bg-info rounded-3 p-3 shadow">
                <span className="text-dark fw-semibold">MERN Stack</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Projects */}
        <section id="projects" className="my-5 py-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-5">
              <h6 className="text-info mb-2 fw-semibold">MY WORK</h6>
              <h3 className="fw-bold display-5 text-white mb-3">Featured Projects</h3>
              <p className="text-light-emphasis fs-5">Here are some of my recent projects that showcase my skills</p>
            </div>
            
            <div className="row g-4">
              {projects.map((p, index) => (
                <motion.div
                  key={p.title}
                  className="col-md-6 col-lg-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="card h-100 border-0 shadow-lg bg-dark bg-opacity-50 text-light rounded-4 p-4 position-relative overflow-hidden">
                    <div className="position-absolute top-0 end-0 bg-info text-dark px-3 py-1 rounded-bl-3">
                      <small className="fw-bold">{p.tech[0]}</small>
                    </div>
                    <h5 className="fw-semibold mb-3">{p.title}</h5>
                    <p className="text-secondary small flex-grow-1">{p.desc}</p>
                    <div className="d-flex flex-wrap gap-2 mt-3 mb-4">
                      {p.tech.map((t) => (
                        <span key={t} className="badge bg-dark bg-opacity-75 text-light border border-secondary">{t}</span>
                      ))}
                    </div>
                    <a href={p.link} className="btn btn-outline-info w-100 rounded-pill" target="_blank" rel="noreferrer">
                      View Project
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Enhanced Skills & About */}
        <section className="row align-items-start my-5 py-5">
          <motion.div
            id="skills"
            className="col-md-4 mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-info fw-bold mb-4">Technical Skills</h4>
            <div className="d-flex flex-wrap gap-3">
              {skills.map((s) => (
                <motion.span
                  key={s}
                  className="badge bg-dark bg-opacity-50 text-light border border-info px-3 py-2 rounded-pill"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(13, 110, 253, 0.2)" }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            id="about"
            className="col-md-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-info fw-bold mb-4">About Me</h4>
            <div className="bg-dark bg-opacity-50 rounded-4 p-4">
              <p className="text-light mb-4">
                I'm a passionate web developer who recently completed a <strong className="text-info">MERN Stack Internship</strong> at 
                Futura Labs Technologies LLP, Calicut (Sept 2024 – Dec 2024). I enjoy turning complex 
                problems into simple, beautiful, and intuitive designs.
              </p>
              
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-info rounded-circle p-2 me-3">
                      <span className="text-dark fw-bold">🎓</span>
                    </div>
                    <div>
                      <strong className="text-white">Education</strong>
                      <p className="mb-0 text-light-emphasis small">BCA — University of Calicut (2021 – 2024)</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-info rounded-circle p-2 me-3">
                      <span className="text-dark fw-bold">💼</span>
                    </div>
                    <div>
                      <strong className="text-white">Internship</strong>
                      <p className="mb-0 text-light-emphasis small">MERN Stack — Futura Labs (2024)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Contact */}
        <motion.section
          id="contact"
          className="rounded-4 bg-dark bg-opacity-75 p-5 my-5 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-5">
            <h6 className="text-info mb-2 fw-semibold">GET IN TOUCH</h6>
            <h3 className="fw-bold display-5 text-white mb-3">Let's Work Together</h3>
            <p className="text-light-emphasis fs-5">Have a project in mind? I'd love to hear about it.</p>
          </div>

          <div className="row g-5">
            <motion.form 
              className="col-md-6" 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="mb-4">
                <input type="text" name="name" value={form.name} onChange={handleChange} 
                       className="form-control py-3 bg-transparent text-light border-0 border-bottom rounded-0" 
                       placeholder="Your name" 
                       style={{ borderBottom: "2px solid #0dcaf0 !important" }}
                       required />
              </div>
              <div className="mb-4">
                <input type="email" name="email" value={form.email} onChange={handleChange} 
                       className="form-control py-3 bg-transparent text-light border-0 border-bottom rounded-0" 
                       placeholder="Your email" 
                       style={{ borderBottom: "2px solid #0dcaf0 !important" }}
                       required />
              </div>
              <div className="mb-4">
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} 
                          className="form-control py-3 bg-transparent text-light border-0 border-bottom rounded-0" 
                          placeholder="Your message" 
                          style={{ borderBottom: "2px solid #0dcaf0 !important" }}
                          required />
              </div>
              <button className="btn btn-gradient px-5 py-3 rounded-pill fw-semibold text-white w-100" type="submit">
                Send Message
              </button>
              {sent && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="d-block mt-3 text-success text-center fw-semibold"
                >
                  Opening mail client…
                </motion.span>
              )}
            </motion.form>

            <motion.div 
              className="col-md-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h5 className="text-info fw-semibold mb-4">Connect With Me</h5>
              <div className="d-flex flex-column gap-4">
                <a href="https://github.com/neenaneenu" 
                   className="d-flex align-items-center text-light text-decoration-none p-3 rounded-3 bg-dark bg-opacity-50 hover-lift">
                  <span className="bg-info rounded-circle p-2 me-3">👨‍💻</span>
                  <div>
                    <strong>GitHub</strong>
                    <p className="mb-0 text-light-emphasis small">Check out my projects and code</p>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/neena-t-ab5730306/" 
                   className="d-flex align-items-center text-light text-decoration-none p-3 rounded-3 bg-dark bg-opacity-50 hover-lift">
                  <span className="bg-info rounded-circle p-2 me-3">💼</span>
                  <div>
                    <strong>LinkedIn</strong>
                    <p className="mb-0 text-light-emphasis small">Let's connect professionally</p>
                  </div>
                </a>
                
                <div className="d-flex align-items-center text-light p-3 rounded-3 bg-dark bg-opacity-50">
                  <span className="bg-info rounded-circle p-2 me-3">📧</span>
                  <div>
                    <strong>Email</strong>
                    <p className="mb-0 text-info">neenatsunilkumar.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <footer className="text-center text-secondary py-4 border-top border-secondary mt-5">
          <p className="mb-2">© {new Date().getFullYear()} Neena T — Built with React & Bootstrap</p>
          <p className="mb-0 text-info">💙 Crafted with passion and attention to detail</p>
        </footer>
      </main>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .btn-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          transition: all 0.3s ease;
        }
        
        .btn-gradient:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }
        
        .hover-effect::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }
        
        .hover-effect:hover::after {
          width: 100%;
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          background: rgba(13, 110, 253, 0.1) !important;
        }
        
        .backdrop-blur {
          backdrop-filter: blur(10px);
        }
        
        .rounded-bl-3 {
          border-bottom-left-radius: 1rem !important;
        }
      `}</style>
    </div>
  );
}