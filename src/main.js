import './style.css'

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for scroll animations (Slide up / Fade in)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add initial styles and observe all sections
document.querySelectorAll('section').forEach(section => {
    // Skip hero section for initial animation
    if(section.id !== 'home') {
        section.style.opacity = 0;
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.5, 0, 0, 1)';
        observer.observe(section);
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- Theme Toggle Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

const moonIconPath = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
const sunIconPath = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';

// Initialize theme
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeIcon) themeIcon.innerHTML = moonIconPath; // Show moon if currently light
} else {
    if (themeIcon) themeIcon.innerHTML = sunIconPath; // Show sun if currently dark
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        let theme = 'dark';
        if (document.body.classList.contains('light-mode')) {
            theme = 'light';
            themeIcon.innerHTML = moonIconPath;
        } else {
            themeIcon.innerHTML = sunIconPath;
        }
        localStorage.setItem('theme', theme);
    });
}

// --- Language Toggle Logic ---
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact Me",
        hero_greeting: "Hello, I'm",
        hero_title: "Web Developer & AI Enthusiast",
        hero_summary: "Certified Junior Web Developer with a strong background in JavaScript and Deep Learning. Passionate about building scalable applications and intelligent WebGIS solutions.",
        hero_btn_work: "View My Work",
        hero_btn_cv: "Download CV",
        about_title: "About Me",
        about_p1: "I am a final-year Information Technology student at Universitas Bosowa with a strong drive for learning. I bring a unique blend of front-end development and data science skills, specifically in implementing Deep Learning (CNN & Mask R-CNN) for geospatial data analysis.",
        about_p2: "My leadership experience as the Head of Internal Affairs in my university's IT Student Association has equipped me with excellent communication and team management skills.",
        about_timeline_title: "Experience & Education",
        about_timeline_1_date: "Intern - Engineering Division",
        about_timeline_1_desc: "Preventive maintenance and troubleshooting of aviation communication tools.",
        about_timeline_2_org: "Institut Teknologi Bandung (ITB)",
        about_timeline_2_date: "Student Exchange Program",
        about_timeline_2_desc: "Immersed in a highly competitive academic environment.",
        about_timeline_3_date: "B.S. Information Technology (Present)",
        skills_title: "Technical Expertise",
        skills_cat1: "Development",
        skills_cat1_1: "JavaScript (Web & Mobile)",
        skills_cat1_2: "HTML5 & CSS3",
        skills_cat1_3: "Vite & Modern Tooling",
        skills_cat1_4: "Git Version Control",
        skills_cat2: "AI & Data",
        skills_cat2_1: "Python",
        skills_cat2_2: "Deep Learning",
        skills_cat2_3: "CNN & Mask R-CNN",
        skills_cat2_4: "WebGIS Integration",
        skills_cat3: "Soft Skills",
        skills_cat3_1: "Team Leadership",
        skills_cat3_2: "Problem Solving",
        skills_cat3_3: "Hardware Troubleshooting",
        skills_cat3_4: "Project Management",
        projects_title: "Featured Project",
        projects_p1_title: "WebGIS Flood Detection System",
        projects_p1_desc: "A comprehensive artificial intelligence system designed to detect and map flood potential in Maros Regency. The system utilizes Convolutional Neural Networks for initial image classification and Mask R-CNN for precise instance segmentation of flooded areas from satellite imagery. The inference outputs are integrated directly into an interactive WebGIS platform for real-time visualization.",
        projects_btn: "View Demo",
        contact_title: "Let's Connect",
        contact_p1: "I'm currently looking for new opportunities as a Web Developer or IT Staff.",
        contact_p2: "If you have a position available or just want to chat, feel free to reach out!",
        contact_btn: "Say Hello",
        footer_rights: "All Rights Reserved."
    },
    id: {
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_skills: "Keahlian",
        nav_projects: "Proyek",
        nav_contact: "Hubungi Saya",
        hero_greeting: "Halo, saya",
        hero_title: "Pengembang Web & Penggiat AI",
        hero_summary: "Junior Web Developer Bersertifikat dengan latar belakang yang kuat di JavaScript dan Deep Learning. Bersemangat dalam membangun aplikasi yang skalabel dan solusi WebGIS yang cerdas.",
        hero_btn_work: "Lihat Karya Saya",
        hero_btn_cv: "Unduh CV",
        about_title: "Tentang Saya",
        about_p1: "Saya adalah mahasiswa tingkat akhir Teknik Informatika di Universitas Bosowa dengan semangat belajar yang tinggi. Saya membawa perpaduan unik antara keterampilan pengembangan front-end dan data science, khususnya dalam mengimplementasikan Deep Learning (CNN & Mask R-CNN) untuk analisis data geospasial.",
        about_p2: "Pengalaman kepemimpinan saya sebagai Kepala Urusan Internal di Himpunan Mahasiswa Jurusan membekali saya dengan kemampuan komunikasi dan manajemen tim yang sangat baik.",
        about_timeline_title: "Pengalaman & Pendidikan",
        about_timeline_1_date: "Magang - Divisi Teknik",
        about_timeline_1_desc: "Pemeliharaan preventif dan pemecahan masalah alat komunikasi penerbangan.",
        about_timeline_2_org: "Institut Teknologi Bandung (ITB)",
        about_timeline_2_date: "Program Pertukaran Mahasiswa",
        about_timeline_2_desc: "Tenggelam dalam lingkungan akademik yang sangat kompetitif.",
        about_timeline_3_date: "S.Kom Teknik Informatika (Sekarang)",
        skills_title: "Keahlian Teknis",
        skills_cat1: "Pengembangan",
        skills_cat1_1: "JavaScript (Web & Mobile)",
        skills_cat1_2: "HTML5 & CSS3",
        skills_cat1_3: "Vite & Modern Tooling",
        skills_cat1_4: "Kontrol Versi Git",
        skills_cat2: "AI & Data",
        skills_cat2_1: "Python",
        skills_cat2_2: "Deep Learning",
        skills_cat2_3: "CNN & Mask R-CNN",
        skills_cat2_4: "Integrasi WebGIS",
        skills_cat3: "Soft Skills",
        skills_cat3_1: "Kepemimpinan Tim",
        skills_cat3_2: "Pemecahan Masalah",
        skills_cat3_3: "Troubleshooting Perangkat Keras",
        skills_cat3_4: "Manajemen Proyek",
        projects_title: "Proyek Unggulan",
        projects_p1_title: "Sistem Deteksi Banjir WebGIS",
        projects_p1_desc: "Sistem kecerdasan buatan komprehensif yang dirancang untuk mendeteksi dan memetakan potensi banjir di Kabupaten Maros. Sistem ini menggunakan Convolutional Neural Networks untuk klasifikasi citra awal dan Mask R-CNN untuk segmentasi instans area banjir yang presisi dari citra satelit. Hasil inferensi diintegrasikan langsung ke dalam platform WebGIS interaktif untuk visualisasi real-time.",
        projects_btn: "Lihat Demo",
        contact_title: "Mari Terhubung",
        contact_p1: "Saat ini saya sedang mencari peluang baru sebagai Web Developer atau Staf TI.",
        contact_p2: "Jika Anda memiliki posisi yang tersedia atau hanya ingin berbincang, jangan ragu untuk menghubungi!",
        contact_btn: "Sapa Saya",
        footer_rights: "Hak Cipta Dilindungi."
    }
};

const langToggleBtn = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    if (langToggleBtn) {
        langToggleBtn.textContent = lang === 'en' ? 'ID' : 'EN';
    }
    document.documentElement.lang = lang;
}

// Initialize Language
setLanguage(currentLang);

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'id' : 'en';
        localStorage.setItem('lang', currentLang);
        setLanguage(currentLang);
    });
}


