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

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TxtField label="Nome" placeholder="Digite seu nome" />
        <TxtField label="Cargo" placeholder="Digite seu cargo" />
        <TxtField label="Imagem" placeholder="Digite o endereço da imagem" />
        <Dropdown label="Time" itens={teams}/>
        <Button text="Criar Card"/>
      </form>
    </section>
  );
};

export default Form;
