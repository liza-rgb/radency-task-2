import React from 'react';
import NoteTable from "./components/NoteTable"
import SummaryTable from './components/SummaryTable';
import "./App.css";

function App() {
  return (
    <div>
      <NoteTable />
      <SummaryTable />
    </div>
  );
}

export default App;
