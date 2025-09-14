import { useState } from "react";
import Comunicados from "../components/Comunicados";

const Inicio = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="page">
            <div className="top-section">
                <div className="welcome">
                    <h2>Bem-Vindo 🚀</h2>
                    <div className="welcome-container">
                        <p className="welcome-text">
                            Um espaço para explorar o mundo Linux, com artigos detalhados, guias práticos e conteúdos
                            selecionados para ajudar iniciantes e usuários avançados a aproveitar ao máximo o sistema.
                        </p>
                        <p className="welcome-text">
                            Indicações de produtos recomendados por meio de <b>Links de Afiliados</b>, cuidadosamente
                            selecionados para garantir qualidade e confiança. Ao adquirir algum produto por esses links,
                            você apoia o canal e ajuda a continuar produzindo conteúdo gratuito e de qualidade.
                        </p>
                        <p className="welcome-text">
                            Acompanhe os projetos do canal, desenvolvidos para ajudar e agregar ao ecossistema <b>Linux</b>.
                        </p>
                    </div>

                    <button
                        className="comunicados-button"
                        onClick={() => setModalOpen(true)} >
                        Comunicados e Dicas
                    </button>
                </div>

                <div className="welcome-comunicados">
                    <Comunicados />
                </div>

                {modalOpen && (
                    <div className="comunicados-modal" onClick={() => setModalOpen(false)} >
                        <div className="comunicados-modal-content" onClick={(e) => e.stopPropagation()} >
                            <button className="comunicados-modal-close" onClick={() => setModalOpen(false)} >✕</button>
                            <Comunicados />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Inicio;

