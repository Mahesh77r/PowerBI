import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {MaheshReport,TilakReport,ShantanuReport, AyanReport, ShivamReport, ParikshitReport, PrathameshReport, ShivamKopareReport} from "./pages/Reports";

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
      <Route element={<AyanReport/>} path="/ayan"/>
      <Route element={<ShivamKopareReport/>} path="/kopare"/>
      <Route element={<ParikshitReport/>} path="/parikshit"/>
      <Route element={<PrathameshReport/>} path="/pahune"/>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
