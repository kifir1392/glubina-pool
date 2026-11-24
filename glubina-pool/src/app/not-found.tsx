export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#050914',
      color: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '8rem', fontWeight: 700, margin: 0, color: '#3b82f6' }}>
        404
      </h1>
      <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '1rem 0' }}>
        Страница не найдена
      </h2>
      <p style={{ color: '#9ca3af', maxWidth: '500px', lineHeight: 1.6, marginBottom: '2rem' }}>
        Возможно, она была удалена или вы перешли по устаревшей ссылке.
        Вернитесь на главную — там вся информация о наших услугах.
      </p>
      <a
        href="/"
        style={{
          padding: '1rem 2rem',
          background: '#2563eb',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.5rem',
          fontWeight: 500,
          transition: 'background 0.3s',
        }}
      >
        На главную
      </a>
    </div>
  );
}