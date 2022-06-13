import { Routes, Route } from "react-router-dom";
import CoinTracker from "./routes/CoinTracker";
import Home from "./routes/Home";
import ToDoList from "./routes/ToDoList";
import Basic from "./routes/Basic";
import Movies from "./routes/Movies";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/cointraker" element={<CoinTracker />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Movies/:id" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
