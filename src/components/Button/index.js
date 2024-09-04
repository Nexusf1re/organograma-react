import "./Button.css"

const Button = (property) => {
    return(
    <button
         className="botao"> {property.text} 
    </button>   
    )


}

export default Button