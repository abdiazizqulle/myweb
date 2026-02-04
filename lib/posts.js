import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const filenames = fs.readdirSync(postsDirectory);
  return filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = filename.replace(/\.md$/, "");
      return {
        slug,
        content,
        ...data
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    content,
    ...data
  };
}

export function renderMarkdown(markdown) {
  return marked.parse(markdown);
}

export function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
