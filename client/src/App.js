import Topbar from "./components/Topbar/Topbar";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Register from "./pages/rigsiter/Register"
import { BrowserRouter ,Routes, Route, Link, Router,Redirect  } from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user}= useContext(Context);
  
  return (
    <div className="App">
      <Topbar />
     
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/login" element={user ? <Home/>:<Login/>} />
       <Route path="/settings" element={user ? <Settings/> : <Register/>} />
       <Route path="/posts" element={<Home/>} />
       <Route path="/write" element={user ? <Write/> :<Register/>} />
       <Route path="/register" element={user ? <Home/> : <Register/>}/>
       <Route path="/post/:postId" element={<Single/>}/>
      </Routes>
    </div>
  );
}

export default App;
