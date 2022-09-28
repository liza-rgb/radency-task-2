import React from 'react';
import { useSelector } from 'react-redux';
import NoteTable from "./components/NoteTable"
import SummaryTable from './components/SummaryTable';
import NoteForm from './components/NoteForm';
import { PopupType } from './state/reducers/popupReducer';
import { PopupState } from './state/reducers/popupReducer';
import { RootState } from './state/reducers';

function App() {
  const popupInfo = useSelector<RootState, PopupState>((state) => state.popup);

  return (
    <div className="font-main">
      <NoteTable />
      <SummaryTable />
      {popupInfo.type !== PopupType.NONE ? <NoteForm /> : ""}
    </div>
  );
}

export default App;
