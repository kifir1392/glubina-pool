import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Строительство бассейнов под ключ в Краснодаре — Глубина",
  description:
    "Полный цикл строительства бассейна: проектирование, земляные работы, бетонирование чаши, монтаж оборудования, пуско-наладка. Гарантия до 5 лет. Краснодар и юг России.",
  keywords: [
    "строительство бассейнов Краснодар",
    "бассейн под ключ",
    "бетонный бассейн",
    "строительство бассейна цена",
    "бассейн на участке",
  ],
  openGraph: {
    title: "Строительство бассейнов под ключ в Краснодаре",
    description:
      "Полный цикл: от проекта до пуско-наладки. Гарантия до 5 лет. Точные расчёты, своя бригада.",
    url: "https://glubina-pool.ru/services/stroitelstvo/",
    type: "website",
  },
}; 

const stages = [
  {
    num: "01",
    title: "Выезд и обследование участка",
    desc: "Геодезия, уровни грунтовых вод, подъезд техники, расстояния до построек и коммуникаций. Фиксируем всё в техническом задании.",
  },
  {
    num: "02",
    title: "Проектирование и расчёты",
    desc: "Планировка чаши, гидравлический расчёт, подбор оборудования, 3D-визуализация. Вы видите будущий бассейн до начала работ.",
  },
  {
    num: "03",
    title: "Земляные работы",
    desc: "Разметка, котлован, вывоз грунта. Работаем аккуратно — сохраняем ландшафт и существующие постройки.",
  },
  {
    num: "04",
    title: "Армирование и бетонирование чаши",
    desc: "Двойное армирование, бетон с противоморозными добавками, виброуплотнение. Контроль на каждом этапе.",
  },
  {
    num: "05",
    title: "Гидроизоляция и отделка",
    desc: "Обмазочная или проникающая гидроизоляция, мозаика или плёнка ПВХ — по проекту.",
  },
  {
    num: "06",
    title: "Монтаж инженерного оборудования",
    desc: "Насосы, фильтры, подогрев, автоматика, закладные элементы. Схемы обвязки — по расчёту, не «на глаз».",
  },
  {
    num: "07",
    title: "Пуско-наладка и сдача",
    desc: "Заполнение, настройка химии, инструктаж по эксплуатации. Подписываем акт и гарантийные обязательства.",
  },
];

const includes = [
  "Проект и рабочие чертежи",
  "Земляные работы и вывоз грунта",
  "Чаша (бетон или композит)",
  "Гидроизоляция",
  "Отделка (мозаика / плёнка ПВХ)",
  "Закладные элементы (скиммеры, форсунки, донный слив)",
  "Насос, фильтр, подогрев",
  "Система обеззараживания (хлор / активный кислород / УФ)",
  "Автоматика (опционально)",
  "Пуско-наладка и инструктаж",
];

export default function StroitelstvoPage() {
  return (
    <>
      {/* ===== HEADER ===== */}
            <SiteHeader />

      {/* ===== HERO ===== */}
      <main className="service-hero">
        <div className="service-hero-inner">
          <span className="section-label">Услуга</span>
          <h1 className="service-hero-title">Строительство бассейнов под ключ</h1>
          <p className="service-hero-subtitle">
            Полный цикл: от выезда на участок до пуско-наладки. Один подрядчик — одна ответственность. Гарантия до 5 лет.
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
          <h2 className="section-title">7 этапов — от участка до воды</h2>
          <p className="section-subtitle">
            Каждый этап фиксируем в договоре с сроками и стоимостью. Вы видите прогресс и контролируете бюджет.
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
          <h2 className="section-title">Что входит в «под ключ»</h2>
          <p className="section-subtitle">
            Базовый состав работ. Конкретный список фиксируем в договоре после выезда на участок.
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
            Стоимость зависит от размера чаши, типа оборудования, отделки, геодезии участка и логистики. При размере 4×2,5 м и стартовом наборе оборудования цена может начинаться от 800 000 ₽.
          </p>
          <div className="price-factors">
            <div className="price-factor">
              <h3>Размер и форма чаши</h3>
              <p>Объём бетона, площадь отделки, сложность геометрии.</p>
            </div>
            <div className="price-factor">
              <h3>Тип оборудования</h3>
              <p>Насос, фильтр, подогрев, система обеззараживания — подбираем под бюджет.</p>
            </div>
            <div className="price-factor">
              <h3>Отделка</h3>
              <p>Мозаика, плёнка ПВХ, натуральный камень — разный уровень и цена.</p>
            </div>
            <div className="price-factor">
              <h3>Участок и логистика</h3>
              <p>Геодезия, подъезд техники, вывоз грунта, расстояния.</p>
            </div>
          </div>
          <div className="price-cta">
            <p>Точный расчёт — после выезда на участок. Смета по пунктам, без скрытых статей.</p>
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