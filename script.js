// Navegación móvil
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Efecto de scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animación de entrada para elementos al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
const animatedElements = document.querySelectorAll('.project-card, .about-section, .skill-category');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Efecto parallax suave en hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 500;
    }
});

// Resaltar sección activa en navegación
const sections = document.querySelectorAll('section[id]');
const highlightNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
};

window.addEventListener('scroll', highlightNav);

// Efecto de escritura para el nombre (opcional, puede comentarse si no se desea)
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = '';
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
};

// Inicializar efectos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Asegurar que el hero sea visible
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '1';
    }
    
    // Agregar clase active al primer enlace de navegación
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});

// Prevenir comportamiento por defecto en enlaces vacíos
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});
// ===============================
// SISTEMA DE IDIOMA ES / EN
// ===============================

const translations = {
es: {
    hero_title: "Data Analyst | IT Support | Networks Technician",
    hero_description:
        "Profesional formado en Sistemas Microinformáticos y Redes, orientado al análisis de datos y administración de sistemas.",
	nav_home: "Inicio",
	nav_about: "Sobre mí",
	nav_projects: "Proyectos",
	nav_skills: "Habilidades",
	nav_contact: "Contacto",
	cv_download: "Descargar CV",
	btn_projects: "Ver proyectos",
	btn_about: "Sobre mí",
	languages_title: "Lenguajes",
	tools_title: "Herramientas",
	emerging_tech_title: "Tecnologías Emergentes",
	ai_tag: "Inteligencia Artificial",
	vr_tag: "Realidad Virtual y Aumentada",
	iot_tag: "IoT",

	about_title: "Sobre mí",
	projects_title: "Proyectos Destacados",
	skills_title: "Habilidades Técnicas",
	contact_title: "Contacto",

    about_intro: `
        <p>Soy Data Analyst en formación continua, con base técnica en sistemas informáticos y experiencia práctica en proyectos de análisis de datos y Machine Learning. Trabajo principalmente con Python, SQL y herramientas de visualización para explorar datos, entrenar modelos predictivos y comunicar resultados de forma clara.</p>
        <p>Busco oportunidades donde seguir creciendo como analista, participar en proyectos reales y aportar una mentalidad analítica, curiosa y orientada a resultados.</p>
    `,

    education_title: "Formación",
    education_list: `
        <li>FP de grado medio en Sistemas Microinformáticos y Redes</li>
        <li>Bootcamp de Data Analyst - 600h</li>
        <li>Programación en IA y Big Data en entornos 5G - 150h</li>
        <li>Programación Realidad Virtual y Aumentada en entornos 5G - 150h</li>
        <li>Programación para soluciones IoT y Smart City en entornos 5G - 150h</li>
        <li>Administración en Sistemas Gestores de Bases de Datos - 200h</li>
    `,

    experience_title: "Experiencia Profesional",
    experience_list: `
        <li><strong>Técnico informático</strong> en tienda especializada en reparación y mantenimiento de equipos informáticos, diagnóstico de fallos y soporte técnico al cliente.</li>
        <li><strong>Atención al público y gestión en retail</strong>, destacando habilidades en comunicación y servicio al cliente.</li>
    `,

    main_skills_title: "Habilidades Principales",
    main_skills_list: `
        <span class="skill-tag">Montaje y mantenimiento de equipos</span>
        <span class="skill-tag">Ciberseguridad (Kali Linux)</span>
        <span class="skill-tag">Montaje y administración de redes</span>
        <span class="skill-tag">Administración de sistemas (Windows, Ubuntu)</span>
        <span class="skill-tag">Administración de bases de datos</span>
        <span class="skill-tag">Análisis, limpieza y visualización de datos</span>
        <span class="skill-tag">Análisis exploratorio de datos (EDA)</span>
        <span class="skill-tag">Creación de dashboards y reportes</span>
        <span class="skill-tag">Machine Learning</span>
    `,

    interests_title: "Intereses Profesionales",
    interests_text:
        "Desarrollo profesional en análisis de datos, administración de sistemas, redes e infraestructuras IT.",

    project1_title: "Análisis del negocio de AirBnb",
    project1_desc:
        "Proyecto de Business Intelligence desarrollado en Power BI para analizar datos de AirBnB y generar dashboards interactivos con insights accionables para la toma de decisiones en el sector inmobiliario.",

    project2_title: "Predicción de baja de clientes",
    project2_desc:
        "Modelo de clasificación binaria para predecir la baja de clientes en telecomunicaciones, incluyendo ETL, EDA y despliegue en producción.",

    project3_title: "Dashboard Excel Ventas de Videojuegos",
    project3_desc:
        "Dashboard interactivo en Excel con segmentación por años y gráficos regionales.",

    project_link: "Ver proyecto →",

    contact_text: "¿Interesado en colaborar o tienes alguna pregunta?"
},

en: {
    hero_title: "Data Analyst | IT Support | Networks Technician",
    hero_description:
        "Professional trained in Microcomputer Systems and Networks, focused on data analysis and systems administration.",
	nav_home: "Home",
	nav_about: "About Me",
	nav_projects: "Projects",
	nav_skills: "Skills",
	nav_contact: "Contact",
	cv_download: "Download CV",
	languages_title: "Languages",
	tools_title: "Tools",
	emerging_tech_title: "Emerging Technologies",
	ai_tag: "Artificial Intelligence",
	vr_tag: "Virtual and Augmented Reality",
	iot_tag: "IoT",

	btn_projects: "View Projects",
	btn_about: "About Me",

	about_title: "About Me",
	projects_title: "Featured Projects",
	skills_title: "Technical Skills",
	contact_title: "Contact",
    about_intro: `
        <p>I am a continuously evolving Data Analyst with a technical background in IT systems and hands-on experience in data analysis and Machine Learning projects. I mainly work with Python, SQL and visualization tools to explore data, train predictive models and communicate results clearly.</p>
        <p>I am looking for opportunities to keep growing as an analyst, participate in real-world projects and contribute with an analytical, curious and results-driven mindset.</p>
    `,

    education_title: "Education",
    education_list: `
        <li>Intermediate Vocational Degree in Microcomputer Systems and Networks</li>
        <li>Data Analyst Bootcamp - 600 hours</li>
        <li>AI and Big Data Programming in 5G Environments - 150 hours</li>
        <li>Virtual and Augmented Reality Programming in 5G Environments - 150 hours</li>
        <li>IoT and Smart City Solutions Programming in 5G Environments - 150 hours</li>
        <li>Database Management Systems Administration - 200 hours</li>
    `,

    experience_title: "Professional Experience",
    experience_list: `
        <li><strong>IT Technician</strong> in a specialized computer repair shop, performing hardware diagnostics, maintenance and customer technical support.</li>
        <li><strong>Retail customer service and management</strong>, developing strong communication and customer service skills.</li>
    `,

    main_skills_title: "Core Skills",
    main_skills_list: `
        <span class="skill-tag">Hardware assembly and maintenance</span>
        <span class="skill-tag">Cybersecurity (Kali Linux)</span>
        <span class="skill-tag">Network setup and administration</span>
        <span class="skill-tag">Systems administration (Windows, Ubuntu)</span>
        <span class="skill-tag">Database administration</span>
        <span class="skill-tag">Data analysis, cleaning and visualization</span>
        <span class="skill-tag">Exploratory Data Analysis (EDA)</span>
        <span class="skill-tag">Dashboard and report creation</span>
        <span class="skill-tag">Machine Learning</span>
    `,

    interests_title: "Professional Interests",
    interests_text:
        "Professional development in data analysis, systems administration, networking and IT infrastructures.",

    project1_title: "Airbnb Business Analysis",
    project1_desc:
        "Business Intelligence project developed in Power BI to analyze Airbnb data and build interactive dashboards with actionable insights for real estate decision-making.",

    project2_title: "Customer Churn Prediction",
    project2_desc:
        "Binary classification model to predict telecom customer churn, including ETL, EDA and production deployment.",

    project3_title: "Video Game Sales Excel Dashboard",
    project3_desc:
        "Interactive Excel dashboard with yearly segmentation and regional performance charts.",

    project_link: "View project →",

    contact_text: "Interested in collaborating or have any questions?"
}
};

function setLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(el => {
        const key = el.getAttribute("data-i18n-html");
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    localStorage.setItem("lang", lang);

    const toggleBtn = document.getElementById("langToggle");
    if (toggleBtn) {
        toggleBtn.textContent = lang === "es" ? "EN" : "ES";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "es";
    setLanguage(savedLang);

    const toggleBtn = document.getElementById("langToggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const currentLang = document.documentElement.lang;
            setLanguage(currentLang === "es" ? "en" : "es");
        });
    }
});
