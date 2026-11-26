import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  wrap: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#050914",
    color: "#ffffff",
    padding: "40px 20px",
    textAlign: "center",
  },
  inner: {
    maxWidth: 560,
  },
  code: {
    fontSize: "clamp(72px, 18vw, 140px)",
    fontWeight: 800,
    lineHeight: 1,
    margin: 0,
    color: "#4da3ff",
    letterSpacing: "-4px",
  },
  title: {
    fontSize: "clamp(22px, 4vw, 32px)",
    fontWeight: 700,
    margin: "16px 0 12px",
    lineHeight: 1.3,
  },
  text: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.65)",
    margin: "0 0 32px",
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center",
  },
  primary: {
    display: "inline-block",
    padding: "14px 28px",
    borderRadius: 10,
    background: "#4da3ff",
    color: "#050914",
    fontWeight: 700,
    fontSize: 16,
    textDecoration: "none",
  },
  secondary: {
    display: "inline-block",
    padding: "14px 28px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: 16,
    textDecoration: "none",
  },
  phone: {
    marginTop: 32,
    fontSize: 15,
    color: "rgba(255,255,255,0.5)",
  },
  phoneLink: {
    color: "#4da3ff",
    textDecoration: "none",
    fontWeight: 600,
  },
};

export default function NotFound() {
  return (
    <div style={styles.wrap}>
      <div style={styles.inner}>
        <p style={styles.code}>404</p>
        <h1 style={styles.title}>Такой страницы у нас нет</h1>
        <p style={styles.text}>
          Возможно, ссылка устарела или в адресе опечатка. Вернитесь на главную —
          там есть всё о строительстве бассейнов под ключ в Краснодаре: услуги,
          оборудование и расчёт стоимости.
        </p>

        <div style={styles.buttons}>
          <a href="/" style={styles.primary}>
            На главную
          </a>
          <a href="/#form" style={styles.secondary}>
            Оставить заявку
          </a>
        </div>

        <p style={styles.phone}>
          Или позвоните:{" "}
          <a href="tel:+79189332053" style={styles.phoneLink}>
            +7 (918) 933-20-53
          </a>
        </p>
      </div>
    </div>
  );
}