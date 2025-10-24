// ===== i18n =====
const I18N = {
  es: {
    brand: "Journey to the West",
    nav: { tours: "Tours", about: "Nosotros", contact: "Contacto" },
    hero: {
      title: "Explora México con nosotros",
      subtitle: "Descubre historia, cultura y paisajes inolvidables en cada tour.",
      cta: "Ver tours"
    },
    tours: { title: "Tours destacados" },
    about: {
      title: "¿Quiénes somos?",
      desc: "Somos un grupo de guías locales apasionados por compartir la historia, cultura y belleza de México. En Journey to the West creemos que cada recorrido debe ser una experiencia inolvidable, segura y adaptada a cada viajero.",
      item1: "✅ Guías certificados y multilingües",
      item2: "🚌 Transporte turístico con seguro",
      item3: "🏛️ Entradas incluidas y horarios flexibles"
    },
    social: {
      title: "Síguenos",
      subtitle: "Conéctate con nosotros y descubre más experiencias increíbles."
    },
    ui: { readMore: "Ver más" }
  },

  en: {
    brand: "Journey to the West",
    nav: { tours: "Tours", about: "About", contact: "Contact" },
    hero: {
      title: "Explore Mexico with us",
      subtitle: "Discover history, culture and breathtaking landscapes in every tour.",
      cta: "See tours"
    },
    tours: { title: "Featured Tours" },
    about: {
      title: "Who we are",
      desc: "We are a group of local guides passionate about sharing Mexico’s history, culture, and beauty. At Journey to the West, we believe every tour should be safe, unforgettable, and tailored to every traveler.",
      item1: "✅ Certified and multilingual guides",
      item2: "🚌 Insured tourist transport",
      item3: "🏛️ Entry tickets included and flexible schedules"
    },
    social: {
      title: "Follow us",
      subtitle: "Connect with us and discover more amazing experiences."
    },
    ui: { readMore: "Read more" }
  },

  zh: {
    brand: "西行旅程",
    nav: { tours: "行程", about: "关于我们", contact: "联系我们" },
    hero: {
      title: "与我们一起探索墨西哥",
      subtitle: "在每次旅途中体验历史、文化与美景。",
      cta: "查看行程"
    },
    tours: { title: "精选行程" },
    about: {
      title: "关于我们",
      desc: "我们是一群热爱分享墨西哥历史、文化和美景的本地导游。在西行旅程，我们相信每一次旅行都应是安全、难忘并为每位旅客量身定制的体验。",
      item1: "✅ 持证多语导游",
      item2: "🚌 含保险的旅游交通",
      item3: "🏛️ 含门票，时间灵活"
    },
    social: {
      title: "关注我们",
      subtitle: "与我们联系，探索更多精彩旅程。"
    },
    ui: { readMore: "查看更多" }
  }
};

// ===== Motor de idiomas =====
const __i18n = {
  lang: "es",
  t(key) {
    const segs = key.split(".");
    let cur = I18N[this.lang] || I18N.es;
    for (const s of segs) cur = cur?.[s];
    return cur || key;
  },
  set(lang) {
    this.lang = lang in I18N ? lang : "es";
    localStorage.setItem("journey.lang", this.lang);
    this.apply();
    renderTours();
  },
  apply() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = this.t(el.dataset.i18n);
    });
  },
  init() {
    const saved = localStorage.getItem("journey.lang");
    this.lang = saved || "es";
    const langSelect = document.getElementById("lang");
    if (langSelect) langSelect.value = this.lang;
    this.apply();
  }
};
window.__i18n = __i18n;

// ===== Carrusel =====
let currentSlide = 0;
function showSlide(i) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((s, idx) => s.classList.toggle("active", i === idx));
}
function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 5000);

// ===== Datos de los tours =====
const TOURS = [
  {
    img: "img/teotihuacan.jpg",
    title: {
      es: "Teotihuacan + Basílica",
      en: "Teotihuacan + Basilica",
      zh: "特奥蒂瓦坎 + 瓜达卢佩圣殿"
    },
    desc: {
      es: "Pirámides del Sol y la Luna con visita a la Basílica de Guadalupe.",
      en: "Pyramids of the Sun and Moon with visit to Basilica.",
      zh: "参观日月金字塔与瓜达卢佩圣殿。"
    }
  },
  {
    img: "img/centro.jpg",
    title: {
      es: "Museo de Antropología + Centro Histórico",
      en: "Anthropology Museum + Historic Center",
      zh: "人类学博物馆 + 历史中心"
    },
    desc: {
      es: "Explora las raíces de México y su historia viva.",
      en: "Explore Mexico’s roots and living history.",
      zh: "探索墨西哥的根源与历史。"
    }
  },
  {
    img: "img/coyoacan.jpg",
    title: {
      es: "Coyoacán + Xochimilco + CU",
      en: "Coyoacán + Xochimilco + UNAM",
      zh: "科约阿坎 + 索奇米尔科 + 大学校园"
    },
    desc: {
      es: "Colores, trajineras y arte en un día inolvidable.",
      en: "Colors, boats and art in an unforgettable day.",
      zh: "色彩、船游与艺术的一天。"
    }
  },
  {
    img: "img/cholula.jpg",
    title: {
      es: "Cholula + Puebla",
      en: "Cholula + Puebla",
      zh: "乔卢拉 + 普埃布拉"
    },
    desc: {
      es: "La Gran Pirámide y la ciudad de los ángeles.",
      en: "The Great Pyramid and the City of Angels.",
      zh: "乔卢拉大金字塔与天使之城。"
    }
  },
  {
    img: "img/taxco.jpg",
    title: {
      es: "Taxco + Cuernavaca",
      en: "Taxco + Cuernavaca",
      zh: "塔斯科 + 库埃纳瓦卡"
    },
    desc: {
      es: "Plata, montañas y clima primaveral todo el año.",
      en: "Silver, mountains, and eternal spring weather.",
      zh: "银饰之都与永春之城。"
    }
  }
];

// ===== Render dinámico de tours =====
function renderTours() {
  const grid = document.getElementById("toursGrid");
  if (!grid) return;
  grid.innerHTML = "";
  TOURS.forEach(t => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${t.img}" alt="${t.title[__i18n.lang]}">
      <div class="card-content">
        <h3>${t.title[__i18n.lang]}</h3>
        <p>${t.desc[__i18n.lang]}</p>
      </div>`;
    grid.appendChild(card);
  });
}

// ===== Función del menú hamburguesa =====
function setupHamburgerMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navMenu");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("open");
  });

  // Cierra el menú al hacer clic en un enlace (solo móvil)
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.classList.remove("active");
      }
    });
  });
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  __i18n.init();
  renderTours();
  setupHamburgerMenu();

  // año dinámico en el footer
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // cambio de idioma
  const langSelect = document.getElementById("lang");
  if (langSelect) langSelect.addEventListener("change", e => __i18n.set(e.target.value));
});
