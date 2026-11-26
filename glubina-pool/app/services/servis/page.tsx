import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сервис и обслуживание бассейна в Краснодаре — Глубина",
  description:
    "Регулярное техническое обслуживание бассейна: чистка, контроль химии, сезонная консервация и расконсервация. Краснодар и юг России.",
  keywords: [
    "обслуживание бассейна Краснодар",
    "сервис бассейна",
    "чистка бассейна",
    "консервация бассейна",
    "ремонт бассейна",
    "контроль химии бассейна",
  ],
  openGraph: {
    title: "Сервис и обслуживание бассейна в Краснодаре",
    description:
      "Регулярное ТО, чистка, контроль химии, сезонная консервация. Продлеваем срок службы бассейна.",
    url: "https://glubina-pool.ru/services/servis/",
    type: "website",
  },
};

const stages = [
  {
    num: "01",
    title: "Диагностика",
    desc: "Осмотр чаши, оборудования, систем фильтрации и обеззараживания. Фиксируем текущее состояние.",
  },
  {
    num: "02",
    title: "Чистка чаши",
    desc: "Механическая чистка стен и дна, удаление налёта и отложений. Работаем аккуратно, не повреждая отделку.",
  },
  {
    num: "03",
    title: "Контроль химии",
    desc: "Замер pH, хлора, щёлочности. Корректировка баланса воды. Рекомендации по дальнейшему уходу.",
  },
  {
    num: "04",
    title: "Обслуживание оборудования",
    desc: "Проверка насосов, фильтров, систем подогрева. Замена картриджей, чистка фильтров, смазка уплотнений.",
  },
  {
    num: "05",
    title: "Сезонная консервация",
    desc: "Подготовка бассейна к зиме: слив воды, продувка труб, установка заглушек, консервирующая химия.",
  },
  {
    num: "06",
    title: "Расконсервация",
    desc: "Подготовка бассейна к сезону: заполнение, промывка систем, запуск оборудования, балансировка химии.",
  },
];

const includes = [
  "Регулярное техническое обслуживание (абонемент)",
  "Разовые выезды по заявке",
  "Чистка чаши и оборудования",
  "Контроль и корректировка химии воды",
  "Замена картриджей и расходников",
  "Сезонная консервация бассейна",
  "Расконсервация и запуск бассейна",
  "Мелкий ремонт оборудования",
  "Консультации по эксплуатации",
  "Рекомендации по уходу",
];

export default function ServisPage() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="site-header">
        <div className="header-inner">
          <a href="/" className="logo">
            Глубина <span className="logo-accent">.</span>
          </a>
          <nav className="nav-desktop">
            <a href="/" className="nav-link">Главная</a>
            <a href="/#services" className="nav-link">Услуги</a>
            <a href="/#portfolio" className="nav-link">Портфолио</a>
            <a href="/#contacts" className="btn-nav">Обсудить проект</a>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <main className="service-hero">
        <div className="service-hero-inner">
          <span className="section-label">Услуга</span>
          <h1 className="service-hero-title">Сервис и обслуживание бассейна</h1>
          <p className="service-hero-subtitle">
            Регулярное ТО, чистка, контроль химии, сезонная консервация. Продлеваем срок службы бассейна и сохраняем качество воды.
          </p>
          <div className="service-hero-buttons">
            <a href="/#contacts" className="btn-primary">Получить расчёт</a>
            <a href="#stages" className="btn-secondary">Этапы работ</a>
          </div>
        </div>
      </main>

      {/* ===== STAGES ===== */}
      <section className="service-section" id="stages">
        <div className="service-section-inner">
          <span className="section-label">Процесс</span>
          <h2 className="section-title">6 этапов — от диагностики до запуска</h2>
          <p className="section-subtitle">
            Работаем по абонементу или разовым заявкам. Фиксируем объём работ в договоре.
          </p>
          <div className="stages-grid">
            {stages.map((stage) => (
              <div key={stage.num} className="stage-card">
                <div className="stage-num">{stage.num}</div>
                <h3 className="stage-title">{stage.title}</h3>
                <p className="stage-desc">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INCLUDES ===== */}
      <section className="service-section service-section-alt">
        <div className="service-section-inner">
          <span className="section-label">Состав работ</span>
          <h2 className="section-title">Что входит в сервис</h2>
          <p className="section-subtitle">
            Базовый состав работ. Конкретный список фиксируем в договоре после обсуждения задачи.
          </p>
          <div className="includes-grid">
            {includes.map((item) => (
              <div key={item} className="include-item">
                <svg className="include-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICE ===== */}
      <section className="service-section">
        <div className="service-section-inner">
          <span className="section-label">Стоимость</span>
          <h2 className="section-title">Из чего складывается цена</h2>
          <p className="section-subtitle">
            Стоимость зависит от объёма чаши, частоты обслуживания и состава работ.
          </p>
          <div className="price-factors">
            <div className="price-factor">
              <h3>Объём чаши</h3>
              <p>Чем больше бассейн, тем больше времени и материалов требуется.</p>
            </div>
            <div className="price-factor">
              <h3>Частота обслуживания</h3>
              <p>Разовый выезд или абонемент (еженедельно, раз в 2 недели, ежемесячно).</p>
            </div>
            <div className="price-factor">
              <h3>Состав работ</h3>
              <p>Базовое ТО или расширенное обслуживание с заменой расходников.</p>
            </div>
            <div className="price-factor">
              <h3>Сезонные работы</h3>
              <p>Консервация и расконсервация оплачиваются отдельно или включены в абонемент.</p>
            </div>
          </div>
          <div className="price-cta">
            <p>Точный расчёт — после обсуждения задачи. Смета по пунктам, без скрытых статей.</p>
            <a href="/#contacts" className="btn-primary">Получить расчёт</a>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        className="service-cta"
        style={{
          padding: "80px 20px",
          background: "linear-gradient(135deg, #0f4c75 0%, #050914 100%)",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.2 }}>
            Готовы обсудить проект?
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255, 255, 255, 0.7)", margin: "0 0 32px" }}>
            Оставьте заявку — ответим в течение рабочего дня. Выезд инженера для оценки по Краснодару — бесплатно, за пределами города — по согласованию.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#contacts" className="btn-primary" style={{ textDecoration: "none" }}>
              Оставить заявку
            </a>
            <a href="tel:+79189332053" className="btn-secondary" style={{ textDecoration: "none", color: "#ffffff" }}>
              +7 (918) 933-20-53
            </a>
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
                <li><a href="/">Главная</a></li>
                <li><a href="/#services">Услуги</a></li>
                <li><a href="/#portfolio">Портфолио</a></li>
                <li><a href="/#contacts">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Контакты</h4>
              <ul className="footer-list">
                <li><span>Краснодар, Россия</span></li>
                <li><a href="tel:+79189332053" style={{ color: 'inherit', textDecoration: 'none' }}>+7 (918) 933-20-53</a></li>
                <li><span>info@glubina-pool.ru</span></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 Глубина. Все права защищены.
          </div>
        </div>
      </footer>
    </>
  );
}