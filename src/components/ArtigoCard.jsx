const ArtigoCard = ({ artigo, onClick }) => {
    return (
        <div className="artigo-card" onClick={() => onClick(artigo)}>
            <img
                src={artigo.banner}
                alt={artigo.title}
                className="artigo-banner"
            />
            <div className="artigo-info">
                <span className="artigo-categoria">{artigo.categories}</span>
                <h3 className="artigo-titulo">{artigo.title}</h3>
                <p className="artigo-data">{artigo.date}</p>
            </div>
        </div>
    );
};

export default ArtigoCard;
