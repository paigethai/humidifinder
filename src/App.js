// Components
import Header from './Components/Header';
import HumidexInfo from './Components/HumidexInfo';
import Footer from './Components/Footer';

// Assets
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <HumidexInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
