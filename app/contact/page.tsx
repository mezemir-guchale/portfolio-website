import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo } from "@/lib/data";
import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: "Contact | Mezemir Guchale",
  description: "Get in touch with Mezemir Guchale for data science and risk analytics opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactClient personalInfo={personalInfo} />
      <Footer />
    </>
  );
}
