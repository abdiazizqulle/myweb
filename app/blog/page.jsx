import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { formatDate, getAllPosts } from "../../lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <SiteHeader current="blog" />
      <main>
        <section className="hero slim">
          <div className="container">
            <p className="eyebrow">Writing</p>
            <h1>Essays, notes, and case studies.</h1>
            <p className="lead">
              Thoughts on policy analysis, ICT, leadership, and the systems that
              turn research into outcomes.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="blog-grid">
              {posts.map((post) => (
                <article className="post-card wide" key={post.slug}>
                  <p className="post-date">{formatDate(post.date)}</p>
                  <h3>{post.title}</h3>
                  <p className="muted">{post.description}</p>
                  <Link className="text-link" href={`/posts/${post.slug}`}>
                    Read essay
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
