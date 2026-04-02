import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, projects } from "@/lib/data";
import fs from "fs";
import path from "path";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | Mezemir Guchale`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const project = projects.find((p) => p.slug === slug);

  if (!post) notFound();

  // Read markdown from blog-posts directory
  let content = "";
  try {
    const filePath = path.join(process.cwd(), "content", `${slug}.md`);
    content = fs.readFileSync(filePath, "utf-8");
  } catch {
    content = `# ${post.title}\n\nBlog post content coming soon.`;
  }

  // Simple markdown to HTML (basic conversion)
  const htmlContent = markdownToHtml(content);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="text-sm text-[#14B8A6] hover:text-[#00B4D8] transition-colors mb-6 inline-block"
          >
            &larr; Back to Blog
          </Link>

          {/* Header */}
          <article>
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-[#14B8A6]/10 text-[#14B8A6] rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-[#94A3B8]">
                <span>By Mezemir Neway Guchale</span>
                <span>&bull;</span>
                <span>{post.date}</span>
                <span>&bull;</span>
                <span>{post.readTime} read</span>
              </div>
            </div>

            {/* Content */}
            <div
              className="prose prose-invert max-w-none
                [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4
                [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#00B4D8] [&_h3]:mt-8 [&_h3]:mb-3
                [&_p]:text-[#CBD5E1] [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-[15px]
                [&_ul]:text-[#CBD5E1] [&_ul]:mb-4 [&_ul]:pl-6 [&_ul]:list-disc
                [&_ol]:text-[#CBD5E1] [&_ol]:mb-4 [&_ol]:pl-6 [&_ol]:list-decimal
                [&_li]:mb-2 [&_li]:text-[15px]
                [&_strong]:text-white [&_strong]:font-semibold
                [&_em]:text-[#00B4D8]
                [&_hr]:border-[#1E293B] [&_hr]:my-8
                [&_table]:w-full [&_table]:mb-6 [&_table]:text-sm
                [&_th]:text-left [&_th]:text-[#22D3EE] [&_th]:py-2 [&_th]:px-3 [&_th]:border-b [&_th]:border-[#1E293B]
                [&_td]:py-2 [&_td]:px-3 [&_td]:text-[#CBD5E1] [&_td]:border-b [&_td]:border-[#1E293B]/50
                [&_a]:text-[#14B8A6] [&_a]:underline [&_a]:hover:text-[#00B4D8]
                [&_blockquote]:border-l-4 [&_blockquote]:border-[#14B8A6] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-[#94A3B8]"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </article>

          {/* Related project */}
          {project && (
            <div className="mt-12 p-6 bg-[#111827] border border-[#1E293B] rounded-xl">
              <p className="text-sm text-[#14B8A6] font-semibold uppercase tracking-wider mb-2">
                Related Project
              </p>
              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 bg-[#14B8A6]/10 text-[#14B8A6] rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#22D3EE] hover:underline"
                >
                  View on GitHub &rarr;
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#14B8A6] hover:underline"
                  >
                    Live Demo &rarr;
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function markdownToHtml(md: string): string {
  let html = md;

  // Remove the first H1 (we render it separately)
  html = html.replace(/^# .+\n/, "");

  // Remove author line at top
  html = html.replace(/^\*By .+\*\n/m, "");

  // Horizontal rules
  html = html.replace(/^---$/gm, "<hr />");

  // Headers
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");

  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="text-[#22D3EE] bg-[#1E293B] px-1.5 py-0.5 rounded text-sm">$1</code>');

  // Tables
  html = html.replace(/\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)+)/g, (_, header, body) => {
    const ths = header.split("|").filter((s: string) => s.trim()).map((s: string) => `<th>${s.trim()}</th>`).join("");
    const rows = body.trim().split("\n").map((row: string) => {
      const tds = row.split("|").filter((s: string) => s.trim()).map((s: string) => `<td>${s.trim()}</td>`).join("");
      return `<tr>${tds}</tr>`;
    }).join("");
    return `<table><thead><tr>${ths}</tr></thead><tbody>${rows}</tbody></table>`;
  });

  // Ordered lists
  html = html.replace(/^(\d+\. .+(?:\n\d+\. .+)*)/gm, (match) => {
    const items = match.split("\n").map((line) => `<li>${line.replace(/^\d+\. /, "")}</li>`).join("");
    return `<ol>${items}</ol>`;
  });

  // Unordered lists
  html = html.replace(/^(- .+(?:\n- .+)*)/gm, (match) => {
    const items = match.split("\n").map((line) => `<li>${line.replace(/^- /, "")}</li>`).join("");
    return `<ul>${items}</ul>`;
  });

  // Paragraphs (lines that aren't already HTML)
  html = html.replace(/^(?!<[houltb]|<\/|<hr|$)(.+)$/gm, "<p>$1</p>");

  // Clean up empty paragraphs and extra newlines
  html = html.replace(/<p>\s*<\/p>/g, "");
  html = html.replace(/\n{3,}/g, "\n\n");

  return html;
}
