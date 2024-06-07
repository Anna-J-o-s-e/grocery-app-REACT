import logo from './logo.svg';
import './App.css';
import AddItem from './components/AddItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchItem from './components/SearchItem';
import DeleteItem from './components/DeleteItem';
import ViewItem from './components/ViewItem';

function App() {
  return (
    <div>
      

<BrowserRouter>
<Routes>
  <Route path='/' element={<AddItem/>}/>
  <Route path='/search' element={<SearchItem/>}/>
  <Route path='/delete' element={<DeleteItem/>}/>
  <Route path='/view' element={<ViewItem/>}/>

  
  </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
