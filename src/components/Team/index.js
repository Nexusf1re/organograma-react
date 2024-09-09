import "./Team.css"
import Colaborador from "../Colaborador"

const Team = (props) => {

    const cssPri = {borderColor: props.corPrimaria}
    const cssSec = {backgroundColor: props.corSecundaria}

    return(
       props.colaboradores.length > 0 ? <section className="time" style={cssSec}>
                <h3 style={cssPri}>{props.nome}</h3>
                <div className="colaboradores">
                {props.colaboradores.map(colaborador => 
                <Colaborador 
                nome={colaborador.nome} 
                cargo = {colaborador.cargo} 
                imagem={colaborador.imagem}
                key={colaborador.nome}
                corDeFundo={props.corPrimaria}
                />)}
                </div>
        </section>
        : ''
    )
}       

export default Team