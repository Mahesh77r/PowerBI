import React, { useState, useEffect } from 'react'
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Report,
  // MaheshReport,TilakReport,ShantanuReport, AyanReport, ShivamReport, ParikshitReport, PrathameshReport, ShivamKopareReport, ShivamHonadeReport
} from "./pages/Reports";
import { fetchReport } from './services/CRUD'


function App() {

  const [report, setreport] = useState([]);
  const getReports = async () => {
    try {
      const res = await fetchReport();
      setreport(res.data.data)
      console.log(res.data.data)
    } catch (error) {

    }
  }
  useEffect(() => {
    getReports()
  }, [])


  return (
    <>
      <BrowserRouter>

        <div className="flex gap-11">
          <Navbar report={report} />
          <Routes>
            <Route element={<Report report={report} />} path="report/:id" />
          </Routes>

        </div>

      </BrowserRouter>
    </>
  );
}

export default App;


// eslint-disable-next-line
{/* <div className="flex gap-11">

<Navbar/>
<Routes>
  <Route element={<MaheshReport/>} path="/msr"/>
  <Route element={<ShantanuReport/>} path="/shan"/>
  <Route element={<TilakReport/>} path="/tilak"/>
  <Route element={<AyanReport/>} path="/ayan"/>
  <Route element={<ShivamKopareReport/>} path="/kopare"/>
  <Route element={<ShivamHonadeReport/>} path="/honade"/>
  <Route element={<ParikshitReport/>} path="/parik"/>
  <Route element={<PrathameshReport/>} path="/pahune"/>
</Routes>
</div> */}