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
        hero_description: "Menggabungkan rekayasa perangkat lunak modern (React 19, JavaScript, FastAPI, arsitektur RESTful API) dengan implementasi model Computer Vision (EfficientNet & Mask R-CNN) untuk visualisasi geospasial WebGIS. Lulusan S1 TI Universitas Bosowa (IPK 3.81 Cum Laude), PMM Awardee di Teknik Informatika ITB, dan tersertifikasi BNSP.",
        hero_cta_projects: "Eksplorasi Proyek",
        hero_cta_cv: "Unduh CV",
        hero_cta_copy: "Salin Email",
        cred_airnav: "Ex-Intern Pemeliharaan Teknik",
        cred_itb: "Awardee PMM Informatika",
        cred_bnsp: "Tersertifikasi Junior Web Dev",
        cred_gpa: "IPK 3.81 (Cum Laude)",

        proj_kicker: "PROYEK PILIHAN & RISET REKAYASA",
        proj_heading: "Sentinel FloodRisk AI • Institutional WebGIS",
        proj_lead: "Platform pemetaan risiko banjir otomatis skala institusional Kabupaten Maros berbasis fusi satelit multi-sensor (Sentinel-1 SAR C-Band & Sentinel-2 MSI), cascaded dual-stage deep learning (EfficientNet-B4 + Mask R-CNN ResNet-101 FPN), segmentasi Otsu adaptif, dan validasi Explainable AI (Grad-CAM).",
        tab_interface: "Tampilan Antarmuka & Demo",
        tab_pipeline: "Arsitektur Pipeline AI",
        tab_specs: "Tantangan & Metrik Rekayasa",

        proj_badge_thesis: "Tugas Akhir S1 Cum Laude · Univ. Bosowa 2026",
        proj_case_title: "Sentinel FloodRisk AI — Sistem WebGIS Deteksi & Pemetaan Risiko Banjir Kabupaten Maros",
        proj_case_summary: "Sistem informasi geospasial end-to-end yang memetakan genangan banjir secara presisi di 14 kecamatan Kabupaten Maros. Memadukan radar penembus awan Sentinel-1 SAR (hamburan balik specular < -14 dB) dengan citra optik Sentinel-2 (NDWI/NDVI) dan elevasi DEM SRTM 30m. Menggerakkan pipeline deep learning dua tahap untuk mendeteksi 29 zona genangan seluas 13.279,8 Ha pada benchmark banjir historis Januari 2023.",
        proj_deliv1_title: "Delineasi Spasial 29 Zona Banjir (13.279 Ha):",
        proj_deliv1_desc: "Segmentasi poligon genangan presisi piksel berbasis Mask R-CNN dan ambang batas Otsu adaptif pada skenario bencana Januari 2023.",
        proj_deliv2_title: "Fusi Multi-Sensor 9-Kanal & SAR Tembus Awan:",
        proj_deliv2_desc: "Mengatasi kendala tutupan awan musim hujan tropis melalui fusi saluran optik (B2, B3, B4, B8, NDWI, NDVI), radar Sentinel-1 SAR (VV/VH), dan topografi DEM SRTM 30m.",
        proj_deliv3_title: "Filter 14 Kecamatan & Interoperabilitas GIS:",
        proj_deliv3_desc: "Filter granular wilayah, matriks rekapitulasi risiko standar BNPB, dan ekspor 1-klik format GeoJSON standar WGS84 siap pakai di QGIS, ArcGIS Pro, atau posko BPBD.",
        proj_btn_demo: "Buka Live Demo",
        proj_btn_repo: "Lihat Repositori",

        pipe_title: "Arsitektur Pipeline AI & Geospasial",
        pipe_desc: "Alur komputasi dari ingesti satelit multi-sensor hingga pemodelan vektor interaktif pada peta web.",
        step1_title: "Ingesti Multi-Sensor 9-Kanal (GEE API)",
        step1_desc: "Ekstraksi citra satelit mentah real-time via Google Earth Engine API: 4 kanal optik Sentinel-2 (B02, B03, B04, B08), 2 indeks spektral (NDWI & NDVI), 2 kanal radar Sentinel-1 SAR C-Band (VV & VH), dan model elevasi digital SRTM 30m.",
        step2_title: "Macro Screening — CNN (EfficientNet-B4)",
        step2_desc: "Penyaring cepat (Gatekeeper) yang mengklasifikasikan tingkat risiko regional (Rendah, Sedang, Tinggi, Sangat Tinggi) dengan akurasi validasi 79,59%, mengoptimalkan efisiensi komputasi inferensi GPU.",
        step3_title: "Micro Delineation — Mask R-CNN (ResNet-101 FPN)",
        step3_desc: "Segmentasi instans tingkat piksel dengan modifikasi extreme anchor ratios [0.2, 0.5, 1.0, 2.0, 5.0] untuk menangkap pola meliuk aliran sungai dan genangan persawahan datar Maros.",
        step4_title: "Segmentasi Otsu Adaptif & Vektorisasi GeoJSON",
        step4_desc: "Penyempurnaan batas air dengan ambang batas Otsu morfologis pada komposit SAR/NDWI, diikuti konversi otomatis mask biner menjadi poligon vektor standar GeoJSON (WGS84).",
        step5_title: "Visualisasi WebGIS, XAI (Grad-CAM) & Integrasi Cloud",
        step5_desc: "Penyajian interaktif di peta Leaflet.js dengan kontrol 14 kecamatan, visualisasi transparansi Explainable AI (Grad-CAM), serta orkestrasi backend FastAPI via tunnel terenkripsi ke deployment Vercel.",

        spec1_title: "Kerentanan Hidrologi Dataran Maros",
        spec1_desc: "Kabupaten Maros memiliki dataran rendah barat (<10 mdpl) yang merupakan muara DAS utama dan penampung air gravitasi, rawan banjir musiman parah. Sistem ini menghadirkan early warning otomatis tanpa ketergantungan pada survei manual lapangan yang berisiko lambat.",
        spec2_title: "Terobosan Radar Tembus Awan (SAR Specular Reflection)",
        spec2_desc: "Musim hujan tropis menghasilkan tutupan awan tebal yang membutakan satelit optik biasa. Diatasi dengan gelombang mikro Sentinel-1 SAR C-Band (~5.6 cm) bebas bias awan, di mana permukaan air memantulkan sinyal menjauhi sensor (specular reflection < -14 dB).",
        spec3_title: "Validasi Ilmiah & Explainable AI (Grad-CAM)",
        spec3_desc: "Model mencapai Mean IoU 0.862, Precision 0.914, dan Dice Score 0.905. Panel atensi Grad-CAM membuktikan bahwa model mengenali fisik hamburan balik radar dan topografi dataran rendah secara akurat, bukan sekadar menebak noise latar belakang.",

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
        hero_description: "Bridging modern full-stack engineering (React 19, JavaScript, FastAPI, RESTful architecture) with Computer Vision deep learning models (EfficientNet-B4 & Mask R-CNN) for interactive WebGIS visualization. B.S. in Information Technology from Universitas Bosowa (GPA 3.81 Cum Laude), PMM Awardee at ITB Computer Science, and BNSP certified.",
        hero_cta_projects: "Explore Project",
        hero_cta_cv: "Download CV",
        hero_cta_copy: "Copy Email",
        cred_airnav: "Ex-Intern Engineering Div.",
        cred_itb: "PMM ITB Informatics Awardee",
        cred_bnsp: "Certified Junior Web Dev",
        cred_gpa: "GPA 3.81 (Cum Laude)",

        proj_kicker: "FEATURED WORK & RESEARCH",
        proj_heading: "Sentinel FloodRisk AI • Institutional WebGIS",
        proj_lead: "Institutional-grade automated flood monitoring platform for Maros Regency powered by multi-sensor satellite fusion (Sentinel-1 SAR C-Band & Sentinel-2 MSI), cascaded dual-stage deep learning (EfficientNet-B4 + Mask R-CNN ResNet-101 FPN), adaptive Otsu segmentation, and Explainable AI (Grad-CAM).",
        tab_interface: "Interface & Live Demo",
        tab_pipeline: "AI Pipeline Architecture",
        tab_specs: "Engineering Challenges & Specs",

        proj_badge_thesis: "Bachelor's Thesis (Cum Laude) · Bosowa Univ 2026",
        proj_case_title: "Sentinel FloodRisk AI — Multi-Sensor Flood Inundation WebGIS Platform for Maros Regency",
        proj_case_summary: "An end-to-end geospatial intelligence system mapping flood inundation across all 14 districts in Maros Regency. Fuses cloud-penetrating Sentinel-1 SAR radar (specular backscatter < -14 dB) with Sentinel-2 optical imagery (NDWI/NDVI) and SRTM 30m DEM elevation. Drives a cascaded dual-stage deep learning pipeline delineating 29 flood zones spanning 13,279.8 Ha during the January 2023 disaster benchmark.",
        proj_deliv1_title: "Spatial Delineation of 29 Flood Zones (13,279 Ha):",
        proj_deliv1_desc: "Pixel-accurate inundation polygon segmentation driven by Mask R-CNN and adaptive Otsu thresholding during the major January 2023 disaster benchmark.",
        proj_deliv2_title: "9-Channel Multi-Sensor Fusion & Cloud-Penetrating SAR:",
        proj_deliv2_desc: "Overcomes monsoon cloud cover by fusing optical bands (B2, B3, B4, B8, NDWI, NDVI), Sentinel-1 SAR radar (VV/VH), and SRTM 30m DEM topography.",
        proj_deliv3_title: "14-District Granular Filter & GIS Interoperability:",
        proj_deliv3_desc: "Per-district granular inspection, BNPB hazard classification matrix, and one-click GeoJSON export (WGS84) ready for immediate import into QGIS, ArcGIS Pro, or emergency command centers.",
        proj_btn_demo: "Launch Live Demo",
        proj_btn_repo: "View Repository",

        pipe_title: "AI & Geospatial Pipeline Architecture",
        pipe_desc: "Computational journey transforming raw multi-sensor satellite imagery into interactive vector polygon layers on the web.",
        step1_title: "9-Channel Multi-Sensor Ingestion (GEE API)",
        step1_desc: "Real-time satellite ingestion via Google Earth Engine API: 4 Sentinel-2 optical bands (B02, B03, B04, B08), 2 spectral indices (NDWI & NDVI), 2 Sentinel-1 SAR C-Band radar bands (VV & VH), and SRTM 30m digital elevation model.",
        step2_title: "Macro Screening — CNN (EfficientNet-B4)",
        step2_desc: "High-throughput gatekeeper classifying territorial risk levels (Low, Moderate, High, Very High) with 79.59% validation accuracy, optimizing downstream GPU compute workloads.",
        step3_title: "Micro Delineation — Mask R-CNN (ResNet-101 FPN)",
        step3_desc: "Pixel-level instance segmentation with custom extreme anchor ratios [0.2, 0.5, 1.0, 2.0, 5.0] engineered specifically to capture meandering river channels and flat Maros floodplains.",
        step4_title: "Adaptive Otsu Thresholding & GeoJSON Vectorization",
        step4_desc: "Refining water boundaries via morphological Otsu thresholding on SAR/NDWI composites, automatically converting binary prediction masks into standardized GeoJSON polygons (WGS84).",
        step5_title: "Interactive WebGIS, XAI (Grad-CAM) & Edge-to-Cloud Integration",
        step5_desc: "Dynamic rendering on Leaflet.js with 14-district controls, Explainable AI Grad-CAM transparency heatmaps, and hybrid FastAPI backend orchestration tunneled to Vercel.",

        spec1_title: "Hydrological Vulnerability of Maros Floodplains",
        spec1_desc: "Maros Regency features western lowlands (<10m ASL) acting as watershed estuaries and gravity basins subject to severe seasonal inundation. The system delivers automated early warnings eliminating hazardous and slow manual field surveys.",
        spec2_title: "Cloud-Penetrating Radar Breakthrough (SAR Specular Reflection)",
        spec2_desc: "Tropical monsoon cloud cover blinds standard optical satellites. Overcome via Sentinel-1 SAR C-Band microwaves (~5.6 cm) impervious to cloud cover, where calm water acts as a specular reflector bouncing signals away from the sensor (< -14 dB).",
        spec3_title: "Scientific Validation & Explainable AI (Grad-CAM)",
        spec3_desc: "The model achieved Mean IoU of 0.862, Precision of 0.914, and Dice Score of 0.905. Integrated Grad-CAM attention maps verify neural predictions are physically grounded in radar backscatter and floodplain topography rather than background noise.",

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
        fastapi: "FastAPI: Framework backend async berkinerja tinggi yang mengeksekusi pipeline inferensi AI PyTorch CUDA dan melayani endpoint REST API spasial.",
        python: "Python: Bahasa utama dalam rekayasa data citra satelit, ekstraksi tile spasial, dan pelatihan model Deep Learning.",
        pytorch: "PyTorch & CUDA: Eksekusi model deep learning EfficientNet-B4 dan Mask R-CNN pada lingkungan GPU terakselerasi untuk segmentasi citra.",
        gee: "Google Earth Engine: Platform komputasi awan geospasial untuk akuisisi terprogram citra satelit Sentinel-1 SAR dan Sentinel-2 MSI.",
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
        fastapi: "FastAPI: High-performance asynchronous Python backend serving deep learning inference pipelines and spatial REST APIs with automated OpenAPI documentation.",
        python: "Python: Core language for satellite data wrangling, OpenCV transformations, and deep learning model training.",
        pytorch: "PyTorch & CUDA: Deep learning framework executing EfficientNet-B4 and Mask R-CNN models on hardware-accelerated GPU pipelines.",
        gee: "Google Earth Engine: Programmatic cloud acquisition and processing of Sentinel-2 multispectral and Sentinel-1 SAR radar imagery.",
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

// --- Interactive Project Viewport Switcher ---
const previewToggleBtns = document.querySelectorAll('.preview-toggle-btn');
const projectPreviewImg = document.getElementById('project-preview-img');

previewToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetImg = btn.getAttribute('data-img');
        const targetAlt = btn.getAttribute('data-alt');

        previewToggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (projectPreviewImg && targetImg) {
            projectPreviewImg.style.opacity = '0.4';
            setTimeout(() => {
                projectPreviewImg.setAttribute('src', targetImg);
                if (targetAlt) projectPreviewImg.setAttribute('alt', targetAlt);
                projectPreviewImg.style.opacity = '1';
            }, 120);
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

