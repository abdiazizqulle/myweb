import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© 2026 Abdiaziz Qulle. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/blog">Blog</Link>
          <a href="/#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
