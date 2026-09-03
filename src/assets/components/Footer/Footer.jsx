import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} dir="rtl">
      <div className={styles.footerContainer}>
        {/* About */}
        {/* <div className={styles.footerColumn}>
          <img
            src="/images/logo.png"
            alt="دار روضة القرآن"
            className={styles.footerLogo}
          />

          <p className={styles.description}>
            دار روضة القرآن لتعليم وتحفيظ القرآن الكريم، نسعى لبناء جيل متقن
            لكتاب الله حفظًا وتلاوةً وتدبرًا.
          </p>
        </div> */}
        <div className={`${styles.footerColumn} ${styles.aboutColumn}`}>
          <img
            src="/images/logo.png"
            alt="دار روضة القرآن"
            className={styles.footerLogo}
          />

          <p className={styles.description}>
            دار روضة القرآن لتعليم وتحفيظ القرآن الكريم، نسعى لبناء جيل متقن
            لكتاب الله حفظًا وتلاوةً وتدبرًا.
          </p>
        </div>
        {/* Quick Links */}
        <div className={styles.footerColumn}>
          <h3>روابط سريعة</h3>

          <ul className={styles.footerLinks}>
            <li>
              <a href="#home">الرئيسية</a>
            </li>
            <li>
              <a href="#about">من نحن</a>
            </li>
            <li>
              <a href="#services">الخدمات</a>
            </li>
            <li>
              <a href="#Gallery">الآراء</a>
            </li>
            <li>
              <a href="#OurFeatures">لماذا نحن</a>
            </li>
            <li>
              <a href="#articles">الانجازات</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>تواصل معنا</h3>
          <div className={styles.contactItem}>
            <a
              href="https://www.facebook.com/share/1HwQcPGfQc/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <i className="bi bi-facebook"></i>
              <span>صفحة الفيسبوك</span>
            </a>
          </div>
          <div className={styles.contactItem}>
            <a
              href="https://wa.me/201026858283"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <i className="bi bi-whatsapp"></i>
              <span>تواصل معنا عبر واتساب</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom} dir="ltr">
        <p>© {new Date().getFullYear()} دار روضة القرآن — جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}
