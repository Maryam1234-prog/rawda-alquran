import styles from "./Footer.module.css";

const QUICK_LINKS = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "الباقات", href: "#packages" },
  { label: "المقالات", href: "#articles" },
];

const SERVICE_LINKS = [
  { label: "حفظ القرآن الكريم", href: "#services" },
  { label: "تلاوة وتجويد", href: "#services" },
  { label: "حلقات الأطفال", href: "#audience" },
];

const SOCIALS = [
  { icon: "bi-whatsapp", href: "https://wa.me/966", label: "واتساب" },
  { icon: "bi-instagram", href: "#", label: "إنستجرام" },
  { icon: "bi-twitter-x", href: "#", label: "إكس" },
  { icon: "bi-youtube", href: "#", label: "يوتيوب" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} dir="rtl">
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path
            d="M0,64 C240,140 480,10 720,48 C960,86 1200,150 1440,90 L1440,160 L0,160 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div>
            <div className={styles.brand}>
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
              </svg>
              <div className={styles.brandText}>
                <h3>دار روضة القران</h3>
                <span>لتعليم القرآن الكريم</span>
              </div>
            </div>
            <p className={styles.desc}>
              نساعدك على إتقان تلاوة القرآن الكريم وحفظه بمنهجية مرنة وآمنة
              تناسب جميع الأعمار، بإشراف معلمين ومعلمات مجازين.
            </p>
            <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className={styles.colTitle}>روابط سريعة</h4>
            <ul className={styles.linkList}>
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>
                    <i className="bi bi-caret-left-fill" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={styles.colTitle}>خدماتنا</h4>
            <ul className={styles.linkList}>
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>
                    <i className="bi bi-caret-left-fill" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={styles.colTitle}>تواصل معنا</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <i className="bi bi-telephone" />
                </span>
                <a href="tel:+2019999999" dir="ltr">
                  +20 199 999 999
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <i className="bi bi-envelope" />
                </span>
                <a href="mailto:info@rawdat-alquran.com">
                  info@rawdat-alquran.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <i className="bi bi-geo-alt" />
                </span>
                <span>جمهورية مصر العربية</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} دار روضة القران. جميع الحقوق محفوظة.</span>
        </div>
      </div>
    </footer>
  );
}
