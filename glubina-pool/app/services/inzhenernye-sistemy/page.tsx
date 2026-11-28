import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Инженерные системы бассейна в Краснодаре — Глубина",
  description:
    "Гидравлические расчёты, подбор оборудования, монтаж и пуско-наладка инженерных систем бассейна. Фильтрация, подогрев, обеззараживание. Краснодар и юг России.",
  keywords: [
    "инженерные системы бассейна Краснодар",
    "оборудование для бассейна",
    "фильтрация бассейна",
    "подогрев бассейна",
    "автоматика бассейна",
    "монтаж оборудования бассейна",
  ],
  openGraph: {
    title: "Инженерные системы бассейна в Краснодаре",
    description:
      "Гидравлические расчёты, подбор оборудования, монтаж и пуско-наладка. Точные схемы обвязки.",
    url: "https://glubina-pool.ru/services/inzhenernye-sistemy/",
    type: "website",
  },
};

const stages = [
  {
    num: "01",
    title: "Анализ задачи",
    desc: "Объём чаши, назначение бассейна, режим использования, бюджет. Определяем требования к системам.",
  },
  {
    num: "02",
    title: "Гидравлический расчёт",
    desc: "Производительность насосов, диаметр труб, скорость потока, время полного оборота воды. Всё считаем, не «на глаз».",
  },
  {
    num: "03",
    title: "Подбор оборудования",
    desc: "Насосы, фильтры, подогрев, системы обеззараживания, автоматика. Подбираем под бюджет и задачи.",
  },
  {
    num: "04",
    title: "Схемы обвязки",
    desc: "Рабочие чертежи расположения оборудования, трассировка труб, точки подключения. Всё до винтика.",
  },
  {
    num: "05",
    title: "Монтаж",
    desc: "Установка оборудования, прокладка труб, подключение электрики. Соблюдаем технологии производителей.",
  },
  {
    num: "06",
    title: "Пуско-наладка",
    desc: "Заполнение системы, проверка герметичности, настройка автоматики, инструктаж по эксплуатации.",
  },
];

const includes = [
  "Гидравлический расчёт системы",
  "Подбор насосного оборудования",
  "Подбор фильтрационного оборудования",
  "Система подогрева (тепловой насос / теплообменник / электроподогрев)",
  "Система обеззараживания (хлор / активный кислород / УФ / озонирование)",
  "Автоматика управления (опционально)",
  "Система освещения бассейна",
  "Закладные элементы (скиммеры, форсунки, донный слив, прожекторы)",
  "Схемы обвязки и трассировка труб",
  "Пуско-наладка и инструктаж",
];

export default function InzhenernyeSistemyPage() {
  return (
    <>
      {/* ===== HEADER ===== */}
            <SiteHeader />

      {/* ===== HERO ===== */}
      <main className="service-hero">
        <div className="service-hero-inner">
          <span className="section-label">Услуга</span>
          <h1 className="service-hero-title">Инженерные системы бассейна</h1>
          <p className="service-hero-subtitle">
            Гидравлические расчёты, подбор оборудования, монтаж и пуско-наладка. Точные схемы обвязки, не «на глаз». Работаем с Emaux, Hayward, Kripsol, AquaViva.
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
          <h2 className="section-title">6 этапов — от расчёта до запуска</h2>
          <p className="section-subtitle">
            Каждый этап фиксируем в договоре. Вы видите прогресс и контролируете бюджет.
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
          <h2 className="section-title">Что входит в инженерные системы</h2>
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
            Стоимость зависит от объёма чаши, выбранного оборудования и сложности монтажа.
          </p>
          <div className="price-factors">
            <div className="price-factor">
              <h3>Объём чаши</h3>
              <p>Чем больше бассейн, тем мощнее оборудование и тем выше стоимость.</p>
            </div>
            <div className="price-factor">
              <h3>Тип оборудования</h3>
              <p>Бюджетные, средние или премиальные линейки производителей.</p>
            </div>
            <div className="price-factor">
              <h3>Система обеззараживания</h3>
              <p>Хлорирование, активный кислород, УФ, озонирование — разный уровень и цена.</p>
            </div>
            <div className="price-factor">
              <h3>Автоматика</h3>
              <p>Ручное управление или полная автоматика с контролем pH и хлора.</p>
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