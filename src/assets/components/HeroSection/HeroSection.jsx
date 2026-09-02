import styles from "./HeroSection.module.css";

const FEATURES = [
  {
    icon: "bi-book",
    title: "حفظ متقن",
    desc: "نساعدك على حفظ القرآن الكريم بإتقان وثبات",
  },
  {
    icon: "bi-person-check",
    title: "متابعة مستمرة",
    desc: "متابعة فردية منتظمة لمساعدتك على التقدم في الحفظ",
  },
  {
    icon: "bi-mortarboard",
    title: "معلمات متخصصات",
    desc: "نخبة من المعلمات المؤهلات لتعليم وتحفيظ القرآن الكريم",
  },
  {
    icon: "bi-heart",
    title: "بيئة إيمانية",
    desc: "بيئة تعليمية هادئة تشجع على حب القرآن والاستمرار في حفظه",
  },
];

export default function HeroSection() {
  return (
    <section className={styles.rawdaHero} id="home" dir="rtl">
      {/* Decorative branches */}
      <svg
        className={styles.heroBranch + " " + styles.topLeft}
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M10 190 C 40 140, 60 120, 100 90 S 160 40, 190 10"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M90 100 L 70 80 M105 85 L 90 65 M120 70 L 108 50"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <svg
        className={styles.heroBranch + " " + styles.bottomRight}
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M10 190 C 40 140, 60 120, 100 90 S 160 40, 190 10"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M90 100 L 70 80 M105 85 L 90 65 M120 70 L 108 50"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      <div className={styles.heroDots + " " + styles.dotsLeft}>
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <div className={styles.heroDots + " " + styles.dotsRight}>
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="container">
        <div className={styles.heroGrid}>
          {/* Text */}
          <div className={styles.heroText}>
            <h2>
              مرحبا بك فى
              <span className={styles.heroSparkle}>✦</span>
              <br />
              دار روضة القرآن
            </h2>
            <div className={styles.heroEyebrowDivider} />
            <p>
              حفظ القرآن الكريم هو البداية التي تحتاجينها لتجديد حياتك نحن هنا
              لدعمكِ في هذه الرحلة لا تترددي، سجّلي الآن وابدئي الخطوة الأولى!
            </p>
            <a
              className={styles.heroCta}
              href="https://wa.me/201026858283?text=السلام%20عليكم،%20أرغب%20في%20معرفة%20المزيد%20عن%20برامج%20تعليم%20القرآن%20الكريم%20المتاحة%20لديكم،%20وأود%20الاستفسار%20عن%20البرنامج%20الأنسب%20لي."
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-arrow-left" />
              تواصل معنا
            </a>
          </div>

          {/* Image */}
          <div className={`${styles.heroImage} mb-5`}>
            <div className={styles.ringDecor} />

            <div className={styles.archFrame}>
              <img
                src="/images/quran-hero.jpg"
                alt="تعليم وتحفيظ القرآن الكريم"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div className="container mt-4">
        <div className={styles.heroFeatures + " row g-4 g-lg-0"}>
          {FEATURES.map((f) => (
            <div
              className={`${styles.featureItem} col-6 col-lg-3`}
              key={f.title}
            >
              <div className={styles.featureIcon}>
                <i className={`bi ${f.icon}`} />
              </div>
              <div className={styles.featureCopy}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className={styles.heroWave}>
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path
            d="M0,64 C240,140 480,10 720,48 C960,86 1200,150 1440,90 L1440,160 L0,160 Z"
            fill="#16453a"
          />
        </svg>
      </div>
    </section>
  );
}
