import "./index.css"
const List = ({data}) =>{
    return(
        <div className="list">
            {data.map(item => {
                return(
                    <div className="list__item" key={item.id}>
                        <div className="list__img">
                            <img width='150' height="150"src={item.images[0].asset.url} alt={item.images[0].alt}/>
                            <span className="list__cat">{item.category.name}</span>
                        </div>
                        <div className="list__content">
                            <h2 className="list__title">{item.name}</h2>
                            <p className="list__desc">{item.shortDescription}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default List;