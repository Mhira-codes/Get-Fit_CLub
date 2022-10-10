
import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Hero/Plans/Plans';
import Program from './components/Hero/Programs/Program';
import Reasons from './components/Hero/Reasons/Reason';
import Testimonials from './components/Hero/Testimonials/Testimonial';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
    <Reasons/>
<Plans/>
<Testimonials/>
    </div>
  );
}

export default App;
