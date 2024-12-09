import Banner from "@/componets/Banner";
import Cards from "@/componets/Cards";
import Footer from "@/componets/Footer";
import Girl from "@/componets/Girl";
import Header from "@/componets/Header";
import Student from "@/componets/Student";
import Student1 from "@/componets/Student1";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <Cards/>
    <Student/>
    <Girl/>
    <Student1/>
    <Footer/>
    </>
  );
}
