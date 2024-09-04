import "./TxtField.css"

const TxtField = (props) => {

    return(
        <div className="campo-texto">   
            <label> {props.label} </label>

            <input required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default TxtField