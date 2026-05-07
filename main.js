const translations = {
    et: {
        nav_meist: "Meist",
        nav_lennukid: "Lennukid",
        nav_andmed: "Andmed",
        nav_agile: "Agile",
        hero_h1: "Paberlennukite Tulevik",
        hero_p: "Kiired ja stabiilsed lennukid. Meie parimad mudelid Agile projekti ajal.",
        hero_btn: "Vaata Lennukeid",
        meist_h2: "Meie Tehas",
        meist_p1: "Me töötasime kolmeliikmelises grupis. Projekti ajal tegime erinevaid paberlennukeid ja testisime nende kvaliteeti.",
        meist_p2: "Alguses kasutasime Taylorismi meetodit, aga hiljem läksime üle Agile tööviisile. Agile meetod aitas meil paremini suhelda ja teha kiiremaid parandusi.",
        meist_p3: "Grupp: TARpv24",
        lennukid_h2: "Meie Lennukid",
        x1_name: "PaperJet X-1",
        x1_desc: "Väga kerge ja stabiilne lennuk. Sobib pika lennu jaoks.",
        x4_name: "PaperJet X-4",
        x4_desc: "Kiire ja tugev lennuk. Hea täpsuse ja kiiruse jaoks.",
        andmed_h2: "Tehnilised Andmed",
        x1_kaal: "Kaal: 4 g",
        x1_dist: "Lennukaugus: 14 m",
        x1_wing: "Tiivaulatus: 21 cm",
        x1_type: "Lennu tüüp: stabiilne",
        x4_kaal: "Kaal: 5 g",
        x4_dist: "Lennukaugus: 11 m",
        x4_wing: "Tiivaulatus: 19 cm",
        x4_type: "Lennu tüüp: kiire",
        agile_h2: "Agile Tööprotsess",
        agile_p1: "Projekti alguses töötasime nagu konveieril. Igal inimesel oli ainult üks ülesanne.",
        agile_p2: "Hiljem hakkasime kasutama Agile meetodit. Siis saime rohkem suhelda ja üksteist aidata.",
        agile_p3: "Me õppisime ka \"Raudset Kolmnurka\". Aeg, kvaliteet ja ressursid mõjutavad projekti tulemust.",
        gallery_h2: "Kõik Lennukid",
        footer_copy: "© 2026 PaperJet Project",
        footer_team: "Martin Rossakov | Illia Blahun | Nikita Orlenko",
        footer_group: "Grupp TARpv24"
    },
    en: {
        nav_meist: "About",
        nav_lennukid: "Planes",
        nav_andmed: "Specs",
        nav_agile: "Agile",
        hero_h1: "The Future of Paper Airplanes",
        hero_p: "Fast and stable planes. Our best models from the Agile project.",
        hero_btn: "View Planes",
        meist_h2: "Our Factory",
        meist_p1: "We worked in a three-person group. During the project we built various paper airplanes and tested their quality.",
        meist_p2: "At first we used the Taylorism method, but later switched to Agile. The Agile method helped us communicate better and make faster improvements.",
        meist_p3: "Group: TARpv24",
        lennukid_h2: "Our Planes",
        x1_name: "PaperJet X-1",
        x1_desc: "Very light and stable plane. Great for long-distance flights.",
        x4_name: "PaperJet X-4",
        x4_desc: "Fast and sturdy plane. Excellent for precision and speed.",
        andmed_h2: "Technical Specs",
        x1_kaal: "Weight: 4 g",
        x1_dist: "Flight distance: 14 m",
        x1_wing: "Wingspan: 21 cm",
        x1_type: "Flight type: stable",
        x4_kaal: "Weight: 5 g",
        x4_dist: "Flight distance: 11 m",
        x4_wing: "Wingspan: 19 cm",
        x4_type: "Flight type: fast",
        agile_h2: "Agile Workflow",
        agile_p1: "At the start of the project we worked like an assembly line. Each person had only one task.",
        agile_p2: "Later we adopted the Agile method. That allowed us to communicate more and help each other.",
        agile_p3: "We also learned about the \"Iron Triangle\". Time, quality and resources all affect the project outcome.",
        gallery_h2: "All Planes",
        footer_copy: "© 2026 PaperJet Project",
        footer_team: "Martin Rossakov | Illia Blahun | Nikita Orlenko",
        footer_group: "Group TARpv24"
    }
};

function applyLang(lang) {
    const t = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    document.documentElement.lang = lang;
    localStorage.setItem("language", lang);
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.getElementById("theme-btn").textContent = theme === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", theme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
}

// Init theme
const savedTheme = localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(savedTheme);

// Init language
applyLang(localStorage.getItem("language") || "et");

// Slider
document.querySelectorAll(".slider").forEach(slider => {
    const slides = slider.querySelectorAll(".slide");
    let index = 0;
    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 3000);
});

// Scroll animations
const sections = document.querySelectorAll(".section, .gallery");
window.addEventListener("scroll", () => {
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100)
            section.classList.add("show");
    });
    document.querySelector(".hero img").style.transform =
        `scale(1.1) translateY(${window.scrollY * 0.15}px)`;
});
