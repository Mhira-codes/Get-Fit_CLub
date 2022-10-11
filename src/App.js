import "./App.css";
import Hero from "./components/Hero/Hero";
import Join from "./components/Hero/Join/Join";
import Plans from "./components/Hero/Plans/Plans";
import Program from "./components/Hero/Programs/Program";
import Reasons from "./components/Hero/Reasons/Reason";
import Testimonials from "./components/Hero/Testimonials/Testimonial";
import Footer from "./components/Hero/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
<Footer/>
    </div>
  );
}

export default App;
