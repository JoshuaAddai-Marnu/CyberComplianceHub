import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import ServicesMission from "./sections/Services&Mission.jsx";
import WhyChooseUs from "./sections/WhyChooseUs.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
        <main className="overflow-hidden">
            <Header />
            <Hero />
            <ServicesMission />
            <WhyChooseUs />
            <Faq />
            <Testimonials />
            <About />
            <Footer />
        </main>
    );
};

export default App;