import styles from "./OurFeatures.module.css";

const features = [
  {
    icon: "📖",
    title: "إتقان الحفظ والتلاوة والتجويد",
    description:
      "نهتم بإتقان حفظ القرآن الكريم والتلاوة الصحيحة وتطبيق أحكام التجويد عملياً ونظرياً.",
  },
  {
    icon: "✓",
    title: "اختبارات تقييمية مستمرة",
    description:
      "لا ينتقل الطالب من قاعدة أو مرحلة إلى أخرى إلا بعد اجتياز اختبار دقيق من إدارة الدار.",
  },
  {
    icon: "⏱",
    title: "حلقات بلا قيود زمنية",
    description:
      "يمتد وقت الحلقة لساعة أو أكثر حسب احتياج الطالب، حتى يتم التسميع والمراجعة بشكل كامل.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "متابعة دورية مع أولياء الأمور",
    description:
      "تقارير مستمرة ومتابعة دقيقة لمستوى الطالب لضمان شراكة ناجحة بين البيت والدار.",
  },
  {
    icon: "🏆",
    title: "ريادة وتميز في المسابقات",
    description:
      "حصد طلابنا المراكز الأولى على مستوى المحافظة والجمهورية لسنوات عديدة، وحصلت الدار على لقب أفضل دار على مستوى محافظة الدقهلية.",
  },
  {
    icon: "👩‍🏫",
    title: "معلمون ومعلمات على أعلى مستوى",
    description:
      "نخبة منتقاة بعناية من أهل القرآن، يمتلكون الكفاءة والخبرة في تعليم وتحفيظ كتاب الله.",
  },
  {
    icon: "🌱",
    title: "التأسيس المبكر من سن 4 سنوات",
    description:
      "تأسيس احترافي للأطفال أونلاين بطريقة نور البيان لبناء قاعدة قوية في القراءة والكتابة.",
  },
  {
    icon: "🎁",
    title: "جوائز وتشجيع مستمر",
    description:
      "برامج تحفيزية وجوائز قيمة للطلاب المتفوقين تشجيعاً لهم على الاستمرار وتحقيق المزيد من التفوق.",
  },
];

function OurFeatures() {
  return (
    <section className={styles.featuresSection} dir="rtl">
      <div className={styles.featuresContainer}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.smallTitle}>لماذا دار روضة القرآن؟</span>

          <h2>
            مميزات <span>دار روضة القرآن</span>
          </h2>

          <p>
            نحرص على تقديم بيئة تعليمية متميزة تجمع بين الإتقان والمتابعة
            والتشجيع، لبناء جيل متقن لكتاب الله.
          </p>
        </div>

        {/* Features */}
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div className={styles.featureCard}>
                <div className={styles.iconWrapper}>
                  <span>{feature.icon}</span>
                </div>

                <div className={styles.cardContent}>
                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </div>

                <div className={styles.cardNumber}>
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurFeatures;
