import { useState } from "react";
import BasicPratice from "./BasicPratice";
import CoinTracker from "./CoinTracker";
import ToDoList from "./ToDoList";

function App() {
  const [basicSectionShowing, setBasicSectionShowing] = useState(false);
  const [toDoListSectionShowing, setToDoListSectionShowing] = useState(false);
  const [coinTrackerShowing, setCoinTrackerShowing] = useState(false);

  const basicSectionShowingEvent = () =>
    setBasicSectionShowing((prev) => !prev);
  const toDoListSectionShowingEvent = () =>
    setToDoListSectionShowing((prev) => !prev);
  const setCoinTrackerShowingEvent = () =>
    setCoinTrackerShowing((prev) => !prev);

  return (
    <>
      <hr />
      <button onClick={setCoinTrackerShowingEvent}>
        To Do List Section {coinTrackerShowing ? "hide" : "show"}
      </button>
      {coinTrackerShowing ? <CoinTracker /> : null}
      <hr />
      <button onClick={toDoListSectionShowingEvent}>
        To Do List Section {toDoListSectionShowing ? "hide" : "show"}
      </button>
      {toDoListSectionShowing ? <ToDoList /> : null}
      <hr />
      <button onClick={basicSectionShowingEvent}>
        Basic Section {basicSectionShowing ? "Hide" : "Show"}
      </button>
      {basicSectionShowing ? <BasicPratice /> : null}
    </>
  );
}

export default App;
