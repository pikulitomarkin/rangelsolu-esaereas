import { motion } from "framer-motion";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Diferenciais from "./components/Diferenciais";
import Contato from "./components/Contato";

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const pageFlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

function App() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageFlow}
      className="min-h-screen bg-white text-slate-900 [&_h1]:text-balance [&_h1]:tracking-tighter [&_h2]:text-balance [&_h2]:tracking-tighter"
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
