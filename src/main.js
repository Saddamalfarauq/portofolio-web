import './style.css';

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// --- Bilingual Translation Dictionary ---
const translations = {
    id: {
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_skills: "Keahlian",
        nav_projects: "Proyek",
        nav_contact: "Kontak",
        nav_contact_btn: "Hubungi Saya",
        hero_status: "Terbuka untuk Peluang Kerja & Kolaborasi",
        hero_greeting: "Halo, saya",
        hero_title: "Software Developer & AI Enthusiast",
        hero_summary: "Lulusan S1 Teknik Informatika (2026) dari Universitas Bosowa dengan keahlian dalam rekayasa perangkat lunak, JavaScript, dan Deep Learning. Berfokus pada pembangunan solusi WebGIS interaktif serta arsitektur sistem yang terukur.",
        hero_btn_work: "Lihat Karya Saya",
        hero_btn_contact: "Hubungi Saya",
        hl_airnav: "Ex-Intern Divisi Teknik",
        hl_itb: "Pertukaran Mahasiswa",
        hl_gis: "CNN & Mask R-CNN",
        profile_card_role: "S.Kom Teknik Informatika · Lulusan 2026",
        about_tag: "PROFIL & PERJALANAN",
        about_title: "Tentang Saya",
        about_subtitle: "Kombinasi antara rekayasa perangkat lunak, kecerdasan buatan, dan kepemimpinan organisasi.",
        about_bio_title: "Dedikasi & Pemecahan Masalah",
        about_p1: "Saya adalah lulusan S1 Teknik Informatika tahun 2026 dari Universitas Bosowa dengan dedikasi tinggi dalam mengeksplorasi teknologi mutakhir. Keunggulan utama saya terletak pada konvergensi antara pengembangan web modern dan implementasi Deep Learning (arsitektur CNN dan Mask R-CNN) untuk analisis data geospasial presisi.",
        about_p2: "Selain kemampuan teknikal, saya mengasah kepemimpinan sebagai Kepala Urusan Internal di Himpunan Mahasiswa Teknik Informatika, membekali saya dengan kapasitas komunikasi yang efektif, negosiasi, dan manajemen tim dalam proyek kolaboratif.",
        stat_year: "Lulusan S1 (S.Kom)",
        stat_ai: "Model AI Unggulan",
        stat_commitment: "Komitmen Kerja",
        about_timeline_title: "Pengalaman & Pendidikan",
        about_timeline_1_date: "Magang · Divisi Teknik",
        about_timeline_1_desc: "Pemeliharaan preventif, inspeksi sistem, dan penyelesaian gangguan teknis pada instrumen komunikasi navigasi penerbangan nasional.",
        about_timeline_2_org: "Institut Teknologi Bandung (ITB)",
        about_timeline_2_date: "Program Pertukaran Mahasiswa",
        about_timeline_2_desc: "Memperdalam wawasan rekayasa komputasi dan beradaptasi dalam atmosfer akademik yang sangat kompetitif.",
        about_timeline_3_date: "2022 - 2026 · S.Kom",
        about_timeline_3_desc: "Telah menyelesaikan studi sarjana Teknik Informatika dengan fokus pada rekayasa perangkat lunak, pemodelan sistem cerdas, dan pengerjaan tugas akhir deteksi banjir berbasis citra satelit & WebGIS.",
        skills_tag: "KEAHLIAN & TEKNOLOGI",
        skills_title: "Kompetensi Teknis",
        skills_subtitle: "Teknologi dan metodologi yang saya gunakan untuk mentransformasi ide menjadi solusi nyata.",
        skills_cat1: "Web & Software Dev",
        skills_cat1_sub: "Fondasi arsitektur aplikasi",
        skills_cat2: "AI & Geospatial",
        skills_cat2_sub: "Kecerdasan buatan & analisis spasial",
        skills_cat3: "Metodologi & Kolaborasi",
        skills_cat3_sub: "Manajemen proyek & sinergi tim",
        projects_tag: "KARYA UNGGULAN",
        projects_title: "Proyek Pilihan",
        projects_subtitle: "Implementasi nyata integrasi Machine Learning dengan platform pemetaan WebGIS interaktif.",
        project_tag_thesis: "Tugas Akhir / Skripsi",
        projects_p1_title: "WebGIS Flood Detection System",
        projects_p1_desc: "Sistem kecerdasan buatan komprehensif untuk mendeteksi dan memetakan daerah rawan banjir di Kabupaten Maros. Memanfaatkan CNN untuk klasifikasi awal citra dan Mask R-CNN untuk segmentasi area tergenang secara presisi dari citra satelit, yang langsung diintegrasikan ke platform peta interaktif WebGIS.",
        feat_1: "Segmentasi tingkat piksel otomatis pada citra satelit",
        feat_2: "Visualisasi poligon interaktif di atas layer peta wilayah terpadu",
        feat_3: "Antarmuka responsif untuk kemudahan pemantauan potensi bencana",
        projects_btn: "Buka Live Demo",
        projects_github_btn: "Repositori",
        contact_tag: "HUBUNGI SAYA",
        contact_title: "Mari Berkolaborasi",
        contact_subtitle: "Terbuka untuk diskusi proyek baru, rekrutmen profesional, atau sekadar bertukar wawasan teknologi.",
        contact_heading: "Siap Membangun Sesuatu yang Berdampak?",
        contact_lead: "Saya saat ini siap menyambut kesempatan kerja baru sebagai Software Developer, Web Developer, atau IT Staff. Silakan hubungi saya melalui email atau jaringan profesional berikut:",
        btn_copy: "Salin",
        btn_send_email: "Kirim Email Sekarang",
        footer_rights: "Hak Cipta Dilindungi.",
        footer_credits: "Dirancang & dibangun oleh Saddam Alfarauq menggunakan Vite & Vanilla CSS.",
        toast_copied: "Alamat email berhasil disalin ke clipboard!"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        nav_contact_btn: "Contact Me",
        hero_status: "Open to Work Opportunities & Collaboration",
        hero_greeting: "Hello, I'm",
        hero_title: "Software Developer & AI Enthusiast",
        hero_summary: "Informatics Engineering graduate (B.S., 2026) from Universitas Bosowa specializing in software engineering, JavaScript, and Deep Learning. Focused on building interactive WebGIS applications and resilient system architectures.",
        hero_btn_work: "View My Work",
        hero_btn_contact: "Contact Me",
        hl_airnav: "Ex-Intern Engineering",
        hl_itb: "Student Exchange",
        hl_gis: "CNN & Mask R-CNN",
        profile_card_role: "B.S. Informatics Engineering · Class of 2026",
        about_tag: "PROFILE & JOURNEY",
        about_title: "About Me",
        about_subtitle: "Bridging software engineering, machine learning, and organizational leadership.",
        about_bio_title: "Dedication & Problem Solving",
        about_p1: "I am a 2026 Informatics Engineering graduate from Universitas Bosowa with a strong drive for technological innovation. My distinct edge lies at the crossroads of modern web development and Deep Learning (CNN & Mask R-CNN architectures) for high-precision geospatial data intelligence.",
        about_p2: "Beyond technical craftsmanship, I served as Head of Internal Affairs in my student association, honing clear communication, negotiation, and cross-functional team management in high-velocity projects.",
        stat_year: "Class of 2026 (B.S.)",
        stat_ai: "Featured AI Models",
        stat_commitment: "Work Commitment",
        about_timeline_title: "Experience & Education",
        about_timeline_1_date: "Internship · Engineering Div.",
        about_timeline_1_desc: "Preventive maintenance, routine system inspection, and troubleshooting of national civil aviation communication equipment.",
        about_timeline_2_org: "Institut Teknologi Bandung (ITB)",
        about_timeline_2_date: "Student Exchange Program",
        about_timeline_2_desc: "Deepened computing engineering concepts while thriving within a competitive top-tier academic environment.",
        about_timeline_3_date: "2022 - 2026 · B.S.",
        about_timeline_3_desc: "Completed Bachelor's degree in Informatics Engineering focusing on software systems, intelligent architectures, and a graduation thesis on satellite-based flood detection using WebGIS.",
        skills_tag: "SKILLS & TECHNOLOGIES",
        skills_title: "Technical Expertise",
        skills_subtitle: "The tools, frameworks, and methodologies I leverage to engineer production-ready solutions.",
        skills_cat1: "Web & Software Dev",
        skills_cat1_sub: "Core application foundations",
        skills_cat2: "AI & Geospatial",
        skills_cat2_sub: "Artificial intelligence & spatial analytics",
        skills_cat3: "Methodologies & Soft Skills",
        skills_cat3_sub: "Project management & team alignment",
        projects_tag: "FEATURED WORK",
        projects_title: "Selected Project",
        projects_subtitle: "A real-world implementation connecting Computer Vision models with an interactive GIS mapping interface.",
        project_tag_thesis: "Graduation Thesis Project",
        projects_p1_title: "WebGIS Flood Detection System",
        projects_p1_desc: "A comprehensive AI-driven geospatial system designed to detect and delineate flood potential in Maros Regency. Combines CNNs for initial satellite image classification and Mask R-CNN for precise flood instance segmentation, streamed directly into an interactive WebGIS map.",
        feat_1: "Automated pixel-level segmentation on multi-spectral satellite imagery",
        feat_2: "Interactive polygon rendering overlaying regional geographic layers",
        feat_3: "Responsive web interface for rapid decision-making in disaster mitigation",
        projects_btn: "Launch Live Demo",
        projects_github_btn: "Repository",
        contact_tag: "GET IN TOUCH",
        contact_title: "Let's Collaborate",
        contact_subtitle: "Open for career opportunities, freelance software engineering, or technical discussions.",
        contact_heading: "Ready to Build Something Meaningful?",
        contact_lead: "I am actively seeking roles as a Software Developer, Web Developer, or IT Engineer. Feel free to connect via email or any of the social links below:",
        btn_copy: "Copy",
        btn_send_email: "Send Email Directly",
        footer_rights: "All Rights Reserved.",
        footer_credits: "Designed & developed by Saddam Alfarauq using Vite & Vanilla CSS.",
        toast_copied: "Email address copied to clipboard!"
    }
};

// --- Language Toggle Handler ---
const langToggleBtn = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('lang') || 'id';

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    if (langToggleBtn) {
        const langText = langToggleBtn.querySelector('.lang-text');
        if (langText) {
            langText.textContent = lang === 'id' ? 'EN' : 'ID';
        }
    }
    document.documentElement.lang = lang;
}

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        localStorage.setItem('lang', currentLang);
        applyLanguage(currentLang);
    });
}

// Initial Language load
applyLanguage(currentLang);

// --- Theme Switcher Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

const moonIconSvg = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
const sunIconSvg = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';

const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeIcon) themeIcon.innerHTML = moonIconSvg;
} else {
    document.body.classList.remove('light-mode');
    if (themeIcon) themeIcon.innerHTML = sunIconSvg;
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        if (themeIcon) {
            themeIcon.innerHTML = isLight ? moonIconSvg : sunIconSvg;
        }
    });
}

// --- Mobile Navigation Drawer Toggle ---
const mobileToggleBtn = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileToggleBtn && mobileMenu) {
    mobileToggleBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        mobileToggleBtn.classList.toggle('open', isOpen);
        mobileToggleBtn.setAttribute('aria-expanded', isOpen.toString());
    });

    // Close mobile menu on any link click
    document.querySelectorAll('.mobile-nav-link, .mobile-cta-btn').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileToggleBtn.classList.remove('open');
            mobileToggleBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

// --- Active Link Scrollspy (IntersectionObserver) ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links .nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-links .mobile-nav-link');

const scrollspyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === `#${id}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            mobileNavLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === `#${id}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}, {
    root: null,
    rootMargin: '-30% 0px -40% 0px',
    threshold: 0
});

sections.forEach(section => scrollspyObserver.observe(section));

// --- Smooth Anchor Scrolling ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- Toast Notification Helper ---
const toastEl = document.getElementById('toast');
let toastTimeout;

function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toastEl.classList.remove('show');
    }, 3000);
}

// --- Copy Email to Clipboard ---
const copyBtn = document.getElementById('copy-email-btn');
const copyBtnText = document.getElementById('copy-btn-text');
const emailAddress = 'saddamalfarauq7@gmail.com';

if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            const originalText = copyBtnText ? copyBtnText.textContent : 'Salin';
            if (copyBtnText) copyBtnText.textContent = currentLang === 'id' ? 'Tersalin!' : 'Copied!';
            showToast(translations[currentLang].toast_copied);
            
            setTimeout(() => {
                if (copyBtnText) copyBtnText.textContent = originalText;
            }, 2500);
        } catch {
            showToast('saddamalfarauq7@gmail.com');
        }
    });
}
