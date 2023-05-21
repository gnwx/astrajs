import Companies from "./components/Companies";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { features } from "./constants/features";
const App = () => {
  return (
    <div className="font-inter dark:bg-darkMode  ">
      <Navbar />
      <Hero />
      <Companies />
      {features.map((feature) => (
        <Feature feature={feature} />
      ))}
      <Footer />
    </div>
  );
};

export default App;
