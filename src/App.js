
import './App.css';
import Header from './Header';
import { ThreadListContainer } from './ThreadListContainer';
import { BrowserRouter, Routes ,Route, Link } from 'react-router-dom';

import Top from './Top';
import CreateThread from './CreateThread';
import Thread from './Thread';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Top />} />
          <Route path='/thread' element={<ThreadListContainer />} />
          <Route path='/thread/new' element={<CreateThread />} />
          <Route path='/thread/:thread_id/:title' element={<Thread />} />
        </Routes>
        <Link to='/'>Back To Top</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
