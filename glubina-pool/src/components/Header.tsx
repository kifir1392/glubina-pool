"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050914]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Логотип */}
        <a href="/" className="text-2xl font-bold tracking-tight">
          Глубина<span className="text-blue-500">.</span>
        </a>

        {/* Навигация для десктопа */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-300 hover:text-white transition-colors">
            Услуги
          </a>
          <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
            Портфолио
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">
            О компании
          </a>
          <a href="#contacts" className="text-gray-300 hover:text-white transition-colors">
            Контакты
          </a>
        </nav>

        {/* Кнопка CTA */}
        <a 
          href="#contacts" 
          className="hidden md:block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Обсудить проект
        </a>

        {/* Бургер-меню для мобильных */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#050914] border-t border-white/5">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
              Портфолио
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              О компании
            </a>
            <a href="#contacts" className="text-gray-300 hover:text-white transition-colors">
              Контакты
            </a>
            <a 
              href="#contacts" 
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-center"
            >
              Обсудить проект
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}