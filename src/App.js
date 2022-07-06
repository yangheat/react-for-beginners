import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinTracker from "./routes/CoinTracker";
import Home from "./routes/Home";
import ToDoList from "./routes/ToDoList";
import Basic from "./routes/Basic";
import Movies from "./routes/movies/Movies";
import Detail from "./routes/movies/Detail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/cointraker" element={<CoinTracker />} />"
        <Route path="/movies">
          <Route path="" element={<Movies />} />
          <Route path=":id" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
