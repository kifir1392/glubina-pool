export default function Footer() {
  return (
    <footer className="bg-[#020610] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Логотип и описание */}
          <div className="md:col-span-2">
            <a href="/" className="text-2xl font-bold tracking-tight mb-4 block">
              Глубина<span className="text-blue-500">.</span>
            </a>
            <p className="text-gray-400 max-w-md">
              Инжиниринг и строительство бассейнов в Краснодаре. 
              Проектирование, гидравлические расчеты, монтаж оборудования.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-white font-medium mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Портфолио</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">О компании</a></li>
              <li><a href="#contacts" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-white font-medium mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Краснодар, Россия</li>
              <li>+7 (XXX) XXX-XX-XX</li>
              <li>info@glubina-pool.ru</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          © 2026 Глубина. Все права защищены.
        </div>
      </div>
    </footer>
  );
}