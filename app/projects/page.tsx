import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";
import ProjectsClient from "@/components/ProjectsClient";

export const metadata = {
  title: "Projects | Mezemir Guchale",
  description: "10 data science projects at the intersection of finance and machine learning.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <ProjectsClient projects={projects} />
      <Footer />
    </>
  );
}
