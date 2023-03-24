// Components
import Header from './Components/Header';

// Assets
import './App.css';
import PollenInfo from './Components/PollenInfo';

function App() {
  console.log("App has rendered")

  return (
    <div className="App">
      <Header />
      <main>
        <PollenInfo />
      </main>
    </div>
  );
}

export default App;
