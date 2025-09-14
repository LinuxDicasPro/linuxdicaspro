import ComunicadoCard from "./ComunicadoCard";
import {useEffect, useState} from "react";
import loadGif from "../assets/load.gif";

let comunicadosCache = null;

const Comunicados = () => {
    const [comunicados, setComunicados] = useState(comunicadosCache || []);
    const [loading, setLoading] = useState(!comunicadosCache);

    useEffect(() => {
        if (comunicadosCache) {
            setComunicados(comunicadosCache);
            setLoading(false);
            return;
        }

        fetch(
            "https://raw.githubusercontent.com/LinuxDicasPro/LinuxDicasPro_Public_Files/f4fd4e77ed75eeed8f998f3075f2bc2a58d406c8/comunicados.json"
        )
            .then((res) => res.json())
            .then((data) => {
                const reversed = data.reverse();
                comunicadosCache = reversed;
                setComunicados(reversed);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erro ao carregar comunicados:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <img src={String(loadGif)} alt="Carregando..." className="loading-gif" />
            </div>
        );
    }

    return (
        <>
            <h2>📢 Comunicados e Dicas</h2>
            <div className="comunicados">
                {comunicados.length === 0 ? (
                    <div className="comunicado-card">
                        <p>Nenhum</p>
                    </div>
                ) : (
                    comunicados.map(({ id, titulo, descricao }) => (
                        <ComunicadoCard key={id} titulo={titulo} descricao={descricao} />
                    ))
                )}
            </div>
        </>
    );
};

export default Comunicados;
