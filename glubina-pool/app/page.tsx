"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

/* ============================== ДАННЫЕ ============================== */

const ICONS: Record<string, string | string[]> = {
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M6 18L18 6M6 6l12 12",
  chevronDown: "M19 9l-7 7-7-7",
  arrowDown: "M19 14l-7 7m0 0l-7-7m7 7V3",
  arrowRight: "M14 5l7 7m0 0l-7 7m7-7H3",
  check: "M5 13l4 4L19 7",
  user: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  key: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
  cube: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  bolt: "M13 10V3L4 14h7v7l9-11h-7z",
  eye: [
    "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  ],
  plus: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
  shield:
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  calc: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  users:
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  pin: [
    "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  ],
  phone:
    "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  mail: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
};

function Icon({
  d,
  size = 24,
  className,
}: {
  d: string | string[];
  size?: number;
  className?: string;
}) {
  const paths = Array.isArray(d) ? d : [d];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
      aria-hidden="true"
    >
      {paths.map((p, i) => (
        <path key={i} strokeLinecap="round" strokeLinejoin="round" d={p} />
      ))}
    </svg>
  );
}

const NAV_LINKS = [
  { id: "services", label: "Услуги" },
  { id: "portfolio", label: "Портфолио" },
  { id: "about", label: "О компании" },
  { id: "contacts", label: "Контакты" },
];

type FormatId = "turnkey" | "equipment" | "montage" | "chef" | "custom";

const FORMATS: {
  id: Exclude<FormatId, "custom">;
  icon: string;
  title: string;
  tag: string;
  short: string;
  price: string;
  ours: string[];
  yours: string[];
}[] = [
  {
    id: "turnkey",
    icon: "key",
    title: "Под ключ",
    tag: "Один подрядчик — одна ответственность",
    short: "Весь цикл на нас: от проекта и оборудования до чаши, монтажа и запуска воды.",
    price: "от 800 000 ₽ · бассейн 4×2,5 м со стартовым набором оборудования",
    ours: [
      "Проект, гидравлические расчёты, 3D-визуализация",
      "Подбор и поставка оборудования и закладных",
      "Земляные работы, чаша, гидроизоляция, отделка",
      "Монтаж, пуско-наладка, запуск воды",
      "Гарантия до 5 лет",
    ],
    yours: ["Пожелания, бюджет и доступ к участку", "Приёмка этапов и готового бассейна"],
  },
  {
    id: "equipment",
    icon: "cube",
    title: "Только оборудование",
    tag: "Стройка на вас — железо на нас",
    short: "Оборудование и закладные из проверенных прайсов с подбором под ваш проект.",
    price: "стоимость — по спецификации оборудования",
    ours: [
      "Подбор оборудования под чашу и бюджет",
      "Закладные: скиммеры, форсунки, прожекторы, донный слив",
      "Гидравлический расчёт и схема обвязки",
      "Поставка на объект и консультации по монтажу",
    ],
    yours: ["Строительная часть и материалы", "Монтаж своей бригадой"],
  },
  {
    id: "montage",
    icon: "bolt",
    title: "Только монтаж",
    tag: "Ваша чаша — наши руки",
    short: "Оборудование и материалы ваши — монтаж, обвязку и запуск берём на себя.",
    price: "стоимость — по смете работ",
    ours: [
      "Монтаж оборудования и обвязка техпомещения",
      "Пуско-наладка и балансировка системы",
      "Гарантия на выполненные работы",
    ],
    yours: ["Оборудование, закладные и материалы", "Готовая чаша и техпомещение"],
  },
  {
    id: "chef",
    icon: "eye",
    title: "Шеф-монтаж",
    tag: "Ваша бригада — мой контроль",
    short: "Работаю как ваш прораб: техника и материалы с вас, технология и качество — с меня.",
    price: "стоимость — по договору сопровождения",
    ours: [
      "План этапов и технология работ",
      "Контроль качества на каждом этапе",
      "Расчёты, схемы и решения вопросов на стройке",
      "Приёмка скрытых работ и запуск системы",
    ],
    yours: ["Техника, материалы и рабочие руки", "Закупка по нашим спецификациям"],
  },
];

const MODULES = [
  { id: "design", label: "Проект и расчёты", desc: "3D-визуализация, гидравлика, схемы обвязки" },
  { id: "supply", label: "Оборудование и закладные", desc: "подбор под бюджет, поставка на объект" },
  { id: "build", label: "Строительная часть", desc: "котлован, чаша, гидроизоляция, отделка" },
  { id: "install", label: "Монтаж и пуско-наладка", desc: "обвязка, оборудование, запуск воды" },
  { id: "chef", label: "Шеф-монтаж", desc: "контроль вашей стройки вместо нашей бригады" },
  { id: "service", label: "Сервис", desc: "сезонное обслуживание после сдачи" },
];

const SERVICE_PAGES = [
  { href: "/services/proektirovanie/", label: "Проектирование и дизайн" },
  { href: "/services/inzhenernye-sistemy/", label: "Инженерные системы" },
  { href: "/services/stroitelstvo/", label: "Строительство" },
  { href: "/services/servis/", label: "Сервис и обслуживание" },
];

const PORTFOLIO = [
  {
    location: "Краснодар",
    title: "Частный бассейн 8×4 м",
    specs: "Бетонная чаша, система перелива, подогрев тепловым насосом, автоматика pH/Cl.",
    bg: undefined as string | undefined,
  },
  {
    location: "Геленджик",
    title: "SPA-зона с бассейном",
    specs: "Интеграция с ландшафтом, подсветка LED, система противотока, джакузи.",
    bg: "linear-gradient(135deg, #0f4c75 0%, #0a1628 100%)",
  },
  {
    location: "Анапа",
    title: "Бассейн с панорамным видом",
    specs: "Infinity-edge, стеклянная стена, система подогрева, автоматическая химия.",
    bg: "linear-gradient(135deg, #1a365d 0%, #0a1628 100%)",
  },
];

const FAQ = [
  {
    q: "Сколько стоит построить бассейн под ключ?",
    a: "Стоимость зависит от размера чаши, типа оборудования, отделки, геодезии участка и логистики. При размере 4×2,5 м и стартовом наборе оборудования цена может начинаться от 800 000 ₽. Точный расчёт делаем после выезда на участок — вы видите смету по пунктам, а не «цену за бассейн».",
  },
  {
    q: "Сколько времени занимает строительство?",
    a: "Композитный бассейн можно запустить за 10 дней с нуля — в зависимости от условий участка. Бетонная чаша: от 45 до 90 дней в зависимости от сложности проекта. Включает проектирование, земляные работы, чашу, монтаж оборудования и пуско-наладку.",
  },
  {
    q: "Работаете ли вы за пределами Краснодара?",
    a: "Да, работаем по всему югу России: Краснодарский край, Адыгея, Ростовская область, Ставропольский край, Крым. Выезд инженера для оценки по Краснодару — бесплатно, за пределами города — по согласованию.",
  },
  {
    q: "Какая гарантия на работы?",
    a: "Даём гарантию до 5 лет. Точный срок и условия фиксируются в договоре и зависят от состава работ. Сервисное обслуживание — отдельно.",
  },
  {
    q: "Нужно ли разрешение на строительство бассейна?",
    a: "Для частных бассейнов глубиной до 3 м разрешение не требуется. Мы берём на себя все согласования, если проект выходит за эти рамки.",
  },
];

/* ====================== ПОДВОДНЫЕ СЛОИ (CANVAS) ====================== */

function CausticsLayer() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const W = 240;
    const H = 144;
    canvas.width = W;
    canvas.height = H;
    const img = ctx.createImageData(W, H);
    const data = img.data;
    const rowA = new Float32Array(H);
    const rowB = new Float32Array(H);
    const colA = new Float32Array(W);
    const colB = new Float32Array(W);
    const ux = new Float32Array(W);
    const vy = new Float32Array(H);
    for (let x = 0; x < W; x++) ux[x] = (x / W) * 6.8;
    for (let y = 0; y < H; y++) vy[y] = (y / H) * 4.2;

    let tx = 0, ty = 0, ox = 0, oy = 0;
    const onMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
    };

    const render = (T: number) => {
      ox += (tx * 1.4 - ox) * 0.06;
      oy += (ty * 1.0 - oy) * 0.06;
      for (let y = 0; y < H; y++) {
        rowA[y] = Math.sin(vy[y] * 2.6 + T * 0.8);
        rowB[y] = Math.sin(vy[y] * 1.9 - T * 0.55);
      }
      for (let x = 0; x < W; x++) {
        colA[x] = Math.sin(ux[x] * 2.2 - T * 0.7);
        colB[x] = Math.sin(ux[x] * 1.6 + T * 0.45);
      }
      let i = 0;
      for (let y = 0; y < H; y++) {
        const ra = 0.55 * rowA[y];
        const rb = 0.3 * rowB[y];
        const baseY = vy[y] + oy;
        for (let x = 0; x < W; x++) {
          const px = ux[x] + ra + 0.3 * colB[x] + ox;
          const py = baseY + 0.55 * colA[x] + rb;
          const s =
            Math.sin(px * 2.3 + T * 1.15) +
            Math.sin(py * 2.7 - T * 0.95) +
            Math.sin((px + py) * 1.9 + T * 0.65);
          let v = (s + 3) / 6;
          const v2 = v * v;
          const v4 = v2 * v2;
          let inten = v4 * v4 + 0.1 * v2;
          if (inten > 1) inten = 1;
          data[i] = 110 * inten;
          data[i + 1] = 195 * inten;
          data[i + 2] = 255 * inten;
          data[i + 3] = 255;
          i += 4;
        }
      }
      ctx.putImageData(img, 0, 0);
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      render(7.3);
      return;
    }

    let inView = true;
    const io = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    io.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    let lastDraw = 0;
    const start = performance.now();
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!inView || document.hidden) return;
      if (now - lastDraw < 33) return; // ~30 fps достаточно для мягкой каустики
      lastDraw = now;
      render((now - start) * 0.0009);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="caustics-canvas" aria-hidden="true" />;
}

function BubblesLayer() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.clientWidth || window.innerWidth;
      h = canvas.clientHeight || window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    type Bubble = { x: number; y: number; r: number; vy: number; wob: number; ph: number; a: number };
    const bubbles: Bubble[] = [];
    // на мобильных пузыри остаются, но их меньше — бережём батарею
    const MAX = window.innerWidth < 768 ? 20 : 29;
    const TAU = Math.PI * 2;

    const spawn = (x?: number, y?: number, boost = false) => {
      if (bubbles.length >= MAX) return;
      const r = boost ? 3 + Math.random() * 4 : 3.5 + Math.random() * Math.random() * 11;
      bubbles.push({
        x: x ?? Math.random() * w,
        y: y ?? h + 10 + Math.random() * 40,
        r,
        vy: (boost ? 60 : 18) + r * 4 + Math.random() * 14,
        wob: 1 + Math.random() * 2,
        ph: Math.random() * TAU,
        a: 0.12 + Math.random() * 0.22,
      });
    };

    let depth = 0;
    let pulse = 0;
    let lastY = window.scrollY;
    const onScroll = () => {
      const dy = Math.abs(window.scrollY - lastY);
      lastY = window.scrollY;
      pulse = Math.min(pulse + dy * 0.01, 3);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      depth = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    };
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0) return;
      for (let i = 0; i < 4; i++) {
        spawn(e.clientX + (Math.random() * 24 - 12), e.clientY + Math.random() * 10, true);
      }
    };

    for (let i = 0; i < 5; i++) spawn(undefined, Math.random() * h);
    onScroll();

    let raf = 0;
    let last = performance.now();
    let acc = 0;
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (document.hidden) return;

      acc += dt * (0.5 + depth * 1.6 + pulse * 2.5);
      pulse *= Math.exp(-3 * dt);
      while (acc >= 1) {
        acc -= 1;
        spawn();
      }

      ctx.clearRect(0, 0, w, h);
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.y -= b.vy * dt * (1 + depth * 0.4);
        b.ph += b.wob * dt;
        if (b.y < -30) {
          bubbles.splice(i, 1);
          continue;
        }
        const x = b.x + Math.sin(b.ph) * b.r * 0.9;
        const a = b.a * Math.min(1, b.y / (h * 0.18));
        ctx.beginPath();
        ctx.arc(x, b.y, b.r, 0, TAU);
        ctx.fillStyle = `rgba(59,130,246,${(a * 0.12).toFixed(3)})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(147,197,253,${a.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x - b.r * 0.35, b.y - b.r * 0.35, Math.max(b.r * 0.22, 0.6), 0, TAU);
        ctx.fillStyle = `rgba(224,242,254,${(a * 0.9).toFixed(3)})`;
        ctx.fill();
      }
    };
    raf = requestAnimationFrame(frame);

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return <canvas ref={ref} className="bubbles-canvas" aria-hidden="true" />;
}

/* ============================ УТИЛИТЫ UI ============================ */

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
}

// Маска телефона: всегда +7, клиент вводит только 10 цифр (8 заменяется на 7)
function formatPhone(raw: string): string {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("8")) d = "7" + d.slice(1);
  if (d.startsWith("7")) d = d.slice(1);
  d = d.slice(0, 10);
  let out = "+7";
  if (d.length > 0) out += " (" + d.slice(0, 3);
  if (d.length >= 3) out += ")";
  if (d.length > 3) out += " " + d.slice(3, 6);
  if (d.length > 6) out += "-" + d.slice(6, 8);
  if (d.length > 8) out += "-" + d.slice(8, 10);
  return out;
}

const MESSENGERS = [
  {
    id: "wa",
    label: "WhatsApp",
    href: "https://wa.me/79189332053",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.4 3.8 3.4.5.2 1 .4 1.3.5.5.2 1 .1 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z"/></svg>
    ),
  },
  {
    id: "tg",
    label: "Telegram",
    href: "https://t.me/kifir1392",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.9 4.6l-3.1 14.6c-.2 1-.8 1.2-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.6L18.3 7c.4-.3-.1-.5-.6-.2L7.4 13.3l-4.4-1.4c-1-.3-1-1 .2-1.4l17.2-6.6c.8-.3 1.5.2 1.5 1.7z"/></svg>
    ),
  },
  {
    id: "max",
    label: "MAX",
    href: "https://max.ru/u/f9LHodD0cOK-dmsHmHp8b3svV1DuNjpMLo7knFS1OKLIqcj2i9jSPM63dJg",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.5 3 2 6.9 2 11.7c0 2.8 1.5 5.3 3.9 6.9-.1 1.2-.6 2.6-1.6 3.6 1.9-.2 3.6-.9 4.8-1.7.9.2 1.9.3 2.9.3 5.5 0 10-3.9 10-8.7S17.5 3 12 3z"/></svg>
    ),
  },
];

function trackGoal(goal: string) {
  const w = window as unknown as { ym?: (...args: unknown[]) => void };
  if (typeof w.ym === "function") w.ym(114646906, "reachGoal", goal);
}

function FloatingMessengers() {
  const [open, setOpen] = useState(false);
  return (
    <div className="float-messengers">
      {open && (
        <div className="float-list">
          {MESSENGERS.map((m) => (
            <a
              key={m.id}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`float-item ${m.id}`}
              onClick={() => trackGoal("messenger")}
            >
              {m.icon}
              {m.label}
            </a>
          ))}
        </div>
      )}
      <button
        className="float-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Скрыть мессенджеры" : "Написать в мессенджер"}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M8 10h8m-8 4h5m-9 8l3-3h9a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v13z"} />
        </svg>
      </button>
    </div>
  );
}

/* ============================== СТРАНИЦА ============================== */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const [activeFormat, setActiveFormat] = useState<FormatId>("turnkey");
  const [customModules, setCustomModules] = useState<string[]>(["supply", "install"]);

  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("+7");
  const [flash, setFlash] = useState(false);
  const flashTimer = useRef<number | null>(null);

  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      if (window.scrollY < window.innerHeight * 0.5) setActiveSection("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActiveSection(en.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(
    () => () => {
      if (flashTimer.current !== null) window.clearTimeout(flashTimer.current);
    },
    []
  );

  const prefillAndGo = useCallback((text: string) => {
    setMessage(text);
    setFlash(true);
    if (flashTimer.current !== null) window.clearTimeout(flashTimer.current);
    flashTimer.current = window.setTimeout(() => setFlash(false), 1800);
    smoothScrollTo("contacts");
  }, []);

  const toggleModule = (id: string) => {
    setCustomModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const chosenModules = MODULES.filter((m) => customModules.includes(m.id));
  const isTurnkeyLike = ["design", "supply", "build", "install"].every((id) =>
    customModules.includes(id)
  );
  const preset = FORMATS.find((f) => f.id === activeFormat);

  const discussFormat = () => {
    if (activeFormat === "custom") {
      if (chosenModules.length === 0) return;
      prefillAndGo(
        `Здравствуйте! Хочу собрать свой формат: ${chosenModules.map((m) => m.label).join(", ")}.`
      );
    } else if (preset) {
      prefillAndGo(`Здравствуйте! Интересует формат «${preset.title}».`);
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitState === "sending") return;
    if (phone.replace(/\D/g, "").length !== 11) {
      setSubmitState("error");
      setSubmitError("Введите номер телефона полностью: +7 и 10 цифр.");
      return;
    }
    const form = e.currentTarget;
    setSubmitState("sending");
    setSubmitError("");
    const formData = new FormData(form);
    try {
      const response = await fetch("/send-form.php", { method: "POST", body: formData });
      const result = (await response.json()) as { success?: boolean; message?: string };
      if (result.success) {
        setSubmitState("success");
        trackGoal("lead");
        form.reset();
        setMessage("");
        setPhone("+7");
      } else {
        setSubmitState("error");
        setSubmitError(result.message || "Не удалось отправить заявку.");
      }
    } catch {
      setSubmitState("error");
      setSubmitError("Ошибка соединения. Попробуйте позже или позвоните нам.");
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <>
        {/* ===== HEADER ===== */}
        <header className={`site-header${scrolled ? " scrolled" : ""}`}>
          <div className="header-inner">
            <a href="/" className="logo">
              Глубина<span className="logo-accent">.</span>
            </a>
            <nav className="nav-desktop" aria-label="Основная навигация">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className={`nav-link${activeSection === l.id ? " active" : ""}`}
                  aria-current={activeSection === l.id ? "true" : undefined}
                >
                  {l.label}
                </a>
              ))}
              <a href="tel:+79189332053" className="header-phone">+7 (918) 933-20-53</a>
              <a href="#contacts" className="btn-nav">Обсудить проект</a>
            </nav>
            <button
              className="burger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={isMenuOpen}
            >
              <Icon d={isMenuOpen ? ICONS.close : ICONS.menu} />
            </button>
          </div>
          {isMenuOpen && (
            <div className="mobile-menu">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className={`nav-link${activeSection === l.id ? " active" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a href="tel:+79189332053" className="header-phone" onClick={() => setIsMenuOpen(false)}>
                +7 (918) 933-20-53
              </a>
              <a href="#contacts" className="btn-nav" onClick={() => setIsMenuOpen(false)}>
                Обсудить проект
              </a>
            </div>
          )}
        </header>

        {/* ===== HERO ===== */}
        <main className="hero">
          <div className="hero-bg" aria-hidden="true">
            <div className="hero-bg-blob-1"></div>
            <div className="hero-bg-blob-2"></div>
            <div className="light-shafts">
              <span className="shaft shaft-1"></span>
              <span className="shaft shaft-2"></span>
              <span className="shaft shaft-3"></span>
            </div>
            <CausticsLayer />
          </div>
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="hero-eyebrow">Строительство бассейнов под ключ · Краснодар и юг России</span>
              <h1 className="hero-title">
                Бассейны
                <br />
                до <span className="hero-accent">глубины</span> души
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hero-subtitle"
            >
              От первого эскиза до первого заплыва — берём на себя всё или только то, что нужно вам.
              Инженерный подход, точные расчёты, гарантия до 5 лет. Краснодар и юг России.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="hero-buttons"
            >
              <a href="#contacts" className="btn-primary">Обсудить проект</a>
              <a href="#services" className="btn-secondary">Выбрать формат</a>
            </motion.div>
          </div>
          <motion.a
            href="#services"
            className="scroll-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Ныряйте глубже
            <Icon d={ICONS.arrowDown} size={18} />
          </motion.a>
        </main>

        {/* ===== ФОРМАТЫ СОТРУДНИЧЕСТВА ===== */}
        <section className="services" id="services">
          <div className="services-inner">
            <Reveal>
              <span className="section-label">Форматы сотрудничества</span>
              <h2 className="section-title">Ваш проект — ваши правила</h2>
              <p className="section-subtitle">
                Возьмите всё под ключ — или только то, что нужно. Оборудование, стройка, монтаж
                и шеф-монтаж комбинируются как конструктор.
              </p>
            </Reveal>

            <div className="formats-grid">
              {FORMATS.map((f, i) => (
                <Reveal key={f.id} delay={i * 0.06}>
                  <button
                    type="button"
                    className={`format-card${activeFormat === f.id ? " active" : ""}`}
                    onClick={() => setActiveFormat(f.id)}
                    aria-pressed={activeFormat === f.id}
                  >
                    <span className="format-check"><Icon d={ICONS.check} size={13} /></span>
                    <span className="format-icon"><Icon d={ICONS[f.icon]} size={22} /></span>
                    <span className="format-tag">{f.tag}</span>
                    <span className="format-title">{f.title}</span>
                    <span className="format-short">{f.short}</span>
                  </button>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <button
                type="button"
                className={`format-custom${activeFormat === "custom" ? " active" : ""}`}
                onClick={() => setActiveFormat("custom")}
                aria-pressed={activeFormat === "custom"}
              >
                <span className="format-custom-icon"><Icon d={ICONS.plus} size={22} /></span>
                <span className="format-custom-text">
                  <strong>Свой набор — соберите как конструктор</strong>
                  <span>Отмечайте модули: смета будет только на выбранные работы.</span>
                </span>
                <span className="format-check"><Icon d={ICONS.check} size={13} /></span>
              </button>
            </Reveal>

            <div className="format-panel">
              <AnimatePresence mode="wait">
                {activeFormat !== "custom" && preset ? (
                  <motion.div
                    key={preset.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="format-panel-head">
                      <h3 className="format-panel-title">{preset.title}</h3>
                      <span className="format-panel-tag">{preset.tag}</span>
                    </div>
                    <p className="format-panel-short">{preset.short}</p>
                    <div className="format-price">
                      <Icon d={ICONS.calc} size={16} />
                      {preset.price}
                    </div>
                    <div className="format-split">
                      <div className="format-col">
                        <div className="format-col-title ours">Берём на себя</div>
                        <ul className="format-list">
                          {preset.ours.map((item) => (
                            <li key={item}>
                              <span className="li-icon ours"><Icon d={ICONS.check} size={15} /></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="format-col">
                        <div className="format-col-title yours">На вашей стороне</div>
                        <ul className="format-list">
                          {preset.yours.map((item) => (
                            <li key={item}>
                              <span className="li-icon yours"><Icon d={ICONS.user} size={15} /></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="custom"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="format-panel-head">
                      <h3 className="format-panel-title">Ваш набор</h3>
                      <span className="format-panel-tag cyan">Комбинация модулей</span>
                    </div>
                    <div className="module-grid">
                      {MODULES.map((m) => {
                        const on = customModules.includes(m.id);
                        return (
                          <button
                            key={m.id}
                            type="button"
                            className={`module-chip${on ? " on" : ""}`}
                            onClick={() => toggleModule(m.id)}
                            aria-pressed={on}
                          >
                            <span className="module-box"><Icon d={ICONS.check} size={12} /></span>
                            <span>
                              <span className="module-label">{m.label}</span>
                              <span className="module-desc">{m.desc}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    <div className="custom-summary" role="status">
                      {chosenModules.length === 0
                        ? "Отметьте хотя бы один модуль — соберём смету только на него."
                        : `Выбрано ${chosenModules.length}: ${chosenModules.map((m) => m.label).join(" · ")}`}
                      {isTurnkeyLike && chosenModules.length > 0 && (
                        <span className="custom-hint">
                          Похоже на «Под ключ» — можем оформить одним договором.
                        </span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="format-cta-row">
                <p className="format-cta-note">
                  Смета — только на выбранные работы. Выезд инженера по Краснодару — бесплатно.
                </p>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={discussFormat}
                  disabled={activeFormat === "custom" && chosenModules.length === 0}
                >
                  {activeFormat === "custom" ? "Обсудить свой набор" : "Обсудить этот формат"}
                  <Icon d={ICONS.arrowRight} size={16} className="btn-arrow" />
                </button>
              </div>
            </div>

            <Reveal delay={0.05}>
              <div className="service-links">
                <span className="service-links-label">Детально о направлениях:</span>
                {SERVICE_PAGES.map((s) => (
                  <a key={s.href} href={s.href} className="service-link">
                    {s.label} <span aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== PORTFOLIO ===== */}
        <section className="portfolio" id="portfolio">
          <div className="portfolio-inner">
            <Reveal>
              <span className="section-label">Портфолио</span>
              <h2 className="section-title">Наши работы говорят за нас</h2>
              <p className="section-subtitle">
                150+ бассейнов по всему югу России. Посмотрите, что мы создали для наших клиентов.
              </p>
            </Reveal>
            <div className="portfolio-grid">
              {PORTFOLIO.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="portfolio-card">
                    <div
                      className="portfolio-image"
                      style={p.bg ? { background: p.bg } : undefined}
                    >
                      <span className="portfolio-placeholder">Фото проекта</span>
                      <div className="portfolio-overlay">
                        <button
                          type="button"
                          className="portfolio-overlay-btn"
                          onClick={() =>
                            prefillAndGo(
                              `Здравствуйте! Понравился проект «${p.title}» (${p.location}). Хочу похожий — обсудим?`
                            )
                          }
                        >
                          Хочу похожий
                        </button>
                      </div>
                    </div>
                    <div className="portfolio-info">
                      <div className="portfolio-location">{p.location}</div>
                      <h3 className="portfolio-title">{p.title}</h3>
                      <p className="portfolio-specs">{p.specs}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className="about" id="about">
          <div className="about-inner">
            <Reveal>
              <span className="section-label">О компании</span>
              <h2 className="section-title">Почему выбирают нас</h2>
              <p className="section-subtitle">
                12 лет строим бассейны. 150+ довольных клиентов. Гарантия до 5 лет.
                Цифры говорят сами за себя.
              </p>
            </Reveal>
            <Reveal className="about-stats" delay={0.05}>
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
                <div className="stat-label">гарантия</div>
              </div>
            </Reveal>
            <div className="about-features">
              {[
                {
                  icon: "shield",
                  title: "Гарантия до 5 лет",
                  desc: "Точный срок и условия фиксируем в договоре. Сервисное обслуживание после сдачи.",
                },
                {
                  icon: "calc",
                  title: "Точные расчёты",
                  desc: "Гидравлика, нагрузка на грунт, теплопотери — всё считаем до старта работ.",
                },
                {
                  icon: "cube",
                  title: "Проверенное оборудование",
                  desc: "Работаем с Emaux, Hayward, Kripsol, AquaViva. Подбираем под бюджет.",
                },
                {
                  icon: "users",
                  title: "Своя бригада",
                  desc: "Без субподрядчиков. Контроль качества на каждом этапе строительства.",
                },
              ].map((f, i) => (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="feature-item">
                    <div className="feature-icon"><Icon d={ICONS[f.icon]} size={20} /></div>
                    <div>
                      <div className="feature-title">{f.title}</div>
                      <div className="feature-desc">{f.desc}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACTS ===== */}
        <section className="contacts" id="contacts">
          <div className="contacts-inner">
            <Reveal>
              <span className="section-label">Контакты</span>
              <h2 className="section-title">Давайте создадим ваш бассейн</h2>
              <p className="section-subtitle">
                Расскажите о вашей идее — мы предложим лучшее решение.
              </p>
            </Reveal>
            <div className="contacts-grid">
              <div className="contacts-info">
                <div className="contact-item">
                  <div className="contact-icon"><Icon d={ICONS.pin} size={20} /></div>
                  <div>
                    <div className="contact-label">Адрес</div>
                    <div className="contact-value">Краснодар, Россия</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><Icon d={ICONS.phone} size={20} /></div>
                  <div>
                    <div className="contact-label">Телефон</div>
                    <div className="contact-value">
                      <a href="tel:+79189332053">+7 (918) 933-20-53</a>
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><Icon d={ICONS.mail} size={20} /></div>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value">
                      <a href="mailto:info@glubina-pool.ru">info@glubina-pool.ru</a>
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><Icon d={ICONS.clock} size={20} /></div>
                  <div>
                    <div className="contact-label">Режим работы</div>
                    <div className="contact-value">Пн–Сб: 9:00 – 19:00</div>
                  </div>
                </div>
                <div className="messenger-row">
                  {MESSENGERS.map((m) => (
                    <a
                      key={m.id}
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`messenger-btn ${m.id}`}
                      onClick={() => trackGoal("messenger")}
                    >
                      {m.icon}
                      {m.label}
                    </a>
                  ))}
                </div>
              </div>

              <form id="form" className="contact-form" onSubmit={onSubmit}>
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
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Сообщение</label>
                  <textarea
                    className={`form-textarea${flash ? " flash" : ""}`}
                    id="message"
                    name="message"
                    placeholder="Опишите ваш проект: размеры участка, пожелания, бюджет"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="form-submit" disabled={submitState === "sending"}>
                  {submitState === "sending" ? "Отправка…" : "Отправить заявку"}
                </button>
                {submitState === "success" && (
                  <div className="form-status success" role="status">
                    Заявка отправлена! Свяжемся с вами в ближайшее время.
                  </div>
                )}
                {submitState === "error" && (
                  <div className="form-status error" role="alert">
                    {submitError}
                  </div>
                )}
                <p className="form-note">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="/privacy/">обработкой персональных данных</a>
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="faq" id="faq">
          <div className="faq-inner">
            <Reveal>
              <span className="section-label">Частые вопросы</span>
              <h2 className="section-title">Отвечаем на главное</h2>
              <p className="section-subtitle">
                Собрали вопросы, которые чаще всего задают перед началом проекта.
              </p>
            </Reveal>
            <div className="faq-list">
              {FAQ.map((item, i) => (
                <div key={item.q} className={`faq-item${openFaq === i ? " open" : ""}`}>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {item.q}
                    <Icon d={ICONS.chevronDown} size={20} className="faq-icon" />
                  </button>
                  <div className="faq-answer" id={`faq-answer-${i}`}>{item.a}</div>
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
                  {NAV_LINKS.map((l) => (
                    <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="footer-title">Услуги</h4>
                <ul className="footer-list">
                  {SERVICE_PAGES.map((s) => (
                    <li key={s.href}><a href={s.href}>{s.label}</a></li>
                  ))}
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

        {/* Пузыри поверх всей страницы */}
        <BubblesLayer />
        <FloatingMessengers />

        {/* JSON-LD: FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
        {/* JSON-LD: компания */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Глубина",
              url: "https://glubina-pool.ru",
              telephone: "+79189332053",
              email: "info@glubina-pool.ru",
              description:
                "Проектирование и строительство бассейнов: под ключ, поставка оборудования, монтаж, шеф-монтаж, сервис.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Краснодар",
                addressCountry: "RU",
              },
              areaServed: [
                "Краснодарский край",
                "Адыгея",
                "Ростовская область",
                "Ставропольский край",
                "Крым",
              ],
              openingHours: "Mo-Sa 09:00-19:00",
            }),
          }}
        />
      </>
    </MotionConfig>
  );
}