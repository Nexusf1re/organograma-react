import './App.css';
import Banner from './components/Banner/';
import TxtField from './components/TxtField';

function App() {
  return (
    <div className="App">
      <Banner/>
      <TxtField label="Nome"/>
      <TxtField label="Cargo"/>
      <TxtField label="Imagem"/>
    </div>
  );
}

export default App;
