import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {MaheshReport,TilakReport,ShantanuReport} from "./pages/Reports";

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="flex gap-11">

    <Navbar/>
    <Routes>
      <Route element={<MaheshReport/>} path="/msr"/>
      <Route element={<ShantanuReport/>} path="/shan"/>
      <Route element={<TilakReport/>} path="/tilak"/>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
