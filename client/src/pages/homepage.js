import Banner from "../components/banner";
import Header from "../components/header";
import  "../app.css";
import Buttons from "../components/buttons";
import Features from "../components/features";
import Footer from "../components/footer";
import Contact from "../components/contact";
import FAQSection from "../components/faqs";
import Gallery from "../components/gallery";

function Home() {
  return (
    <div className="Home">
     <Header />
     <Banner />
     <Buttons />
     <Features />
     <Gallery />
     <FAQSection />
     <Contact />
     <Footer />

    </div>
  );
}

export default Home;


