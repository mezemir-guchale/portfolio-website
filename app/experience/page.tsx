import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { experience, education, skills } from "@/lib/data";
import ExperienceClient from "@/components/ExperienceClient";

export const metadata = {
  title: "Experience | Mezemir Guchale",
  description: "12+ years of finance, auditing, and risk management experience.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <ExperienceClient
        experience={experience}
        education={education}
        skills={skills}
      />
      <Footer />
    </>
  );
}
