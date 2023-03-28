// Components
import Header from './Components/Header';
import HumidexInfo from './Components/HumidexInfo';

// Assets
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <HumidexInfo />
      </main>
    </div>
  );
}

export default App;
