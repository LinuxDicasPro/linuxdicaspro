const CardItem = ({ nome, descricao, link, link_imagem }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-item-link">
            <div className="card-item">
                <img src={link_imagem} alt={nome} className="card-item-image" />
                <div className="card-item-content">
                    <h3 className="card-item-title">{nome}</h3>
                    <p className="card-item-description">{descricao}</p>
                </div>
            </div>
        </a>
    );
};

export default CardItem;
