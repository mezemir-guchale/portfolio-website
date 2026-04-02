import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo, skills, projects, blogPosts } from "@/lib/data";
import HomeClient from "@/components/HomeClient";

export default function Home() {
  const featuredProjects = projects.slice(0, 4);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Navbar />
      <HomeClient
        personalInfo={personalInfo}
        skills={skills}
        featuredProjects={featuredProjects}
        latestPosts={latestPosts}
      />
      <Footer />
    </>
  );
}
