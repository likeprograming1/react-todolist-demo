
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Todolist } from './component/Todolist';
import {Detail} from './component/Detail';
import useFetch from './hooks/useFetch';

function App() {
  const [data] = useFetch("http://localhost:3000/data");

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todolist data={data}/>}></Route>
        <Route path='/Detail/:id' element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
