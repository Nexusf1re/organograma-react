import "./TxtField.css"

const TxtField = (props) => {

    return(
        <div className="campo-texto">   
            <label> {props.label} </label>

            <input placeholder={props.placeholder} />
        </div>
    )
}

export default TxtField