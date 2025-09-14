import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import { listenToCollection } from '../database/firebaseService';

let cacheAmazon = null;
let cacheMercadoLivre = null;

const Produtos = () => {
    const [amazonProdutos, setAmazonProdutos] = useState(cacheAmazon || []);
    const [mercadoLivreProdutos, setMercadoLivreProdutos] = useState(cacheMercadoLivre || []);
    const [isLoading, setIsLoading] = useState(!cacheAmazon || !cacheMercadoLivre);

    useEffect(() => {
        if (!cacheAmazon) {
            const unsubscribeAmazon = listenToCollection('produtos/amazon', (data) => {
                cacheAmazon = data;
                setAmazonProdutos(data);
                setIsLoading(false);
            });
            return () => unsubscribeAmazon();
        }
    }, []);

    useEffect(() => {
        if (!cacheMercadoLivre) {
            const unsubscribeML = listenToCollection('produtos/mercado_livre', (data) => {
                cacheMercadoLivre = data;
                setMercadoLivreProdutos(data);
                setIsLoading(false);
            });
            return () => unsubscribeML();
        }
    }, []);

    return (
        <div className="page">
            <div className="lista-produtos-first">
                <ItemList title="Recomendações da Amazon" items={amazonProdutos} isLoading={isLoading} />
            </div>

            <div className="lista-produtos">
                <ItemList title="Recomendações do Mercado Livre" items={mercadoLivreProdutos} isLoading={isLoading} />
            </div>
        </div>
    );
};

export default Produtos;
