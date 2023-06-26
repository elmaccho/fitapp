import './App.css';
import { AddSection } from './Components/AddSection';
import { Header } from './Components/Header';
import { ItemSearch } from './Components/ItemSearch';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Main></Main>
        <AddSection></AddSection>

        <ItemSearch></ItemSearch>
    </div>
  );
}

export default App;
