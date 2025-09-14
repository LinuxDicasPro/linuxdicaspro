import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import loadGif from "../assets/load.gif";

const ArtigoDetalhe = ({ artigo, conteudo, isLoading, onBack }) => {
    return (
        <div className="artigo-detalhe-scroll">
            <div className="artigo-detalhe">
                <div className="artigo-detalhe-border">
                    <button className="voltar-btn" onClick={onBack}> 🡠 </button>
                    <div className="artigo-space">
                        <p className="artigo-categoria">{artigo.categories}</p>
                        <h1>{artigo.title}</h1>
                        <p className="artigo-data">{artigo.date}</p>
                    </div>
                    {isLoading ? (
                        <div className="loading-container">
                            <img src={String(loadGif)} alt="Carregando..." className="loading-gif" />
                        </div>
                    ) : (
                        <div className="artigo-md">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {conteudo}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArtigoDetalhe;
