import { useState } from 'react';
import styles from './BannerSlider.module.scss';

export const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [
    { id: 1, imgUrl: '/_old/v2/img/banner-accessories.png', alt: 'Accessories banner' },
    { id: 2, imgUrl: '/_old/v2/img/banner-phones.png', alt: 'Phones banner' },
    { id: 3, imgUrl: '/_old/v2/img/banner-tablets.png', alt: 'Tablets banner' },
  ];

  // для переходів слайдів
  const handleNext = () => {
    // викликаємо фцію оновлення стану, отримуємо prevIndex
    setCurrentIndex((prevIndex) =>
      // порівнюємо поточний індекс з індексом останнього елемента в масиві (banners.length - 1)
      prevIndex === banners.length - 1
        // якщо це був останній, скидаємо на 0, тобто вертаємось в початок
        ? 0
        // якщоне останній слайд, збільшуємо поточний індекс на 1
        : prevIndex + 1
    );
  };
  const handlePrev = () => {
    // викликаємо фцію оновлення стану, отримуємо prevIndex
    setCurrentIndex((prevIndex) =>
      // порівнюємо поточний індекс з індексом першого елемента в масиві (0)
      prevIndex === 0
      // якщо це був перший, скидаємо на останній, тобто йдемо в кінець масиву
      ? banners.length - 1
      // якщо не перший слайд, зменшуємо поточний індекс на 1
      : prevIndex - 1
    );
  }

  // обробник натичкання клавіш для слайдера (стрілки вліво та вправо)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      handlePrev(); 
  };

  return (
    // контейнер для слайдера та рисочок-індикаторів
    <div className={styles.sliderWrapper}>
      <div className={styles.bannerSlider}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className={styles.slides}>
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={styles.slide}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            >
              <img src={banner.imgUrl} alt={banner.alt} />
            </div>
          ))}
        </div>
        <button className={styles.prevButton} onClick={handlePrev}>
          &#10094;
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          &#10095;
        </button>
      </div>

      {/* індикатори-рисочки під слайдером */}
      <div className={styles.dots}>
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
