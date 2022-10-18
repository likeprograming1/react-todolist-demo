
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Todolist } from './component/Todolist';
import {Detail} from './component/Detail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todolist/>}></Route>
        <Route path='/Detail/:id' element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
