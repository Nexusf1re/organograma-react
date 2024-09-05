import "./TxtField.css"

const TxtField = (props) => {

    // let valor = 'Matteus Abreu'

    

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">   
            <label> {props.label} </label>

            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default TxtField