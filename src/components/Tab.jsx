/**
 * Componente que representa um único botão de aba na navegação.
 *
 * @param {object} props - As propriedades do componente.
 * @param {string} props.label - O texto que será exibido na aba.
 * @param {boolean} props.isActive - Indica se a aba está ativa, injetado pelo Tabs.
 * @param {function} props.onClick - Função a ser chamada ao clicar na aba, injetado pelo Tabs.
 */
const Tab = ({ label, isActive, onClick }) => {
    const className = `tab-item ${isActive ? 'active' : ''}`;

    return (
        <li className={className} onClick={onClick}>
            {label}
        </li>
    );
};

Tab.displayName = 'Tab';

export default Tab;