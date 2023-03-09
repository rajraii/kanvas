import { Route, Routes } from "react-router-dom";
import "./app.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Sidebar from "./components/sidebar";

function App() {
  // const {user} = useJWTAuth()
  return (
    <div className="w-full relative app p-1 h-screen">
      <div className="header h-[4rem]">
        <Header />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <main className="main">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/profile" element={<div>Hello profile</div>} />
          <Route exact path="/*" element={<div>No Page</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
