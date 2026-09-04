import { useMemo, useState } from "react";
import styles from "./Achievements.module.css";

// الصور الموجودة داخل public/Acheivments
// 1 - 18    = حفظ
// 19 - 33   = إجازات
// 31 - 41   = فعاليات
// 42 - 52   = شهادات

const ITEMS = Array.from({ length: 52 }, (_, index) => {
  const id = index + 1;

  let category;

  if (id >= 1 && id <= 18) {
    category = "one";
  } else if (id >= 19 && id <= 33) {
    category = "two";
  } else if (id >= 31 && id <= 41) {
    category = "three";
  } else {
    category = "four";
  }

  return {
    id,
    category,
    title: category,
    desc: `من إنجازات ${category}`,
    img: `/images/Acheivments/${id}.jpg`,
  };
});

const FILTERS = ["الكل", "one", "two", "three", "four"];

const ITEMS_PER_PAGE = 12;

export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState("الكل");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () =>
      activeFilter === "الكل"
        ? ITEMS
        : ITEMS.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  // عدد الصفحات
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  // الصور الخاصة بالصفحة الحالية فقط
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return filtered.slice(startIndex, endIndex);
  }, [filtered, currentPage]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = () =>
    setLightboxIndex((i) => (i === 0 ? currentItems.length - 1 : i - 1));

  const showNext = () =>
    setLightboxIndex((i) => (i === currentItems.length - 1 ? 0 : i + 1));

  // تغيير الفلتر + الرجوع للصفحة الأولى
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
    setLightboxIndex(null);
  };

  // تغيير الصفحة
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setLightboxIndex(null);

    // يرجع لأعلى المعرض
    document
      .getElementById("achievements")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const activeItem =
    lightboxIndex !== null ? currentItems[lightboxIndex] : null;

  return (
    <section className={styles.achievements} id="achievements" dir="rtl">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>إنجازاتنا</div>

          <h2>لحظات نفتخر بها</h2>

          <p>
            مجموعة من أبرز إنجازات طلابنا وطالباتنا، من حفظ وإجازات وفعاليات
            قرآنية.
          </p>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={
                f === activeFilter
                  ? `${styles.filterBtn} ${styles.filterActive}`
                  : styles.filterBtn
              }
              onClick={() => handleFilterChange(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className={styles.grid}>
          {currentItems.map((item, index) => (
            <div
              key={item.id}
              className={styles.card}
              onClick={() => openLightbox(index)}
            >
              <img src={item.img} alt={item.title} loading="lazy" />

              <div className={styles.zoomIcon}>
                <i className="bi bi-zoom-in" />
              </div>

              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            {/* Previous */}
            <button
              className={styles.pageBtn}
              onClick={() =>
                handlePageChange(
                  currentPage === 1 ? totalPages : currentPage - 1,
                )
              }
              aria-label="الصفحة السابقة"
            >
              <i className="bi bi-chevron-right" />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;

              return (
                <button
                  key={page}
                  className={
                    page === currentPage
                      ? `${styles.pageBtn} ${styles.pageActive}`
                      : styles.pageBtn
                  }
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              );
            })}

            {/* Next */}
            <button
              className={styles.pageBtn}
              onClick={() =>
                handlePageChange(
                  currentPage === totalPages ? 1 : currentPage + 1,
                )
              }
              aria-label="الصفحة التالية"
            >
              <i className="bi bi-chevron-left" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {activeItem && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div
            className={styles.lightboxInner}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className={styles.closeBtn}
              onClick={closeLightbox}
              aria-label="إغلاق"
            >
              <i className="bi bi-x-lg" />
            </button>

            {/* Previous */}
            <button
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={showPrev}
              aria-label="السابق"
            >
              <i className="bi bi-chevron-right" />
            </button>

            {/* Image */}
            <img src={activeItem.img} alt={activeItem.title} />

            {/* Caption */}
            <div className={styles.lightboxCaption}>
              <strong>{activeItem.title}</strong>
              <span>{activeItem.desc}</span>
            </div>

            {/* Next */}
            <button
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={showNext}
              aria-label="التالي"
            >
              <i className="bi bi-chevron-left" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
