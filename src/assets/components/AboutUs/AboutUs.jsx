import styles from "./AboutUs.module.css";
export default function AboutUs() {
  return (
    <section className={styles.rawdaAbout} id="about" dir="rtl">
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Image - right side, spans full section height */}
          <div className={styles.aboutImage}>
            <div className={styles.aboutImageFrame}>
              <img
                src="/images/about-quran.jpg"
                alt="تعليم وتحفيظ القرآن الكريم"
              />
            </div>
          </div>

          {/* Content - left side */}
          <div className={`${styles.aboutContent} mt-5 `}>
            <div className={styles.aboutEyebrow}>من نحن</div>
            <h2>دار روضة القرآن لتحفيظ القرآن الكريم</h2>
            <p>
              ليست كغيرها .. فهي نبراس لنشر نور العلم تم تأسيس الدار على يد
              الشيخ ( محمد رمضان ) الحاصل على إجازة التدريس ودبلومة تأهيل وبناء
              معلمي القرآن الكريم بتقدير امتياز وباعتماد كل من الشيخ حسن أبو
              شادي ود. محمد فؤاد عبد المجيد مدير مراكز الشيخ المعصراوي كما حصل
              مؤسس الدار بحرصه والتزامه على جائزة أفضل محفظ على مستوى محافظة (
              الدقهلية ) وبخبرة 15 عام في تحفيظ القرآن والتأسيس بطريقة نور
              البيان نصل بالطالب لدرجة الإتقان في الحفظ والقراءة حتى يتمكن من
              قراءة ورده والحفظ بمفرده حققت دار روضة القرآن بفضل الله نجاحا
              كبيرا ومميزا حيث خرجت المئات من حفظة كتاب الله المتقنين له كما حصد
              طلابها المراكز الأولى في مسابقات القرآن على مستوى المحافظة
              والجمهورية لسنوات عديدة
            </p>

            <div className={styles.aboutVmRow}>
              <div className={styles.aboutVmCard}>
                <div className={styles.vmIcon}>
                  <i className="bi bi-lightbulb" />
                </div>
                <h3>رؤيتنا</h3>
                <p>
                  أن نكون بيئة تعليمية موثوقة تُسهم في بناء جيل محبّ لكتاب الله،
                  متقن لتلاوته وحفظه، وقادر على الاستمرار في رحلته مع القرآن.
                </p>
              </div>
              <div className={styles.aboutVmCard}>
                <div className={styles.vmIcon}>
                  <i className="bi bi-stars" />
                </div>
                <h3>رسالتنا</h3>
                <p>
                  تقديم تعليم قرآني متميز يجمع بين الحفظ المتقن، والمراجعة
                  المستمرة، والتلاوة الصحيحة، في بيئة إيمانية داعمة ومحفزة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
