import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import {
  formatDate,
  getAllPosts,
  getPostBySlug,
  renderMarkdown
} from "../../../lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);
  const html = renderMarkdown(post.content);

  return (
    <>
      <SiteHeader current="blog" />
      <main>
        <article className="post">
          <div className="container">
            <div className="post-meta">
              <p className="post-date">{formatDate(post.date)}</p>
              <p className="post-reading">{post.readTime}</p>
            </div>
            <h1>{post.title}</h1>
            <p className="lead">{post.description}</p>

            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <div className="post-footer">
              <Link className="text-link" href="/blog">
                Back to all essays
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
