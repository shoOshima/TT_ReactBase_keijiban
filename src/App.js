import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { ThreadListContainer } from './ThreadListContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <ThreadListContainer />
    </div>
  );
}

export default App;
