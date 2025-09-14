import Tabs from './components/Tabs';
import Tab from './components/Tab';
import TabPanel from './components/TabPanel';

import Inicio from './pages/Inicio';
import Produtos from './pages/Produtos';
import Projetos from './pages/Projetos';
import Artigos from './pages/Artigos';

function App() {
    return (
        <div className="app-container">
            <h1>LinuxDicasPro</h1>
            <Tabs defaultIndex={0}>
                <Tab label="Início" />
                <Tab label="Produtos" />
                <Tab label="Projetos" />
                <Tab label="Artigos" />

                <TabPanel><Inicio /></TabPanel>
                <TabPanel><Produtos /></TabPanel>
                <TabPanel><Projetos /></TabPanel>
                <TabPanel><Artigos /></TabPanel>
            </Tabs>
        </div>
    );
}

export default App;
