import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Проектирование и дизайн бассейна в Краснодаре — Глубина",
  description:
    "Проектирование бассейна с 3D-визуализацией, планировкой чаши и подбором материалов. Инженерный подход, точные расчёты. Краснодар и юг России.",
  keywords: [
    "проектирование бассейнов Краснодар",
    "дизайн бассейна",
    "3D визуализация бассейна",
    "проект бассейна",
    "планировка чаши бассейна",
  ],
  openGraph: {
    title: "Проектирование и дизайн бассейна в Краснодаре",
    description:
      "3D-визуализация, планировка чаши, подбор материалов. Вы видите будущий бассейн до начала работ.",
    url: "https://glubina-pool.ru/services/proektirovanie/",
    type: "website",
  },
};

const stages = [
  {
    num: "01",
    title: "Обследование участка",
    desc: "Геодезия, уровни грунтовых вод, анализ грунта, расстояния до построек и коммуникаций. Фиксируем ограничения и возможности участка.",
  },
  {
    num: "02",
    title: "Техническое задание",
    desc: "Обсуждаем ваши пожелания: размер, форма, глубина, назначение бассейна (семейный, спортивный, с подогревом). Фиксируем бюджет и сроки.",
  },
  {
    num: "03",
    title: "Планировка чаши",
    desc: "Разрабатываем форму и размеры чаши с учётом участка, архитектуры дома и ваших предпочтений. Несколько вариантов на выбор.",
  },
  {
    num: "04",
    title: "3D-визуализация",
    desc: "Фотореалистичная визуализация будущего бассейна в контексте участка. Вы видите результат до начала работ.",
  },
  {
    num: "05",
    title: "Рабочая документация",
    desc: "Чертежи чаши, схемы обвязки оборудования, спецификации материалов. Всё, что нужно для строительства.",
  },
  {
    num: "06",
    title: "Авторский надзор",
    desc: "Контроль соответствия строительства проекту на всех этапах. Корректировки при необходимости.",
  },
];

const includes = [
  "Геодезическое обследование участка",
  "Анализ грунтов и уровней вод",
  "Планировка чаши (несколько вариантов)",
  "3D-визуализация в контексте участка",
  "Рабочие чертежи и схемы",
  "Спецификации материалов и оборудования",
  "Гидравлический расчёт",
  "Подбор материалов отделки",
  "Авторский надзор на этапе строительства",
];

export default function ProektirovaniePage() {
  return (
    <>
      {/* ===== HEADER ===== */}
            <SiteHeader />

      {/* ===== HERO ===== */}
      <main className="service-hero">
        <div className="service-hero-inner">
          <span className="section-label">Услуга</span>
          <h1 className="service-hero-title">Проектирование и дизайн бассейна</h1>
          <p className="service-hero-subtitle">
            От идеи до рабочей документации. 3D-визуализация, планировка чаши, подбор материалов. Вы видите будущий бассейн до начала работ.
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
          <h2 className="section-title">6 этапов — от участка до чертежей</h2>
          <p className="section-subtitle">
            Каждый этап согласовываем с вами. Вы участвуете в принятии решений и видите прогресс.
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
          <h2 className="section-title">Что входит в проектирование</h2>
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
            Стоимость проектирования зависит от сложности задачи, размера чаши и объёма документации.
          </p>
          <div className="price-factors">
            <div className="price-factor">
              <h3>Сложность формы</h3>
              <p>Типовая прямоугольная чаша проще в проектировании, чем криволинейная или многоуровневая.</p>
            </div>
            <div className="price-factor">
              <h3>Объём документации</h3>
              <p>Базовый проект или полная рабочая документация со спецификациями.</p>
            </div>
            <div className="price-factor">
              <h3>3D-визуализация</h3>
              <p>Количество ракурсов и уровень детализации визуализации.</p>
            </div>
            <div className="price-factor">
              <h3>Авторский надзор</h3>
              <p>Включён в проект или оплачивается отдельно за каждый выезд.</p>
            </div>
          </div>
          <div className="price-cta">
            <p>Точный расчёт — после обсуждения задачи. Смета по пунктам, без скрытых статей.</p>
            <a href="/#contacts" className="btn-primary">Получить расчёт</a>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="service-cta">
        <div className="service-cta-inner">
          <h2>Готовы обсудить проект?</h2>
          <p>
            Оставьте заявку — ответим в течение рабочего дня. Выезд инженера для оценки по Краснодару — бесплатно, за пределами города — по согласованию.
          </p>
          <div className="service-cta-buttons">
            <a href="/#contacts" className="btn-primary">Оставить заявку</a>
            <a href="tel:+79189332053" className="btn-secondary">+7 (918) 933-20-53</a>
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
              <h4 className="footer-title">Услуги</h4>
              <ul className="footer-list">
                <li><a href="/services/proektirovanie/">Проектирование и дизайн</a></li>
                <li><a href="/services/inzhenernye-sistemy/">Инженерные системы</a></li>
                <li><a href="/services/stroitelstvo/">Строительство</a></li>
                <li><a href="/services/servis/">Сервис и обслуживание</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Контакты</h4>
              <ul className="footer-list">
                <li><span>Краснодар, Россия</span></li>
                <li><a href="tel:+79189332053">+7 (918) 933-20-53</a></li>
                <li><span>info@glubina-pool.ru</span></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 Глубина · ИП Никифоров Д.В. · ИНН 910514818620 · ОГРНИП 325911200032287 · <a href="/privacy/">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </>
  );
}