import "./App.css";
import DrawerComponent from "./drawer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./posts";
import Comments from "./comments";
import Albums from "./albums";
import Photos from "./photos";
import Todos from "./todos";
import Users from "./users";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DrawerComponent />
        <Routes>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/comments" element={<Comments />}></Route>
          <Route path="/albums" element={<Albums />}></Route>
          <Route path="/photos" element={<Photos />}></Route>
          <Route path="/todos" element={<Todos />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
