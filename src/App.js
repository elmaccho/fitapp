import './App.css';
import { AddSection } from './Components/AddSection';
import { Header } from './Components/Header';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Main></Main>
        <AddSection></AddSection>
    </div>
  );
}

export default App;
