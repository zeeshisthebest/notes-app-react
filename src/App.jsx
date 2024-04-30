import InputField from "./components/input_component"
import Note from "./components/note_component"


function App () {

  return (
    <>
      <header className="py-3 mb-10 text-center border-b-2">
        <h1 className="w-3/4 mx-auto font-semibold text-hot-stone text-4xl">Note Keeping with Ease</h1>
      </header>
      <InputField />
      <section className="grid  grid-cols-5 grid-flow-dense gap-4">
        <Note body="Body of the Message" title="My Note" />
        <Note body="Body of the Message" title="My Note" />
        <Note body="Body of the Message" title="My Note" />
        <Note body="Body of the Message" title="My Note" />
        <Note body="Body of the Message" title="My Note" />
        <Note body="Body of the Message" title="My Note" />
      </section>
    </>
  )
}
export default App
