import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import CoinTracker from "./routes/CoinTracker";
import Home from "./routes/Home";
import ToDoList from "./routes/ToDoList";
import Basic from "./routes/Basic";
import Movies from "./routes/Movies";

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
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/cointraker" element={<CoinTracker />} />
        <Route path="/Movies" element={<Movies />} />
      </Routes>
      {/* <Movies />
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
      {basicSectionShowing ? <BasicPratice /> : null} */}
    </div>
  );
}

export default App;
