 import { Route, Routes } from 'react-router-dom';
import './App.css';
import DocumentPreview from './Components/DocumentPreview/DocumentPreview';
 import HomeGetTables from './Components/HomePage/HomeGetTables';
 import NewDocument from './Components/NewDocument/NewDocument';


function App() {
  return (
    <div className="App">
      <div className="container">
      <Routes>
        <Route path="/" element={<HomeGetTables />} />
        <Route path="/preview/=:id" element={<DocumentPreview />} />
        <Route path="/new_document" element={<NewDocument /> }  />
      </Routes>
      </div>
    </div>
  );
}

export default App;
