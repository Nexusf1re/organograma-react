import "./Dropdown.css"

const Dropdown = (property) => {
    console.log(property.itens);
    
    return  (
        <div className="lista-suspensa">
        <label>{property.label}</label>
        <select required={property.obrigatorio}>
            {property.itens.map(item => <option key={item}>{item}</option>)}
        </select>
        </div>
    )
}

export default Dropdown