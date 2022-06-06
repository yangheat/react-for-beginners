import { useState } from "react";
import BasicPratice from "./BasicPratice";
import ToDoList from "./ToDoList";

function App() {
  const [showing, setShowing] = useState(false);
  const basicSectionShowingEvent = () => setShowing((prev) => !prev);

  return (
    <>
      <ToDoList />
      <hr />
      <button onClick={basicSectionShowingEvent}>
        Basic Section {showing ? "Show" : "Hide"}
      </button>
      {showing ? <BasicPratice /> : null}
    </>
  );
}

export default App;
