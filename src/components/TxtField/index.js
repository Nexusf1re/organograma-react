import "./TxtField.css"

const TxtField = (props) => {

    let valor = 'Matteus Abreu'

    const aoDigitar = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return(
        <div className="campo-texto">   
            <label> {props.label} </label>

            <input value={valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default TxtField