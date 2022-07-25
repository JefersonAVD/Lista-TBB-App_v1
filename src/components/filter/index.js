import "./index.css";

const Filter = ({data, functions,show}) =>{
    const set = new Set();
    const cat =  data.map((item) => item = item.category).filter(
        item=>{
            const dup = set.has(item.name);
            set.add(item.name);
            return !dup;
    });

    const selected = (evt)=>{
        document.querySelectorAll('.filter__button').forEach(btn=>btn.classList.remove("selected"))
        functions.genderChange(evt);
        evt.target.classList.add("selected")
    }
    
    return(
        <div className={`filter ${show && " selected"}` }>
            <input className="filter__input" type="text" onChange={functions.nameChange} placeholder="Buscar pelo nome..."/>
            <select className="filter__select" name="category" onChange={functions.selectChange}>
                <option value="">-- selecione uma categoria --</option>
                {cat.map(element=>{
                    return(
                        <option value={element.name} key={element._id}>{element.name}</option>
                    );
                })}
            </select>
                <div className="filter__choices">
                    <button className="filter__button selected" onClick={selected} value="">Todos</button>
                    <button className="filter__button" onClick={selected} value=" women">Women</button>
                    <button className="filter__button" onClick={selected} value=" men">Men</button>
                </div>
        </div>
    );
}

export default Filter;