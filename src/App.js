import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/';
import Form from './components/Form/';
import Team from './components/Team';

function App() {

    const teams = [
      {
        nome: 'TI',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8'
      },
      {
        nome: 'Financeiro',
        corPrimaria: '#57C278',
        corSecundaria: '#D9F7E9'
      },
      {
        nome: 'Gestão',
        corPrimaria: '#82CFFA',
        corSecundaria: '#E8F8FF'
      },
      {
        nome: 'Prestação',
        corPrimaria: '#FFBA05',
        corSecundaria: '#FFF5D9'
      }
    ]

    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdicionado = (colaborador) => {
      setColaboradores([...colaboradores, colaborador])
    }

  return (
    <div className="App">
      <Banner/>
      <Form
       teams={teams.map(teams => teams.nome)}
       aoColaboradorCadastrado={colaborador=>aoNovoColaboradorAdicionado(colaborador)} />
       
      {teams.map(teams => <Team 
       key={teams.nome}
       nome={teams.nome}
       corPrimaria={teams.corPrimaria}
       corSecundaria={teams.corSecundaria}
       colaboradores={colaboradores.filter(colaborador => colaborador.team === teams.nome)}
       />)}
    </div>
  );
}

export default App;
