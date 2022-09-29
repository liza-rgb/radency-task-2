import React from 'react';
import { useSelector } from 'react-redux';
import { PopupType } from './state/reducers/popupReducer';
import { PopupState } from './state/reducers/popupReducer';
import { RootState } from './state/reducers';
import Table from './components/Table';
import AddNoteButton from './components/AddNoteButton';
import NoteForm from './components/NoteForm';

function App() {
  const popupInfo = useSelector<RootState, PopupState>((state) => state.popup);

  return (
    <div className="font-main">
      <Table mode="notes" />
      <AddNoteButton />
      <Table mode="summary" />
      {popupInfo.type !== PopupType.NONE ? <NoteForm /> : ""}
    </div>
  );
}

export default App;
