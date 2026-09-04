import { useState } from "react";
import styles from "./Services.module.css";

const SERVICES = [
  {
    icon: "bi-book",
    title: "حفظ القرآن الكريم",
    desc: "برنامج متكامل لحفظ القرآن الكريم بمنهجية تراعي مستوى كل طالب مع مراجعة دورية مستمرة.",
    features: ["خطة حفظ مخصصة", "متابعة أسبوعية", "اختبارات مراجعة"],
  },
  {
    icon: "bi-mic",
    title: "تلاوة وتجويد",
    desc: "إتقان أحكام التجويد وتحسين مخارج الحروف من خلال حلقات فردية أو جماعية مع معلمين متخصصين.",
    features: ["تصحيح مخارج الحروف", "أحكام التجويد", "تلاوة مجوّدة"],
  },
  {
    icon: "bi-book",
    title: "تعلم اللغه العربيه",
    desc: "الحصول على إجازة معتمدة بالسند المتصل بعد اجتياز الاختبار النهائي أمام لجنة متخصصة.",
    features: ["سند متصل موثّق", "اختبار نهائي", "شهادة معتمدة"],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const last = SERVICES.length - 1;

  const goNext = () => setActive((i) => Math.min(i + 1, last));
  const goPrev = () => setActive((i) => Math.max(i - 1, 0));

  const renderCard = (s, i) => (
    <div className={styles["serviceCard"]} key={s.title}>
      <span className={styles["serviceBadge"]}>{`0${i + 1}`}</span>
      <div className={styles["serviceIcon"]}>
        <i className={`bi ${s.icon}`} />
      </div>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
      <ul className={styles["serviceFeatures"]}>
        {s.features.map((f) => (
          <li key={f}>
            <i className="bi bi-check-circle-fill" />
            {f}
          </li>
        ))}
      </ul>
      {/* <a
        className={styles["serviceLink"]}
        href="https://wa.me/201026858283?text=السلام%20عليكم،%20أرغب%20في%20الاشتراك%20في%20حلقة%20تجريبية%20مجانية"
        target="_blank"
        rel="noopener noreferrer"
      >
        تجربة مجانية
        <i className="bi bi-whatsapp" />
      </a> */}
    </div>
  );

  return (
    <section className={styles["rawdaServices"]} id="services" dir="rtl">
      <div className={styles["container"]}>
        <div className={styles["servicesHeader"]}>
          <div className={styles["servicesEyebrow"]}>خدماتنا</div>
          <h2>برامجنا في تعليم القرآن الكريم</h2>
          <p>
            نقدم مجموعة من البرامج المتخصصة لتناسب احتياجاتك في رحلتك مع كتاب
            الله.
          </p>
        </div>

        {/* Desktop: 3-column grid */}
        <div className={styles["servicesGrid"]}>
          {SERVICES.map((s, i) => renderCard(s, i))}
        </div>

        {/* Mobile: single card with arrow-controlled slide */}
        <div className={styles["servicesCarouselWrap"]}>
          <div
            className={styles["servicesTrack"]}
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {SERVICES.map((s, i) => renderCard(s, i))}
          </div>
        </div>

        <div className={styles["servicesCarouselControls"]}>
          <button
            onClick={goPrev}
            disabled={active === 0}
            aria-label="الكارت السابق"
          >
            <i className="bi bi-chevron-right" />
          </button>

          <div className={styles["servicesCarouselDots"]}>
            {SERVICES.map((_, i) => (
              <span key={i} className={i === active ? styles["active"] : ""} />
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={active === last}
            aria-label="الكارت التالي"
          >
            <i className="bi bi-chevron-left" />
          </button>
        </div>
      </div>
    </section>
  );
}
