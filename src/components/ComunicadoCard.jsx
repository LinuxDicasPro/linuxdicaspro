const ComunicadoCard = ({ titulo, descricao }) => {
    return (
        <div className="comunicado-card">
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>
    );
};

export default ComunicadoCard;
