import { useState } from "react"
import InputField from "./components/input_component"
import NoteItem from "./components/note_component"


// Creates the mapping
function createNote (note, index) {
  return <NoteItem key={index} date={note.date} time={note.time} body={note.body} />;
}

function App () {
  const [noteList, updateNote] = useState([]);
  const date = new Date();

  // State Function
  function addItem (note) {
    let hr = date.getHours();
    let min = date.getMinutes();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    // Updating state
    updateNote(prevArray => [...prevArray, {
      date: `${dd}/${mm}/${yyyy}`,
      time: `${hr}:${min}`,
      body: note
    }]);
  }
  // Rendering
  return (
    <>
      <header className="py-3 mb-10 text-center border-b-2">
        <h1 className="w-3/4 mx-auto font-semibold text-hot-stone text-4xl">Note Keeping with Ease</h1>
      </header>
      <InputField addItem={addItem} />
      {noteList.length === 0 ?
        <p className="text-hot-stone font-light font-sans text-6xl">No note found</p> :
        <section className="grid grid-cols-5 grid-flow-dense gap-4">
          {noteList.map(createNote)}
        </section>}
    </>
  )
}
export default App
