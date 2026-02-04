import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { formatDate, getAllPosts } from "../lib/posts";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  const latest = posts[0];

  return (
    <>
      <SiteHeader current="home" />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Personal Website</p>
              <h1>Research-led writing on policy, technology, and data.</h1>
              <p className="lead">
                I write about policy analysis, ICT, and data-driven decision
                making. This is my archive of essays, notes, and case studies.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/blog">
                  Read the blog
                </Link>
                <a className="button ghost" href="/#contact">
                  Work with me
                </a>
              </div>
            </div>
            {latest && (
              <div className="hero-card">
                <div className="hero-card-inner">
                  <p className="card-label">Latest Essay</p>
                  <h2>{latest.title}</h2>
                  <p className="muted">{latest.description}</p>
                  <Link className="text-link" href={`/posts/${latest.slug}`}>
                    Read in {latest.readTime}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h3>Selected Writing</h3>
              <Link className="text-link" href="/blog">
                View all essays
              </Link>
            </div>
            <div className="grid three">
              {posts.map((post) => (
                <article className="post-card" key={post.slug}>
                  <p className="post-date">{formatDate(post.date)}</p>
                  <h4>{post.title}</h4>
                  <p className="muted">{post.description}</p>
                  <Link className="text-link" href={`/posts/${post.slug}`}>
                    Read essay
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="contact">
          <div className="container contact-grid">
            <div>
              <h3>Let’s collaborate.</h3>
              <p className="muted">
                I support organizations with research, policy analysis, and ICT
                strategy. If you want a thoughtful partner, let’s talk.
              </p>
            </div>
            <div className="contact-card">
              <p className="card-label">Contact</p>
              <p className="contact-item">abdiazizqulle@gmail.com</p>
              <p className="contact-item">Kismayo · Somalia</p>
              <a className="button full" href="mailto:abdiazizqulle@gmail.com">
                Send a message
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
