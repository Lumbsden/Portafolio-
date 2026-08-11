import './App.css'
import tahilynPhoto from './assets/tahilyn-portfolio.png'

function App() {
  return (
    <main>
      <section className="hero">
        <nav className="navbar">
          <div className="logo">TL.</div>

          <div className="nav-links">
            <a href="#inicio">Inicio</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#skills">Habilidades</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <p className="hello">Hola, soy</p>

            <h1>Tahilyn Lumbsden</h1>

            <h2>QA Tester & Junior Software Developer</h2>

            <p className="description">
              Creo, pruebo y mejoro experiencias digitales. Me especializo
              en testing de APIs y desarrollo web, combinando control de
              calidad con desarrollo de software.
            </p>

            <div className="buttons">
              <a href="#proyectos" className="primary-button">
                Ver proyectos
              </a>

              <a
                href="https://github.com/Lumbsden"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                GitHub
              </a>
            </div>
          </div>

         <div className="hero-photo-wrapper">
  <div className="hero-photo-glow"></div>

  <img
    src={tahilynPhoto}
    alt="Tahilyn Lumbsden"
    className="hero-photo"
  />
</div>
        </div>
      </section>
      <section className="projects" id="proyectos">
        <div className="section-header">
          <span className="section-number">03.</span>
          <p className="section-tag">PROYECTOS</p>
        </div>

        <div className="projects-heading">
          <h2>
            Proyectos donde convierto
            <span> aprendizaje en práctica.</span>
          </h2>

          <p>
            Una selección de proyectos donde aplico desarrollo, resolución de
            problemas y control de calidad.
          </p>
        </div>

        <div className="projects-grid">

          <article className="project-card">
            <div className="project-top">
              <span className="project-number">01</span>
              <span className="project-type">WEB APP</span>
            </div>

            <h3>Generative Mobile Art</h3>

            <p>
              Aplicación web interactiva que genera composiciones visuales
              diseñadas para dispositivos móviles.
            </p>

            <div className="project-technologies">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>GitHub Pages</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/Lumbsden/generative-mobile-art"
                target="_blank"
                rel="noreferrer"
              >
                Ver código →
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-top">
              <span className="project-number">02</span>
              <span className="project-type">E-COMMERCE</span>
            </div>

            <h3>LumbsdenStore</h3>

            <p>
              Tienda web con catálogo de productos, páginas de detalle,
              selección de cantidades y carrito persistente mediante
              almacenamiento local.
            </p>

            <div className="project-technologies">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>LocalStorage</span>
            </div>

            <div className="project-links">
              <span>Repositorio próximamente</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-top">
              <span className="project-number">03</span>
              <span className="project-type">QA / API</span>
            </div>

            <h3>API Testing</h3>

            <p>
              Caso de estudio enfocado en validación de APIs REST, pruebas de
              endpoints, códigos HTTP, respuestas JSON y documentación de
              escenarios de prueba.
            </p>

            <div className="project-technologies">
              <span>Postman</span>
              <span>REST API</span>
              <span>JSON</span>
              <span>QA Testing</span>
            </div>

            <div className="project-links">
              <span>Caso de estudio en preparación</span>
            </div>
          </article>

        </div>
      </section>
      
      <section className="about" id="sobre-mi">
        <div className="section-header">
          <span className="section-number">01.</span>
          <p className="section-tag">SOBRE MÍ</p>
        </div>

        <div className="about-content">
          <div>
            <h2>
              Aprendo construyendo,
              <span> pruebo mejorando.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              Estoy desarrollando mi carrera profesional en tecnología con
              enfoque en control de calidad, testing de APIs y desarrollo de
              software.
            </p>

            <p>
              Me caracterizo por aprender mediante la práctica: investigar,
              construir soluciones, detectar problemas, probar diferentes
              escenarios y comprender la causa de los errores.
            </p>

            <p>
              Mi objetivo es seguir creciendo como profesional de tecnología,
              participando en proyectos reales donde pueda aportar desde QA y
              continuar desarrollando mis habilidades como desarrolladora.
            </p>
          </div>
        </div>
      </section>
      <section className="skills" id="skills">
        <div className="section-header">
          <span className="section-number">02.</span>
          <p className="section-tag">HABILIDADES</p>
        </div>

        <div className="skills-intro">
          <h2>
            Herramientas que uso para
            <span> construir y validar software.</span>
          </h2>

          <p>
            Mi perfil combina control de calidad con desarrollo. Esto me permite
            analizar productos desde dos perspectivas: cómo se construyen y cómo
            deben probarse.
          </p>
        </div>

        <div className="skills-grid">
          <article className="skill-group">
            <span className="skill-group-number">01</span>
            <h3>QA & Testing</h3>

            <div className="skill-tags">
              <span>Postman</span>
              <span>API Testing</span>
              <span>REST APIs</span>
              <span>Test Cases</span>
              <span>Bug Reporting</span>
              <span>HTTP</span>
            </div>
          </article>

          <article className="skill-group">
            <span className="skill-group-number">02</span>
            <h3>Desarrollo</h3>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>Python</span>
            </div>
          </article>

          <article className="skill-group">
            <span className="skill-group-number">03</span>
            <h3>Herramientas</h3>

            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Visual Studio Code</span>
              <span>npm</span>
              <span>Vite</span>
            </div>
          </article>
        </div>
      </section>
      <section className="contact" id="contacto">
        <div className="section-header">
          <span className="section-number">04.</span>
          <p className="section-tag">CONTACTO</p>
        </div>

        <div className="contact-content">
          <p className="contact-small">¿TIENES UN PROYECTO O UNA OPORTUNIDAD?</p>

          <h2>
            Construyamos algo
            <span> juntos.</span>
          </h2>

          <p className="contact-description">
            Estoy abierta a oportunidades junior, proyectos y colaboraciones
            relacionadas con QA, testing de APIs y desarrollo de software.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:tahilynlumbsden@gmail.com"
              className="primary-button"
            >
              Enviar correo
            </a>

            <a
              href="https://github.com/Lumbsden"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div>
            <strong>TL.</strong>
            <p>QA Tester & Junior Software Developer</p>
          </div>

          <div className="footer-links">
            <a href="#inicio">Inicio</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#skills">Habilidades</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Tahilyn Lumbsden</span>
          <span>Construido con React + TypeScript</span>
        </div>
      </footer>
    </main>
  )
}

export default App