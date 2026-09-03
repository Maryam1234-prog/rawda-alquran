import { useState } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "الرئيسية", href: "#home", active: true },
  { label: "من نحن", href: "#about" },
  { label: "الخدمات", href: "#services" },
  { label: "الآراء", href: "#Gallery" },
  { label: "لماذا نحن", href: "#OurFeatures" },
  { label: "الباقات", href: "#packages" },
  { label: "المقالات", href: "#articles" },
  { label: "تواصل معنا", href: "https://wa.me/201026858283" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`${styles.rawdaNavbar} px-3`} dir="rtl">
      {/* Floating WhatsApp Button - Mobile */}
      <a
        className={styles.mobileWhatsapp}
        href="https://wa.me/201026858283?text=السلام%20عليكم،%20أرغب%20في%20معرفة%20المزيد%20عن%20برامج%20تعليم%20القرآن%20الكريم%20المتاحة%20لديكم،%20وأود%20الاستفسار%20عن%20البرنامج%20الأنسب%20لي."
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل معنا عبر واتساب"
      >
        <i className="bi bi-whatsapp" />
      </a>
      <div className={styles.navbarInner}>
        {/* Logo */}
        <a className={styles.rawdaBrand} href="#home">
          <svg
            className={styles.brandIcon}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 6c-7 4-11 9-11 16 0 6 4.5 10 11 10s11-4 11-10c0-7-4-12-11-16Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M24 16v16M18 22c2 3 4 4 6 4s4-1 6-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M36 10l1.4 3.6L41 15l-3.6 1.4L36 20l-1.4-3.6L31 15l3.6-1.4L36 10Z"
              fill="currentColor"
            />
          </svg>
          <div className={styles.brandText}>
            <h1>دار روضة القرآن</h1>
            <span>لتحفيظ القرآن الكريم وتدريس علومه</span>
          </div>
        </a>

        {/* Nav links */}
        <ul className={`${styles.rawdaNavLinks} ${open ? styles.open : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={link.active ? styles.active : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Phone / WhatsApp */}
        <a
          className={styles.rawdaPhonePill}
          href="https://wa.me/201026858283"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-whatsapp" />
          +20 102 685 8283
        </a>

        {/* Mobile toggle */}
        <button
          className={styles.rawdaNavToggle}
          aria-label="فتح القائمة"
          onClick={() => setOpen((o) => !o)}
        >
          <i className="bi bi-list" />
        </button>
      </div>
    </header>
  );
}
