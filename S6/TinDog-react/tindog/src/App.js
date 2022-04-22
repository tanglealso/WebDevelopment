
import './App.css';
import './css/styles.css';
import Title from './Title.js'
import Features from './Features.js'
import Testimonials from './Testimonials.js'
import Press from './Press.js'

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Features></Features>
      <Testimonials></Testimonials>
      <Press></Press>
      <h3>Pricing</h3>
      <h3>CallToAction</h3>
      <h3>Footer</h3>
    </div>
  );
}

export default App;
