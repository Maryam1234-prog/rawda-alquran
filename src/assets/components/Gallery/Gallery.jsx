import { useState, useEffect } from "react";
import styles from "./Gallery.module.css";

const GALLERY_IMAGES = [
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
  "/images/gallery.PNG",
];

export default function Gallery() {
  const [active, setActive] = useState(0);

  const getVisibleCount = () => {
    if (window.innerWidth <= 767) {
      return 1;
    }

    if (window.innerWidth <= 1100) {
      return 3;
    }

    return 5;
  };
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const last = GALLERY_IMAGES.length - visibleCount;

  // التالي بشكل دائري
  const goNext = () => {
    setActive((current) => (current >= last ? 0 : current + 1));
  };

  // السابق بشكل دائري
  const goPrev = () => {
    setActive((current) => (current <= 0 ? last : current - 1));
  };

  return (
    <section className={styles.gallerySection} id="Gallery" dir="rtl">
      <div className={styles.galleryContainer}>
        {/* ================= HEADER ================= */}

        <div className={styles.galleryHeader}>
          <div className={styles.smallTitle}>معرضنا</div>

          <h2>من أنشطة روضة القرآن</h2>

          <p>نماذج من الأنشطة والفعاليات التعليمية في دار روضة القرآن.</p>
        </div>

        {/* ================= GALLERY ================= */}

        <div className={styles.galleryArea}>
          {/* Previous */}

          <button
            className={styles.galleryArrow}
            onClick={goPrev}
            aria-label="السابق"
          >
            <i className="bi bi-chevron-right"></i>
          </button>

          {/* Viewport */}

          <div className={styles.galleryViewport}>
            <div
              className={styles.galleryTrack}
              style={{
                // transform: `translateX(-${active * 20}%)`,
                "--active": active,
              }}
            >
              {GALLERY_IMAGES.map((image, index) => (
                <div className={styles.galleryCard} key={`${image}-${index}`}>
                  <div className={styles.imageFrame}>
                    <img src={image} alt={`نشاط ${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}

          <button
            className={styles.galleryArrow}
            onClick={goNext}
            aria-label="التالي"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
        </div>

        {/* ================= COUNTER ================= */}

        <div className={styles.galleryCounter}>
          {active + 1} - {active + visibleCount} من {GALLERY_IMAGES.length}
        </div>
      </div>
    </section>
  );
}
