import { motion } from "framer-motion";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Diferenciais from "./components/Diferenciais";
import Contato from "./components/Contato";

const sectionFade = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const pageFlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

function App() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageFlow}
      className="bg-rangel-dark text-white"
    >
      <Header />

      <motion.section id="inicio" variants={sectionFade}>
        <HeroVideo />
      </motion.section>

      <motion.section id="sobre" variants={sectionFade}>
        <Sobre />
      </motion.section>

      <motion.section id="servicos" variants={sectionFade}>
        <Servicos />
      </motion.section>

      <motion.section id="diferenciais" variants={sectionFade}>
        <Diferenciais />
      </motion.section>

      <motion.section id="contato" variants={sectionFade}>
        <Contato />
      </motion.section>
    </motion.div>
  );
}

export default App;
