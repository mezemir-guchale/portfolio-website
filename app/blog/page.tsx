import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";
import BlogClient from "@/components/BlogClient";

export const metadata = {
  title: "Blog | Mezemir Guchale",
  description: "Technical articles on data science, finance, and machine learning.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <BlogClient posts={blogPosts} />
      <Footer />
    </>
  );
}
