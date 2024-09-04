import "./Form.css";
import TxtField from "../TxtField";
import Dropdown from "../Dropdown";
import Button from "../Button";

const Form = () => {

  const teams = [
    'Programador',
    'Gerente',
    'Supervisor',
    'Prestador'
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log("Form foi submetido")
  }

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TxtField obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <TxtField obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
        <TxtField label="Imagem" placeholder="Digite o endereço da imagem" />
        <Dropdown obrigatorio={true} label="Time" itens={teams}/>
        <Button text="Criar Card"/>
      </form>
    </section>
  );
};

export default Form;
