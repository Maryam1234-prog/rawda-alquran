import { useState } from "react";
import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    name: "أم يوسف",
    role: "ولي أمر طالبة",
    text: "من أجمل ما لمسناه هو المتابعة المستمرة والاهتمام الحقيقي بمستوى ابنتي، وأصبح حفظ القرآن بالنسبة لها شيئًا تحبه وتنتظره.",
  },
  {
    name: "محمد أحمد",
    role: "ولي أمر طالب",
    text: "تجربة مميزة جدًا، لاحظنا تحسنًا واضحًا في الحفظ والتلاوة، والأسلوب في التعامل مع الطالب يشجعه على الاستمرار.",
  },
  {
    name: "أم مريم",
    role: "ولي أمر طالبة",
    text: "الحمد لله اخترنا المكان المناسب لابنتنا، المتابعة ممتازة والمعلمة تهتم بالتفاصيل وتشجعها دائمًا على التقدم.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const last = TESTIMONIALS.length - 1;

  const goNext = () => {
    setActive((current) => Math.min(current + 1, last));
  };

  const goPrev = () => {
    setActive((current) => Math.max(current - 1, 0));
  };

  return (
    <section className={styles.rawdaTestimonials} id="testimonials" dir="rtl">
      <div className="container">
        {/* Header */}
        <div className={styles.testimonialsHeader}>
          <div className={styles.testimonialsEyebrow}>آراء طلابنا</div>

          <h2>آراء طلابنا وأولياء أمورهم</h2>

          <p>
            نفخر بثقة طلابنا وأولياء أمورهم، ونسعد بكل كلمة تعكس أثر رحلتهم مع
            القرآن الكريم.
          </p>
        </div>

        {/* Desktop */}
        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              className={`${styles.testimonialCard} ${
                index === 1 ? styles.featured : ""
              }`}
              key={testimonial.name}
            >
              <div className={styles.quoteIcon}>
                <i className="bi bi-quote"></i>
              </div>

              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <i key={star} className="bi bi-star-fill"></i>
                ))}
              </div>

              <p className={styles.testimonialText}>{testimonial.text}</p>

              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>
                  {testimonial.name.charAt(2)}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className={styles.testimonialsCarousel}>
          <div
            className={styles.testimonialsTrack}
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div className={styles.testimonialSlide} key={testimonial.name}>
                <div className={styles.testimonialCard}>
                  <div className={styles.quoteIcon}>
                    <i className="bi bi-quote"></i>
                  </div>

                  <div className={styles.stars}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="bi bi-star-fill"></i>
                    ))}
                  </div>

                  <p className={styles.testimonialText}>{testimonial.text}</p>

                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}>
                      {testimonial.name.charAt(2)}
                    </div>

                    <div>
                      <h3>{testimonial.name}</h3>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className={styles.testimonialsControls}>
          <button
            onClick={goPrev}
            disabled={active === 0}
            aria-label="الرأي السابق"
          >
            <i className="bi bi-chevron-right"></i>
          </button>

          <div className={styles.testimonialsDots}>
            {TESTIMONIALS.map((_, index) => (
              <span
                key={index}
                className={index === active ? styles.active : ""}
              ></span>
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={active === last}
            aria-label="الرأي التالي"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
        </div>

        {/* Bottom */}
        <div className={styles.shareReview}>
          <p>يسعدنا أن نسمع تجربتك معنا</p>

          <a
            href="https://wa.me/201026858283?text=السلام%20عليكم،%20أرغب%20في%20مشاركة%20تجربتي%20مع%20دار%20روضة%20القرآن"
            target="_blank"
            rel="noopener noreferrer"
          >
            شاركنا رأيك
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
