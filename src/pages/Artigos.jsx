import React, {useCallback, useEffect, useRef, useState} from "react";
import ArtigoCard from "../components/ArtigoCard";
import ArtigoDetalhe from "../components/ArtigoDetalhe";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import loadGif from "../assets/load.gif";

let artigosCache = null;

function Artigos() {
    const [artigos, setArtigos] = useState(artigosCache || []);
    const [loading, setLoading] = useState(!artigosCache);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [articleContent, setArticleContent] = useState("");
    const [isLoadingContent, setIsLoadingContent] = useState(false);

    useEffect(() => {
        if (artigosCache) {
            setArtigos(artigosCache);
            setLoading(false);
            return;
        }

        const controller = new AbortController();

        async function fetchArtigos() {
            try {
                const res = await fetch(
                    "https://raw.githubusercontent.com/LinuxDicasPro/LinuxDicasPro_Public_Files/refs/heads/master/artigos.json",
                    { signal: controller.signal }
                );
                const data = await res.json();
                artigosCache = data;
                setArtigos(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error("Erro ao carregar artigos:", err);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchArtigos().then();

        return () => controller.abort();
    }, []);

    const fetchController = useRef(null);

    const openArticle = useCallback((artigo) => {
        if (fetchController.current) {
            fetchController.current.abort();
        }

        const controller = new AbortController();
        fetchController.current = controller;

        setSelectedArticle(artigo);
        setIsLoadingContent(true);
        setArticleContent("");

        const url = new URL(window.location);
        url.searchParams.set("artigo", encodeURIComponent(artigo.title));
        window.history.pushState({}, "", url);

        const fetchContent = async () => {
            try {
                const res = await fetch(artigo.link, { signal: controller.signal });
                const md = await res.text();
                setArticleContent(md);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error("Erro ao carregar conteúdo do artigo:", err);
                }
            } finally {
                setIsLoadingContent(false);
            }
        };

        fetchContent().then();
    }, []);

    useEffect(() => {
        if (artigos.length === 0) return;

        const params = new URLSearchParams(window.location.search);
        const artigoId = params.get("artigo");
        if (!artigoId) return;

        const artigo = artigos.find(
            (a) => encodeURIComponent(a.title) === artigoId
        );
        if (artigo) {
            openArticle(artigo);
        }
    }, [artigos, openArticle]);

    const backToList = () => {
        setSelectedArticle(null);
        setArticleContent("");

        const url = new URL(window.location);
        url.searchParams.delete("artigo");
        window.history.pushState({}, "", url);
    };

    if (loading) {
        return (
            <div className="loading-container">
                <img src={String(loadGif)} alt="Carregando..." className="loading-gif" />
            </div>
        );
    }

    return (
        <div className="page">
            <AnimatePresence mode="wait">
                {selectedArticle ? (
                    <motion.div
                        key="detalhe"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ArtigoDetalhe
                            artigo={selectedArticle}
                            conteudo={articleContent}
                            isLoading={isLoadingContent}
                            onBack={backToList}
                        />
                    </motion.div>
                ) : (
                    <>
                        <div className="titulo-artigo">
                            <h2>Todos os Artigos</h2>
                        </div>
                        <motion.div
                            key="lista"
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.4 }}
                            className="artigos-grid"
                        >
                            <div className="artigos-grid">
                                {artigos.map((artigo, idx) => (
                                    <ArtigoCard key={idx} artigo={artigo} onClick={openArticle} />
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Artigos;
