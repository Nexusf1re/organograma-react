import "./Form.css";
import TxtField from "../TxtField";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";

const Form = () => {

  const teams = [
    'Programador',
    'Gerente',
    'Supervisor',
    'Prestador'
  ]

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [team, setTeam] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log("Form foi submetido =>", nome, cargo, imagem, team)
  }

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TxtField
           obrigatorio={true} 
           label="Nome" 
           placeholder="Digite seu nome" 
           valor={nome}
           aoAlterado={valor => setNome(valor)}
         />
        <TxtField
           obrigatorio={true}
           label="Cargo"
           placeholder="Digite seu cargo" 
           valor={cargo}
           aoAlterado={valor => setCargo(valor)}
           />
        <TxtField
           label="Imagem"
           placeholder="Digite o endereço da imagem"
           valor={imagem}
           aoAlterado={valor => setImagem(valor)}
          />
        <Dropdown
           obrigatorio={true}
           label="Time"
           itens={teams}
           valor={team}
           aoAlterado={valor => setTeam(valor)}
           />
        <Button text="Criar Card"/>
      </form>
    </section>
  );
};

export default Form;
