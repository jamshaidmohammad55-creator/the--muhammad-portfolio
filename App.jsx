import "./App.css";
import profileImg from "./assets/muhammad_khan.jpg";
import cert1 from "./assets/certificate1.jpg";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          Muhammad <span> Khan</span>
        </div>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#certificates">Certificate</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Civil Engineer & <span> Geospatial Analyst </span>
          </h1>

          <p>
            Passionate about GIS, Drone Mapping, AutoCAD,
            Python Programming and Sustainable Infrastructure.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="title">About Me</h2>

        <div className="about-card">
          <img src={profileImg} alt="Muhammad Khan" />

          <div>
            <h3>Hello! I'm Muhammad Khan</h3>

            <p>
              An ambitious Civil Engineering undergraduate with a strong
              inclination toward innovative infrastructure solutions,
              geospatial analysis, and data-driven problem solving.
            </p>

            <p>
              Passionate about integrating engineering principles with
              modern technologies such as GIS, AutoCAD and Python.
            </p>

            <p>
              Adept at transforming complex technical challenges into
              practical solutions through analytical thinking,
              precision and continuous learning.
            </p>

            <a href="#contact" className="btn">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section id="certificates" className="section">
        <h2 className="title">Certificate</h2>

        <div className="certificate-card">
          <img src={cert1} alt="Certificate" />

          <h3>Professional Certification</h3>

          <a
            href={cert1}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View Certificate
          </a>
        </div>
      </section>

      {/* Academic Projects */}
      <section id="projects" className="section">
        <h2 className="title">Academic Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <div className="icon-area">🗺️</div>

            <div className="project-content">
              <h3>Geospatial Mapping of Water Distribution System</h3>

              <p>
                Developed a comprehensive GIS map of the existing
                water distribution network at GIK Institute for
                spatial analysis and infrastructure assessment.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="icon-area">🕌</div>

            <div className="project-content">
              <h3>Masjid Architectural Planning using AutoCAD</h3>

              <p>
                Prepared a detailed Masjid plan using AutoCAD
                including layouts, dimensions and functional spaces.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="icon-area">🅿️</div>

            <div className="project-content">
              <h3>Smart Parking Analysis System</h3>

              <p>
                Developed a Smart Parking Analysis System using Python
                for data collection, processing and visualization.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="icon-area">🚁</div>

            <div className="project-content">
              <h3>Drone Mapping & Terrain Modeling</h3>

              <p>
                Generated Dense Point Cloud, DEM, Orthomosaic and
                Contour Maps using drone photogrammetry techniques.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Education */}
  <section id="education">

  <h2 className="section-title">Education</h2>

  <div className="timeline">

    <div className="timeline-item left">
      <div className="timeline-card">
        <h3>BSc Civil Engineering</h3>

        <span className="year">2023 - 2027</span>

        <p>
          Ghulam Ishaq Khan Institute of Engineering
          Sciences & Technology (GIKI)
        </p>

        <p>CGPA: 3.20 / 4.00</p>
      </div>
    </div>

    <div className="timeline-item right">
      <div className="timeline-card">
        <h3>FSc Pre-Engineering</h3>

        <span className="year">2021 - 2023</span>

        <p>Army Burn Hall College, Abbottabad</p>

        <p>Marks: 85%</p>
      </div>
    </div>

    <div className="timeline-item left">
      <div className="timeline-card">
        <h3>Matriculation</h3>

        <span className="year">2019 - 2021</span>

        <p>Army Public School & College ,Abbottabad</p>

        <p>Marks: 90%</p>
      </div>
    </div>

  </div>

</section>


      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>

        <p>Email: jamshaidmohammad55@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/muhammad-khan</p>
      </section>
    </>
  );
}

export default App;