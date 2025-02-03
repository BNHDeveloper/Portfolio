import About from "../components/About/About.jsx";
import Contact from "../components/contact/Contact.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import Home from "../components/home/home.jsx";
import Navbar from "../components/nav/nav.jsx";
import Services from "../components/services/Services.jsx";

const HomePage = () => {
    return ( 
        <div className="">
            <Navbar />
            <Home />
            <About />
            <Services />
            <Contact/>
            <Footer/>
        </div>
    )
}

export default HomePage;