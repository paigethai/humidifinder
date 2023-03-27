// Components
import Header from './Components/Header';

// Assets
import './App.css';
import HumidexInfo from './Components/HumidexInfo';

function App() {
  console.log("App has rendered")

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
