
import { useState,useEffect } from "react";
import axios from "axios";
import "./sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {

  
  const [cats,setCat]=useState([])

  useEffect(()=>{
   const fetchCat=async()=>{
    const res = await axios.get("/categories")
     setCat(res.data)
     console.log(cats);
    }
    fetchCat()
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>

        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris s sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <ul className="sidebarList">

          {cats.map((c)=>
           <Link to={"/?cat="+c.name} className="link">
           <li className="sidebarListItem">{c.name}</li>
           </Link>
        
        )}
        
     

        </ul>
        </div>
        <div className="sidebarItem">
          <span className="Social">
          <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
   
          </span>
        </div>
    </div>
  );
}

export default Sidebar;
