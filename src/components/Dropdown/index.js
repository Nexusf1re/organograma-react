import "./Dropdown.css"

const Dropdown = (property) => {
    
    return  (
        <div className="lista-suspensa">
        <label>{property.label}</label>
        <select onChange={evento => property.aoAlterado(evento.target.value)} 
        value={property.valor} 
        required={property.obrigatorio}>
            <option disabled value=''>Selecionar</option>
        {property.itens.map(item => <option key={item}>{item}</option>)}
        </select>
        </div>
    )
}

export default Dropdown