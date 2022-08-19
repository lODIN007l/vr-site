//Components import
import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";

function App() {
  const [navegar, setNavegar] = useState(false);
  return (
    <div>
      <Header setNavegar={setNavegar} />
      <Banner />
      <div
        className={`${
          navegar ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavegar={setNavegar} />
      </div>
    </div>
  );
}

export default App;
