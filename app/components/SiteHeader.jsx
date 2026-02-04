import Link from "next/link";

export default function SiteHeader({ current }) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <span className="brand-mark">AQ</span>
          <div className="brand-text">
            <p className="brand-name">Abdiaziz Qulle</p>
            <p className="brand-role">Researcher · Policy Analyst · ICT Expert</p>
          </div>
        </div>
        <nav className="site-nav">
          <Link className={current === "home" ? "is-active" : ""} href="/">
            Home
          </Link>
          <Link className={current === "blog" ? "is-active" : ""} href="/blog">
            Blog
          </Link>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
