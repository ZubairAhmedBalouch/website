import MyComponent from "./Components/header";
import Mycards from "./Components/mycards";
import Contact from "./Components/contact";
import About from "./Components/about";


export default function Home() {
  return (
    <div>
      <MyComponent />
      <Mycards />
      <About />
      <Contact />
    </div>
  );
}
