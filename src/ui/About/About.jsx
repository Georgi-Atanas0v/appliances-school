import PageNav from "../PageNav/PageNav";
import "./About.css";
import Logos from "./Logos";
import WelcomeAbout from "./WelcomeAbout";
import Footer from "../Footer/Footer";
import Nutshell from "./Nutshell";
function About() {
  return (
    <div>
      <PageNav />
      <div className="asd h-[60vh] text-center flex flex-col justify-center items-center space-y-10 font-semibold w-full">
        <h1 className="text-5xl leading-3 header">Famous Products</h1>
        <h1 className="text-4xl">Best Utensils Cookware</h1>
        <p className="text-2xl mt-5 w-full md:w-[60vw]">
          Telusem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
      </div>
      <WelcomeAbout />
      <Logos />
      <Nutshell />
      <Footer />

      <button></button>
    </div>
  );
}

export default About;
