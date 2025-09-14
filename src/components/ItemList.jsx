import CardItem from './CardItem';
import loadGif from '../assets/load.gif';

const ItemList = ({ title, items, isLoading }) => {
    if (isLoading) {
        return (
            <div className="loading-container">
                <h2>{title}</h2>
                <img src={String(loadGif)} alt="Carregando..." className="loading-gif" />
            </div>
        );
    }

    return (
        <>
            <h2>{title}</h2>
            <div className="item-list-container">
                {items.length > 0 ? (
                    items.map((item) => (
                        <CardItem
                            key={item.id}
                            nome={item.nome}
                            descricao={item.descricao}
                            link={item.link}
                            link_imagem={item.link_imagem}
                        />
                    ))
                ) : (
                    <div className="loading-container">
                        <img src={String(loadGif)} alt="Carregando..." className="loading-gif" />
                    </div>
                )}
            </div>
        </>
    );
};

export default ItemList;