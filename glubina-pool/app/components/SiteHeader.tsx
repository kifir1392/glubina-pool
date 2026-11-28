"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Главная" },
  { href: "/#services", label: "Услуги" },
  { href: "/#portfolio", label: "Портфолио" },
  { href: "/#about", label: "О компании" },
  { href: "/#contacts", label: "Контакты" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="header-inner">
        <a href="/" className="logo">
          Глубина<span className="logo-accent">.</span>
        </a>
        <nav className="nav-desktop" aria-label="Основная навигация">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="tel:+79189332053" className="header-phone">+7 (918) 933-20-53</a>
          <a href="/#contacts" className="btn-nav">Обсудить проект</a>
        </nav>
        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="tel:+79189332053" className="header-phone" onClick={() => setOpen(false)}>+7 (918) 933-20-53</a>
          <a href="/#contacts" className="btn-nav" onClick={() => setOpen(false)}>Обсудить проект</a>
        </div>
      )}
    </header>
  );
}