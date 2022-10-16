//Components import
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Video from "./components/Video";
import Headsets from "./components/Headsets";
import Testimonial from "./components/Testimonial";
import Explore from "./components/Explore";
//animaciones
import Aos from "aos";
import "aos/dist/aos.css";

//Zone Clock
import ZoneClock from "./components/ZoneClock";

function App() {
  const [navegar, setNavegar] = useState(false);
  //configuracion inicial aos
  useEffect(() => {
    Aos.init({ duration: 2500, delay: 400 });
  }, []);

  return (
    <div className=" relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px]  before:hidden before:lg:flex">
      <Header setNavegar={setNavegar} />
      <ZoneClock />
      <Banner />
      <div
        className={`${
          navegar ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavegar={setNavegar} />
      </div>
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Explore />
    </div>
  );
}

export default App;
