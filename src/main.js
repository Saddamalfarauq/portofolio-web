import './style.css';

// --- Current Year in Footer ---
const yearEl = document.getElementById('footer-year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// --- Bilingual Translation Dictionary ---
const translations = {
    id: {
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_projects: "Proyek Unggulan",
        nav_skills: "Keahlian",
        nav_contact: "Kontak",
        nav_hire_cta: "Rekrut Saya",

        hero_availability: "Siap Bergabung untuk Posisi Full-Time / Kontrak",
        hero_greeting: "Halo, saya Saddam Alfarauq.",
        hero_title: "Software & Web Developer dengan Spesialisasi Geospatial AI",
        hero_description: "Menggabungkan rekayasa perangkat lunak modern (JavaScript, OOP, arsitektur RESTful API) dengan implementasi model Computer Vision (CNN & Mask R-CNN) untuk visualisasi geospasial WebGIS. Lulusan S1 TI Universitas Bosowa (IPK 3.81 Cum Laude), PMM Awardee di Teknik Informatika ITB, dan tersertifikasi BNSP.",
        hero_cta_projects: "Eksplorasi Proyek",
        hero_cta_cv: "Unduh CV",
        hero_cta_copy: "Salin Email",
        cred_airnav: "Ex-Intern Pemeliharaan Teknik",
        cred_itb: "Awardee PMM Informatika",
        cred_bnsp: "Tersertifikasi Junior Web Dev",
        cred_gpa: "IPK 3.81 (Cum Laude)",

        proj_kicker: "PROYEK PILIHAN & RISET REKAYASA",
        proj_heading: "Sistem Deteksi Banjir WebGIS Berbasis AI",
        proj_lead: "Eksplorasi mendalam arsitektur full-stack yang mengintegrasikan model segmentasi piksel citra satelit ke platform pemetaan web interaktif.",
        tab_interface: "Tampilan Antarmuka & Demo",
        tab_pipeline: "Arsitektur Pipeline AI",
        tab_specs: "Tantangan & Metrik Rekayasa",

        proj_badge_thesis: "Tugas Akhir / Skripsi S1",
        proj_case_title: "WebGIS Flood Detection System — Kabupaten Maros",
        proj_case_summary: "Sistem informasi geospasial berbasis web untuk memetakan dan mendeteksi sebaran area tergenang banjir secara presisi di Kabupaten Maros. Menggabungkan klasifikasi citra satelit dan segmentasi semantik Mask R-CNN yang dirender ke layer poligon interaktif peta Leaflet.",
        proj_deliv1_title: "Segmentasi Instance Presisi:",
        proj_deliv1_desc: "Deteksi batas piksel genangan air dari citra satelit resolusi spasial tinggi.",
        proj_deliv2_title: "Vektorisasi Geospasial Dinamis:",
        proj_deliv2_desc: "Konversi otomatis mask hasil prediksi AI menjadi format GeoJSON poligon siap peta.",
        proj_deliv3_title: "UI Monitoring Responsif:",
        proj_deliv3_desc: "Antarmuka peta ramah pengguna untuk mitigasi dan pemantauan cepat tanggap bencana.",
        proj_btn_demo: "Buka Live Demo",
        proj_btn_repo: "Lihat Repositori",

        pipe_title: "Arsitektur Pipeline AI & Geospasial",
        pipe_desc: "Alur komputasi dari akuisisi citra satelit mentah hingga menjadi lapisan poligon interaktif pada peta web.",
        step1_title: "Citra Satelit & Preprocessing",
        step1_desc: "Ekstraksi citra satelit area Kabupaten Maros. Normalisasi kontras, pembagian petak koordinat spasial, dan augmentasi data pelatihan.",
        step2_title: "Klasifikasi Awal (CNN)",
        step2_desc: "Model CNN menyaring dan mengelompokkan area yang memiliki karakteristik genangan air tinggi untuk efisiensi beban komputasi.",
        step3_title: "Segmentasi Presisi (Mask R-CNN)",
        step3_desc: "Menghasilkan mask segmentasi tingkat piksel untuk mengisolasi batas genangan banjir dari objek daratan lainnya secara akurat.",
        step4_title: "Vektorisasi ke GeoJSON",
        step4_desc: "Mask piksel biner dikonversi menjadi poligon vektor berstandar GeoJSON dengan referensi koordinat geografis nyata (WGS84).",
        step5_title: "Visualisasi WebGIS Interaktif",
        step5_desc: "Lapisan GeoJSON dirender dinamis di atas antarmuka peta Leaflet.js dengan kontrol interaktif, tooltip wilayah, dan level kedalaman.",

        spec1_title: "Latar Belakang & Masalah",
        spec1_desc: "Kabupaten Maros memiliki kerentanan musiman tinggi terhadap banjir. Pemantauan manual sering lambat dan berisiko. Proyek ini memvalidasi apakah Deep Learning otomatis dapat memetakan genangan secara akurat untuk mendukung pengambilan keputusan tanggap darurat.",
        spec2_title: "Tantangan Rekayasa Teknis",
        spec2_desc: "Citra satelit tropis memiliki gangguan tutupan awan, pantulan kanopi pohon lebat, dan variasi warna tanah basah yang rawan memicu false-positive. Diperlukan penyesuaian threshold kanal spektral dan augmentasi dataset spesifik wilayah Maros.",
        spec3_title: "Hasil & Nilai Tambah",
        spec3_desc: "Model Mask R-CNN mampu memisahkan area tergenang dengan presisi tinggi dan menghasilkan poligon yang siap disajikan secara instan di peta web tanpa perlu instalasi software GIS desktop yang rumit.",

        about_kicker: "PROFIL & PERJALANAN",
        about_heading: "Tentang Saddam Alfarauq",
        about_lead: "Fondasi rekayasa perangkat lunak yang kokoh, pengalaman di lingkungan berstandar aviasi, dan adaptabilitas akademik di kampus terbaik nasional.",
        bio_title: "Pendekatan Rekayasa",
        bio_p1: "Saya adalah lulusan S1 Teknologi Informasi dari Universitas Bosowa dengan predikat Cum Laude (IPK 3.81). Minat dan kekuatan utama saya terletak pada perpaduan antara clean software engineering (JavaScript, OOP, desain API RESTful) serta pemanfaatan data geospasial dan Computer Vision untuk memecahkan persoalan dunia nyata.",
        bio_p2: "Selain keterampilan teknis di depan kode, saya mengasah kemampuan manajerial dan komunikasi dengan memimpin 3 divisi sebagai Kepala Bidang Internal HIMATESI. Pengalaman magang di AirNav Makassar menanamkan disiplin kerja tinggi dalam menjaga keandalan infrastruktur komunikasi penerbangan bandara berstandar ketat.",
        metric_gpa: "IPK (Cum Laude)",
        metric_cert: "Certified Web Dev",
        metric_exchange: "PMM ITB Awardee",
        time1_date: "Magang · Divisi Teknik",
        time1_desc: "Melakukan pemeliharaan preventif (preventive maintenance) pada instrumen dan sistem komunikasi navigasi penerbangan bandara untuk memastikan zero-downtime keselamatan udara.",
        time2_entity: "Institut Teknologi Bandung (ITB)",
        time2_date: "Agu 2023 – Des 2023 · PMM",
        time2_desc: "Terpilih dalam program Pertukaran Mahasiswa Merdeka (Kemendikbudristek) di Teknik Informatika ITB, memperdalam konsep rekayasa perangkat lunak di ekosistem akademik kompetitif.",
        time3_date: "2022 - 2026 · S1 TI",
        time3_desc: "Lulus Sarjana Teknologi Informasi dengan IPK 3.81 (Cum Laude). Menyelesaikan penelitian skripsi sistem WebGIS deteksi risiko banjir berbasis model Deep Learning citra satelit.",
        time4_date: "Kepala Bidang Internal",
        time4_desc: "Mengordinasikan dan memimpin 3 divisi internal organisasi, memfasilitasi komunikasi antar-anggota, serta mengelola program kerja tahunan himpunan.",

        skills_kicker: "KOMPETENSI TEKNIS",
        skills_heading: "Keahlian & Teknologi",
        skills_lead: "Teknologi dan perangkat yang saya gunakan secara aktif untuk membangun aplikasi yang handal dan skalabel.",
        domain1_name: "Web & Software Engineering",
        domain1_sub: "Fondasi pengembangan antarmuka & logika aplikasi",
        domain2_name: "AI & Geospatial Systems",
        domain2_sub: "Pemrosesan citra satelit & antarmuka peta interaktif",
        domain3_name: "Engineering Tools & Workflow",
        domain3_sub: "Kontrol versi, pemeliharaan sistem & kolaborasi tim",
        hint_prefix: "Klik salah satu teknologi di atas untuk melihat konteks penggunaannya pada proyek saya.",

        contact_kicker: "PELUANG KARIR & KOLABORASI",
        contact_headline: "Siap Menghadirkan Dampak Nyata untuk Tim Anda",
        contact_lead: "Saya saat ini terbuka untuk posisi Software Developer, Web Developer, atau IT Staff/Engineer (Full-Time, Kontrak, atau Remote). Jangan ragu untuk mendiskusikan peluang kerja atau sekadar terhubung.",
        contact_copy_btn: "Salin Email",
        contact_send_email: "Kirim Email Langsung",
        footer_tagline: "Software & Web Developer · Makassar, Indonesia",
        footer_rights: "Hak Cipta Dilindungi.",
        footer_credits: "Dibangun secara mandiri dengan Vite & Vanilla CSS murni.",
        toast_copied: "Alamat email berhasil disalin ke clipboard!"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Featured Project",
        nav_skills: "Skills",
        nav_contact: "Contact",
        nav_hire_cta: "Hire Me",

        hero_availability: "Available for Full-Time / Contract Engineering Roles",
        hero_greeting: "Hello, I'm Saddam Alfarauq.",
        hero_title: "Software & Web Developer with Geospatial AI Expertise",
        hero_description: "Bridging modern software engineering (JavaScript, OOP, RESTful API architecture) with Computer Vision deep learning models (CNN & Mask R-CNN) for interactive WebGIS visualization. B.S. in Information Technology from Universitas Bosowa (GPA 3.81 Cum Laude), PMM Awardee at ITB Computer Science, and BNSP certified.",
        hero_cta_projects: "Explore Project",
        hero_cta_cv: "Download CV",
        hero_cta_copy: "Copy Email",
        cred_airnav: "Ex-Intern Engineering Div.",
        cred_itb: "PMM ITB Informatics Awardee",
        cred_bnsp: "Certified Junior Web Dev",
        cred_gpa: "GPA 3.81 (Cum Laude)",

        proj_kicker: "FEATURED WORK & RESEARCH",
        proj_heading: "AI-Powered WebGIS Flood Detection System",
        proj_lead: "A comprehensive full-stack architectural case study integrating satellite pixel-level segmentation into an interactive web mapping platform.",
        tab_interface: "Interface & Live Demo",
        tab_pipeline: "AI Pipeline Architecture",
        tab_specs: "Engineering Challenges & Specs",

        proj_badge_thesis: "Graduation Thesis Project",
        proj_case_title: "WebGIS Flood Detection System — Maros Regency",
        proj_case_summary: "A web-based geospatial intelligence platform built to accurately delineate and monitor flood inundation zones across Maros Regency. Combines satellite image classification with Mask R-CNN instance segmentation streamed into dynamic Leaflet vector map layers.",
        proj_deliv1_title: "Precision Instance Segmentation:",
        proj_deliv1_desc: "Pixel-accurate inundation boundary detection on high-resolution satellite scenes.",
        proj_deliv2_title: "Dynamic Geospatial Vectorization:",
        proj_deliv2_desc: "Automated pipeline converting raw prediction masks into clean GeoJSON map polygons.",
        proj_deliv3_title: "Responsive Monitoring Interface:",
        proj_deliv3_desc: "Intuitive decision-support mapping UI tailored for rapid disaster mitigation teams.",
        proj_btn_demo: "Launch Live Demo",
        proj_btn_repo: "View Repository",

        pipe_title: "AI & Geospatial Pipeline Architecture",
        pipe_desc: "Computational journey transforming raw satellite imagery into interactive vector polygon layers on the web.",
        step1_title: "Satellite Imagery & Preprocessing",
        step1_desc: "Extracting satellite tiles across Maros Regency. Contrast enhancement, patch slicing, and training dataset augmentation.",
        step2_title: "Initial Screening (CNN)",
        step2_desc: "CNN model scans and filters tiles with high flood probability to optimize downstream compute resources.",
        step3_title: "Precision Segmentation (Mask R-CNN)",
        step3_desc: "Generates pixel-accurate instance masks isolating water inundation from dense vegetation and urban terrain.",
        step4_title: "GeoJSON Vectorization",
        step4_desc: "Binary prediction masks converted to standardized GeoJSON polygons referenced to WGS84 coordinates.",
        step5_title: "Interactive WebGIS Layering",
        step5_desc: "Dynamic rendering on Leaflet.js with regional toggle controls, interactive tooltips, and severity gradients.",

        spec1_title: "Problem & Context",
        spec1_desc: "Maros Regency faces severe seasonal flood risks. Manual field survey is hazardous and slow. This project validates whether automated Deep Learning can accurately map inundation extents for emergency response.",
        spec2_title: "Technical Engineering Challenges",
        spec2_desc: "Tropical satellite imagery suffers from dense cloud cover, heavy canopy reflection, and muddy soil variations causing false positives. Solved via spectral thresholding and tailored regional dataset augmentation.",
        spec3_title: "Delivered Value & Outcome",
        spec3_desc: "The system delivers fast, browser-accessible disaster visualization eliminating the need for bulky desktop GIS software installations.",

        about_kicker: "PROFILE & TRACK RECORD",
        about_heading: "About Saddam Alfarauq",
        about_lead: "Rigorous software engineering foundation, safety-critical aviation maintenance exposure, and national academic competitiveness.",
        bio_title: "Engineering Approach",
        bio_p1: "I hold a Bachelor of Information Technology degree from Universitas Bosowa, graduating Cum Laude with a 3.81 GPA. My core craftsmanship centers on clean software engineering (JavaScript, OOP, RESTful API design) combined with practical geospatial data modeling and Computer Vision.",
        bio_p2: "Beyond writing software, I refined leadership and team coordination by heading 3 internal divisions at HIMATESI. My technical internship at MATSC AirNav Makassar reinforced high discipline in maintaining civil aviation communications with zero-downtime reliability standards.",
        metric_gpa: "GPA (Cum Laude)",
        metric_cert: "Certified Web Dev",
        metric_exchange: "PMM ITB Awardee",
        time1_date: "Internship · Engineering Div.",
        time1_desc: "Conducted routine preventive maintenance on airport aviation navigation and communication hardware to ensure civil flight safety standards.",
        time2_entity: "Institut Teknologi Bandung (ITB)",
        time2_date: "Aug 2023 – Dec 2023 · PMM",
        time2_desc: "Selected for the competitive nationwide student exchange at ITB Informatics Engineering, deepening software engineering concepts in an elite academic setting.",
        time3_date: "2022 - 2026 · B.S. IT",
        time3_desc: "Graduated with a 3.81 GPA (Cum Laude). Engineered an interactive WebGIS disaster detection system powered by Deep Learning satellite models.",
        time4_date: "Head of Internal Affairs",
        time4_desc: "Coordinated and led 3 internal divisions, facilitating cross-team communication and overseeing annual student department programs.",

        skills_kicker: "TECHNICAL EXPERTISE",
        skills_heading: "Skills & Technologies",
        skills_lead: "The tools, frameworks, and engineering standards I actively use to construct resilient, production-ready software.",
        domain1_name: "Web & Software Engineering",
        domain1_sub: "Interface architecture & application business logic",
        domain2_name: "AI & Geospatial Systems",
        domain2_sub: "Satellite image processing & interactive mapping",
        domain3_name: "Engineering Tools & Workflow",
        domain3_sub: "Version control, systems maintenance & team alignment",
        hint_prefix: "Click any technology above to see its real-world context and application in my projects.",

        contact_kicker: "CAREER & COLLABORATION",
        contact_headline: "Ready to Deliver Tangible Impact to Your Team",
        contact_lead: "I am actively seeking roles as a Software Developer, Web Developer, or IT Engineer (Full-Time, Contract, or Remote). Let's connect to discuss career opportunities or technical projects.",
        contact_copy_btn: "Copy Email",
        contact_send_email: "Send Email Directly",
        footer_tagline: "Software & Web Developer · Makassar, Indonesia",
        footer_rights: "All Rights Reserved.",
        footer_credits: "Handcrafted with Vite & pure Vanilla CSS.",
        toast_copied: "Email address copied to clipboard!"
    }
};

// --- Interactive Tech Hints Dictionary ---
const techContextMap = {
    id: {
        javascript: "JavaScript (ES6+): Digunakan dalam arsitektur logika frontend, integrasi Leaflet WebGIS, manipulasi DOM, dan konektivitas REST API.",
        rest: "RESTful APIs: Mengonsumsi dan menyusun endpoint HTTP untuk pertukaran data poligon GeoJSON dan metadata spasial.",
        oop: "OOP & Algoritma: Diterapkan dalam merancang struktur kode yang modular, modularisasi fungsi spasial, dan kode yang mudah dirawat.",
        html: "HTML5 Semantic: Membangun struktur dokumen yang bersih, aksesibel, dan memenuhi standar SEO teknis.",
        css: "Modern CSS: Styling presisi dengan Flexbox, CSS Grid, variabel sistem (tokens), dan responsivitas tanpa dependensi berat.",
        vite: "Vite: Tooling pengembangan modern untuk bundling cepat, environment dev instan, dan optimasi aset produksi.",
        react: "React: Fondasi komponen reaktif, pengelolaan state, dan arsitektur single-page application (SPA).",
        python: "Python: Bahasa utama dalam rekayasa data citra satelit, ekstraksi tile spasial, dan pelatihan model Deep Learning.",
        maskrcnn: "Mask R-CNN: Model Computer Vision yang dilatih untuk segmentasi instans piksel batas genangan air banjir di Maros.",
        cnn: "CNN: Convolutional Neural Network untuk screening dan klasifikasi awal area berpotensi genangan pada citra satelit.",
        leaflet: "Leaflet.js: Engine peta interaktif berbasis web untuk merender poligon banjir di atas tile peta wilayah.",
        geojson: "GeoJSON: Format standar pertukaran data spasial yang digunakan untuk memplot koordinat hasil prediksi AI.",
        satellite: "Citra Satelit: Akuisisi dan pengolahan citra satelit multispektral resolusi spasial tinggi untuk deteksi bencana.",
        sql: "Basis Data SQL: Pemodelan data relasional dan query terstruktur untuk penyimpanan informasi spasial dan master data.",
        git: "Git & GitHub: Kontrol versi profesional dengan commit terstruktur, branching workflow, dan kolaborasi repositori.",
        linux: "Linux & Terminal: Navigasi CLI, scripting dasar, dan manajemen server pengembangan berbasis Linux.",
        postman: "Postman: Pengujian endpoint API, validasi response time, dan inspeksi payload format JSON/GeoJSON.",
        maintenance: "Hardware & Network: Pengalaman praktis preventive maintenance sistem instrumen aviasi di AirNav Makassar.",
        sdlc: "SDLC & Dokumentasi: Disiplin siklus rekayasa perangkat lunak dari analisis kebutuhan, perancangan, hingga deployment.",
        vercel: "Vercel: Platform deployment cloud untuk hosting aplikasi web dengan automated CI/CD pipeline."
    },
    en: {
        javascript: "JavaScript (ES6+): Engineered core web application logic, Leaflet WebGIS mapping layers, and asynchronous REST APIs.",
        rest: "RESTful APIs: Designed and consumed HTTP endpoints for streaming GeoJSON spatial datasets and model prediction payloads.",
        oop: "OOP & Algorithms: Applied clean OOP patterns for maintainable code structure and geospatial coordinate processing.",
        html: "HTML5 Semantic: Built accessible, SEO-compliant document structures following modern W3C standards.",
        css: "Modern CSS: Handcrafted styling leveraging CSS variables, Flexbox, and CSS Grid for high-performance rendering.",
        vite: "Vite: Modern frontend tooling driving ultra-fast HMR and optimized production bundles.",
        react: "React: Reactive component hierarchy, state lifecycle management, and modern SPA architecture fundamentals.",
        python: "Python: Core language for satellite data wrangling, OpenCV transformations, and deep learning model training.",
        maskrcnn: "Mask R-CNN: Instance segmentation architecture trained to isolate pixel-level flood inundation boundaries.",
        cnn: "CNN: Convolutional neural networks utilized for initial flood risk categorization across satellite scenes.",
        leaflet: "Leaflet.js: Interactive web mapping library rendering dynamic GeoJSON layers with custom map controls.",
        geojson: "GeoJSON: Spatial data standard utilized to serialize and render AI-detected flood polygons.",
        satellite: "Satellite Imagery: Acquisition and calibration of multispectral remote sensing scenes for disaster analysis.",
        sql: "SQL Databases: Relational schema design and optimized query execution for structured application records.",
        git: "Git & GitHub: Professional version control workflows, semantic commits, and open-source collaboration.",
        linux: "Linux CLI: Command-line navigation, development environment administration, and bash scripting.",
        postman: "Postman: Robust API testing, payload verification, and HTTP header inspection.",
        maintenance: "Hardware & Network: Hands-on preventive maintenance on mission-critical aviation hardware at AirNav Makassar.",
        sdlc: "SDLC: Disciplined software lifecycle management from requirement specifications to production release.",
        vercel: "Vercel: Automated cloud deployment platform delivering fast global edge distribution."
    }
};

// --- Language Switcher ---
let currentLang = localStorage.getItem('saddam_portfolio_lang') || 'id';
const langToggleBtn = document.getElementById('lang-toggle');
const langIndicator = document.getElementById('lang-indicator');

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('saddam_portfolio_lang', lang);
    if (langIndicator) {
        langIndicator.textContent = lang === 'id' ? 'EN' : 'ID';
    }

    const dict = translations[lang] || translations.id;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Reset tech hint box to default hint
    const techHintEl = document.getElementById('tech-hint');
    if (techHintEl) {
        techHintEl.innerHTML = `<span class="hint-prefix">${dict.hint_prefix}</span>`;
    }
}

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'id' ? 'en' : 'id';
        applyLanguage(nextLang);
    });
}

// --- Theme Switcher ---
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('saddam_portfolio_theme') || 'dark';

if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
}

function updateThemeIcon() {
    const isLight = document.body.classList.contains('light-mode');
    const icon = document.getElementById('theme-icon');
    if (icon) {
        if (isLight) {
            // Moon icon
            icon.innerHTML = `
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            `;
        } else {
            // Sun icon
            icon.innerHTML = `
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            `;
        }
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('saddam_portfolio_theme', isLight ? 'light' : 'dark');
        updateThemeIcon();
    });
}

// --- Mobile Navigation Drawer ---
const mobileToggleBtn = document.getElementById('mobile-toggle');
const mobileDrawer = document.getElementById('mobile-drawer');

if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('open');
        mobileToggleBtn.setAttribute('aria-expanded', isOpen);
        mobileDrawer.setAttribute('aria-hidden', !isOpen);
    });

    // Close drawer when clicking mobile nav links
    document.querySelectorAll('.mobile-nav-item, .mobile-drawer-cta a').forEach(link => {
        link.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
            mobileToggleBtn.setAttribute('aria-expanded', 'false');
            mobileDrawer.setAttribute('aria-hidden', 'true');
        });
    });
}

// --- Interactive Case Study Tabs ---
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetPanelId = btn.getAttribute('aria-controls');

        tabButtons.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
        });
        tabPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const targetPanel = document.getElementById(targetPanelId);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});

// --- Toast Notification Handler ---
const toastEl = document.getElementById('toast');
let toastTimeout;

function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toastEl.classList.remove('show');
    }, 3200);
}

// --- Copy Email to Clipboard ---
const emailToCopy = "saddamalfarauq7@gmail.com";

function handleCopyEmail(buttonEl, labelEl) {
    navigator.clipboard.writeText(emailToCopy).then(() => {
        const dict = translations[currentLang] || translations.id;
        showToast(dict.toast_copied);

        if (buttonEl) {
            buttonEl.classList.add('copied');
        }
        if (labelEl) {
            const originalText = labelEl.textContent;
            labelEl.textContent = currentLang === 'id' ? 'Tersalin ✓' : 'Copied ✓';
            setTimeout(() => {
                labelEl.textContent = originalText;
                if (buttonEl) buttonEl.classList.remove('copied');
            }, 2000);
        }
    }).catch(() => {
        // Fallback for older browsers
        showToast(emailToCopy);
    });
}

// Hero copy button
const heroCopyBtn = document.getElementById('hero-copy-email-btn');
const heroCopyBtnText = document.getElementById('hero-copy-btn-text');
if (heroCopyBtn) {
    heroCopyBtn.addEventListener('click', () => {
        handleCopyEmail(heroCopyBtn, heroCopyBtnText);
    });
}

// Contact widget copy button
const contactCopyBtn = document.getElementById('copy-email-widget-btn');
const contactCopyLabel = document.getElementById('copy-widget-btn-label');
if (contactCopyBtn) {
    contactCopyBtn.addEventListener('click', () => {
        handleCopyEmail(contactCopyBtn, contactCopyLabel);
    });
}

// --- Interactive Tech Stack Hints ---
const skillPills = document.querySelectorAll('.skill-pill');
const techHintEl = document.getElementById('tech-hint');

skillPills.forEach(pill => {
    pill.addEventListener('click', () => {
        const techKey = pill.getAttribute('data-tech');
        skillPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const map = techContextMap[currentLang] || techContextMap.id;
        if (techHintEl && map[techKey]) {
            techHintEl.innerHTML = `<span class="hint-active-text">${map[techKey]}</span>`;
        }
    });
});

// --- Active Nav Highlighting on Scroll ---
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-item');

function highlightNav() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNav);

// --- Interactive Cursor Spotlight (Respects Reduced Motion) ---
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
    let isMouseMoving = false;
    window.addEventListener('mousemove', (e) => {
        if (!isMouseMoving) {
            requestAnimationFrame(() => {
                document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
                document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
                isMouseMoving = false;
            });
            isMouseMoving = true;
        }
    }, { passive: true });
}

// --- Subtle Scroll Reveal Motion (Lightweight & Accessible) ---
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll(
        '.section-title-block, .case-study-card, .bio-narrative-card, .timeline-item, .domain-card, .tech-hint-box, .contact-cta-card'
    );

    revealTargets.forEach(el => el.classList.add('reveal-hidden'));

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
                // Clean up classes after transition completes to preserve natural hover states
                setTimeout(() => {
                    entry.target.classList.remove('reveal-hidden', 'revealed');
                }, 600);
            }
        });
    }, {
        root: null,
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    revealTargets.forEach(el => revealObserver.observe(el));
}

// Initialize
applyLanguage(currentLang);
updateThemeIcon();

