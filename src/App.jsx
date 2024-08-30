import About from "./ui/About";
import Github from "./ui/Github";
import Banner from "./ui/Banner";
import Contact from "./ui/Contact";
import Skills from "./ui/Skills";
import Header from "./ui/Header";
import LeftSide from "./ui/LeftSide";
import Project from "./ui/Project";
import RightSide from "./ui/RightSide";
import ScrollBtn from "./ui/ScrollBtn";
import { motion } from "framer-motion";
import Footer from "./ui/Footer";

function App() {
  return (
    <main className="font-bodyFont min-h-screen bg-primaryColor text-lightText">
      <Header />

      <Banner />
      <About />
      <Skills />
      <Project />
      <Github />
      <Contact />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0"
      >
        <LeftSide />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:inline-flex w-32 h-full fixed right-0 bottom-0"
      >
        <RightSide />
      </motion.div>
      <Footer />
      <ScrollBtn />
    </main>
  );
}

export default App;
