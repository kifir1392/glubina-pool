"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="site-header">
        <div className="header-inner">
          <a href="/" className="logo">
            Глубина<span className="logo-accent">.</span>
          </a>

          <nav className="nav-desktop">
            <a href="#services" className="nav-link">Услуги</a>
            <a href="#portfolio" className="nav-link">Портфолио</a>
            <a href="#about" className="nav-link">О компании</a>
            <a href="#contacts" className="nav-link">Контакты</a>
            <a href="#contacts" className="btn-nav">Обсудить проект</a>
          </nav>

          <button
            className="burger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Услуги</a>
            <a href="#portfolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>Портфолио</a>
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>О компании</a>
            <a href="#contacts" className="nav-link" onClick={() => setIsMenuOpen(false)}>Контакты</a>
            <a href="#contacts" className="btn-nav" onClick={() => setIsMenuOpen(false)}>Обсудить проект</a>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <main className="hero">
        <div className="hero-bg">
          <div className="hero-bg-blob-1"></div>
          <div className="hero-bg-blob-2"></div>
        </div>

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="hero-title">
              Бассейны <br />
              <span className="gradient-text">без компромиссов</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hero-subtitle"
          >
            Инженерный подход к каждому проекту. Точные расчёты, проверенное
            оборудование, гарантия 5 лет. Краснодар и юг России.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hero-buttons"
          >
            <a href="#contacts" className="btn-primary">Обсудить проект</a>
            <a href="#portfolio" className="btn-secondary">Смотреть объекты</a>
          </motion.div>
        </div>
      </main>

      {/* ===== SERVICES ===== */}
      <section className="services" id="services">
        <div className="services-inner">
          <span className="section-label">Наши услуги</span>
          <h2 className="section-title">Полный цикл — от идеи до воды</h2>
          <p className="section-subtitle">
            Проектирование, строительство, оборудование, сервис.
            Один подрядчик — одна ответственность.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="service-title">Проектирование и дизайн</h3>
              <p className="service-desc">
                3D-визуализация, планировка чаши, подбор материалов. Учитываем
                архитектуру участка и ваши пожелания.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="service-title">Инженерные системы</h3>
              <p className="service-desc">
                Гидравлические расчеты, подбор насосов, фильтров, систем подогрева
                и дезинфекции. Точные схемы обвязки.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="service-title">Строительство под ключ</h3>
              <p className="service-desc">
                Земляные работы, бетонирование чаши, гидроизоляция, монтаж
                оборудования, пуско-наладка.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="service-title">Сервис и обслуживание</h3>
              <p className="service-desc">
                Регулярная чистка, контроль химии, сезонная консервация и
                расконсервация бассейна.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section className="portfolio" id="portfolio">
        <div className="portfolio-inner">
          <span className="section-label">Портфолио</span>
          <h2 className="section-title">Наши работы говорят за нас</h2>
          <p className="section-subtitle">
            150+ бассейнов по всему югу России. Посмотрите, что мы создали для
            наших клиентов.
          </p>

          <div className="portfolio-grid">
            <div className="portfolio-card">
              <div className="portfolio-image">
                <span className="portfolio-placeholder">Фото проекта</span>
                <div className="portfolio-overlay">
                  <button className="portfolio-overlay-btn">Подробнее</button>
                </div>
              </div>
              <div className="portfolio-info">
                <div className="portfolio-location">Краснодар</div>
                <h3 className="portfolio-title">Частный бассейн 8×4 м</h3>
                <p className="portfolio-specs">
                  Бетонная чаша, система перелива, подогрев тепловым насосом,
                  автоматика pH/Cl.
                </p>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-image" style={{ background: 'linear-gradient(135deg, #0f4c75 0%, #0a1628 100%)' }}>
                <span className="portfolio-placeholder">Фото проекта</span>
                <div className="portfolio-overlay">
                  <button className="portfolio-overlay-btn">Подробнее</button>
                </div>
              </div>
              <div className="portfolio-info">
                <div className="portfolio-location">Геленджик</div>
                <h3 className="portfolio-title">SPA-зона с бассейном</h3>
                <p className="portfolio-specs">
                  Интеграция с ландшафтом, подсветка LED, система противотока,
                  джакузи.
                </p>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-image" style={{ background: 'linear-gradient(135deg, #1a365d 0%, #0a1628 100%)' }}>
                <span className="portfolio-placeholder">Фото проекта</span>
                <div className="portfolio-overlay">
                  <button className="portfolio-overlay-btn">Подробнее</button>
                </div>
              </div>
              <div className="portfolio-info">
                <div className="portfolio-location">Анапа</div>
                <h3 className="portfolio-title">Бассейн с панорамным видом</h3>
                <p className="portfolio-specs">
                  Infinity-edge, стеклянная стена, система подогрева,
                  автоматическая химия.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="about" id="about">
        <div className="about-inner">
          <span className="section-label">О компании</span>
          <h2 className="section-title">Почему выбирают нас</h2>
          <p className="section-subtitle">
            12 лет строим бассейны. 150+ довольных клиентов. 5 лет гарантии.
            Цифры говорят сами за себя.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">12<span>+</span></div>
              <div className="stat-label">лет в индустрии</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">150<span>+</span></div>
              <div className="stat-label">реализованных объектов</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">8000</div>
              <div className="stat-label">м² построено</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5<span> лет</span></div>
              <div className="stat-label">гарантия на работы</div>
            </div>
          </div>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="feature-title">Гарантия 5 лет</div>
                <div className="feature-desc">
                  На чашу и инженерные системы. Сервисное обслуживание после
                  сдачи.
                </div>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="feature-title">Точные расчёты</div>
                <div className="feature-desc">
                  Гидравлика, нагрузка на грунт, теплопотери — всё считаем до
                  старта работ.
                </div>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <div className="feature-title">Проверенное оборудование</div>
                <div className="feature-desc">
                  Работаем с Emaux, Hayward, Kripsol, AquaViva. Подбираем под
                  бюджет.
                </div>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <div className="feature-title">Своя бригада</div>
                <div className="feature-desc">
                  Без субподрядчиков. Контроль качества на каждом этапе
                  строительства.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACTS ===== */}
      <section className="contacts" id="contacts">
        <div className="contacts-inner">
          <span className="section-label">Контакты</span>
          <h2 className="section-title">Давайте создадим ваш бассейн</h2>
          <p className="section-subtitle">
            Расскажите о вашей идее — мы предложим лучшее решение.
          </p>

          <div className="contacts-grid">
            <div className="contacts-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Адрес</div>
                  <div className="contact-value">Краснодар, Россия</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Телефон</div>
                  <div className="contact-value">
                    <a href="tel:+79001234567">+7 (900) 123-45-67</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">
                    <a href="mailto:info@glubina-pool.ru">info@glubina-pool.ru</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Режим работы</div>
                  <div className="contact-value">Пн–Сб: 9:00 – 19:00</div>
                </div>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                
                // Защита от двойной отправки
                if (submitBtn.disabled) return;
                submitBtn.disabled = true;
                submitBtn.textContent = 'Отправка...';
                
                const formData = new FormData(form);
                try {
                  const response = await fetch('/send-form.php', {
                    method: 'POST',
                    body: formData,
                  });
                  const result = await response.json();
                  if (result.success) {
                    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
                    form.reset();
                  } else {
                    alert('Ошибка: ' + result.message);
                  }
                } catch (error) {
                  alert('Ошибка соединения. Попробуйте позже.');
                } finally {
                  submitBtn.disabled = false;
                  submitBtn.textContent = 'Отправить заявку';
                }
              }}
            >
              <div className="form-group">
                <label className="form-label" htmlFor="name">Ваше имя</label>
                <input
                  className="form-input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Как к вам обращаться"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Телефон</label>
                <input
                  className="form-input"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Сообщение</label>
                <textarea
                  className="form-textarea"
                  id="message"
                  name="message"
                  placeholder="Опишите ваш проект: размеры участка, пожелания, бюджет"
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                Отправить заявку
              </button>

              <p className="form-note">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </div>
        </div>

        
      </section>

            {/* ===== FAQ ===== */}
      <section className="faq" id="faq">
        <div className="faq-inner">
          <span className="section-label">Частые вопросы</span>
          <h2 className="section-title">Отвечаем на главное</h2>
          <p className="section-subtitle">
            Собрали вопросы, которые чаще всего задают перед началом проекта.
          </p>
          <div className="faq-list">
            {[
              {
                q: "Сколько стоит построить бассейн под ключ?",
                a: "Стоимость зависит от размера чаши, типа оборудования и сложности участка. Базовый бассейн 6×3 м — от 1 200 000 ₽. Точный расчёт делаем после выезда на участок.",
              },
              {
                q: "Сколько времени занимает строительство?",
                a: "От 45 до 90 дней в зависимости от сложности проекта. Включает проектирование, земляные работы, бетонирование, монтаж оборудования и пуско-наладку.",
              },
              {
                q: "Работаете ли вы за пределами Краснодара?",
                a: "Да, работаем по всему югу России: Краснодарский край, Адыгея, Ростовская область, Ставропольский край, Крым. Выезд инженера для оценки — бесплатно.",
              },
              {
                q: "Что входит в гарантию 5 лет?",
                a: "Гарантия распространяется на чашу бассейна (герметичность, конструктив) и все инженерные системы (насосы, фильтры, подогрев, автоматику). Сервисное обслуживание — отдельно.",
              },
              {
                q: "Нужно ли разрешение на строительство бассейна?",
                a: "Для частных бассейнов глубиной до 3 м разрешение не требуется. Мы берём на себя все согласования, если проект выходит за эти рамки.",
              },
            ].map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={(e) => {
                    const item = (e.currentTarget as HTMLElement).parentElement;
                    item?.classList.toggle("open");
                  }}
                >
                  {item.q}
                  <svg className="faq-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="faq-answer">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <a href="/" className="footer-logo">
                Глубина<span className="logo-accent">.</span>
              </a>
              <p className="footer-desc">
                Инжиниринг и строительство бассейнов в Краснодаре.
                Проектирование, гидравлические расчеты, монтаж оборудования.
              </p>
            </div>

            <div>
              <h4 className="footer-title">Навигация</h4>
              <ul className="footer-list">
                <li><a href="#services">Услуги</a></li>
                <li><a href="#portfolio">Портфолио</a></li>
                <li><a href="#about">О компании</a></li>
                <li><a href="#contacts">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Контакты</h4>
              <ul className="footer-list">
                <li><span>Краснодар, Россия</span></li>
                <li><span>+7 (XXX) XXX-XX-XX</span></li>
                <li><span>info@glubina-pool.ru</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            © 2026 Глубина. Все права защищены.
          </div>
        </div>
      </footer>

            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Сколько стоит построить бассейн под ключ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Стоимость зависит от размера чаши, типа оборудования и сложности участка. Базовый бассейн 6×3 м — от 1 200 000 ₽. Точный расчёт делаем после выезда на участок.",
                },
              },
              {
                "@type": "Question",
                name: "Сколько времени занимает строительство?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "От 45 до 90 дней в зависимости от сложности проекта. Включает проектирование, земляные работы, бетонирование, монтаж оборудования и пуско-наладку.",
                },
              },
              {
                "@type": "Question",
                name: "Работаете ли вы за пределами Краснодара?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Да, работаем по всему югу России: Краснодарский край, Адыгея, Ростовская область, Ставропольский край, Крым. Выезд инженера для оценки — бесплатно.",
                },
              },
              {
                "@type": "Question",
                name: "Что входит в гарантию 5 лет?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Гарантия распространяется на чашу бассейна (герметичность, конструктив) и все инженерные системы (насосы, фильтры, подогрев, автоматику). Сервисное обслуживание — отдельно.",
                },
              },
              {
                "@type": "Question",
                name: "Нужно ли разрешение на строительство бассейна?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Для частных бассейнов глубиной до 3 м разрешение не требуется. Мы берём на себя все согласования, если проект выходит за эти рамки.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}