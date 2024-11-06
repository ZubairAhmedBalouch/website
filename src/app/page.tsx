


import AboutUs from "./Components/about";
import Cards from "./Components/mycards";
import Header from "./Components/header";
import ContactSection from "./Components/contact";



export default function Home() {
  return (
    <div>
      <Header/>
      <Cards/>
      <AboutUs/>
    
      <ContactSection/>
    </div>
  );
}
